from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone
from pydantic import EmailStr
from email_service import send_email



ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ConsultationRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str
    message: str

class TenantSupportRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str
    address: str
    message: str
    type: str


class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.post("/consultation")
async def submit_consultation(request: ConsultationRequest):
    try:
        await db.consultations.insert_one({
            **request.model_dump(),
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "status": "new"
        })
        
        subject = f"New Consultation Request from {request.name}"
        body = f"""
New Consultation Request:

Name: {request.name}
Email: {request.email}
Phone: {request.phone}

Message:
{request.message}

---
Submitted: {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')}
        """
        
        await send_email(
            to_email="info@goldlinemanagement.com",
            subject=subject,
            body=body
        )
        
        return {"success": True, "message": "Consultation request submitted"}
    except Exception as e:
        logger.error(f"Consultation error: {e}")
        return {"success": False, "message": str(e)}

@api_router.post("/tenant-support")
async def submit_tenant_support(request: TenantSupportRequest):
    try:
        await db.tenant_support.insert_one({
            **request.model_dump(),
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "status": "new"
        })
        
        request_type = "Maintenance" if request.type == "maintenance" else "General Enquiry"
        subject = f"New {request_type} from {request.name}"
        body = f"""
New Tenant Support Request - {request_type}:

Name: {request.name}
Email: {request.email}
Phone: {request.phone}
Property Address: {request.address}

Message:
{request.message}

---
Submitted: {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')}
        """
        
        await send_email(
            to_email="info@goldlinemanagement.com",
            subject=subject,
            body=body
        )
        
        return {"success": True, "message": "Support request submitted"}
    except Exception as e:
        logger.error(f"Tenant support error: {e}")
        return {"success": False, "message": str(e)}


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
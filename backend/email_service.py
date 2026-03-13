import os
import aiosmtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

async def send_email(to_email: str, subject: str, body: str, from_name: str = "Goldline Website"):
    """Send email using SMTP"""
    
    # Gmail SMTP settings (you'll need to set up app password)
    smtp_server = "smtp-mail.outlook.com"
    smtp_port = 587
    sender_email = os.getenv("SMTP_EMAIL", "goldlinemanagement@outlook.com")
    sender_password = os.getenv("SMTP_PASSWORD", "")  # User needs to set this
    
    message = MIMEMultipart("alternative")
    message["Subject"] = subject
    message["From"] = f"{from_name} <{sender_email}>"
    message["To"] = to_email
    
    html_body = f"""
    <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            {body}
        </body>
    </html>
    """
    
    message.attach(MIMEText(body, "plain"))
    message.attach(MIMEText(html_body, "html"))
    
    try:
        if not sender_password:
            # If no SMTP password, just log it (for testing)
            print(f"📧 EMAIL (No SMTP configured):")
            print(f"To: {to_email}")
            print(f"Subject: {subject}")
            print(f"Body: {body}")
            return True
            
        await aiosmtplib.send(
            message,
            hostname=smtp_server,
            port=smtp_port,
            username=sender_email,
            password=sender_password,
            start_tls=True,
        )
        return True
    except Exception as e:
        print(f"Email send error: {e}")
        return False

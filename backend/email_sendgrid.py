"""
SendGrid Email Service for Goldline Management
"""
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

async def send_email_sendgrid(to_email: str, subject: str, body: str):
    """Send email using SendGrid"""
    
    api_key = os.getenv("SENDGRID_API_KEY", "")
    sender_email = os.getenv("SENDER_EMAIL", "goldlinemanagement@outlook.com")
    
    if not api_key:
        print(f"⚠️ No SendGrid API key configured")
        print(f"📧 Would send email to: {to_email}")
        print(f"Subject: {subject}")
        print(f"Body: {body}")
        return True
    
    try:
        message = Mail(
            from_email=sender_email,
            to_emails=to_email,
            subject=subject,
            html_content=f"<pre>{body}</pre>"
        )
        
        sg = SendGridAPIClient(api_key)
        response = sg.send(message)
        
        print(f"✅ Email sent! Status: {response.status_code}")
        return True
        
    except Exception as e:
        print(f"❌ SendGrid error: {e}")
        return False


# FormSubmit alternative (no backend needed)
FORMSUBMIT_INSTRUCTIONS = """
To use FormSubmit (instant email, no API key):

Update your form HTML:
<form action="https://formsubmit.co/goldlinemanagement@outlook.com" method="POST">
  <input type="hidden" name="_subject" value="New Consultation Request">
  <input type="hidden" name="_next" value="https://goldlinemanagement.com/thank-you">
  <input type="hidden" name="_captcha" value="false">
  
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <input type="tel" name="phone" required>
  <textarea name="message" required></textarea>
  
  <button type="submit">Submit</button>
</form>

Emails will arrive at goldlinemanagement@outlook.com instantly!
"""

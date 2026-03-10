# Goldline Management Limited - Product Requirements Document

## Project Overview
**Project Name**: Goldline Management Limited Website  
**Type**: Luxury Property Management Company Website  
**Status**: Phase 1 Complete - Full Website Revamp Done  
**Last Updated**: December 2024

## Original Problem Statement
Build a professional, luxury property management website for Goldline Management Limited with:
- Clean, elegant, modern, posh, luxurious Apple-like aesthetic
- Premium design following luxury minimalist design system
- Blue, Gold, and White color theme
- Logo integration throughout the site
- Multiple pages showcasing company services and portfolio

## User Personas
1. **Landlords/Property Owners**: Seeking professional property management services
2. **Portfolio Investors**: Looking for structured operational management
3. **Tenants**: Needing support and maintenance coordination
4. **Prospective Clients**: Evaluating Goldline's services and credibility

## Core Requirements (Static)

### Design System - REVAMPED
- **Color Palette**: 
  - Primary: White (#ffffff)
  - Blue: #1e3a8a (primary), #2563eb (secondary), #dbeafe (light)
  - Gold: #d4af37 (accent), #f4e5c0 (light)
- **Typography**: Crimson Text (serif) for headings, Inter (sans-serif) for body
- **Buttons**: Sharp rectangular (0px border radius), blue background with gold hover
- **Spacing**: Generous white space throughout
- **Logo**: GLM logo integrated in header, media page, footer

### Pages
1. ✅ Home - Hero, positioning, services, testimonials (David Connolly, RF Mohammed, Nian Dravidan), CTA
2. ✅ Our Approach - Operational framework details
3. ✅ Media - Property portfolio showcase with 5 professional images + logo watermark
4. ✅ About - Company philosophy and values
5. ✅ Consultation - Dedicated form page (Name, Email, Phone, Message)
6. ✅ Tenant Support - Maintenance & General Enquiries forms

### Contact Information
- **Phone**: +353 87 453 9911 (in header, footer)
- **Email**: goldlinemanagement@outlook.com (in footer)

## What's Been Implemented ✓

### December 2024 - Complete Revamp
**Theme Changes:**
- ✅ New Blue/Gold/White color scheme
- ✅ Logo integration (header, media page, footer)
- ✅ Updated button styles with blue primary and gold hover effects
- ✅ Enhanced visual hierarchy with new color palette

**Content Updates:**
- ✅ Updated testimonials:
  - Landlord 1: David Connolly
  - Landlord 2: RF Mohammed (removed Portfolio Owner testimonial)
  - Tenant: Nian Dravidan with new feedback text
- ✅ Contact details: Phone +353 87 453 9911
- ✅ Footer streamlined (removed description section)

**Navigation Changes:**
- ✅ Removed "Tenant Support" from top-right header
- ✅ Renamed "Portfolio" to "Media" in navigation
- ✅ Added phone number to header

**New Pages:**
- ✅ Consultation page with dedicated form (Name, Email, Phone, Message)
- ✅ Both hero and CTA "Request Consultation" buttons link to /consultation

**Media Page:**
- ✅ 5 professional property images
- ✅ Logo displayed at top and bottom (watermark)
- ✅ Images: Luxurious Living Hall, Neat Classy Bathrooms, Premium Kitchen Design, Modern Kitchen & Living Area, Elegant Bedroom Suite

**Tenant Support Page:**
- ✅ Removed "Tenant Support & Advisory" heading
- ✅ Removed "Advisory Opinion" tab
- ✅ Kept only: Maintenance Coordination & General Enquiries

**Forms Status:**
- ⚠️ Frontend-only (placeholder) - shows success toast notification
- 📋 Ready for backend integration to goldlinemanagement@outlook.com

### Tech Stack
- **Frontend**: React 19, React Router
- **Styling**: Custom CSS with Tailwind base, Crimson Text + Inter fonts, Blue/Gold theme
- **Components**: Shadcn UI (Sonner for toasts)
- **Icons**: Lucide React
- **Backend**: FastAPI (ready for email integration)

## Prioritized Backlog

### P0 - Next Phase
- Email integration for Consultation and Tenant Support forms → goldlinemanagement@outlook.com
- Billing page integration (mentioned for future)

### P1 - High Priority
- Email service backend setup (SendGrid/Resend/Nodemailer)
- Form submission confirmation emails
- Mobile responsiveness testing on real devices
- Browser compatibility testing (Chrome, Safari, Firefox, Edge)

### P2 - Future Enhancements
- Analytics integration for visitor tracking
- CMS integration for easier content updates
- SEO optimization and meta tags
- Performance optimization (image lazy loading, CDN)
- Accessibility audit and improvements
- Cookie consent banner
- Social media integration
- Blog or news section
- Property listing filtering system
- Admin dashboard for form submissions

## API Contracts (Future Backend Integration)

### POST /api/consultation
**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "message": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Consultation request submitted"
}
```

**Email To:** goldlinemanagement@outlook.com

### POST /api/tenant-support
**Request Body:**
```json
{
  "type": "maintenance|enquiry",
  "name": "string",
  "email": "string",
  "address": "string",
  "message": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Support request submitted"
}
```

**Email To:** goldlinemanagement@outlook.com

## Next Action Items
1. Gather email service credentials (SendGrid API key or SMTP details)
2. Implement backend email integration
3. Test form submissions end-to-end
4. Plan billing page requirements and integration
5. Mobile device testing
6. Performance audit and optimization

## Notes
- Forms are currently frontend placeholders with success toast notifications
- All design changes complete per client specifications
- Logo prominently featured for brand recognition
- Color scheme: Professional blue, premium gold, clean white
- Ready for backend email integration when credentials provided

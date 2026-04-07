# EmailJS Setup Guide for Krishna Infotech Contact Form

## Quick Setup (5 minutes)

The contact form now sends real emails! Follow these steps to configure it:

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up Free"
3. Sign up with your email (or use Google/GitHub login)

### Step 2: Connect your Gmail Account
1. In EmailJS dashboard, click "Add New Service"
2. Select "Gmail"
3. Select "Use your current email"
4. Name it: `service_krishna`
5. Click "Create Service"
6. A popup will ask for permission - allow it
7. Verify your Gmail is connected

### Step 3: Create Email Template
1. Go to "Email Templates" section
2. Click "Create New Template"
3. Name it: `template_krishna`
4. Fill in the template with these variables:
   - **To Email**: `krishnainfotech.official@gmail.com` (or your email)
   - **Subject**: `New Contact Form Submission - {{subject}}`
   - **Email Body** (use this):
     ```
     Name: {{from_name}}
     Email: {{from_email}}
     Phone: {{phone}}
     Subject: {{subject}}
     
     Message:
     {{message}}
     ```
5. Click "Save"

### Step 4: Get Your Public Key
1. Go to "Account" (top right)
2. Copy your "Public Key"
3. Update it in the code:
   - Open `src/pages/Contact.tsx`
   - Find line: `emailjs.init('K0PNLNCqXOJdQW-9s');`
   - Replace `'K0PNLNCqXOJdQW-9s'` with your actual public key

### Step 5: Test the Form
1. Go to http://localhost:5173/contact
2. Fill in the contact form
3. Click "Send Message"
4. Check your email inbox - you should receive the message!

## Troubleshooting

### Emails not being sent?
- Make sure your Gmail account is verified in EmailJS
- Check the browser console (F12) for error messages
- Verify the service_id and template_id match your EmailJS settings

### Getting "service_krishna not found" error?
- Make sure you named the service exactly `service_krishna` in EmailJS
- Same for the template - must be named `template_krishna`

### Still having issues?
- Check EmailJS documentation: https://www.emailjs.com/docs/
- Enable less secure apps in Gmail if using Gmail directly
- Make sure your public key is correct

## Key Files Modified
- `src/pages/Contact.tsx` - Added EmailJS integration
- `src/pages/Contact.css` - Added error message styling

## Environment Variables (Optional)
For production, create a `.env.local` file:
```
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=service_krishna
VITE_EMAILJS_TEMPLATE_ID=template_krishna
VITE_CONTACT_EMAIL=krishnainfotech.official@gmail.com
```

Then update the code to use these variables instead of hardcoded values.

# Quick Setup Guide

## ✅ What's Already Done

- ✅ Resend installed
- ✅ Firebase installed
- ✅ Firestore integration configured
- ✅ Cal.com link integrated: https://cal.com/mia-louviere-a4n2hk/30min
- ✅ Email templates created
- ✅ Cron job for scheduled emails
- ✅ Complete audit system built

## 🚀 Setup Steps

### 1. Get Resend API Key

1. Go to [resend.com](https://resend.com)
2. Sign up (free for 100 emails/day, 3,000/month)
3. Create an API key
4. Add your domain or use their testing domain

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Then fill in:

```env
# Get from Resend Dashboard
RESEND_API_KEY=re_...

# Your Firebase config (already setup in your project)
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...

# Generate a random string for cron security
CRON_SECRET=generate-random-string-here
```

### 3. Set Up Firestore Collections

Your Firestore should have these collections (they'll be auto-created):

**`audits`** - Stores all audit submissions
```
{
  email: string
  fullName: string
  companyName: string
  formData: object (all form responses)
  auditScore: number
  intentLevel: "high" | "medium" | "low"
  opportunities: array
  createdAt: timestamp
  updatedAt: timestamp
}
```

**`scheduled_emails`** - Email queue
```
{
  to: string
  subject: string
  template: string
  data: object
  scheduledFor: timestamp
  status: "pending" | "sent" | "failed"
  createdAt: timestamp
  sentAt: timestamp (optional)
  error: string (optional)
}
```

### 4. Configure Resend Domain

**Option A: Use Testing Domain (Quick Start)**
- Resend provides a testing domain
- Can only send to verified emails
- Good for testing

**Option B: Add Your Domain (Production)**
1. Go to Resend Dashboard → Domains
2. Add `eliana.tech`
3. Add DNS records they provide
4. Verify domain
5. Update `from` address in code:
   ```typescript
   from: 'Eliana <noreply@eliana.tech>'
   ```

### 5. Deploy to Vercel

```bash
git add .
git commit -m "Add audit system with email automation"
git push
```

Vercel will:
- Auto-deploy your app
- Set up the cron job (runs every 6 hours)
- Process scheduled emails automatically

### 6. Add Environment Variables in Vercel

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add all variables from `.env.local`
3. Redeploy

### 7. Test the System

**Test Audit Submission:**
1. Go to your audit page
2. Fill out the form with your email
3. Submit
4. Check your email for immediate response
5. Check Firestore for audit record

**Test Scheduled Emails:**
1. Check Firestore `scheduled_emails` collection
2. Should see pending emails
3. Cron will process them automatically

## 📧 Email Flow

### High Intent (Excitement ≥8 OR Pain ≥7)
- **Immediate**: Urgent call to action
- **Day 1**: Follow-up addressing objections
- **Day 3**: Free resource + soft CTA
- **Week 1**: Final follow-up with social proof

### Medium Intent (Excitement 5-7)
- **Immediate**: Results overview + DIY option
- **Day 3**: Quick wins checklist
- **Week 1**: Case study
- **Week 2**: Check-in with help offer

### Low Intent (Excitement <5)
- **Immediate**: Resources, no pressure
- **Week 1**: Automation tip #1
- **Week 2**: Automation tip #2
- **Month 1**: Long-term nurture

## 🔧 Customization

### Change Email Frequency

Edit `lib/email-service.ts`:

```typescript
const sequences = {
    high: [
        { delay: 1, ... },  // Change delay in days
        { delay: 3, ... },
    ]
}
```

### Modify Email Templates

Edit templates in:
- `lib/email-service.ts` (immediate emails)
- `app/api/cron/send-scheduled-emails/route.ts` (follow-ups)

### Update Cal.com Link

Already configured to: `https://cal.com/mia-louviere-a4n2hk/30min`

To change, edit `CALENDAR_LINK` in:
- `lib/email-service.ts`
- `app/api/cron/send-scheduled-emails/route.ts`

## 📊 Monitor Performance

### Firestore Console
- View all audits
- See scheduled emails
- Track send status

### Resend Dashboard
- Email delivery stats
- Open rates
- Click rates
- Bounce rates

### Vercel Logs
- Function execution logs
- Cron job runs
- Error tracking

## 🐛 Troubleshooting

**Emails not sending?**
- Check Resend API key is correct
- Verify domain is configured
- Check Vercel logs for errors

**Scheduled emails not processing?**
- Verify cron job is running (Vercel Dashboard)
- Check `CRON_SECRET` is set
- Look at Firestore `scheduled_emails` status

**Firebase errors?**
- Verify all Firebase env variables are set
- Check Firebase console for permissions
- Ensure Firestore is enabled

## 🎯 Next Steps

1. **Test end-to-end** with your own email
2. **A/B test email subject lines**
3. **Add SMS follow-ups** for high-intent leads (Twilio)
4. **Build admin dashboard** to view all audits
5. **Create PDF report generator** for downloads
6. **Add webhook** from Cal.com to pause emails when call booked

## 📞 Support

If you need help:
1. Check Vercel logs for errors
2. Review Resend dashboard for delivery issues
3. Check Firestore for data storage
4. Test with `console.log` in API routes

## 🔐 Security Notes

- Never commit `.env.local` to git
- Keep `CRON_SECRET` secure
- Use Vercel's environment variables for production
- Resend API key should be kept private

---

**You're all set!** 🎉

The system will now:
1. Capture audit submissions
2. Calculate scores and intent
3. Send immediate personalized email
4. Schedule follow-up sequence
5. Process scheduled emails every 6 hours
6. Continue nurturing until they book a call

Good luck! 🚀

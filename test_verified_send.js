const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

async function testVerified() {
    try {
        const response = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'mialouviere@gmail.com',
            subject: 'Template Verification - Action Required',
            html: '<h1>Resend Sandbox Mode</h1><p>I am sending the templates to this address now because your domain is not yet verified in Resend. Please check this inbox!</p>'
        });
        console.log("Success:", response);
    } catch (e) {
        console.error("Fail:", e);
    }
}

testVerified();

const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

async function testVerifiedWithCustomFrom() {
    try {
        const response = await resend.emails.send({
            from: 'Eliana <noreply@elianatech.com>',
            to: 'mialouviere@gmail.com',
            subject: 'Template Test with Custom From',
            html: '<p>Testing if custom from works in sandbox to verified recipient.</p>'
        });
        console.log("Success:", JSON.stringify(response, null, 2));
    } catch (e) {
        console.error("Fail:", e);
    }
}

testVerifiedWithCustomFrom();

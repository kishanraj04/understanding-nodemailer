import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "kishanraj420000@gmail.com",
    pass: "yqcl gcox isnu lsbr", // use app password for Gmail
  },
});

const htmlTemplate = `
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Hello from Kishu</title>
  <style>
    /* Basic reset */
    body { margin:0; padding:0; background:#f4f6f8; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial; color:#333; }
    a { color: inherit; text-decoration: none; }
    .container { width:100%; max-width:680px; margin:30px auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow: 0 6px 18px rgba(15,30,60,0.08); }
    .header { padding:28px 32px; background: linear-gradient(90deg,#5b8cff,#7de3d1); color:#fff; text-align:left; }
    .logo { font-weight:700; letter-spacing:0.4px; font-size:20px; }
    .hero { padding:28px 32px; display:flex; gap:20px; align-items:center; }
    .hero img { width:120px; height:120px; border-radius:12px; object-fit:cover; display:block; }
    .hero .title { font-size:20px; font-weight:700; margin-bottom:8px; color:#102a43; }
    .hero p { margin:0; color:#44566c; line-height:1.45; }
    .cards { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:16px; padding: 20px 32px; }
    .card { background:#fbfdff; border:1px solid #eef6ff; border-radius:10px; padding:14px; }
    .card h4 { margin:0 0 8px 0; font-size:16px; color:#0b2b4a; }
    .card p { margin:0; font-size:13px; color:#536676; }
    .cta-wrap { padding: 20px 32px 32px; text-align:center; }
    .btn { display:inline-block; padding:12px 20px; border-radius:10px; background:linear-gradient(90deg,#2f80ed,#56ccf2); color:#fff; font-weight:600; box-shadow: 0 6px 18px rgba(47,128,237,0.18); }
    .small { font-size:12px; color:#7b8896; margin-top:12px; }
    .footer { padding:18px 32px; font-size:12px; color:#94a3b8; background:#fbfdff; border-top:1px solid #f0f7ff; text-align:center; }
    @media (max-width:480px){
      .hero { flex-direction:column; text-align:center; }
      .hero img { margin:0 auto; }
    }
  </style>
</head>
<body>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8; width:100%;">
    <tr>
      <td align="center">
        <div class="container" role="article" aria-label="Welcome email">
          <!-- Header -->
          <div class="header">
            <div class="logo">Kishu — Updates</div>
          </div>

          <!-- Hero -->
          <div class="hero">
            <img src="https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="Kishu" />
            <div>
              <div class="title">Hello — thanks for being with us!</div>
              <p>We’re excited to share the latest updates and helpful resources. Scroll down to see some highlights and a quick action you can take right now.</p>
            </div>
          </div>

          <!-- Feature cards -->
          <div class="cards">
            <div class="card">
              <h4>Quick Tip</h4>
              <p>Use Gmail App Passwords for SMTP to avoid authentication issues. They’re safer than plain account passwords.</p>
            </div>
            <div class="card">
              <h4>New Feature</h4>
              <p>We added responsive email templates so your message looks great on phones and desktop clients.</p>
            </div>
            <div class="card">
              <h4>Need Help?</h4>
              <p>Reply to this email and we’ll get back within one business day with personalized guidance.</p>
            </div>
          </div>

          <!-- CTA -->
          <div class="cta-wrap">
            <a href="https://example.com" class="btn">Take me to my dashboard</a>
            <div class="small">Prefer not to click? Paste this URL into your browser: https://example.com</div>
          </div>

          <!-- Footer -->
          <div class="footer">
            You received this message because you signed up for Kishu updates.<br/>
            <span style="color:#bccbd8">Kishu • Your Project • 123 City • India</span>
          </div>
        </div>
      </td>
    </tr>
  </table>
</body>
</html>
`;

// Send the email
(async () => {
  try {
    const info = await transporter.sendMail({
      from: '"Kishu Updates" <kishanraj420000@gmail.com>',
      to: "kishuraj1111@gmail.com",
      subject: "Welcome — stylish HTML email ✅",
      text: "Hello — thanks for being with us! Open this email in an HTML-capable client to see the full design.", // plain-text fallback
      html: htmlTemplate,
    });
    console.log("Message sent:", info.messageId);
  } catch (err) {
    console.error("Send failed:", err);
  }
})();

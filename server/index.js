const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { Resend } = require("resend");

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message)
    return res.status(400).json({ error: "All fields required" });
  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "muskanchauhan@zohomail.in", // where we will get the email from form submissions
      subject: `New message from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:auto;background:#0b0b0b;color:#f4efe9;padding:40px;border:1px solid #1a1a1a">
          <h2 style="margin:0 0 8px;color:#7C3AED;font-size:22px">New Portfolio Message</h2>
          <p style="margin:0 0 28px;color:#666;font-size:11px;letter-spacing:2px;text-transform:uppercase">From your portfolio contact form</p>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:12px 0;border-bottom:1px solid #1a1a1a;color:#888;font-size:10px;letter-spacing:2px;text-transform:uppercase;width:80px">Name</td><td style="padding:12px 0;border-bottom:1px solid #1a1a1a">${name}</td></tr>
            <tr><td style="padding:12px 0;border-bottom:1px solid #1a1a1a;color:#888;font-size:10px;letter-spacing:2px;text-transform:uppercase">Email</td><td style="padding:12px 0;border-bottom:1px solid #1a1a1a"><a href="mailto:${email}" style="color:#7C3AED">${email}</a></td></tr>
          </table>
          <div style="margin-top:28px">
            <div style="color:#888;font-size:10px;letter-spacing:2px;text-transform:uppercase;margin-bottom:12px">Message</div>
            <div style="font-size:15px;line-height:1.8">${message.replace(/\n/g, "<br>")}</div>
          </div>
        </div>
      `,
    });
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send" });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on :${PORT}`));

const jobs = [
  {
    company: "GNC India (Guardian Group)",
    role: "Assistant Marketing Manager",
    date: "Aug 2024 — Dec 2025",

    bullets: [
      "Scaled Instagram from <b>130K → 285K+ followers</b>",
      "Grew social-driven revenue from <b>₹14K → ₹7.5L/month</b>",
      "Built in-house communities: <b>100K+ WhatsApp</b>, 45K+ Instagram Broadcast",
      "Led All Play No Work Internship, Run of Champions, and multiple podcast series",
      "Managed and mentored a team of 4 content and community executives",
    ],
  },
  {
    company: "Buffalo Soldiers",
    role: "Senior Account Manager",
    date: "Jan 2024 — Aug 2024",
    bullets: [
      "Primary client advocate ensuring brand needs are met across all agency interactions",
      "Developed comprehensive brand strategies aligned with business objectives and market trends",
      "Project management, revenue growth, internal training sessions and business expansion",
    ],
  },
  {
    company: "Rasta Ventures",
    role: "Senior Brand Executive",
    date: "Feb 2023 — Dec 2023",
    bullets: [
      "Managed brands: Plush, The London Essence Company, Britvic Mixers, Mobikwik",
      "Social media calendars, campaign creation, packaging, email marketing and event coverage",
      "Team management and overall report creation for all client pages",
    ],
  },
  {
    company: "GreenHonchos Ltd.",
    role: "Social Media Executive",
    date: "Aug 2021 — Jan 2023",
    bullets: [
      "Fashion brands: Chique Studios, Estele, One8, Alcis Sports, Forever New India",
      "Email marketing for MPL, Sabhyata, Ahuja Sons via automation tools",
      "Social media campaigns and trending topical content calendars",
    ],
  },
  {
    company: "Spinnacle Digital Design",
    role: "Social Media Executive",
    date: "Nov 2019 — Jul 2021",
    bullets: [
      "Clients: Glued Reloaded, Bistro37, Ramagya Group, Savlife, Nishabd NGO, Tuck N Stitch",
      "Online and offline brand management and ad campaigns across Facebook, Instagram & Twitter",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ padding: "100px var(--px)", background: "var(--black)" }}
    >
      <div className="sec-label">02 — Experience</div>
      <div className="sec-title reveal">
        6 Years of
        <br />
        <em>Building Brands</em>
      </div>

      <div
        style={{ position: "relative", paddingLeft: "clamp(16px,4vw,28px)" }}
      >
        {/* vertical line */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 1,
            background: "var(--border)",
          }}
        />

        {jobs.map((job, i) => (
          <div
            key={job.company}
            className="reveal"
            style={{
              position: "relative",
              marginBottom: 52,
              paddingLeft: "clamp(24px,4vw,40px)",
              transitionDelay: `${i * 0.08}s`,
            }}
          >
            {/* dot */}
            <div
              style={{
                position: "absolute",
                left: "clamp(-20px,-3.5vw,-28px)",
                top: 8,
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: "var(--purple)",
                boxShadow: "0 0 14px rgba(124,58,237,0.65)",
                flexShrink: 0,
              }}
            />

            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: 6,
                marginBottom: 4,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "clamp(17px,2.5vw,22px)",
                    fontWeight: 700,
                  }}
                >
                  {job.company}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "var(--purple)",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    marginBottom: 12,
                  }}
                >
                  {job.role}
                </div>
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: 10,
                  color: "var(--purple)",
                  letterSpacing: "2px",
                  paddingTop: 4,
                  whiteSpace: "nowrap",
                }}
              >
                {job.date}
              </div>
            </div>

            <ul style={{ listStyle: "none" }}>
              {job.bullets.map((b, j) => (
                <li
                  key={j}
                  style={{
                    fontSize: "clamp(12px,1.4vw,13px)",
                    color: "rgba(244,239,233,.58)",
                    lineHeight: 1.75,
                    marginBottom: 7,
                    paddingLeft: 16,
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "var(--purple)",
                      fontSize: 11,
                    }}
                  >
                    →
                  </span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: b
                        .replace(
                          /<b>/g,
                          '<strong style="color:var(--purp2);font-weight:500">',
                        )
                        .replace(/<\/b>/g, "</strong>"),
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

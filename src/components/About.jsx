const skills = [
  ["Social Media Marketing", "95%"],
  ["Brand Strategy", "90%"],
  ["Content Creation", "92%"],
  ["Email Marketing", "85%"],
  ["Client Servicing", "96%"],
];
import muskanPic from "../images/muskan.jpg";

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: "100px var(--px)", background: "var(--dark)" }}
    >
      <div className="sec-label">01 — About</div>

      {/* Responsive grid: 2-col desktop, 1-col mobile */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          gap: "clamp(40px,6vw,80px)",
          alignItems: "start",
        }}
      >
        {/* Photo */}
        <div className="reveal">
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 440,
                aspectRatio: "3/4",
                background: "var(--card)",
                border: "1px solid var(--border)",
                overflow: "hidden",
              }}
            >
              {/* ↓ Replace with Muskan's actual photo */}
              <img
                src={muskanPic}
                alt="Muskan"
                style={{
                  borderRadius: "8px",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                  filter: "grayscale(15%)",
                  transition: "filter .5s,transform .5s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "grayscale(0%)";
                  e.currentTarget.style.transform = "scale(1.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "grayscale(15%)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: 9,
                  color: "#fff",
                  background: "var(--purple)",
                  padding: "6px 12px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                Muskan Chauhan
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: -14,
                right: 14,
                width: 64,
                height: 64,
                background: "var(--purple)",
                zIndex: -1,
              }}
            />
          </div>
        </div>

        {/* Text */}
        <div className="reveal" style={{ transitionDelay: ".15s" }}>
          <div
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(28px,4vw,56px)",
              fontWeight: 900,
              lineHeight: 1.05,
              marginBottom: 24,
            }}
          >
            The{" "}
            <em style={{ color: "var(--purple)", fontStyle: "italic" }}>
              Story
            </em>
            <br />
            Behind The Journy
          </div>
          <p
            style={{
              fontSize: 14,
              color: "rgba(244,239,233,.62)",
              lineHeight: 1.9,
              fontWeight: 300,
              marginBottom: 16,
            }}
          >
            I'm{" "}
            <strong style={{ color: "var(--purp2)", fontWeight: 500 }}>
              Muskan Chauhan
            </strong>{" "}
            — a Brand Marketing and Social Media Strategist with{" "}
            <strong style={{ color: "var(--purp2)", fontWeight: 500 }}>
              6+ years
            </strong>{" "}
            turning brands into communities and content into revenue.
          </p>
          <p
            style={{
              fontSize: 14,
              color: "rgba(244,239,233,.62)",
              lineHeight: 1.9,
              fontWeight: 300,
              marginBottom: 16,
            }}
          >
            Led digital growth and brand strategy for diverse brands including —{" "}
            <strong style={{ color: "var(--purp2)", fontWeight: 500 }}>
              GNC India,Hyundai India, Forever New India, Bistro37, Sabhyata,
              Ahuja Sons.
            </strong>{" "}
          </p>
          <p
            style={{
              fontSize: 14,
              color: "rgba(244,239,233,.62)",
              lineHeight: 1.9,
              fontWeight: 300,
              marginBottom: 32,
            }}
          >
            Drove rapid social and revenue growth by scaling{" "}
            <strong style={{ color: "var(--purp2)", fontWeight: 500 }}>
              GNC India’s Instagram from 20K to 280K followers, increasing
              monthly revenue from ₹14K to ₹10L+.{" "}
            </strong>
            Build a community of 100k on WhatsApp.
          </p>
          <p
            style={{
              fontSize: 14,
              color: "rgba(244,239,233,.62)",
              lineHeight: 1.9,
              fontWeight: 300,
              marginBottom: 32,
            }}
          >
            Currently serving as{" "}
            <strong style={{ color: "var(--purp2)", fontWeight: 500 }}>
              Manager – Digital at HouseEazy,{" "}
            </strong>
            bridging creative storytelling with performance marketing to drive
            measurable business outcomes.
          </p>

          <div className="sec-label" style={{ marginBottom: 14 }}>
            Core Skills
          </div>
          {skills.map(([name, pct]) => (
            <div
              key={name}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 0",
                borderBottom: "1px solid var(--border)",
                gap: 16,
              }}
            >
              <span style={{ fontSize: 13, fontWeight: 500, flexShrink: 0 }}>
                {name}
              </span>
              <div
                style={{
                  width: "clamp(80px,15vw,140px)",
                  height: 2,
                  background: "var(--border)",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: pct,
                    background:
                      "linear-gradient(90deg,var(--purple),var(--purp2))",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

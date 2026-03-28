import Animated from "./animated";
import herohover from "../images/hero.png";
export default function Hero() {
  return (
    <>
      <section
        id="hero"
        className="hero-section"
        style={{
          position: "relative",
          minHeight: "100vh",
          padding: "clamp(80px, 10vw, 100px) var(--px) 0 var(--px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 700,
            height: 700,
            background:
              "radial-gradient(circle,rgba(124,58,237,0.1) 0%,transparent 70%)",
            top: -150,
            right: -150,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 300,
            height: 300,
            background:
              "radial-gradient(circle,rgba(124,58,237,0.06) 0%,transparent 70%)",
            bottom: 80,
            left: 0,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right,var(--black) 45%,transparent 80%),linear-gradient(to top,var(--black) 0%,transparent 35%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -30,
            top: "50%",
            transform: "translateY(-50%)",
            fontFamily: "'Playfair Display',serif",
            fontSize: "clamp(100px,18vw,280px)",
            fontWeight: 900,
            fontStyle: "italic",
            color: "rgba(124,58,237,0.035)",
            userSelect: "none",
            pointerEvents: "none",
            whiteSpace: "nowrap",
            lineHeight: 1,
          }}
        >
          Creative
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: 700,
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: 10,
              color: "var(--purple)",
              letterSpacing: "4px",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 28,
              animation: "fadeUp 1s .2s ease both",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                width: 36,
                height: 1,
                background: "var(--purple)",
                display: "block",
                flexShrink: 0,
              }}
            />
            Brand &amp; Social Media Strategist
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(52px,9.5vw,136px)",
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: -2,
              marginBottom: 12,
            }}
          >
            <span style={{ overflow: "hidden", display: "block" }}>
              <span
                style={{
                  display: "block",
                  animation: "slideUp 1s cubic-bezier(0.16,1,0.3,1) both",
                }}
              >
                Muskan
              </span>
            </span>
            <span style={{ overflow: "hidden", display: "block" }}>
              <span
                style={{
                  display: "block",
                  animation: "slideUp 1s cubic-bezier(0.16,1,0.3,1) .12s both",
                  fontStyle: "italic",
                  color: "var(--purple)",
                }}
              >
                Chauhan
              </span>
            </span>
          </h1>

          <div
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: "clamp(9px,1.5vw,11px)",
              color: "var(--muted)",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: 24,
              animation: "fadeUp 1s .3s ease both",
            }}
          >
            6 Years · Noida, India · Open to Opportunities
          </div>

          <p
            style={{
              fontSize: "clamp(13px,1.5vw,15px)",
              color: "rgba(244,239,233,.58)",
              lineHeight: 1.85,
              fontWeight: 300,
              maxWidth: 500,
              marginBottom: 40,
              animation: "fadeUp 1s .4s ease both",
            }}
          >
            Crafting bold brand identities and social strategies that move
            numbers. From scaling Instagram pages to ₹7.5L/month revenue — I
            don't just manage brands, I build them.
          </p>

          <div
            style={{
              display: "flex",
              gap: "clamp(20px,4vw,52px)",
              marginBottom: 44,
              animation: "fadeUp 1s .5s ease both",
              flexWrap: "wrap",
            }}
          >
            {[
              ["6+", "Years Exp."],
              ["15+", "Brands Managed"],
              ["300K+", "Followers Scaled"],
            ].map(([n, l]) => (
              <div key={l}>
                <div
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "clamp(32px,5vw,46px)",
                    fontWeight: 900,
                    color: "var(--purple)",
                    lineHeight: 1,
                    letterSpacing: -1,
                  }}
                >
                  {n}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: "var(--muted)",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    marginTop: 4,
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              gap: 12,
              animation: "fadeUp 1s .6s ease both",
              flexWrap: "wrap",
            }}
          >
            <a href="#work" className="btn-purple">
              View My Work
            </a>
            <a href="#contact" className="btn-ghost">
              Get In Touch
            </a>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: "var(--px)",
            zIndex: 2,
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: 9,
            color: "var(--muted)",
            letterSpacing: "3px",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            gap: 12,
            animation: "fadeUp 1s .8s ease both",
          }}
        >
          <div
            style={{
              width: 1,
              height: 44,
              background:
                "linear-gradient(to bottom,var(--purple),transparent)",
              animation: "scrollAnim 2s ease infinite",
            }}
          />
          Scroll
        </div>
        {/* Visual Area - Hybrid Switch */}
        <div className="hero-visual-area">
          {/* DESKTOP: Shows above 740px */}
          <div className="show-desktop">
            <Animated />
          </div>

          {/* MOBILE: Shows below 740px */}
          <div
            className="show-mobile"
            style={
              {
                // paddingTop: "1rem",
              }
            }
          >
            <div className="mobile-glow"></div>
            <img
              src={herohover}
              alt="Muskan Chauhan"
              className="mobile-avatar"
            />
          </div>
        </div>
      </section>
    </>
  );
}

import { useState, useEffect, useRef } from "react"
import "./App.css"


const A = "#00c4a0"
const AD = "rgba(0,196,160,0.09)"
const BG = "#070709"
const S1 = "#0d0d10"
const S2 = "#131317"
const S3 = "#18181d"
const BR = "rgba(255,255,255,0.07)"
const BR2 = "rgba(255,255,255,0.04)"
const T1 = "#ededf2"
const T2 = "#6b6b7d"
const T3 = "#3a3a4a"

const sans = "'Instrument Sans', ui-sans-serif, system-ui, sans-serif"
const mono = "'JetBrains Mono', ui-monospace, monospace"

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  })
}

function useScrollReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible")
          observer.unobserve(element)
        }
      },
      {
        threshold: 0.15,
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return ref
}

const card = {
  background: S1,
  border: `1px solid ${BR}`,
  borderRadius: 10,
}

function Nav({ scrolled, active }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    ["Home", "home"],
    ["Projects", "projects"],
    ["Designs", "designs"],
    ["About", "about"],
    ["Contact", "contact"],
  ]

  const handleNavigation = (id) => {
    scrollToSection(id)
    setMenuOpen(false)
  }

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        borderBottom: scrolled
          ? "1px solid " + BR
          : "1px solid transparent",
        background: scrolled
          ? "rgba(7,7,9,0.88)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "18px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={() => handleNavigation("home")}
          style={{
            background: "none",
            color: T1,
            cursor: "pointer",
            fontFamily: sans,
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: "0.08em",
            padding: 0,
          }}
        >
          KURT ORTIZ
        </button>

        {/* DESKTOP NAV */}
        <div
          className="desktop-nav"
          style={{
            alignItems: "center",
            gap: 28,
          }}
        >
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => handleNavigation(id)}
              style={{
                background: "none",
                color: active === id ? T1 : T2,
                cursor: "pointer",
                fontFamily: mono,
                fontSize: 10,
                letterSpacing: "0.08em",
                padding: 0,
              }}
            >
              {label.toUpperCase()}
            </button>
          ))}

          <button
            className="talk-button"
            onClick={() => handleNavigation("contact")}
            style={{
              background: A,
              color: "#000",
              borderRadius: 6,
              padding: "9px 15px",
              cursor: "pointer",
              fontFamily: sans,
              fontSize: 12,
              fontWeight: 700,
            }}
          >
            Let's Talk →
          </button>
        </div>

        <button
          onClick={() => setMenuOpen((open) => !open)}
          style={{
            display: "flex",
            background: "none",
            color: T1,
            cursor: "pointer",
            padding: 8,
            fontSize: 26,
            lineHeight: 1,
          }}
          className="mobile-menu-button"
          aria-label="Open navigation menu"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      
      {menuOpen && (
        <div
          style={{
            width: "100%",
            background: "rgba(7,7,9,0.98)",
            borderTop: "1px solid " + BR,
            padding: "10px 24px 20px",
          }}
        >
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => handleNavigation(id)}
              style={{
                display: "block",
                width: "100%",
                padding: "15px 0",
                background: "none",
                borderBottom: "1px solid " + BR2,
                color: active === id ? T1 : T2,
                textAlign: "left",
                cursor: "pointer",
                fontFamily: mono,
                fontSize: 11,
                letterSpacing: "0.08em",
              }}
            >
              {label.toUpperCase()}
            </button>
          ))}

          <button
            onClick={() => handleNavigation("contact")}
            style={{
              display: "block",
              width: "100%",
              marginTop: 14,
              padding: "12px",
              background: A,
              color: "#000",
              borderRadius: 6,
              cursor: "pointer",
              fontFamily: sans,
              fontSize: 12,
              fontWeight: 700,
            }}
          >
            Let's Talk →
          </button>
        </div>
      )}
    </nav>
  )
}

function HeroVisual() {
  return (
    <div
      className="animate-float"
      style={{
        ...card,
        padding: 0,
        overflow: "hidden",
        width: "100%",
        maxWidth: 480,
        boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)",
      }}
    >
      {/* Panel header */}
      <div
        style={{
          background: S2,
          borderBottom: "1px solid " + BR,
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div style={{ display: "flex", gap: 6 }}>
          {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
            <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
          ))}
        </div>
        <span
          style={{
            fontFamily: mono,
            fontSize: 11,
            color: T2,
            marginLeft: 4,
          }}
        >
          kurt-ortiz / portfolio
        </span>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}>
          <div
            className="animate-pulse-dot"
            style={{ width: 6, height: 6, borderRadius: "50%", background: A }}
          />
          <span style={{ fontFamily: mono, fontSize: 10, color: A }}>building</span>
        </div>
      </div>

      {/* Code area */}
      <div style={{ padding: "20px 20px 8px", display: "flex", gap: 16 }}>
        {/* Line numbers */}
        <div style={{ fontFamily: mono, fontSize: 12, color: T3, lineHeight: "22px", userSelect: "none" }}>
          {[1,2,3,4,5,6,7,8,9,10].map(n => (
            <div key={n}>{n}</div>
          ))}
        </div>
        {/* Code */}
        <div style={{ fontFamily: mono, fontSize: 12, lineHeight: "22px", flex: 1 }}>
          <div><span style={{ color: "#b392f0" }}>const</span> <span style={{ color: "#79d7ff" }}>developer</span> <span style={{ color: T2 }}>=</span> <span style={{ color: T2 }}>{"{"}</span></div>
          <div><span style={{ color: T2, paddingLeft: 16 }}>design</span><span style={{ color: T2 }}>:</span> <span style={{ color: A }}>true</span><span style={{ color: T2 }}>,</span></div>
          <div><span style={{ color: T2, paddingLeft: 16 }}>code</span><span style={{ color: T2 }}>:</span> <span style={{ color: A }}>true</span><span style={{ color: T2 }}>,</span></div>
          <div><span style={{ color: T2, paddingLeft: 16 }}>creativity</span><span style={{ color: T2 }}>:</span> <span style={{ color: A }}>true</span><span style={{ color: T2 }}>,</span></div>
          <div><span style={{ color: T2 }}>{"}"}</span><span style={{ color: T2 }}>;</span></div>
          <div style={{ height: 8 }} />
          <div>
            <span style={{ color: "#b392f0" }}>const</span>
            <span style={{ color: "#79d7ff" }}> stack</span>
            <span style={{ color: T2 }}> = [</span>
          </div>
          <div style={{ paddingLeft: 16 }}>
            <span style={{ color: "#f9c74f" }}>"React"</span><span style={{ color: T2 }}>, </span>
            <span style={{ color: "#f9c74f" }}>"TypeScript"</span><span style={{ color: T2 }}>,</span>
          </div>
          <div style={{ paddingLeft: 16 }}>
            <span style={{ color: "#f9c74f" }}>"Figma"</span><span style={{ color: T2 }}>, </span>
            <span style={{ color: "#f9c74f" }}>"GoHighLevel"</span>
          </div>
          <div><span style={{ color: T2 }}>];</span></div>
        </div>
      </div>

      {/* Floating mini cards */}
      <div
        style={{ padding: "8px 20px 16px", display: "flex", gap: 8, flexWrap: "wrap" }}>
        {[
          { label: "Component", color: "#7dd3fc", dot: "#3b82f6" },
          { label: "useEffect", color: "#c4b5fd", dot: "#8b5cf6" },
          { label: "tsx", color: A, dot: A },
        ].map((item) => (
          <div
            key={item.label}
            style={{
              background: S3,
              border: `1px solid ${BR}`,
              borderRadius: 5,
              padding: "5px 10px",
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontFamily: mono,
              fontSize: 11,
              color: item.color,
            }}
          >
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: item.dot }} />
            {item.label}
          </div>
        ))}
      </div>

      {/* Divider */}
      <div style={{ borderTop: `1px solid ${BR}`, margin: "0 20px" }} />

      {/* Status bar */}
      <div
        style={{
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: mono,
          fontSize: 10,
          color: T3,
        }}
      >
        <div style={{ display: "flex", gap: 16 }}>
          <span>✓ TypeScript 5.7</span>
          <span>⬡ React 19</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5, color: A }}>
          <div className="animate-pulse-dot" style={{ width: 5, height: 5, borderRadius: "50%", background: A }} />
          <span>dev server running</span>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section
      id="home"
      className="hero-section"
      style={{
        minHeight: "100vh",
        padding: "150px 32px 80px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        className="hero-grid"
        style={{
          maxWidth: 1280,
          width: "100%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: 70,
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: mono,
              fontSize: 11,
              color: A,
              letterSpacing: "0.14em",
              marginBottom: 24,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div style={{ width: 20, height: 1, background: A }} />
            WEB DEVELOPER · UI/UX
          </div>

          <h1
            style={{
              fontFamily: sans,
              fontSize: "clamp(46px, 6vw, 78px)",
              lineHeight: 1.02,
              letterSpacing: "-0.045em",
              margin: "0 0 28px",
              color: T1,
              fontWeight: 700,
              maxWidth: 760,
            }}
          >
            I design & build
            <br />
            <span
              style={{
                background: `linear-gradient(135deg, ${A}, #5bc8f5)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              modern web
            </span>{" "}
            experiences.
          </h1>

          <p
            style={{
              fontFamily: sans,
              fontSize: 17,
              lineHeight: 1.7,
              color: T2,
              maxWidth: 580,
              margin: "0 0 38px",
            }}
          >
            I combine web development, UI/UX design, automation, and IT
            experience to build digital experiences that are functional,
            responsive, and thoughtfully designed.
          </p>

          <div
            className="hero-buttons"
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <button
              className="work-button"
              onClick={() => scrollToSection("projects")}
              style={{
                background: A,
                color: "#000",
                cursor: "pointer",
                fontFamily: sans,
                fontSize: 14,
                fontWeight: 700,
                padding: "14px 24px",
                borderRadius: 7,
              }}
            >
              View My Work →
            </button>

            <button
              className="connect-button"
              onClick={() => scrollToSection("contact")}
              style={{
                background: S2,
                color: T1,
                border: `1px solid ${BR}`,
                cursor: "pointer",
                fontFamily: sans,
                fontSize: 14,
                padding: "14px 24px",
                borderRadius: 7,
              }}
            >
              Let's Connect
            </button>
          </div>

          <div
            className="hero-tech-list"
            style={{
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
              marginTop: 36,
            }}
          >
            {["React", "TypeScript", "JavaScript", "Figma", "GoHighLevel"].map(
              (item) => (
                <span
                  key={item}
                  className="hero-mini-card"
                  style={{
                    fontFamily: mono,
                    fontSize: 10,
                    color: T2,
                    background: S2,
                    border: `1px solid ${BR}`,
                    padding: "6px 10px",
                    borderRadius: 4,
                  }}
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="hero-visual-col">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}

function Intro() {
  const cards = [
    {
      num: "01",
      title: "CODE",
      body: "Building responsive, interactive, and functional web experiences with modern web technologies.",
    },
    {
      num: "02",
      title: "DESIGN",
      body: "Creating intuitive interfaces and polished experiences with a strong focus on usability and visual detail.",
    },
    {
      num: "03",
      title: "SYSTEMS",
      body: "Bringing experience in automation and IT to understand how technology works beyond the interface.",
    },
  ]

  return (
    <section 
      style={{ 
        padding: "100px 32px", 
        maxWidth: 1280, 
        margin: "0 auto" }}>
      <div style={{ marginBottom: 56 }}>
        <div
          style={{
            fontFamily: mono,
            fontSize: 11,
            color: A,
            letterSpacing: "0.14em",
            marginBottom: 18,
          }}
        >
          WHAT I DO
        </div>

        <h2
          style={{
            fontFamily: sans,
            fontSize: "clamp(30px, 4vw, 48px)",
            color: T1,
            margin: "0 0 20px",
            letterSpacing: "-0.03em",
          }}
        >
          Building at the intersection
          <br />
          of code & design.
        </h2>

        <p
          style={{
            fontFamily: sans,
            fontSize: 16,
            lineHeight: 1.7,
            color: T2,
            maxWidth: 600,
            margin: 0,
          }}
        >
          I enjoy turning ideas into digital experiences — from the first
          wireframe to the final responsive interface.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20,
        }}
      >
        {cards.map((item) => (
          <div key={item.num} 
          className="what-i-do-card" 
          style={{ ...card, padding: 28 }}
          >
            <div
              style={{
                fontFamily: mono,
                fontSize: 11,
                color: A,
                marginBottom: 42,
              }}
            >
              {item.num}
            </div>

            <h3
              style={{
                fontFamily: sans,
                fontSize: 19,
                color: T1,
                margin: "0 0 12px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                fontFamily: sans,
                fontSize: 14,
                lineHeight: 1.7,
                color: T2,
                margin: 0,
              }}
            >
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function ProjectVisual({ index }) {
  const configs = [
    {
      bg: "linear-gradient(135deg, #0f1117 0%, #141b2d 100%)",
      accent: "#3b82f6",
      label: "Infinity Rentals",
    },
    {
      bg: "linear-gradient(135deg, #0f1117 0%, #1a1424 100%)",
      accent: A,
      label: "Web Experience",
    },
    {
      bg: "linear-gradient(135deg, #0f1117 0%, #1a1f14 100%)",
      accent: "#a78bfa",
      label: "Digital Interface",
    },
  ]

  const config = configs[index]

  return (
    <div
      className="project-visual"
      style={{
        position: "relative",
        height: "360px",
        background: config.bg,
        borderRadius: 8,
        overflow: "hidden",
        border: `1px solid ${BR}`,
      }}
    >
      {/* Browser top bar */}
      <div
        style={{
          height: 38,
          background: "rgba(0,0,0,0.25)",
          borderBottom: `1px solid ${BR}`,
          display: "flex",
          alignItems: "center",
          padding: "0 14px",
          gap: 6,
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#ff5f56",
          }}
        />
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#ffbd2e",
          }}
        />
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#27c93f",
          }}
        />

        <div
          style={{
            marginLeft: 12,
            height: 20,
            flex: 1,
            background: "rgba(255,255,255,0.04)",
            borderRadius: 4,
          }}
        />
      </div>

      {/* Fake website */}
      <div
        style={{
          padding: 28,
          position: "relative",
          height: "calc(100% - 38px)",
        }}
      >
        <div
          style={{
            fontFamily: mono,
            fontSize: 9,
            color: config.accent,
            letterSpacing: "0.12em",
            marginBottom: 14,
          }}
        >
          {config.label.toUpperCase()}
        </div>

        <div
          style={{
            width: "65%",
            height: 18,
            background: "rgba(255,255,255,0.9)",
            borderRadius: 3,
            marginBottom: 10,
          }}
        />

        <div
          style={{
            width: "45%",
            height: 8,
            background: "rgba(255,255,255,0.18)",
            borderRadius: 3,
            marginBottom: 28,
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 10,
          }}
        >
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              style={{
                height: 110,
                background: "rgba(255,255,255,0.05)",
                border: `1px solid rgba(255,255,255,0.08)`,
                borderRadius: 6,
                padding: 12,
              }}
            >
              <div
                style={{
                  width: "70%",
                  height: 7,
                  background: config.accent,
                  opacity: 0.6,
                  borderRadius: 2,
                  marginBottom: 12,
                }}
              />

              <div
                style={{
                  width: "90%",
                  height: 5,
                  background: "rgba(255,255,255,0.12)",
                  borderRadius: 2,
                  marginBottom: 6,
                }}
              />

              <div
                style={{
                  width: "65%",
                  height: 5,
                  background: "rgba(255,255,255,0.08)",
                  borderRadius: 2,
                }}
              />
            </div>
          ))}
        </div>

        {/* Hover overlay */}
        <div
          className="project-overlay"
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(7,7,9,0.72)",
            opacity: 0,
            transition: "opacity 0.25s ease",
          }}
        >
          <span
            style={{
              fontFamily: mono,
              fontSize: 11,
              color: T1,
              letterSpacing: "0.08em",
              border: `1px solid rgba(255,255,255,0.2)`,
              padding: "10px 14px",
              borderRadius: 5,
            }}
          >
            SCREENSHOT PLACEHOLDER
          </span>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  const projects = [
    {
      num: "01",
      title: "UI/UX",
      category: "Web Development · UI/UX · GoHighLevel",
      description:
        "A premium digital experience designed around a sophisticated rental brand, combining visual design, responsive layouts, and business-focused functionality.",
      tags: ["UI/UX", "Web Design", "GoHighLevel"],
    },
    {
      num: "02",
      title: "Web Experience",
      category: "Web Development · Responsive Design",
      description:
        "A responsive web experience focused on clean structure, usability, and polished frontend presentation.",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    },
    {
      num: "03",
      title: "Digital Interface",
      category: "Frontend Development · UI/UX",
      description:
        "An interface concept combining thoughtful interaction design with modern frontend development.",
      tags: ["React", "TypeScript", "Figma"],
    },
  ]

  return (
    <section
      id="projects"
      style={{
        padding: "100px 32px",
        borderTop: `1px solid ${BR}`,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: 64 }}>
          <div
            style={{
              fontFamily: mono,
              fontSize: 11,
              color: A,
              letterSpacing: "0.14em",
              marginBottom: 18,
            }}
          >
            SELECTED WORK
          </div>

          <h2
            style={{
              fontFamily: sans,
              fontSize: "clamp(30px, 4vw, 48px)",
              fontWeight: 700,
              color: T1,
              letterSpacing: "-0.03em",
              margin: "0 0 20px",
            }}
          >
            Things I've built.
          </h2>

          <p
            style={{
              fontFamily: sans,
              fontSize: 16,
              lineHeight: 1.7,
              color: T2,
              maxWidth: 580,
              margin: 0,
            }}
          >
            A selection of projects where design, development, and
            problem-solving come together.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 80,
          }}
        >
          {projects.map((project, index) => {
            const imageLeft = index % 2 === 0

            return (
              <div
                key={project.num}
                className="project-grid"
                style={{
                  display: "grid",
                  gap: 50,
                  alignItems: "center",
                }}
              >
                <div
                  className="project-image"
                  style={{
                    order: imageLeft ? 0 : 1,
                    minWidth: 0,
                  }}
                >
                  <ProjectVisual index={index} />
                </div>

                <div
                  className="project-info"
                  style={{
                    order: imageLeft ? 1 : 0,
                    minWidth: 0,
                  }}
                >
                  <div
                    style={{
                      fontFamily: mono,
                      fontSize: 11,
                      color: A,
                      marginBottom: 20,
                    }}
                  >
                    {project.num}
                  </div>

                  <div
                    style={{
                      fontFamily: mono,
                      fontSize: 10,
                      color: T3,
                      letterSpacing: "0.08em",
                      marginBottom: 12,
                    }}
                  >
                    {project.category.toUpperCase()}
                  </div>

                  <h3
                    style={{
                      fontFamily: sans,
                      fontSize: "clamp(25px, 3vw, 36px)",
                      fontWeight: 700,
                      color: T1,
                      letterSpacing: "-0.025em",
                      margin: "0 0 18px",
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: sans,
                      fontSize: 15,
                      lineHeight: 1.75,
                      color: T2,
                      margin: "0 0 24px",
                      maxWidth: 500,
                    }}
                  >
                    {project.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 7,
                      marginBottom: 26,
                    }}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="project-tag"
                        style={{
                          fontFamily: mono,
                          fontSize: 10,
                          color: T2,
                          background: S2,
                          border: `1px solid ${BR}`,
                          padding: "5px 9px",
                          borderRadius: 4,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    className="project-button"
                    style={{
                      background: "none",
                      color: T1,
                      border: `1px solid ${BR}`,
                      padding: "10px 15px",
                      borderRadius: 5,
                      fontFamily: sans,
                      fontSize: 13,
                      cursor: "pointer",
                    }}
                  >
                    View Project →
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function DesignFrame({ design, onOpen }) {
  return (
    <div
      style={{
        position: "relative",
        background: "#0b0b0e",
        border: `1px solid ${BR}`,
        borderRadius: 8,
        overflow: "hidden",
        height: 420,
      }}
    >
      {/* Browser bar */}
      <div
        style={{
          height: 38,
          background: "rgba(0,0,0,0.25)",
          borderBottom: `1px solid ${BR}`,
          display: "flex",
          alignItems: "center",
          padding: "0 14px",
          gap: 6,
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#ff5f56",
          }}
        />

        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#ffbd2e",
          }}
        />

        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#27c93f",
          }}
        />

        <div
          style={{
            marginLeft: 12,
            height: 20,
            flex: 1,
            background: "rgba(255,255,255,0.04)",
            borderRadius: 4,
          }}
        />
      </div>

      {/* Design preview */}
      
    </div>
  )
}

function DesignPlayground() {
  const [selectedDesign, setSelectedDesign] = useState(null)

  const designs = [
    {
      title: "Routa",
      type: "Mobile App UI",
      description:
        "A full-featured mobile application UI built in Figma.",
      tags: ["Figma", "UI/UX", "Prototyping"],
      background:
        "linear-gradient(135deg, #0d1117 0%, #0d1724 100%)",
    },
    {
      title: "Parking Lot Management System",
      type: "Web Experience",
      description:
        "End-to-end web design for a premium rental brand.",
      tags: ["Figma", "Web Design", "UX"],
      background:
        "linear-gradient(135deg, #0d1017 0%, #14101d 100%)",
    },
    {
      title: "Interface Concepts",
      type: "Experimental UI",
      description:
        "Experimental interface concepts exploring interaction and visual design.",
      tags: ["Figma", "Interaction", "Visual Design"],
      background:
        "linear-gradient(135deg, #0d1710 0%, #0d1417 100%)",
    },
  ]

  return (
    <>
      <section
        id="designs"
        style={{
          padding: "100px 32px",
          borderTop: `1px solid ${BR}`,
          background: S1,
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
          }}
        >
          {/* Heading */}
          <div style={{ marginBottom: 64 }}>
            <div
              style={{
                fontFamily: mono,
                fontSize: 11,
                color: A,
                letterSpacing: "0.14em",
                marginBottom: 18,
              }}
            >
              DESIGN PLAYGROUND
            </div>

            <h2
              style={{
                fontFamily: sans,
                fontSize: "clamp(30px, 4vw, 48px)",
                fontWeight: 700,
                color: T1,
                letterSpacing: "-0.03em",
                margin: "0 0 20px",
              }}
            >
              Designing beyond the browser.
            </h2>

            <p
              style={{
                fontFamily: sans,
                fontSize: 16,
                lineHeight: 1.7,
                color: T2,
                maxWidth: 580,
                margin: 0,
              }}
            >
              A collection of interface explorations, product concepts, and
              visual experiments created in Figma.
            </p>
          </div>

          {/* Designs */}
          <div
            className="design-playground-list"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 80,
            }}
          >
            {designs.map((design, index) => {
              const visualLeft = index % 2 === 0

              return (
                <div
                  key={design.title}
                  className="design-project-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 50,
                    alignItems: "center",
                    position: "relative",
                    minHeight: 420,
                  }}
                >
                  {/* Design Visual */}
                  <div
                    className="design-project-image"
                    style={{
                      order: visualLeft ? 0 : 1,
                      minWidth: 0,
                    }}
                  >
                    <DesignFrame
                      design={design}
                      onOpen={() => setSelectedDesign(design)}
                    />
                  </div>

                  {/* Design Information */}
                  <div
                    className="design-project-info"
                    style={{
                      order: visualLeft ? 1 : 0,
                      minWidth: 0,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: mono,
                        fontSize: 10,
                        color: A,
                        letterSpacing: "0.08em",
                        marginBottom: 12,
                      }}
                    >
                      {design.type.toUpperCase()}
                    </div>

                    <h3
                      style={{
                        fontFamily: sans,
                        fontSize: "clamp(25px, 3vw, 36px)",
                        fontWeight: 700,
                        color: T1,
                        letterSpacing: "-0.025em",
                        margin: "0 0 18px",
                      }}
                    >
                      {design.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: sans,
                        fontSize: 15,
                        lineHeight: 1.75,
                        color: T2,
                        maxWidth: 500,
                        margin: "0 0 24px",
                      }}
                    >
                      {design.description}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 7,
                      }}
                    >
                      {design.tags.map((tag) => (
                        <span
                          key={tag}
                          className="design-mini-card"
                          style={{
                            fontFamily: mono,
                            fontSize: 10,
                            color: T2,
                            background: S2,
                            border: `1px solid ${BR}`,
                            padding: "5px 9px",
                            borderRadius: 4,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Design Modal */}
      {selectedDesign && (
        <div
          onClick={() => setSelectedDesign(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(0,0,0,0.82)",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 30,
          }}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            style={{
              width: "min(1000px, 100%)",
              maxHeight: "90vh",
              overflow: "auto",
              background: S1,
              border: `1px solid ${BR}`,
              borderRadius: 8,
              padding: 30,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 25,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: mono,
                    fontSize: 10,
                    color: A,
                    letterSpacing: "0.1em",
                    marginBottom: 8,
                  }}
                >
                  {selectedDesign.type.toUpperCase()}
                </div>

                <h3
                  style={{
                    fontFamily: sans,
                    fontSize: 30,
                    margin: 0,
                    color: T1,
                  }}
                >
                  {selectedDesign.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedDesign(null)}
                style={{
                  background: "none",
                  color: T2,
                  border: `1px solid ${BR}`,
                  borderRadius: 5,
                  padding: "8px 12px",
                  cursor: "pointer",
                  fontSize: 16,
                }}
              >
                ✕
              </button>
            </div>

            <DesignFrame
              design={selectedDesign}
              onOpen={() => {}}
            />

            <div
              style={{
                marginTop: 20,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 20,
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontFamily: mono,
                  fontSize: 10,
                  color: T3,
                }}
              >
                DESIGN PREVIEW
              </span>

              <button
                style={{
                  background: A,
                  color: "#050507",
                  padding: "11px 16px",
                  borderRadius: 5,
                  fontFamily: sans,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Open in Figma →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function About() {
  const timeline = [
    {
      period: "2025 — PRESENT",
      role: "IT Administrator",
      company: "Inoehm Metal Casting",
      skills: [
        "IT Operations",
        "Technical Support",
        "Systems",
        "Troubleshooting",
      ],
      current: true,
    },
    {
      period: "2024 — 2025",
      role: "UI/UX · Web Developer",
      company: "MetaKonnects",
      skills: ["Figma", "Web Development", "GoHighLevel", "Automation"],
      current: false,
    },
  ]

  return (
    <section
      id="about"
      style={{
        padding: "120px 32px",
        background: S1,
        borderTop: `1px solid ${BR}`,
        borderBottom: `1px solid ${BR}`,
      }}
    >
      <div
        className="about-grid"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 100,
          alignItems: "start",
        }}
      >
        {/* LEFT SIDE */}
        <div>
          {/* About Label */}
          <div
            style={{
              fontFamily: mono,
              fontSize: 11,
              color: A,
              letterSpacing: "0.14em",
              marginBottom: 24,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div
              style={{
                width: 20,
                height: 1,
                background: A,
              }}
            />
            ABOUT
          </div>

          {/* Heading */}
          <h2
            style={{
              fontFamily: sans,
              fontSize: "clamp(26px, 3vw, 40px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              color: T1,
              margin: "0 0 28px",
            }}
          >
            Developer with a wider technical perspective.
          </h2>

          {/* Description */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <p
              style={{
                fontFamily: sans,
                fontSize: 15,
                lineHeight: 1.75,
                color: T2,
                margin: 0,
              }}
            >
              My background spans web development, UI/UX design, automation,
              and IT administration. I started working with digital
              experiences through design and web development, then expanded
              into hands-on IT operations.
            </p>

            <p
              style={{
                fontFamily: sans,
                fontSize: 15,
                lineHeight: 1.75,
                color: T2,
                margin: 0,
              }}
            >
              Today, I'm focused on returning deeper into web development and
              building modern, useful digital products.
            </p>
          </div>

          {/* STATS */}
          <div
            style={{
              display: "flex",
              gap: 32,
              marginTop: 48,
              paddingTop: 32,
              borderTop: `1px solid ${BR}`,
            }}
          >
            {[
              { val: "2+", label: "Years Experience" },
              { val: "4", label: "Disciplines" },
              { val: "∞", label: "Problems Solved" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: sans,
                    fontSize: 28,
                    fontWeight: 700,
                    color: T1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {stat.val}
                </div>

                <div
                  style={{
                    fontFamily: mono,
                    fontSize: 10,
                    color: T3,
                    marginTop: 4,
                    letterSpacing: "0.06em",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE — EXPERIENCE */}
        <div>
          <div
            style={{
              fontFamily: mono,
              fontSize: 10,
              color: T3,
              letterSpacing: "0.1em",
              marginBottom: 32,
            }}
          >
            EXPERIENCE
          </div>

          <div
            style={{
              position: "relative",
            }}
          >
            {/* Vertical Timeline Line */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 6,
                bottom: 0,
                width: 1,
                background: `linear-gradient(to bottom, ${A}, ${BR})`,
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 40,
                paddingLeft: 32,
              }}
            >
              {timeline.map((item, index) => (
                <div
                  key={index}
                  style={{
                    position: "relative",
                  }}
                >
                  {/* Timeline Dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: -36,
                      top: 6,
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: item.current ? A : S3,
                      border: item.current
                        ? `2px solid ${A}`
                        : `2px solid ${BR}`,
                      boxShadow: item.current
                        ? `0 0 12px ${A}40`
                        : "none",
                    }}
                  />

                  {/* Experience Card */}
                  <div
                    className="experience-card"
                    style={{
                      ...card,
                      padding: "24px 24px",
                      transition:
                        "border-color 0.2s ease, box-shadow 0.2s ease",
                    }}
                  >
                    {/* Period + Current */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: 12,
                        gap: 12,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: mono,
                          fontSize: 10,
                          color: item.current ? A : T3,
                          letterSpacing: "0.08em",
                        }}
                      >
                        {item.period}
                      </span>

                      {item.current && (
                        <span
                          style={{
                            fontFamily: mono,
                            fontSize: 9,
                            color: A,
                            background: AD,
                            border: `1px solid rgba(0,196,160,0.2)`,
                            padding: "2px 8px",
                            borderRadius: 3,
                          }}
                        >
                          CURRENT
                        </span>
                      )}
                    </div>

                    {/* Role */}
                    <div
                      style={{
                        fontFamily: sans,
                        fontSize: 17,
                        fontWeight: 600,
                        color: T1,
                        marginBottom: 3,
                      }}
                    >
                      {item.role}
                    </div>

                    {/* Company */}
                    <div
                      style={{
                        fontFamily: sans,
                        fontSize: 14,
                        color: T2,
                        marginBottom: 16,
                      }}
                    >
                      {item.company}
                    </div>

                    {/* Skills */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 6,
                      }}
                    >
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="experience-tag"
                          style={{
                            fontFamily: mono,
                            fontSize: 10,
                            color: T2,
                            border: `1px solid ${BR}`,
                            padding: "3px 8px",
                            borderRadius: 3,
                            background: S2,
                            transition:
                              "color 0.2s ease, border-color 0.2s ease",
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Process() {
  const steps = [
    {
      num: "01",
      title: "UNDERSTAND",
      body: "Understand the problem, users, and requirements.",
    },
    {
      num: "02",
      title: "DESIGN",
      body: "Create the structure, interaction, and visual experience.",
    },
    {
      num: "03",
      title: "BUILD",
      body: "Turn the design into a responsive and functional web experience.",
    },
    {
      num: "04",
      title: "REFINE",
      body: "Test, optimize, troubleshoot, and improve.",
    },
  ]

  return (
    <section
      id="process"
      style={{
        padding: "100px 32px",
        maxWidth: 1280,
        margin: "0 auto",
      }}
    >
      <div style={{ marginBottom: 64 }}>
        <div
          style={{
            fontFamily: mono,
            fontSize: 11,
            color: A,
            letterSpacing: "0.14em",
            marginBottom: 16,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              width: 20,
              height: 1,
              background: A,
            }}
          />
          PROCESS
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <h2
            style={{
              fontFamily: sans,
              fontSize: "clamp(28px, 3.5vw, 46px)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              color: T1,
              margin: 0,
            }}
          >
            From idea to interface.
          </h2>

          <p
            style={{
              fontFamily: sans,
              fontSize: 15,
              lineHeight: 1.6,
              color: T2,
              maxWidth: 320,
              margin: 0,
            }}
          >
            I like understanding the problem before jumping into the solution.
          </p>
        </div>
      </div>

      {/* Desktop */}
      <div
        className="process-horizontal"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 0,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 20,
            left: "12.5%",
            right: "12.5%",
            height: 1,
            background: `linear-gradient(to right, ${A}, rgba(255,255,255,0.06))`,
          }}
        />

        {steps.map((step, index) => (
          <div
            key={step.num}
            className="process-step"
            style={{
              padding: "0 24px 0 0",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "relative",
                marginBottom: 28,
              }}
            >
              <div
                className="process-number"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: index === 0 ? A : S2,
                  border: `1px solid ${index === 0 ? A : BR}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  zIndex: 2,
                  transition:
                    "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <span
                  style={{
                    fontFamily: mono,
                    fontSize: 11,
                    color: index === 0 ? "#000" : T2,
                    fontWeight: 500,
                  }}
                >
                  {step.num}
                </span>
              </div>
            </div>

            <div
              style={{
                fontFamily: mono,
                fontSize: 10,
                color: A,
                letterSpacing: "0.12em",
                marginBottom: 10,
              }}
            >
              {step.title}
            </div>

            <p
              style={{
                fontFamily: sans,
                fontSize: 14,
                lineHeight: 1.65,
                color: T2,
                margin: 0,
                maxWidth: 230,
              }}
            >
              {step.body}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div
        className="process-vertical"
        style={{
          display: "none",
          gap: 2,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 19,
            top: 20,
            bottom: 20,
            width: 1,
            background: `linear-gradient(to bottom, ${A}, ${BR})`,
          }}
        />

        {steps.map((step, index) => (
          <div
            key={step.num}
            style={{
              paddingLeft: 56,
              paddingBottom: 32,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: index === 0 ? A : S2,
                border: `1px solid ${index === 0 ? A : BR}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
              }}
            >
              <span
                style={{
                  fontFamily: mono,
                  fontSize: 11,
                  color: index === 0 ? "#000" : T2,
                }}
              >
                {step.num}
              </span>
            </div>

            <div
              style={{
                fontFamily: mono,
                fontSize: 10,
                color: A,
                letterSpacing: "0.12em",
                marginBottom: 8,
                paddingTop: 10,
              }}
            >
              {step.title}
            </div>

            <p
              style={{
                fontFamily: sans,
                fontSize: 14,
                lineHeight: 1.65,
                color: T2,
                margin: 0,
              }}
            >
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "120px 32px",
        borderTop: `1px solid ${BR}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 300,
          background:
            "radial-gradient(ellipse, rgba(0,196,160,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Section label */}
        <div
          style={{
            fontFamily: mono,
            fontSize: 11,
            color: A,
            letterSpacing: "0.14em",
            marginBottom: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              width: 20,
              height: 1,
              background: A,
            }}
          />

          LET'S WORK TOGETHER

          <div
            style={{
              width: 20,
              height: 1,
              background: A,
            }}
          />
        </div>

        {/* Main heading */}
        <h2
          style={{
            fontFamily: sans,
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            color: T1,
            margin: "0 0 24px",
          }}
        >
          Have an idea?
          <br />

          <span
            style={{
              background: `linear-gradient(135deg, ${A} 0%, #5bc8f5 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Let's build it.
          </span>
        </h2>

        {/* Description */}
        <p
          style={{
            fontFamily: sans,
            fontSize: 17,
            lineHeight: 1.7,
            color: T2,
            margin: "0 0 48px",
          }}
        >
          I'm open to opportunities in web development, UI/UX, and digital
          product work.
        </p>

        {/* Main CTA */}
        <button
          onClick={() => {
            window.location.href = "mailto:your@email.com"
          }}
          style={{
            background: A,
            color: "#000",
            border: "none",
            cursor: "pointer",
            fontFamily: sans,
            fontSize: 15,
            fontWeight: 700,
            padding: "16px 36px",
            borderRadius: 8,
            transition: "opacity 0.2s, transform 0.2s",
            letterSpacing: "0.01em",
            marginBottom: 40,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.85"
            e.currentTarget.style.transform = "translateY(-1px)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1"
            e.currentTarget.style.transform = "translateY(0)"
          }}
        >
          Start a Conversation →
        </button>

        {/* Secondary links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "GitHub", href: "#" },
            { label: "LinkedIn", href: "#" },
            { label: "Email", href: "mailto:your@email.com" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: sans,
                fontSize: 14,
                color: T2,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 6,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = T1
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = T2
              }}
            >
              {link.label}

              <svg
                width="12"
                height="12"
                fill="none"
                viewBox="0 0 12 12"
              >
                <path
                  d="M2.5 9.5l7-7M4 2.5h5.5V8"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function TechStack() {
  const groups = [
    {
      title: "DEVELOPMENT",
      items: ["React", "JavaScript", "HTML", "CSS", "SQL"],
    },
    {
      title: "DESIGN",
      items: ["Figma", "UI/UX", "Wireframing", "Prototyping", "Responsive Design"],
    },
    {
      title: "AUTOMATION",
      items: ["GoHighLevel", "CRM", "Workflows", "Email Automation"],
    },
    {
      title: "IT",
      items: ["IT Administration", "Technical Support", "Hardware", "Troubleshooting"],
    },
  ]

  return (
    <section
      id="stack"
      style={{
        padding: "100px 32px",
        borderTop: `1px solid ${BR}`,
        background: BG,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: 55 }}>
          <div
            style={{
              fontFamily: mono,
              fontSize: 11,
              color: A,
              letterSpacing: "0.14em",
              marginBottom: 18,
            }}
          >
            TECH STACK
          </div>

          <h2
            style={{
              fontFamily: sans,
              fontSize: "clamp(30px, 4vw, 48px)",
              fontWeight: 700,
              color: T1,
              letterSpacing: "-0.03em",
              margin: "0 0 18px",
            }}
          >
            Tools I use to bring ideas to life.
          </h2>

          <p
            style={{
              fontFamily: sans,
              fontSize: 16,
              lineHeight: 1.7,
              color: T2,
              maxWidth: 620,
              margin: 0,
            }}
          >
            A mix of development, design, automation, and IT skills that I
            use to build and support digital experiences.
          </p>
        </div>

        <div
          className="stack-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20,
          }}
        >
          {groups.map((group) => (
            <div
              key={group.title}
              style={{
                background: S1,
                border: `1px solid ${BR}`,
                borderRadius: 8,
                padding: 28,
              }}
            >
              <div
                style={{
                  fontFamily: mono,
                  fontSize: 10,
                  color: A,
                  letterSpacing: "0.12em",
                  marginBottom: 20,
                }}
              >
                {group.title}
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                }}
              >
                {group.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontFamily: mono,
                      fontSize: 11,
                      color: T2,
                      background: S2,
                      border: `1px solid ${BR}`,
                      padding: "7px 10px",
                      borderRadius: 4,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer
      style={{
        borderTop: `1px solid ${BR}`,
        padding: "32px 32px",
        background: S1,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: sans,
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.08em",
              color: T1,
              marginBottom: 4,
            }}
          >
            KURT ORTIZ
          </div>

          <div
            style={{
              fontFamily: mono,
              fontSize: 10,
              color: T3,
            }}
          >
            Web Developer · UI/UX Designer
          </div>
        </div>

        <div
          style={{
            fontFamily: mono,
            fontSize: 10,
            color: T3,
          }}
        >
          © 2026 Kurt Ortiz
        </div>

        <div
          style={{
            display: "flex",
            gap: 24,
          }}
        >
          {["GitHub", "LinkedIn", "Email"].map((link) => (
            <a
              key={link}
              href={
                link === "GitHub" 
                  ? "https://github.com/kurtliam-dev" 
                  :
                link === "LinkedIn" 
                  ? "https://linkedin.com/in/kurt-ortiz-443451369" 
                  :  
                link === "Email"
                  ? "mailto:liam.four12@gmail.com"
                  : "#"
              }
              style={{
                fontFamily: sans,
                fontSize: 13,
                color: T3,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = T1
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = T3
              }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("home")

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    window.addEventListener("scroll", onScroll, { passive: true })

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    let animationFrame

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const animate = () => {
      animationFrame = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  useEffect(() => {
    const sections = ["home", "projects", "designs", "about", "contact"]

    const observers = []

    sections.forEach((id) => {
      const element = document.getElementById(id)

      if (!element) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id)
          }
        },
        { threshold: 0.3 },
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <> 
      <div
        style={{
          minHeight: "100vh",
          background: BG,
          color: T1,
          fontFamily: sans,
        }}
      >
        <Nav scrolled={scrolled} active={active} />

        <main>
          <div className="fade-in-up">
            <Hero />
          </div>
          <Intro />
          <Projects />
          <DesignPlayground /> 
          <TechStack />
          <About />
          <Process />
          <Contact />
          <Footer />
        </main>
      </div>

    <div
      className="mouse-glow"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
      }}
    />
  </>
)
}

export default App
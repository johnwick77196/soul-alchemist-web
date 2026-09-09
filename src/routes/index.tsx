import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  Facebook,
  Instagram,
  Menu,
  Moon,
  Sparkles,
  Star,
  X,
  Youtube,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/mobile1.webp.asset.json";
import aboutImage from "@/assets/mobile_2.webp.asset.json";
import whyImage from "@/assets/mobile_3.webp.asset.json";

const ease = [0.16, 1, 0.3, 1] as const;

const services = [
  { title: "Tarot Readings", description: "Insight for the road ahead", icon: Sparkles },
  { title: "Akashic Record Readings", description: "Meet the wisdom within", icon: Star },
  { title: "Energy Healing", description: "Restore your inner balance", icon: Moon },
  { title: "Birth Chart Analysis", description: "Understand your cosmic map", icon: Compass },
  { title: "Spiritual Guidance", description: "A grounded hand to hold", icon: Sparkles },
];

const whyItems = [
  "Personalized & honest readings",
  "Safe, non-judgmental space",
  "Deep spiritual knowledge",
  "Guidance for real life situations",
  "Always here to support your journey",
];

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <div className={light ? "brand-mark brand-mark-light" : "brand-mark"} aria-hidden="true">
        <Compass size={21} strokeWidth={1.25} />
        <span className="brand-mark-star">✦</span>
      </div>
      <div className="min-w-0">
        <p className={light ? "brand-name brand-name-light" : "brand-name"}>THE SOUL ALCHEMIST</p>
        <p className={light ? "brand-tagline brand-tagline-light" : "brand-tagline"}>TAROT · AKASHIC · HEALING</p>
      </div>
    </div>
  );
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={light ? "eyebrow eyebrow-light" : "eyebrow"}>{children}</p>;
}

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Soul Alchemist | Tarot & Akashic Readings" },
      { name: "description", content: "Intuitive tarot, Akashic record readings, and grounded spiritual guidance for your next chapter." },
      { property: "og:title", content: "The Soul Alchemist | Tarot & Akashic Readings" },
      { property: "og:description", content: "Gain clarity, heal your energy, and align with your highest self." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const reducedMotion = useReducedMotion();
  const [introVisible, setIntroVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      setIntroVisible(false);
      return;
    }
    const introTimer = window.setTimeout(() => setIntroVisible(false), 1750);
    return () => window.clearTimeout(introTimer);
  }, [reducedMotion]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const motionInitial = reducedMotion ? false : { opacity: 0, y: -18 };
  const motionAnimate = reducedMotion ? { opacity: 1, y: 0 } : { opacity: introVisible ? 0 : 1, y: introVisible ? -18 : 0 };

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <AnimatePresence>
        {introVisible && !reducedMotion && (
          <motion.div
            className="intro-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.65, ease } }}
          >
            <motion.div
              className="intro-mark"
              initial={{ opacity: 0, scale: 0.4, rotate: -35 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.85, ease }}
            >
              <Compass size={58} strokeWidth={1} />
              <span>✦</span>
            </motion.div>
            <motion.p
              className="intro-wordmark"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.75, ease }}
            >
              THE SOUL ALCHEMIST
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.header
        className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}
        initial={motionInitial}
        animate={motionAnimate}
        transition={{ duration: 0.7, delay: 0.1, ease }}
      >
        <div className="page-shell nav-shell">
          <a href="#home" aria-label="The Soul Alchemist home"><BrandMark /></a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {["Home", "About", "Services", "Testimonials", "Blog", "Contact"].map((item) => (
              <a key={item} className={item === "Home" ? "nav-link nav-link-active" : "nav-link"} href={item === "Home" ? "#home" : `#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </nav>
          <a className="button button-primary button-small nav-cta" href="#contact">
            Book a Session <ArrowUpRight size={15} />
          </a>
          <button className="mobile-menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.nav className="mobile-nav" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease }} aria-label="Mobile navigation">
              {["Home", "About", "Services", "Testimonials", "Blog", "Contact"].map((item) => (
                <a key={item} href={item === "Home" ? "#home" : `#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
              ))}
              <a className="button button-primary" href="#contact" onClick={() => setMenuOpen(false)}>Book a Session <ArrowUpRight size={15} /></a>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      <main>
        <section id="home" className="hero-section page-shell">
          <div className="hero-glow" aria-hidden="true" />
          <motion.div className="hero-copy" initial={reducedMotion ? false : "hidden"} animate={reducedMotion || !introVisible ? "visible" : "hidden"} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } }}>
            <motion.div variants={staggerItem}><Eyebrow>Ancient wisdom, modern guidance</Eyebrow></motion.div>
            <motion.h1 variants={staggerItem}>Tarot &amp; Akashic<br /><em>Readings</em></motion.h1>
            <motion.p className="hero-subheading" variants={staggerItem}>Gain clarity. Heal your energy. Align with your highest self.</motion.p>
            <motion.p className="hero-description" variants={staggerItem}>A gentle space to listen inward, receive what is ready to be revealed, and move forward with a little more trust in your own knowing.</motion.p>
            <motion.div className="hero-actions" variants={staggerItem}>
              <a className="button button-primary" href="#contact">Book a Reading <ArrowUpRight size={16} /></a>
              <a className="text-link" href="#services">Explore Services <ArrowRight size={16} /></a>
            </motion.div>
          </motion.div>
          <motion.div className="hero-visual-wrap" initial={reducedMotion ? false : { opacity: 0, x: 28, scale: 0.94 }} animate={reducedMotion || !introVisible ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 28, scale: 0.94 }} transition={{ duration: 1, delay: 0.34, ease }}>
            <div className="hero-visual" aria-label="Tarot cards wrapped in linen with a lit candle and amethyst crystal" role="img">
              <img src={heroImage.url} alt="Tarot cards wrapped in linen with a lit candle and amethyst crystal" />
            </div>
            <div className="floating-note"><Moon size={17} strokeWidth={1.4} /><span>Messages from your higher self<br />are always within reach.</span></div>
          </motion.div>
        </section>

        <section id="services" className="section page-shell">
          <Reveal className="section-heading">
            <Eyebrow>My Services</Eyebrow>
            <h2>Choose what speaks<br className="mobile-only" /> to your soul</h2>
          </Reveal>
          <motion.div
            className="services-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.article
                  className="service-card"
                  key={service.title}
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.92, rotateX: 8 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      rotateX: 0,
                      transition: { type: "spring", stiffness: 120, damping: 14 },
                    },
                  }}
                  {...(reducedMotion ? {} : { whileHover: { y: -10, scale: 1.02, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } } })}
                >
                  <div className="service-icon">
                    <Icon size={22} strokeWidth={1.35} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a className="card-link" href="#contact">Learn More <ArrowUpRight size={14} /></a>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        <section id="about" className="section page-shell">
          <Reveal className="feature-panel feature-panel-about">
            <div className="feature-copy">
              <Eyebrow>About Me</Eyebrow>
              <h2>A Journey of Soul,<br />Cards &amp; Cosmos</h2>
              <p>There is no perfect time to come home to yourself. Through tarot, the Akashic records, and a deeply intuitive practice, I offer grounded guidance for the tender, transformative seasons of life.</p>
              <a className="button button-primary" href="#contact">Know More About Me <ArrowUpRight size={16} /></a>
            </div>
            <div className="feature-visual feature-visual-image" role="img" aria-label="Overhead flat-lay of crystals, tarot card, incense burner, candle, rune stones, pendulum and coins">
              <div className="feature-image-frame">
                <img src={aboutImage.url} alt="Crystals, tarot card, incense burner, candle, rune stones, pendulum and coins on a dark cloth" />
              </div>
              <div className="caption-badge">Your energy is sacred</div>
            </div>
          </Reveal>
        </section>

        <section id="why" className="section page-shell">
          <Reveal className="feature-panel feature-panel-why">
            <div className="feature-copy">
              <Eyebrow>Why Choose Me?</Eyebrow>
              <h2>Spiritual guidance<br />that feels like home</h2>
              <ul className="why-list">
                {whyItems.map((item) => <li key={item}><span className="check-icon"><Check size={13} strokeWidth={2.2} /></span>{item}</li>)}
              </ul>
            </div>
            <div className="feature-visual feature-visual-image" role="img" aria-label="Open journal with Higher Energy Bigger Dreams, lit candle, tarot cards, crystals on brass astrology plate">
              <div className="feature-image-frame">
                <img src={whyImage.url} alt="Open journal reading Higher Energy Bigger Dreams next to a lit candle, tarot cards, crystals, and dried flowers" />
              </div>
            </div>
          </Reveal>
        </section>

        <section id="contact" className="section page-shell">
          <Reveal className="cta-band">
            <div className="cta-copy">
              <Eyebrow light>Your next chapter</Eyebrow>
              <h2>Your Next Chapter<br className="desktop-only" /> Awaits</h2>
              <p>Take the first step towards clarity, healing and alignment.</p>
              <a className="button button-cream" href="mailto:hello@thesoulalchemist.com">Book Your Session <ArrowUpRight size={16} /></a>
            </div>
            <div className="stats-grid">
              {[{ number: "500+", label: "Happy Clients" }, { number: "5+", label: "Years Experience" }, { number: "100%", label: "Positive Feedback" }].map((stat) => <div className="stat" key={stat.label}><Sparkles size={17} strokeWidth={1.25} /><strong>{stat.number}</strong><span>{stat.label}</span></div>)}
            </div>
          </Reveal>
        </section>
      </main>

      <footer id="blog" className="site-footer page-shell">
        <div className="footer-top">
          <BrandMark light />
          <nav className="footer-nav" aria-label="Footer navigation">{["About", "Services", "Testimonials", "Blog", "Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</nav>
          <div className="social-links"><a href="#instagram" aria-label="Instagram"><Instagram size={16} /></a><a href="#facebook" aria-label="Facebook"><Facebook size={16} /></a><a href="#youtube" aria-label="YouTube"><Youtube size={16} /></a></div>
        </div>
        <p className="footer-tagline">Let the universe guide you <span>✦</span></p>
      </footer>
    </div>
  );
}

function SunGlyph() {
  return <svg viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="40" r="15" /><circle cx="40" cy="40" r="4" /><path d="M40 8v10M40 62v10M8 40h10M62 40h10M17.4 17.4l7 7M55.6 55.6l7 7M62.6 17.4l-7 7M24.4 55.6l-7 7" /></svg>;
}

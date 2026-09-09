# Soul Alchemist Homepage

Build a single-page website homepage for "The Soul Alchemist" — a tarot & Akashic record reading spiritual services brand. Design should feel premium, warm, mystical yet minimal — not generic SaaS. Use React + Tailwind CSS + Framer Motion.

COLOR THEME

- Background: warm cream #F7F1E9, secondary panel background #F0E6D8

- Primary accent: terracotta/clay #C77B54, hover/dark variant #B3673F

- Text: deep warm brown/ink #3A2E28, soft secondary text #6B5D53

- CTA band background: sage green gradient #8C9273 → #A9AD8E

- Borders/dividers: rgba(58,46,40,0.12)

TYPOGRAPHY

- Display/headings: "Marcellus" (serif, elegant) from Google Fonts

- Script accent word in hero (e.g. "Readings"): "Cormorant Garamond" italic

- Body/UI text: "Inter"

- Eyebrow labels: small, uppercase, letter-spaced, terracotta color, sans-serif

LAYOUT — SECTIONS IN ORDER

1. NAVBAR (sticky, blurred cream background on scroll)

- Left: circular compass/star logo mark (SVG line-art) + "THE SOUL ALCHEMIST" wordmark with small tagline "TAROT · AKASHIC · HEALING" underneath

- Center: nav links — Home, About, Services, Testimonials, Blog, Contact (Home active/underlined)

- Right: pill-shaped terracotta "Book a Session" button with arrow icon

- Mobile: hamburger menu that expands a stacked link list + button

2. HERO SECTION

- Two-column layout (stacks on mobile)

- Left: small eyebrow text "Ancient wisdom, modern guidance" → large heading split into two lines: "Tarot & Akashic" in serif, then "Readings" in italic script terracotta color → subheading "Gain clarity. Heal your energy. Align with your highest self." → short paragraph description → two CTAs: filled terracotta pill "Book a Reading" + underlined text link "Explore Services"

- Right: large rounded image placeholder (organic border-radius, arched top like 200px/200px/24px/24px) with a warm gradient box standing in for a tarot-cards-and-crystals photo, soft shadow, subtle glow blur behind it. Add a small floating card overlapping the top-right corner with text "Messages from your higher self are always within reach." and a moon icon

- Add a soft radial terracotta glow blur in the background corner

3. SERVICES SECTION

- Centered eyebrow "My Services" + heading "Choose what speaks to your soul"

- 5-column grid (2-column on mobile) of bordered cards sharing hairline dividers, each with: circular icon badge (white bg, terracotta line-icon), service title (serif), 1-line description, "Learn More" text link with arrow

- Services: Tarot Readings, Akashic Record Readings, Energy Healing, Birth Chart Analysis, Spiritual Guidance

- Cards lift slightly on hover

4. ABOUT ME PANEL

- Rounded card (bg #F0E6D8), two-column: left = eyebrow "About Me" + heading "A Journey of Soul, Cards & Cosmos" + paragraph + terracotta "Know More About Me" button; right = image placeholder (dark warm gradient box) with a small script-font caption badge "Your energy is sacred" overlapping its bottom-left corner

5. WHY CHOOSE ME PANEL

- Same rounded card style, two-column reversed: left = eyebrow "Why Choose Me?" + checklist of 5 items each with a small circular checkmark icon in terracotta-tinted circle: "Personalized & honest readings", "Safe, non-judgmental space", "Deep spiritual knowledge", "Guidance for real life situations", "Always here to support your journey"; right = image placeholder (terracotta gradient box)

6. CTA BAND

- Full-width rounded sage-green gradient section

- Left: heading "Your Next Chapter Awaits" in white + subtext "Take the first step towards clarity, healing and alignment." + white-text terracotta "Book Your Session" button

- Right: 3 stat items side by side, each with small icon, big serif number, small label: "500+ Happy Clients", "5+ Years Experience", "100% Positive Feedback"

7. FOOTER

- Logo mark + wordmark on left

- Nav links repeated in a row

- Social icons (Instagram, Facebook, YouTube) as circular outlined buttons that fill terracotta on hover

- Centered italic tagline at the very bottom: "Let the universe guide you ✦"

ANIMATIONS (Framer Motion — premium, not generic fade-everywhere)

- On page load: a brief intro sequence — logo/compass icon scales+rotates in, wordmark fades up beneath it (~0.8–1s), then fades out to reveal the page

- Navbar slides down and fades in right after intro

- Hero content reveals in a staggered sequence: eyebrow first, then heading line 1, then heading line 2 (script word), then subheading, then description, then buttons — each offset by ~120ms, sliding up + fading in with an easeOut cubic-bezier(0.16,1,0.3,1)

- Hero image scales in from 0.94 to 1 with a slight slide from the right, slightly delayed after the text starts

- All below-the-fold sections (services grid, about panel, why-choose panel, CTA band) use scroll-triggered whileInView fade-up animation, once only, with services cards staggering in one after another (~90ms apart)

- Stats in the CTA band fade/slide up staggered when scrolled into view

- Buttons: icon arrow shifts right on hover, subtle lift + shadow increase on primary button hover

- Respect prefers-reduced-motion (disable animations if set)

- Do NOT add fade-and-slide-up to every single element indiscriminately — keep the load sequence as the one orchestrated "wow" moment, and keep hover/scroll effects purposeful and restrained

RESPONSIVE

- Fully responsive down to mobile (matches a mobile-first stacked layout: full-width hero image, single-column service grid becoming 2-column, stacked about/why panels with image above text, stacked CTA band)

Use placeholder gradient/color boxes wherever real photography would go (hero image, about image, why-choose image) — I'll swap them with real images afterward. Don't use stock photo URLs.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e9cd654e-e5f3-41e2-a32d-2ba2c83cd51d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

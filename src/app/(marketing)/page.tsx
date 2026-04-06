import PricingSection from "@/components/PricingSection";
import WaitlistForm from "@/components/WaitlistForm";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="hero">
        <div className="container">
          <div className="hero-tag">AI That Writes Workouts, Not Just Adjusts Them</div>
          <h1 className="hero-title">
            Stop overthinking.
            <br />
            <em>Start training.</em>
          </h1>
          <p className="hero-sub">
            Most fitness apps adapt the same templates. Coach Potato generates
            your workout from scratch — built for your goals, equipment, and
            schedule. Every plan is new.
          </p>
          <WaitlistForm id="waitlist" />
          <div className="hero-actions" style={{ marginTop: "16px" }}>
            <a href="#how" className="btn-ghost">
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────── */}
      <section id="how" className="site-section">
        <div className="container">
          <p className="section-label">How it works</p>
          <h2 className="section-title">From zero to workout in three steps</h2>
          <p className="section-sub">
            No lengthy setup. No complicated programmes. Just tell Coach Potato
            what you need and it does the rest.
          </p>

          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <h3>Tell us about yourself</h3>
              <p>
                Set your fitness level, available equipment, and how long you
                have. Simple mode gets you started in seconds; advanced mode
                gives you full control.
              </p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <h3>AI builds your plan</h3>
              <p>
                Our AI writes a complete, structured workout from scratch — not
                selected from a database, not adapted from a template. Every
                exercise, set, and rest period is chosen specifically for your
                session.
              </p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <h3>Train and progress</h3>
              <p>
                Follow along, track your sessions, and watch the workouts adapt
                as you improve. Every generation brings a fresh, optimised plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────── */}
      <section id="features" className="site-section">
        <div className="container">
          <p className="section-label">Features</p>
          <h2 className="section-title">Everything you need, nothing you don&apos;t</h2>
          <p className="section-sub">
            Built for people who want to train well without spending their day
            planning it.
          </p>

          <ul className="features-list" role="list">
            <li className="feature-row">
              <div className="feature-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M3 17c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </div>
              <div className="feature-body">
                <h3>Personalised workout plans</h3>
                <p>
                  Other apps pick exercises from a list and adjust the weights.
                  Coach Potato writes your entire programme from scratch —
                  structure, progression, and exercise selection — all generated
                  for your specific session.
                </p>
              </div>
            </li>

            <li className="feature-row">
              <div className="feature-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="5" width="16" height="10" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M7 10h6M10 7v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </div>
              <div className="feature-body">
                <h3>Simple &amp; advanced modes</h3>
                <p>
                  Quick plan for a quick session, or full advanced controls for
                  serious athletes. Dial in intensity, volume, rest times, and
                  muscle focus — only when you want to.
                </p>
              </div>
            </li>

            <li className="feature-row">
              <div className="feature-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="feature-body">
                <h3>Full week planning</h3>
                <p>
                  Generate a structured week of workouts in one tap, complete
                  with built-in rest days and a sensible progression from session
                  to session.
                </p>
              </div>
            </li>

            <li className="feature-row">
              <div className="feature-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 10h2.5M13.5 10H16M4 10a6 6 0 1 0 12 0A6 6 0 0 0 4 10Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M10 4v2.5M10 13.5V16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </div>
              <div className="feature-body">
                <h3>Equipment-aware generation</h3>
                <p>
                  Whether you&apos;re in a fully equipped gym or your living room,
                  Coach Potato only suggests exercises you can actually do. No
                  wasted slots, no substitution guesswork.
                </p>
              </div>
            </li>

            <li className="feature-row">
              <div className="feature-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 15l4-4 3 3 4-5 3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="feature-body">
                <h3>Session tracking</h3>
                <p>
                  Log your sessions as you go. Track consistency, see completed
                  workouts, and build the habit that actually sticks.
                </p>
              </div>
            </li>

            <li className="feature-row">
              <div className="feature-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3l1.8 5.4H17l-4.6 3.3 1.8 5.4L10 14l-4.2 3.1 1.8-5.4L3 8.4h5.2L10 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="feature-body">
                <h3>Multiple themes</h3>
                <p>
                  Coffee Dark, Coffee Light, Violet Dark, Violet Light — the app
                  looks as good as the workout feels. Pick the theme that suits
                  your training aesthetic.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* ── Use Cases ─────────────────────────────────────── */}
      <section className="site-section">
        <div className="container">
          <p className="section-label">Who it&apos;s for</p>
          <h2 className="section-title">Built for every kind of trainer</h2>
          <p className="section-sub">
            Wherever you train, whatever you have available — Coach Potato
            adapts to fit your life.
          </p>

          <div className="use-cases-grid">
            <div className="use-case">
              <div className="use-case-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 21V14a7 7 0 1 1 14 0v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M4 21h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Home warriors</h3>
              <p>
                No gym, no problem. Tell Coach Potato you have a mat and 30
                minutes — it builds a full bodyweight session that actually
                challenges you.
              </p>
            </div>

            <div className="use-case">
              <div className="use-case-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="11" width="4" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
                  <rect x="21" y="11" width="4" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M7 15h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M11 9v12M17 9v12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Gym regulars</h3>
              <p>
                Barbell, cables, machines, dumbbells — Coach Potato programmes
                intelligently around your full kit, keeping things fresh every
                session.
              </p>
            </div>

            <div className="use-case">
              <div className="use-case-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M14 8v6l3.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Busy people</h3>
              <p>
                15-minute express sessions or full hour programmes — your
                schedule drives the plan. Stop letting time pressure kill your
                training consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ───────────────────────────────────────── */}
      <PricingSection />

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section id="faq" className="site-section">
        <div className="container">
          <p className="section-label">FAQ</p>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Common questions
          </h2>

          <dl className="faq-list">
            <details>
              <summary>Is Coach Potato free to use?</summary>
              <div className="faq-answer">
                Yes. The free tier gives you 5 workout generations per month
                with no credit card required. You can use it indefinitely on the
                free plan, and upgrade to Pro whenever you want more.
              </div>
            </details>

            <details>
              <summary>What equipment does it support?</summary>
              <div className="faq-answer">
                Bodyweight, dumbbells, barbells, cables, resistance bands,
                kettlebells, machines, and more. You tell Coach Potato exactly
                what you have access to and it builds around that.
              </div>
            </details>

            <details>
              <summary>Can I customise workout intensity?</summary>
              <div className="faq-answer">
                In advanced mode you can set exact intensity, volume, rest
                times, session duration, and muscle focus. Simple mode handles
                all of this automatically based on your fitness level.
              </div>
            </details>

            <details>
              <summary>Does it work on iOS and Android?</summary>
              <div className="faq-answer">
                Yes. Coach Potato is a cross-platform mobile app built with
                React Native, available on both iOS and Android.
              </div>
            </details>

            <details>
              <summary>How long does it take to generate a workout?</summary>
              <div className="faq-answer">
                Typically under 5 seconds. You tap generate, the AI does its
                work, and your plan is ready.
              </div>
            </details>

            <details>
              <summary>Can I regenerate if I don&apos;t like a plan?</summary>
              <div className="faq-answer">
                Absolutely — just tap regenerate and get a completely fresh
                plan instantly. Each generation is independent, so you&apos;ll never
                get the exact same workout twice.
              </div>
            </details>

            <details>
              <summary>Does it track my progress over time?</summary>
              <div className="faq-answer">
                Session tracking is available so you can log completed workouts
                and see your consistency. Long-term progress analytics are on
                the roadmap for a future update.
              </div>
            </details>

            <details>
              <summary>Can I save favourite workouts?</summary>
              <div className="faq-answer">
                Yes — you can save any generated workout to your library and
                come back to it any time. Great for sessions you want to repeat.
              </div>
            </details>
          </dl>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────── */}
      <section className="site-section">
        <div className="container">
          <div className="about-block">
            <p className="section-label">The story</p>
            <h2 className="section-title">Built by a coach, not a startup</h2>
            <div className="about-body">
              <p>
                Coach Potato was built by a{" "}
                <strong>CrossFit Level 1 Trainer</strong> with a background
                spanning{" "}
                <strong>
                  calisthenics, gymnastics, judo, boxing, Muay Thai, kickboxing,
                  and grappling
                </strong>
                . Years of training across disciplines — and working with
                coaches in each — revealed a pattern: great programming follows
                the same principles regardless of the sport, but no app was
                applying them properly.
              </p>
              <p style={{ marginTop: "16px" }}>
                The generation engine behind Coach Potato is informed by{" "}
                <strong>evidence-based sports science</strong> and refined
                through testing with{" "}
                <strong>competitive athletes</strong> across combat sports,
                functional fitness, and strength training. Every workout follows
                a structured approach — warm-up, preparation, main work,
                conditioning — because that is how real coaches programme. The
                result is an app that generates workouts with the thought and
                structure of a trained coach, not just an algorithm shuffling
                exercises.
              </p>
            </div>
            <div className="about-credentials">
              <span>CrossFit Trainer</span>
              <span>Calisthenics &amp; Gymnastics</span>
              <span>Combat Sports</span>
              <span>Sports Science</span>
              <span>Athlete-Tested</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────── */}
      <section className="site-section">
        <div className="container">
          <div className="cta-banner">
            <p className="section-label">Get started</p>
            <h2 className="section-title">Ready to train smarter?</h2>
            <p className="section-sub">
              Be the first to know when Coach Potato launches. Join the
              waitlist — no spam, just a launch notification.
            </p>
            <WaitlistForm />
          </div>
        </div>
      </section>
    </>
  );
}

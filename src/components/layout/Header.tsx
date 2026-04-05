"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className={`site-nav${scrolled ? " scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="/" className="nav-logo">
          Coach Potato
        </a>

        <nav className="nav-links" aria-label="Site navigation">
          <a href="#how">How it works</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="nav-cta">
          <a
            href={process.env.NEXT_PUBLIC_APP_URL || "#"}
            className="btn-primary"
          >
            Get the App
          </a>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useState } from "react";

const tiers = [
  {
    name: "Free",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description:
      "Get started with no commitment. Perfect for trying Coach Potato.",
    features: [
      "5 workout generations per month",
      "Standard Coffee Dark theme",
      "Session logging",
    ],
    cta: "Get started free",
    featured: false,
  },
  {
    name: "Pro",
    monthlyPrice: 18,
    yearlyPrice: 9,
    description:
      "For anyone who trains seriously and wants their plans to match.",
    features: [
      "Unlimited workout generations",
      "All 4 themes",
      "Full week planning",
      "Session tracking & history",
    ],
    cta: "Start Pro",
    featured: true,
  },
  {
    name: "Pro Athlete",
    monthlyPrice: 28,
    yearlyPrice: 14,
    description:
      "Everything in Pro with priority generation and dedicated support.",
    features: [
      "Everything in Pro",
      "Priority generation queue",
      "Priority support",
    ],
    cta: "Go Pro Athlete",
    featured: false,
  },
];

export default function PricingSection() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="site-section">
      <div className="container">
        <p className="section-label">Pricing</p>
        <h2 className="section-title">
          Start free, upgrade when you&apos;re ready
        </h2>
        <p className="section-sub">
          The core workout generator is free forever. Upgrade to Pro or Pro
          Athlete to unlock the full experience.
        </p>

        <div className="pricing-toggle">
          <div className="pricing-toggle-inner">
            <button
              className={!yearly ? "active" : ""}
              onClick={() => setYearly(false)}
            >
              Monthly
            </button>
            <button
              className={yearly ? "active" : ""}
              onClick={() => setYearly(true)}
            >
              Yearly (Save 50%)
            </button>
          </div>
        </div>

        <div className="pricing-grid">
          {tiers.map((tier) => {
            const price = yearly ? tier.yearlyPrice : tier.monthlyPrice;
            return (
              <div
                key={tier.name}
                className={`pricing-card${tier.featured ? " featured" : ""}`}
              >
                <p className="pricing-tier">{tier.name}</p>
                <p className="pricing-price">
                  ${price}
                  <span> / month</span>
                </p>
                <p className="pricing-desc">{tier.description}</p>
                <ul className="pricing-features">
                  {tier.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a href="#waitlist" className="pricing-btn">
                  {tier.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

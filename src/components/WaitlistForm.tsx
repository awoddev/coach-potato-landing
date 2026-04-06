"use client";

import { useRef, useState } from "react";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

function getSupabase(): SupabaseClient | null {
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY
  )
    return null;
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY
  );
}

export default function WaitlistForm({ id }: { id?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const supabaseRef = useRef<SupabaseClient | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!supabaseRef.current) supabaseRef.current = getSupabase();
    if (!email || !supabaseRef.current) return;
    const supabase = supabaseRef.current;

    setStatus("loading");
    const { error } = await supabase
      .from("waitlist")
      .insert({ email: email.trim().toLowerCase() });

    if (error) {
      if (error.code === "23505") {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } else {
      setStatus("success");
    }
    setEmail("");
  }

  return (
    <form id={id} className="waitlist-form" onSubmit={handleSubmit}>
      {status === "success" ? (
        <p className="waitlist-msg success">
          You&apos;re on the list! We&apos;ll let you know when Coach Potato launches.
        </p>
      ) : (
        <>
          <div className="waitlist-input-group">
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
              className="waitlist-input"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary"
            >
              {status === "loading" ? "Joining..." : "Join the waitlist"}
            </button>
          </div>
          {status === "error" && (
            <p className="waitlist-msg error">
              Something went wrong. Please try again.
            </p>
          )}
          <p className="waitlist-note">No spam, just a launch notification.</p>
        </>
      )}
    </form>
  );
}

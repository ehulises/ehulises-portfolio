"use client";

import { FormEvent, useState } from "react";

const emailTarget = "ehulisesrodriguez@gmail.com";

export default function MailComposer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Portfolio inquiry");
  const [message, setMessage] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const lines = [
      name ? `Name: ${name}` : "",
      email ? `Email: ${email}` : "",
      "",
      message,
    ].filter(Boolean);

    const mailto = `mailto:${emailTarget}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;

    window.location.href = mailto;
  };

  return (
    <form className="mail-widget reveal" onSubmit={onSubmit}>
      <div className="kicker">Send an Email</div>
      <h2 className="section-title">Write from the site, send from your email app.</h2>
      <p className="hero-subtitle">
        This opens your default mail app with everything prefilled, so it works without a backend.
      </p>
      <div className="mail-grid">
        <label className="mail-field">
          <span>Name</span>
          <input value={name} onChange={(event) => setName(event.target.value)} type="text" />
        </label>
        <label className="mail-field">
          <span>Email</span>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="your@email.com"
          />
        </label>
      </div>
      <label className="mail-field">
        <span>Subject</span>
        <input value={subject} onChange={(event) => setSubject(event.target.value)} type="text" />
      </label>
      <label className="mail-field">
        <span>Message</span>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={6}
          placeholder="Hi Ehulises, I wanted to reach out about..."
        />
      </label>
      <div className="hero-actions">
        <button className="button primary" type="submit">
          Open Email Draft
        </button>
      </div>
    </form>
  );
}

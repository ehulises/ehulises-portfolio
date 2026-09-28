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

    const lines = [name ? `Name: ${name}` : "", email ? `Email: ${email}` : "", "", message].filter(
      Boolean
    );

    const mailto = `mailto:${emailTarget}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;

    window.location.href = mailto;
  };

  return (
    <form className="mail-form" onSubmit={onSubmit} aria-labelledby="mail-form-title">
      <h2 className="h3" id="mail-form-title">
        Write a message
      </h2>
      <p className="mail-form__hint">Opens your email app with everything filled in.</p>
      <div className="mail-form__row">
        <label className="field">
          <span>Name</span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            autoComplete="name"
          />
        </label>
        <label className="field">
          <span>Email</span>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
          />
        </label>
      </div>
      <label className="field">
        <span>Subject</span>
        <input value={subject} onChange={(event) => setSubject(event.target.value)} type="text" />
      </label>
      <label className="field">
        <span>Message</span>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={6}
          placeholder="Hi Ehulises, I wanted to reach out about…"
        />
      </label>
      <div>
        <button className="btn btn--primary" type="submit">
          Open email draft
        </button>
      </div>
    </form>
  );
}

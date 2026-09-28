import type { Metadata } from "next";
import MailComposer from "../components/MailComposer";
import PageIntro from "../components/PageIntro";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Ehulises Rodriguez, Jr.",
};

const contactDetails = [
  { label: "Email", value: "ehulisesrodriguez@gmail.com", href: "mailto:ehulisesrodriguez@gmail.com" },
  { label: "Phone", value: "(832) 812-7022", href: "tel:+18328127022" },
  { label: "LinkedIn", value: "linkedin.com/in/ehulises", href: "https://www.linkedin.com/in/ehulises/" },
  { label: "Location", value: "Houston, Texas · open to remote or relocation" },
];

export default function Contact() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Let’s talk about the problem you’re solving."
        lede="I’m most useful where product decisions and technical execution have to meet: 0 → 1 products, payments and commerce, platforms, and anything that has to work in production. Happy to share more detail or references."
      />

      <section className="section section--gray" aria-label="Contact details and message">
        <div className="container split split--even">
          <div>
            <h2 className="h3">Reach me directly</h2>
            <dl className="contact-list">
              {contactDetails.map((item) => (
                <div className="contact-list__row" key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <h2 className="h3 contact-fit__title">Best fit</h2>
            <p>
              Product Manager and Technical Product Manager roles: product development, platform
              and workflow systems, commerce and payments, and cross-functional execution. I do my
              best work with teams that value clear thinking, quick iteration, and people who move
              comfortably between strategy and implementation.
            </p>
          </div>
          <MailComposer />
        </div>
      </section>
    </>
  );
}

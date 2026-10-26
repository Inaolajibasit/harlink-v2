import { Plus } from "lucide-react";
import { exportFAQs } from "../../content/home";
import { ActionLink } from "../site/action-link";
import { Reveal } from "../site/reveal";

export function ExportQuestions() {
  return (
    <section
      id="questions"
      className="hl-section hl-questions"
      aria-labelledby="questions-heading"
    >
      <div className="hl-container hl-faq-grid">
        <Reveal className="hl-faq-intro">
          <div className="hl-section-label">
            <span className="hl-section-index">05 /</span>
            <span className="hl-eyebrow">Useful to know</span>
          </div>
          <h2 id="questions-heading" className="hl-heading">
            Before your
            <br />
            next export.
          </h2>
          <p className="hl-body">
            A little clarity goes a long way.
            <br />
            Here are a few places to start.
          </p>
          <ActionLink href="/contact" variant="text">
            Have a different question?
          </ActionLink>
        </Reveal>
        <div className="hl-faq-list">
          {exportFAQs.map((item, i) => (
            <details className="hl-faq" key={item.question} open={i === 0}>
              <summary>
                <h3>{item.question}</h3>
                <Plus size={19} strokeWidth={1.5} aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

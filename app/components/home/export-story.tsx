import Image from "next/image";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { exportSteps } from "../../content/home";
import { ActionLink } from "../site/action-link";
import { Reveal } from "../site/reveal";

export function CompanyIntroduction() {
  return (
    <section
      id="introduction"
      className="hl-section hl-intro"
      aria-labelledby="intro-heading"
    >
      <div className="hl-container">
        <Reveal className="hl-editorial-grid">
          <div className="hl-section-label">
            <span className="hl-section-index">01 /</span>
            <span className="hl-eyebrow">A clearer way forward</span>
          </div>
          <div>
            <h2 id="intro-heading" className="hl-heading">
              More than moving cargo.
              <br />
              <span className="hl-muted-heading">
                Moving the details forward.
              </span>
            </h2>
            <div className="hl-intro-bottom">
              <p className="hl-body">
                An export depends on paperwork, procedures and people working
                together. Harlink helps businesses coordinate that work, from
                documentation and regulatory processes to the cargo services an
                assignment needs.
              </p>
              <ActionLink href="/about" variant="text">
                Get to know Harlink
              </ActionLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function OperatingModel() {
  return (
    <section className="hl-model" aria-labelledby="model-heading">
      <div className="hl-model-image">
        <Image
          src="/bg-221.jpg"
          alt="Containers and cargo-handling equipment at a terminal"
          fill
          sizes="(min-width: 960px) 46vw, 100vw"
          quality={80}
        />
        <div className="hl-model-image-caption">
          <ArrowUpRight size={32} strokeWidth={1} aria-hidden="true" />
          <span>
            Different moving parts.
            <br />
            One coordinated approach.
          </span>
        </div>
      </div>
      <div className="hl-model-copy">
        <Reveal>
          <div className="hl-section-label">
            <span className="hl-section-index">03 /</span>
            <span className="hl-eyebrow">Connected capabilities</span>
          </div>
          <h2 id="model-heading" className="hl-heading">
            Expertise at the desk.
            <br />
            Support on the ground.
          </h2>
          <p className="hl-body">
            Export agency work sits at the heart of Harlink. Supporting
            transport and storage bring the wider operation together.
          </p>
          <dl className="hl-model-list">
            <div>
              <dt>Agency-led execution</dt>
              <dd>
                Documentation, procedures and practical follow-through within
                your agreed scope.
              </dd>
            </div>
            <div>
              <dt>Company-owned trucks</dt>
              <dd>
                Haulage to support agreed movements of goods and containers.
              </dd>
            </div>
            <div>
              <dt>Partner-arranged storage</dt>
              <dd>
                Warehousing coordinated through partners when your requirement
                calls for it.
              </dd>
            </div>
          </dl>
          <ActionLink href="/contact" variant="outline">
            Talk through your requirements
          </ActionLink>
        </Reveal>
      </div>
    </section>
  );
}

export function ExportProcess() {
  return (
    <section
      id="process"
      className="hl-section hl-process"
      aria-labelledby="process-heading"
    >
      <div className="hl-container">
        <Reveal className="hl-section-top">
          <div className="hl-section-label">
            <span className="hl-section-index">04 /</span>
            <span className="hl-eyebrow">How we work</span>
          </div>
          <div className="hl-section-heading-row">
            <h2 id="process-heading" className="hl-heading">
              A clear conversation.
              <br />A coordinated next step.
            </h2>
            <p className="hl-body">
              Every export has its own requirements. We start by understanding
              yours.
            </p>
          </div>
        </Reveal>
        <ol className="hl-process-grid">
          {exportSteps.map((step, i) => (
            <li key={step.title}>
              <span
                className="hl-step-progress"
                data-step-progress
                aria-hidden="true"
              />
              <div className="hl-process-number">
                <span>0{i + 1}</span>
                <ArrowDownRight
                  size={24}
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
        <p className="hl-process-note">
          The sequence and services depend on your commodity, destination and
          agreed scope.
        </p>
      </div>
    </section>
  );
}

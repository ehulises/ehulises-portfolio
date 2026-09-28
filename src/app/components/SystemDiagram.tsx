import type { Diagram } from "../data/caseStudies";

export default function SystemDiagram({ diagram }: { diagram: Diagram }) {
  return (
    <figure className="diagram">
      <ol className="diagram__stages" data-count={diagram.stages.length}>
        {diagram.stages.map((stage, index) => (
          <li className="diagram__stage" key={stage.label}>
            <span className="diagram__step">{String(index + 1).padStart(2, "0")}</span>
            <span className="diagram__label">{stage.label}</span>
            <ul className="diagram__items">
              {stage.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      {diagram.foundation ? (
        <div className="diagram__foundation">
          <span className="diagram__label">{diagram.foundation.label}</span>
          <ul className="diagram__chips">
            {diagram.foundation.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <figcaption className="diagram__caption">{diagram.caption}</figcaption>
    </figure>
  );
}

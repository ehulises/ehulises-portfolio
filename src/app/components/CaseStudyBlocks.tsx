import type { Block } from "../data/caseStudies";
import StatRow from "./StatRow";
import SystemDiagram from "./SystemDiagram";

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "text":
      return (
        <>
          {block.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </>
      );
    case "list": {
      const List = block.ordered ? "ol" : "ul";
      return (
        <List className="prose-list">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </List>
      );
    }
    case "callout":
      return (
        <blockquote className="callout">
          {block.label ? <p className="callout__label">{block.label}</p> : null}
          <p>{block.text}</p>
        </blockquote>
      );
    case "stats":
      return <StatRow stats={block.items} className="stat-row--compact" />;
    case "steps":
      return (
        <ol className="steps">
          {block.items.map((step, index) => (
            <li className="steps__item" key={step.title}>
              <span className="steps__index">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="steps__title">{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      );
    case "decisions":
      return (
        <div className="decisions">
          {block.items.map((item) => (
            <div className="decision" key={item.title}>
              <h3 className="decision__title">{item.title}</h3>
              <p>{item.body}</p>
              {item.tradeoff ? (
                <p className="decision__tradeoff">
                  <span>Tradeoff</span> {item.tradeoff}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      );
    case "people":
      return (
        <ul className="people">
          {block.items.map((person) => (
            <li className="people__item" key={person.title}>
              <h3 className="people__title">{person.title}</h3>
              <p>{person.body}</p>
            </li>
          ))}
        </ul>
      );
    case "diagram":
      return <SystemDiagram diagram={block.diagram} />;
  }
}

export default function CaseStudyBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, index) => (
        <BlockView block={block} key={`${block.type}-${index}`} />
      ))}
    </>
  );
}

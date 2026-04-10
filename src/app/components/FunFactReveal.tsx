type FunFact = {
  emoji: string;
  label: string;
  fact: string;
};

type Props = {
  facts: FunFact[];
};

export default function FunFactReveal({ facts }: Props) {
  return (
    <div className="fun-fact-grid">
      {facts.map((fact) => (
        <div key={`${fact.label}-${fact.fact}`} className="fact-card reveal">
          <span className="fact-card-emoji">{fact.emoji}</span>
          <span className="fact-card-label">{fact.label}</span>
          <span className="fact-card-answer">{fact.fact}</span>
        </div>
      ))}
    </div>
  );
}

import type { Stat } from "../data/caseStudies";

type Props = {
  stats: Stat[];
  className?: string;
};

export default function StatRow({ stats, className }: Props) {
  return (
    <dl className={["stat-row", className].filter(Boolean).join(" ")} data-count={stats.length}>
      {stats.map((stat) => (
        <div className="stat" key={stat.label}>
          <dt className="stat__label">{stat.label}</dt>
          <dd className="stat__value">{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}

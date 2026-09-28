type Props = {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  children?: React.ReactNode;
};

export default function PageIntro({ eyebrow, title, lede, children }: Props) {
  return (
    <header className="page-intro container intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="h1">{title}</h1>
      {lede ? <p className="lede">{lede}</p> : null}
      {children}
    </header>
  );
}

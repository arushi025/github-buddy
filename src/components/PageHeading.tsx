const PageHeading = ({ emoji, title, subtitle }: { emoji: string; title: string; subtitle?: string }) => (
  <div className="mb-10">
    <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary text-glow flex items-center gap-3">
      <span className="text-4xl">{emoji}</span> {title}
    </h1>
    {subtitle && <p className="text-muted-foreground mt-3 text-lg">{subtitle}</p>}
    <div className="h-1 w-24 bg-primary rounded-full mt-4 opacity-60" />
  </div>
);

export default PageHeading;

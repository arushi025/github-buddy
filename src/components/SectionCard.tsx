const SectionCard = ({ title, children }: { title?: string; children: React.ReactNode }) => (
  <div className="bg-card border border-border rounded-lg p-6 my-6">
    {title && <h3 className="font-heading text-lg font-semibold text-primary text-glow-sm mb-3">{title}</h3>}
    <div className="text-muted-foreground leading-relaxed space-y-2">{children}</div>
  </div>
);

export default SectionCard;

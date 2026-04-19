const communes = [
  "Anderlecht", "Auderghem", "Berchem-Sainte-Agathe", "Bruxelles-Ville",
  "Etterbeek", "Evere", "Forest", "Ganshoren", "Ixelles", "Jette",
  "Koekelberg", "Molenbeek-Saint-Jean", "Saint-Gilles", "Saint-Josse-ten-Noode",
  "Schaerbeek", "Uccle", "Watermael-Boitsfort", "Woluwe-Saint-Lambert", "Woluwe-Saint-Pierre",
];

const extra = ["Zaventem", "Machelen", "Kortenberg", "Steenokkerzeel"];

const CoverageSection = () => (
  <section className="py-20 bg-card">
    <div className="max-w-6xl mx-auto px-5">
      <div className="grid md:grid-cols-[1fr_2fr] gap-12">
        <div>
          <h2 className="text-3xl text-foreground mb-3">Zone d'intervention</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Nous intervenons dans toute la Région de Bruxelles-Capitale et ses alentours.
          </p>
          <div className="mt-6">
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Également</p>
            <p className="text-sm text-foreground">{extra.join(" · ")}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {communes.map((c) => (
            <span key={c} className="px-3 py-1.5 border border-border rounded text-sm text-foreground">
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CoverageSection;

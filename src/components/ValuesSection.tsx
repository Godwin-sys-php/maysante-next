const values = [
  { title: "Proximité", desc: "Présents dans toutes les communes de Bruxelles et périphérie pour un service de proximité." },
  { title: "Respect", desc: "Chaque patient est unique. Nous respectons vos besoins, vos valeurs et votre rythme." },
  { title: "Bienveillance", desc: "Une approche humaine et chaleureuse qui vous accompagne avec douceur." },
];

const ValuesSection = () => (
  <section className="py-20">
    <div className="max-w-6xl mx-auto px-5">
      <div className="mb-12">
        <h2 className="text-3xl text-foreground mb-3">Nos valeurs</h2>
        <p className="text-muted-foreground max-w-lg">
          Les meilleurs soins sont ceux prodigués avec humanité.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {values.map((v, i) => (
          <div key={v.title}>
            <span className="text-5xl font-light text-border">0{i + 1}</span>
            <h3 className="text-lg font-semibold text-foreground mt-3 mb-2">{v.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mt-12 pt-8 border-t border-border">
        {["Prise en charge personnalisée", "Coordination avec votre médecin", "Disponibilité 7j/7"].map((p) => (
          <span key={p} className="text-sm text-muted-foreground">
            ✓ {p}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default ValuesSection;

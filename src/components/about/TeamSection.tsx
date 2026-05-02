const TEAM = [
  { name: "Jordan Wells", title: "Founder & Lead Credit Strategist", initials: "JW" },
  { name: "Maya Chen", title: "Business Credit Specialist", initials: "MC" },
  { name: "Derek Thompson", title: "Funding Advisor", initials: "DT" },
];

export function TeamSection() {
  return (
    <div className="mt-16">
      <h3 className="mb-8 text-center text-2xl font-bold">Meet the Team</h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {TEAM.map((member) => (
          <div key={member.name} className="flex flex-col items-center rounded-lg border border-brand-charcoal-3 bg-brand-charcoal-2 p-8 text-center">
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand-gold/20">
              <span className="font-heading text-2xl font-bold text-brand-gold">{member.initials}</span>
            </div>
            <h4 className="mb-1 font-bold text-brand-cream">{member.name}</h4>
            <p className="text-sm text-brand-cream-muted">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

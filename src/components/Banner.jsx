const Banner = ({ totalCount, inProgressCount, resolvedCount }) => {
  return (
    <section
      className="relative overflow-hidden border-b border-base-300 py-16 px-6 md:px-10"
      style={{ background: "linear-gradient(135deg, #0d1b4a 0%, #071530 50%, #0a0c14 100%)" }}
    >
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary opacity-10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-10 w-80 h-80 rounded-full bg-secondary opacity-10 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-8">

        {/* ── Heading ── */}
        <div>
          <h1 className="font-syne font-extrabold text-4xl md:text-5xl leading-tight mb-3">
            Customer{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Support Zone
            </span>
          </h1>
          <p className="text-base-content/50 max-w-lg text-sm leading-relaxed">
            Track, manage, and resolve customer issues with precision.
            Click any ticket card to start working on it.
          </p>
        </div>

        {/* ── Stat cards ── */}
        <div className="flex flex-wrap gap-4">
          {[
            { label: "Total Tickets",  value: totalCount,      color: "text-base-content/60" },
            { label: "In Progress",    value: inProgressCount, color: "text-warning" },
            { label: "Resolved",       value: resolvedCount,   color: "text-secondary" },
          ].map(({ label, value, color }) => (
            <div key={label} className="card bg-white/5 border border-base-300 backdrop-blur-sm">
              <div className="card-body items-center text-center py-5 px-8 gap-1">
                <span className={`font-syne font-extrabold text-4xl ${color}`}>{value}</span>
                <span className="text-[11px] text-base-content/40 uppercase tracking-widest font-medium">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Banner;

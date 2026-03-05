const LINKS = {
  Product:  ["Dashboard", "Tickets", "Analytics", "Reports"],
  Company:  ["About Us", "Careers", "Blog", "Press"],
  Support:  ["Help Center", "Documentation", "Status", "Contact"],
};

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-base-300 mt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* ── Top grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-b border-base-300">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-sm">
                🎧
              </div>
              <span className="font-syne font-extrabold text-lg text-base-content">
                Support<span className="text-primary">Zone</span>
              </span>
            </div>
            <p className="text-xs text-base-content/40 leading-relaxed max-w-[220px]">
              A modern customer support platform helping teams track, manage,
              and resolve issues faster.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading}>
              <h3 className="font-syne font-bold text-xs uppercase tracking-widest text-base-content/60 mb-4">
                {heading}
              </h3>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="link link-hover text-sm text-base-content/50 hover:text-primary">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-wrap justify-between items-center py-5 gap-4">
          <p className="text-xs text-base-content/30">
            © 2026 SupportZone. All rights reserved.
          </p>
          <div className="flex gap-2">
            {["𝕏", "gh", "in", "dc"].map((icon) => (
              <a key={icon} href="#"
                className="btn btn-ghost btn-xs btn-circle border border-base-300
                           text-base-content/40 hover:text-primary hover:border-primary text-[10px] font-bold">
                {icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

const Navbar = ({ onNewTicket }) => {
  return (
    <div className="navbar sticky top-0 z-50 bg-base-100/90 backdrop-blur-lg border-b border-base-300 px-6 md:px-10 min-h-[68px]">

      {/* ── Logo ── */}
      <div className="navbar-start">
        <a href="#" className="flex items-center gap-2 no-underline">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-base shadow-lg shadow-primary/30">
            🎧
          </div>
          <span className="font-syne font-extrabold text-xl text-base-content">
            Support<span className="text-primary">Zone</span>
          </span>
        </a>
      </div>

      {/* ── Desktop nav links ── */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1">
          {["Dashboard", "Tickets", "Reports", "Team"].map((item) => (
            <li key={item}>
              <a className="text-base-content/60 hover:text-base-content text-sm font-medium">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Right side ── */}
      <div className="navbar-end gap-3">
        {/* Mobile hamburger */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-sm btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0}
            className="menu dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-200 rounded-box w-44 border border-base-300">
            {["Dashboard", "Tickets", "Reports", "Team"].map((item) => (
              <li key={item}><a>{item}</a></li>
            ))}
          </ul>
        </div>

        <button
          className="btn btn-primary btn-sm font-syne font-bold shadow-lg shadow-primary/30 gap-1"
          onClick={onNewTicket}
        >
          <span className="text-base leading-none">+</span> New Ticket
        </button>
      </div>
    </div>
  );
};

export default Navbar;

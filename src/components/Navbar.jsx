const Navbar = ({ onNewTicket }) => {
    return (
        <div className="navbar bg-white border-b border-gray-200 px-6 md:px-10 min-h-16 ">
            {/* Logo */}
            <div className="navbar-start">
                <span className="font-bold text-xl text-gray-900 tracking-tight">
                    CS — Ticket System
                </span>
            </div>

            {/* Desktop links */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-1 px-0">
                    {["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"].map((item) => (
                        <li key={item}>
                            <a className="text-gray-600 hover:text-gray-900 text-sm font-medium bg-transparent hover:bg-transparent px-3">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right — New Ticket button */}
            <div className="navbar-end gap-3">
                {/* Mobile menu */}
                <div className="dropdown dropdown-end lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost btn-sm btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0}
                        className="menu dropdown-content mt-3 z-1 p-2 shadow bg-white rounded-box w-44 border border-gray-200">
                        {["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"].map((item) => (
                            <li key={item}><a>{item}</a></li>
                        ))}
                    </ul>
                </div>

                <button
                    onClick={onNewTicket}
                    className="btn btn-sm text-white font-semibold px-4 border-0"
                    style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)" }}
                >
                    + &nbsp;New Ticket
                </button>
            </div>
        </div>
    );
};

export default Navbar;

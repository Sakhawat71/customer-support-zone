const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-16">
            <div className=" mx-auto px-6 md:px-10 py-12">

                {/* Top grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 pb-10 border-b border-gray-700">

                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <h3 className="font-bold text-lg mb-3">CS — Ticket System</h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book.
                        </p>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Company</h4>
                        <ul className="flex flex-col gap-2">
                            {["About Us", "Our Mission", "Contact Sales"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Services</h4>
                        <ul className="flex flex-col gap-2">
                            {["Products & Services", "Customer Stories", "Download Apps"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Information</h4>
                        <ul className="flex flex-col gap-2">
                            {["Privacy Policy", "Terms & Conditions", "Join Us"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}

                    <div>
                        <h4 className="font-semibold text-white mb-4">Social Links</h4>
                        <ul className="flex flex-col gap-2">
                            {[
                                { icon: "𝕏", label: "@CS — Ticket System" },
                                { icon: "in", label: "@CS — Ticket System" },
                                { icon: "f", label: "@CS — Ticket System" },
                                { icon: "✉", label: "support@cst.com" },
                            ].map(({ icon, label }) => (
                                <li key={label}>
                                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2">
                                        <span className="w-5 text-center font-bold text-white">{icon}</span>
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>

            {/* Bottom copyright */}
            <div className="border-t border-gray-700 py-4 text-center">
                <p className="text-gray-500 text-sm">© 2025 CS — Ticket System. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

const Banner = ({ inProgressCount, resolvedCount }) => {
    return (
        <section className="bg-gray-100 px-6 md:px-10 py-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* In-Progress card — purple gradient */}
                <div
                    className="rounded-2xl p-10 flex flex-col items-center justify-center text-white relative overflow-hidden min-h-42.5"
                    style={{ background: "linear-gradient(135deg, #7c3aed 0%, #5b21b6 50%, #4c1d95 100%)" }}
                >
                    {/* Decorative wave lines */}
                    <div className="absolute inset-0 opacity-20">
                        {[...Array(8)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute border border-white/40 rounded-full"
                                style={{
                                    width: `${120 + i * 40}px`,
                                    height: `${120 + i * 40}px`,
                                    top: "50%", left: "50%",
                                    transform: "translate(-50%, -50%)",
                                }}
                            />
                        ))}
                    </div>
                    <p className="text-lg font-medium mb-2 relative z-10">In-Progress</p>
                    <p className="text-6xl font-bold relative z-10">{inProgressCount}</p>
                </div>

                {/* Resolved card — green gradient */}
                <div
                    className="rounded-2xl p-10 flex flex-col items-center justify-center text-white relative overflow-hidden min-h-42.5"
                    style={{ background: "linear-gradient(135deg, #059669 0%, #047857 50%, #065f46 100%)" }}
                >
                    <div className="absolute inset-0 opacity-20">
                        {[...Array(8)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute border border-white/40 rounded-full"
                                style={{
                                    width: `${120 + i * 40}px`,
                                    height: `${120 + i * 40}px`,
                                    top: "50%", left: "50%",
                                    transform: "translate(-50%, -50%)",
                                }}
                            />
                        ))}
                    </div>
                    <p className="text-lg font-medium mb-2 relative z-10">Resolved</p>
                    <p className="text-6xl font-bold relative z-10">{resolvedCount}</p>
                </div>

            </div>
        </section>
    );
};

export default Banner;

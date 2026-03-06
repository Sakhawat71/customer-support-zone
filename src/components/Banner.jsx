import vector1 from '../assets/vector1.png';
// import vector2 from '../assets/vector2.png';

const Banner = ({ inProgressCount, resolvedCount }) => {
    return (
        <section className="bg-gray-100 px-6 md:px-10 py-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* In-Progress card — purple gradient + vector1 background */}
                <div
                    className="rounded-2xl flex flex-col items-center justify-center text-white relative overflow-hidden min-h-45"
                    style={{ background: "linear-gradient(135deg, #a855f7 0%, #7c3aed 60%, #6d28d9 100%)" }}
                >
                    {/* vector1 image — left side decoration */}
                    <img
                        src={vector1}
                        alt=""
                        className="absolute left-0 bottom-0 h-full object-cover opacity-30 pointer-events-none select-none"
                    />
                    {/* vector1 image — right side decoration (flipped) */}
                    <img
                        src={vector1}
                        alt=""
                        className="absolute right-0 top-0 h-full object-cover opacity-30 pointer-events-none select-none"
                        style={{ transform: "scaleX(-1) scaleY(-1)" }}
                    />

                    <div className="relative z-10 text-center">
                        <p className="text-base font-normal mb-2 text-white/90">In-Progress</p>
                        <p className="text-6xl font-bold">{inProgressCount}</p>
                    </div>
                </div>

                {/* Resolved card — green gradient + vector2 background */}
                <div
                    className="rounded-2xl flex flex-col items-center justify-center text-white relative overflow-hidden min-h-45"
                    style={{ background: "linear-gradient(135deg, #4ade80 0%, #22c55e 40%, #059669 100%)" }}
                >
                    {/* vector2 image — left side decoration */}
                    <img
                        src={vector1}
                        alt=""
                        className="absolute left-0 bottom-0 h-full object-cover opacity-25 pointer-events-none select-none"
                    />
                    {/* vector2 image — right side decoration (flipped) */}
                    <img
                        src={vector1}
                        alt=""
                        className="absolute right-0 top-0 h-full object-cover opacity-25 pointer-events-none select-none"
                        style={{ transform: "scaleX(-1) scaleY(-1)" }}
                    />

                    <div className="relative z-10 text-center">
                        <p className="text-base font-normal mb-2 text-white/90">Resolved</p>
                        <p className="text-6xl font-bold">{resolvedCount}</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Banner;

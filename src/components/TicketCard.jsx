const PRIORITY_STYLES = {
    high: "text-red-500",
    medium: "text-yellow-500",
    low: "text-green-500",
};

const STATUS_BADGE = {
    "open": { label: "Open", cls: "bg-green-100 text-green-700 border border-green-300" },
    "in-progress": { label: "In- Progress", cls: "bg-yellow-100 text-yellow-700 border border-yellow-300" },
};

const TicketCard = ({ ticket, onClick }) => {
    const { label, cls } = STATUS_BADGE[ticket.status] || STATUS_BADGE["open"];

    return (
        <div
            className="bg-white border border-gray-200 rounded-xl p-4 cursor-pointer
                 hover:shadow-md hover:border-gray-300 transition-all duration-200"
            onClick={() => onClick(ticket)}
        >
            {/* Title + Status badge */}
            <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-gray-900 text-sm leading-snug flex-1">
                    {ticket.title}
                </h3>
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap ${cls}`}>
                    {label}
                </span>
            </div>

            {/* Description */}
            <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">
                {ticket.description}
            </p>

            {/* Footer: id + priority + customer + date */}
            <div className="flex items-center gap-3 text-xs text-gray-400 flex-wrap">
                <span className="text-gray-500 font-medium">{ticket.id}</span>

                <span className={`font-bold uppercase text-[11px] ${PRIORITY_STYLES[ticket.priority]}`}>
                    {ticket.priority} priority
                </span>

                <span className="flex-1" />

                <span className="text-gray-500">{ticket.customer}</span>

                <span className="flex items-center gap-1 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {ticket.createdAt}
                </span>
            </div>
        </div>
    );
};

export default TicketCard;

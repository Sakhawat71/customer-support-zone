const AVATAR_COLORS = [
  "bg-primary", "bg-secondary", "bg-error", "bg-warning",
  "bg-purple-500", "bg-orange-500", "bg-cyan-500", "bg-pink-500",
  "bg-emerald-500", "bg-indigo-500", "bg-red-500", "bg-violet-500",
];

const PRIORITY_CONFIG = {
  low:    { badge: "badge-success",  bar: "bg-secondary" },
  medium: { badge: "badge-warning",  bar: "bg-warning"   },
  high:   { badge: "badge-error",    bar: "bg-error"     },
};

const getInitials = (name) =>
  name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();

const TicketCard = ({ ticket, index, onClick }) => {
  const { badge, bar } = PRIORITY_CONFIG[ticket.priority];

  return (
    <div
      className="card bg-base-200 border border-base-300 cursor-pointer relative overflow-hidden
                 transition-all duration-200
                 hover:border-primary hover:bg-base-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
      onClick={() => onClick(ticket)}
      title="Click to add to In Progress"
    >
      {/* Priority colour bar on the left */}
      <div className={`absolute top-0 left-0 w-1 h-full ${bar} rounded-l-2xl`} />

      <div className="card-body p-4 gap-2 pl-5">

        {/* ID + Priority badge */}
        <div className="flex justify-between items-start">
          <span className="text-[11px] text-base-content/30 font-semibold tracking-wider">
            {ticket.id}
          </span>
          <span className={`badge badge-sm ${badge} badge-outline font-bold uppercase tracking-wider text-[10px]`}>
            {ticket.priority}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-syne font-bold text-sm leading-snug">{ticket.title}</h3>

        {/* Description */}
        <p className="text-xs text-base-content/50 leading-relaxed line-clamp-2">
          {ticket.description}
        </p>

        {/* Footer: avatar + customer name + date */}
        <div className="flex justify-between items-center mt-1">
          <div className="flex items-center gap-2">
            <div className="avatar placeholder">
              <div className={`${AVATAR_COLORS[index % AVATAR_COLORS.length]} text-white rounded-full w-6 text-[10px] font-bold`}>
                <span>{getInitials(ticket.customer)}</span>
              </div>
            </div>
            <span className="text-xs text-base-content/50 font-medium">{ticket.customer}</span>
          </div>
          <span className="text-[10px] text-base-content/30">{ticket.createdAt}</span>
        </div>

      </div>
    </div>
  );
};

export default TicketCard;

const TaskStatusPanel = ({ tasks, onComplete }) => {
  const progressValue = Math.min(tasks.length * 10, 100);

  return (
    <aside className="card bg-base-200 border border-base-300 lg:sticky lg:top-[88px]">
      <div className="card-body p-5 gap-4">

        {/* ── Header ── */}
        <div className="flex items-center justify-between">
          <h2 className="font-syne font-bold text-base">⚡ Task Status</h2>
          <div className="badge badge-neutral border border-base-300 text-base-content/50 text-xs font-medium">
            {tasks.length} active
          </div>
        </div>

        {/* ── Progress bar (visible only when tasks exist) ── */}
        {tasks.length > 0 && (
          <progress
            className="progress progress-primary w-full h-1.5"
            value={progressValue}
            max="100"
          />
        )}

        {/* ── Empty state ── */}
        {tasks.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 gap-3 text-base-content/30">
            <span className="text-4xl">📋</span>
            <p className="text-sm text-center leading-relaxed">
              No tasks in progress.<br />Click a ticket card to start working.
            </p>
          </div>
        ) : (
          /* ── Task list ── */
          <div className="flex flex-col gap-3">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center gap-3 bg-base-300 border border-base-300 rounded-xl p-3
                           animate-[slideIn_0.3s_ease]"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-syne font-bold text-xs truncate mb-1">{task.title}</p>
                  <p className="text-[10px] text-base-content/40">
                    {task.id} · {task.customer}
                  </p>
                </div>
                <button
                  className="btn btn-secondary btn-xs font-syne font-bold shrink-0 shadow-md shadow-secondary/20"
                  onClick={() => onComplete(task)}
                >
                  ✓ Done
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </aside>
  );
};

export default TaskStatusPanel;

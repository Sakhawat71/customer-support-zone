const TaskStatusPanel = ({ tasks, resolvedTasks, onComplete }) => {
    return (
        <aside className="w-full">

            {/* ── Task Status ── */}
            <div className="mb-6">
                <h2 className="font-bold text-gray-900 text-base mb-3">Task Status</h2>

                {tasks.length === 0 ? (
                    <p className="text-sm text-gray-400">Select a ticket to add to Task Status</p>
                ) : (
                    <div className="flex flex-col gap-3">
                        {tasks.map((task) => (
                            <div key={task.id} className="bg-white border border-gray-200 rounded-xl p-4">
                                <p className="font-semibold text-gray-900 text-sm mb-3">{task.title}</p>
                                <button
                                    className="btn btn-sm w-full text-white font-semibold border-0"
                                    style={{ background: "linear-gradient(135deg, #059669, #047857)" }}
                                    onClick={() => onComplete(task)}
                                >
                                    Complete
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* ── Resolved Task ── */}
            <div>
                <h2 className="font-bold text-gray-900 text-base mb-3">Resolved Task</h2>

                {resolvedTasks.length === 0 ? (
                    <p className="text-sm text-gray-400">No resolved tasks yet.</p>
                ) : (
                    <div className="flex flex-col gap-2">
                        {resolvedTasks.map((task) => (
                            <div key={task.id}
                                className="bg-green-50 border border-green-200 rounded-xl p-3 flex items-center gap-2">
                                <span className="text-green-500 text-base">✓</span>
                                <p className="text-sm text-green-800 font-medium">{task.title}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </aside>
    );
};

export default TaskStatusPanel;

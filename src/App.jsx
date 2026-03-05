import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketCard from './components/TicketCard';
import TaskStatusPanel from './components/TaskStatusPanel';
import Footer from './components/Footer';
import initialTickets from './data/tickets';

function App() {
    const [tickets, setTickets] = useState(initialTickets);
    const [inProgress, setInProgress] = useState([]);
    const [resolvedCount, setResolved] = useState(0);

    // ── Click ticket card → add to In Progress ──
    const handleTicketClick = (ticket) => {
        if (inProgress.find((t) => t.id === ticket.id)) {
            toast.info(`"${ticket.title}" is already in progress!`, {
                position: 'top-right', autoClose: 2500,
            });
            return;
        }
        setInProgress((prev) => [...prev, ticket]);
        toast.success('Ticket added to In Progress! 🚀', {
            position: 'top-right', autoClose: 2500,
        });
    };

    // ── Click Complete → resolve ticket ──
    const handleComplete = (task) => {
        setInProgress((prev) => prev.filter((t) => t.id !== task.id));
        setTickets((prev) => prev.filter((t) => t.id !== task.id));
        setResolved((prev) => prev + 1);
        toast.success(`✅ "${task.title}" resolved!`, {
            position: 'top-right', autoClose: 3000,
        });
    };

    // ── New Ticket button ──
    const handleNewTicket = () => {
        toast.info('New Ticket feature coming soon! 🎫', {
            position: 'top-right', autoClose: 2000,
        });
    };

    return (
        <div className="min-h-screen flex flex-col bg-base-100" data-theme="supportzone">
            <ToastContainer theme="dark" />

            <Navbar onNewTicket={handleNewTicket} />

            <Banner
                totalCount={tickets.length}
                inProgressCount={inProgress.length}
                resolvedCount={resolvedCount}
            />

            {/* ── Main content ── */}
            <main className="flex-1 max-w-6xl w-full mx-auto px-6 md:px-10 py-10
                       grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-7 items-start">

                {/* Left — Ticket grid */}
                <section>
                    <div className="flex items-center gap-3 mb-5">
                        <h2 className="font-syne font-bold text-lg">🎫 Customer Tickets</h2>
                        <div className="badge badge-neutral border border-base-300 text-base-content/50 text-xs">
                            {tickets.length} open
                        </div>
                    </div>

                    {tickets.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-24 gap-3">
                            <span className="text-5xl">🎉</span>
                            <p className="font-syne font-bold text-xl text-base-content/50">
                                All tickets resolved!
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {tickets.map((ticket, index) => (
                                <TicketCard
                                    key={ticket.id}
                                    ticket={ticket}
                                    index={index}
                                    onClick={handleTicketClick}
                                />
                            ))}
                        </div>
                    )}
                </section>

                {/* Right — Task Status panel */}
                <TaskStatusPanel tasks={inProgress} onComplete={handleComplete} />

            </main>

            <Footer />
        </div>
    );
}

export default App;

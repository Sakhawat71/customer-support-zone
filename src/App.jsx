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
    const [resolvedTasks, setResolved] = useState([]);

    // Click a ticket card → add to In Progress
    const handleTicketClick = (ticket) => {
        if (inProgress.find((t) => t.id === ticket.id)) {
            toast.info(`"${ticket.title}" is already in progress!`, {
                position: 'top-right', autoClose: 2500,
            });
            return;
        }
        setInProgress((prev) => [...prev, ticket]);
        toast.success('Ticket added to In Progress!', {
            position: 'top-right', autoClose: 2500,
        });
    };

    // Click Complete → resolve
    const handleComplete = (task) => {
        setInProgress((prev) => prev.filter((t) => t.id !== task.id));
        setTickets((prev) => prev.filter((t) => t.id !== task.id));
        setResolved((prev) => [...prev, task]);
        toast.success(`✅ "${task.title}" resolved!`, {
            position: 'top-right', autoClose: 3000,
        });
    };

    // New Ticket button
    const handleNewTicket = () => {
        toast.info('New Ticket feature coming soon!', {
            position: 'top-right', autoClose: 2000,
        });
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100" data-theme="light">
            <ToastContainer />

            <Navbar onNewTicket={handleNewTicket} />

            <Banner
                inProgressCount={inProgress.length}
                resolvedCount={resolvedTasks.length}
            />

            {/* Main content */}
            <main className="flex-1 max-w-6xl w-full mx-auto px-6 md:px-10 py-8
                       grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-start">

                {/* Left — Customer Tickets */}
                <section>
                    <h2 className="font-bold text-gray-900 text-lg mb-4">Customer Tickets</h2>

                    {tickets.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-24 gap-3 text-gray-400">
                            <span className="text-5xl">🎉</span>
                            <p className="font-semibold text-lg">All tickets resolved!</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {tickets.map((ticket) => (
                                <TicketCard
                                    key={ticket.id}
                                    ticket={ticket}
                                    onClick={handleTicketClick}
                                />
                            ))}
                        </div>
                    )}
                </section>

                {/* Right — Task Status */}
                <TaskStatusPanel
                    tasks={inProgress}
                    resolvedTasks={resolvedTasks}
                    onComplete={handleComplete}
                />

            </main>

            <Footer />
        </div>
    );
}

export default App;

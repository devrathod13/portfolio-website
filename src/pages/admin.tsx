import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

interface Message {
    _id: string;
    name: string;
    email: string;
    message: string;
    createdAt: string;
}

export default function AdminPage() {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/messages', {
                headers: {
                    'Authorization': `Bearer ${password}`
                }
            });

            if (response.ok) {
                setIsAuthenticated(true);
                localStorage.setItem('adminPassword', password);
                fetchMessages();
            } else {
                toast.error('Invalid password');
            }
        } catch (error) {
            toast.error('Authentication failed');
        }
    };

    const fetchMessages = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/messages', {
                headers: {
                    'Authorization': `Bearer ${password}`
                }
            });
            
            if (response.ok) {
                const data = await response.json();
                setMessages(data.data);
            } else {
                setIsAuthenticated(false);
                localStorage.removeItem('adminPassword');
            }
        } catch (error) {
            toast.error('Failed to fetch messages');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const savedPassword = localStorage.getItem('adminPassword');
        if (savedPassword) {
            setPassword(savedPassword);
            setIsAuthenticated(true);
            fetchMessages();
        }
    }, []);

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-md w-96">
                    <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
                    <form onSubmit={handleLogin}>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter admin password"
                            className="w-full px-4 py-2 border rounded-md mb-4"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold">Contact Messages</h1>
                    <button
                        onClick={() => {
                            setIsAuthenticated(false);
                            localStorage.removeItem('adminPassword');
                            router.push('/');
                        }}
                        className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                    >
                        Logout
                    </button>
                </div>
                {isLoading ? (
                    <div className="text-center">Loading messages...</div>
                ) : messages.length === 0 ? (
                    <div className="text-center">No messages found</div>
                ) : (
                    <div className="space-y-4">
                        {messages.map((message) => (
                            <div
                                key={message._id}
                                className="bg-white p-6 rounded-lg shadow-md"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h2 className="text-lg font-semibold">{message.name}</h2>
                                        <a
                                            href={`mailto:${message.email}`}
                                            className="text-blue-500 hover:underline"
                                        >
                                            {message.email}
                                        </a>
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {new Date(message.createdAt).toLocaleString()}
                                    </div>
                                </div>
                                <p className="text-gray-700 whitespace-pre-wrap">{message.message}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

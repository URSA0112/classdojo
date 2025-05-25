import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Message {
    id: string
    content: string
    sender: 'me' | 'them'
    timestamp: string
}

export default function ChatContainer({ messages }: { messages: Message[] }) {
    const [input, setInput] = useState('')
    const chatEndRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    const handleSend = () => {
        if (!input.trim()) return

        setInput('')
    }

    return (
        <div className="flex flex-col h-full max-h-[600px] border rounded-2xl overflow-hidden shadow-xl">
            <div className="flex-1 overflow-y-auto bg-white p-4 space-y-2">
                {messages.map((msg) => (
                    <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`max-w-xs px-4 py-2 rounded-lg shadow-sm text-sm ${msg.sender === 'me'
                                ? 'bg-blue-100 self-end text-right'
                                : 'bg-gray-100 self-start text-left'
                            }`}
                    >
                        <p>{msg.content}</p>
                        <span className="block text-xs text-gray-400 mt-1">
                            {msg.timestamp}
                        </span>
                    </motion.div>
                ))}
                <div ref={chatEndRef} />
            </div>

            <div className="border-t bg-white px-4 py-2 flex items-center gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type a message..."
                    className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button
                    onClick={handleSend}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition"
                >
                    Send
                </button>
            </div>
        </div>
    )
}
import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../lib/mongodb';
import Message from '../../models/Message';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        await connectDB();

        const { name, email, message } = req.body;
        
        const newMessage = await Message.create({
            name,
            email,
            message,
        });

        return res.status(201).json({ success: true, data: newMessage });
    } catch (error) {
        console.error('Error saving message:', error);
        return res.status(500).json({ success: false, message: 'Error saving message' });
    }
}

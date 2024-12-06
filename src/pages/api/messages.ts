import type { NextApiRequest, NextApiResponse } from 'next';
import Message from '../../models/Message';
import { withAuth } from '../../lib/auth';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({    message: 'Method not allowed' });
    }

    try {
        const messages = await Message.find({}).sort({ createdAt: -1 });
        return res.status(200).json({ success: true, data: messages });
    } catch (error) {
        console.error('Error fetching messages:', error);
        return res.status(500).json({ success: false, message: 'Error fetching messages' });
    }
}

export default withAuth(handler);

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { name, email, message } = req.body;
        
        // For now, just log the message
        console.log('Received message from:', name, email, message);

        return res.status(201).json({ success: true });
    } catch (error) {
        console.error('Error processing message:', error);
        return res.status(500).json({ success: false, message: 'Error processing message' });
    }
}

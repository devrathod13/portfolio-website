import { NextApiRequest, NextApiResponse } from 'next';
import { NextApiHandler } from 'next';

// Change this to your desired admin password
const ADMIN_PASSWORD = '22884179@Dev';

export function withAuth(handler: NextApiHandler) {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const token = authHeader.split(' ')[1];

        if (token !== ADMIN_PASSWORD) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        return handler(req, res);
    };
}

import { useState, FormEvent } from 'react';
import toast from 'react-hot-toast';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Here you would typically send the form data to your backend or email service
            // For now, we'll just simulate a successful submission
            await new Promise(resolve => setTimeout(resolve, 1000));
            toast.success('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (_error) {
            console.error('Form submission error:', _error);
            toast.error('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium opacity-80 mb-1">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-field"
                    required
                    disabled={isSubmitting}
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium opacity-80 mb-1">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-field"
                    required
                    disabled={isSubmitting}
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium opacity-80 mb-1">
                    Message
                </label>
                <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="input-field"
                    required
                    disabled={isSubmitting}
                ></textarea>
            </div>
            <button
                type="submit"
                className="button-primary w-full"
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
};

export default ContactForm;

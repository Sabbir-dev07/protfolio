import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchPersonalInfo = () => api.get('/personal-info');
export const fetchProjects = () => api.get('/projects');
export const fetchExperience = () => api.get('/experience');
export const fetchSkills = () => api.get('/skills');

// EmailJS Integration
export const sendEmail = async (formData) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log('EmailJS Config Check:', {
        serviceId: serviceId ? 'Exists' : 'MISSING',
        templateId: templateId ? 'Exists' : 'MISSING',
        publicKey: publicKey ? 'Exists' : 'MISSING'
    });

    if (!serviceId || !templateId || !publicKey) {
        throw new Error('Email configuration is incomplete. Check your .env file.');
    }

    const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            reply_to: formData.email,
        }
    };

    return axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
};

export const submitContactForm = (data) => api.post('/messages', data);

export default api;

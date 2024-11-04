'use client'

import { useState } from "react";

export default function AuthForm({mode} : {mode : 'login' | 'register' }) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        username : '',  
    });

    const handleSubmit = async (e : React.FormEvent) => {
        e.preventDefault();
        const endpoint = mode === 'login' ? '/api/auth/login' : '/api/auth/register';

        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!res.ok) {
                window.location.href = '/dashboard';
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
            {mode === 'register' && (
                <input
                type="text"
                placeholder="Username"
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="p-2 border rounded"
                />
            )}
            <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="p-2 border rounded"
            />
            <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="p-2 border rounded"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                {mode === 'login' ? 'Login' : 'Register'}
            </button>
        </form>
    );
}
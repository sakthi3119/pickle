import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';

const LoginPage = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});
	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
  
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError('');

		try {
			// For development mode, allow any login
			if (typeof import.meta !== 'undefined' && import.meta.env?.DEV) {
				// Simulate API call
				await new Promise(resolve => setTimeout(resolve, 1000));
        
				// Store a dummy token
				localStorage.setItem('token', 'dev-token-123');
				localStorage.setItem('user', JSON.stringify({ 
					id: 1, 
					email: formData.email, 
					role: 'admin' 
				}));
        
				navigate('/admin/dashboard');
				return;
			}

			// TODO: Implement actual API call
			const response = await fetch('/api/admin/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				throw new Error('Invalid credentials');
			}

			const data = await response.json();
			// ...existing code continues...

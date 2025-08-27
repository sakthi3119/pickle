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

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
			localStorage.setItem('token', data.token);
			localStorage.setItem('user', JSON.stringify(data.user));
			navigate('/admin/dashboard');
		} catch (err: unknown) {
			const message = err instanceof Error ? err.message : 'Login failed. Please try again.';
			setError(message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<div className="text-center">
					<h2 className="text-3xl font-bold text-gray-900">Admin Login</h2>
					<p className="mt-2 text-sm text-gray-600">Sign in to access the admin panel</p>
				</div>
			</div>

			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<form className="space-y-6" onSubmit={handleSubmit}>
						{error && (
							<div className="bg-red-50 border border-red-200 rounded-md p-4">
								<div className="flex">
									<div className="ml-3">
										<h3 className="text-sm font-medium text-red-800">{error}</h3>
									</div>
								</div>
							</div>
						)}

						<div>
							<label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
							<div className="mt-1 relative">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<FiMail className="h-5 w-5 text-gray-400" />
								</div>
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									value={formData.email}
									onChange={handleChange}
									className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-pickle-500 focus:border-pickle-500 sm:text-sm"
									placeholder="Enter your email"
								/>
							</div>
						</div>

						<div>
							<label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
							<div className="mt-1 relative">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<FiLock className="h-5 w-5 text-gray-400" />
								</div>
								<input
									id="password"
									name="password"
									type={showPassword ? 'text' : 'password'}
									autoComplete="current-password"
									required
									value={formData.password}
									onChange={handleChange}
									className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-pickle-500 focus:border-pickle-500 sm:text-sm"
									placeholder="Enter your password"
								/>
								<button
									type="button"
									className="absolute inset-y-0 right-0 pr-3 flex items-center"
									onClick={() => setShowPassword(!showPassword)}
								>
									{showPassword ? (
										<FiEyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
									) : (
										<FiEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
									)}
								</button>
							</div>
						</div>

						<div>
							<button
								type="submit"
								disabled={loading}
								className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pickle-600 hover:bg-pickle-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pickle-500 disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{loading ? 'Signing in...' : 'Sign in'}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;

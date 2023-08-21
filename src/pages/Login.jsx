import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import axiosInstance from '../components/axios';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const initialFormData = {
        username: '',
        password: '',
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            // Trimming any whitespace
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        axiosInstance
            .post('token/', {
                username: formData.username,
                password: formData.password,
            })
            .then((res) => {
                localStorage.setItem('access_token', res.data.access);
                localStorage.setItem('refresh_token', res.data.refresh);
                axiosInstance.defaults.headers['Authorization'] = `JWT ` + localStorage.getItem('access_token');
                navigate('/');
                console.log(res);
                console.log(res.data);
            })
            .catch((error) => {
                console.error('Login failed:', error);
                // Handle login error here if needed
            });
    };

    return (
        <div className='my-5'>
            <form onSubmit={handleSubmit} className='space-y-3 flex flex-col'>
                <Input type='text' id='username' name='username' placeholder='username' onChange={handleChange} />
                <Input type='password' id='password' name='password' placeholder='password' onChange={handleChange} />
                <Button className='my-3 float-right'>Submit</Button>
            </form>
        </div>
    );
}

export default Login;
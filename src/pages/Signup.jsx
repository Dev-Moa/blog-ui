import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import axiosInstance from '../components/axios';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const initialFormData = {
        email: '',
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
        navigate('/');

        axiosInstance
            .post('signup/', {
                email: formData.email,
                username: formData.username,
                password: formData.password,
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
            });


    };

    return (
        <div className='my-5'>
            <form onSubmit={handleSubmit} className='space-y-3 flex flex-col'>
                <Input type='text' id='username' name='username' placeholder='username' onChange={handleChange} />
                <Input type='email' id='email' name='email' placeholder='Email' onChange={handleChange} />
                <Input type='password' id='password' name='password' placeholder='password' onChange={handleChange} />
                <Button className='my-3 float-right'>Submit</Button>
            </form>
        </div>
    );
}

export default Register;

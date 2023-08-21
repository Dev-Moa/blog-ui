import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import axiosInstance from '../components/axios';

function Home() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        axiosInstance
            .get('/')
            .then((response) => {
                if (response.status === 200) {
                    setPosts(response.data);
                } else {
                    throw new Error("Unauthorized");
                }
            })
            .catch((error) => setError(true));
    }, []);

    if (error) {
        return (
            <h1>
                Please Login <Link className='text-slate-500' to='login'>here</Link>
            </h1>
        );
    }

    return (
        <div>
            {posts.map((post) => (
                <Card key={post.id} className="my-3">
                    <CardHeader>
                        <div>
                            <CardTitle>{post.title}</CardTitle>
                            <CardDescription>{post.excerpt}</CardDescription>
                        </div>
                        <div className='sm:display-inline'>
                            <Button className="float-right">
                                <Link to={`/posts/${post.id}`}>Read More</Link>
                            </Button>
                        </div>
                    </CardHeader>
                </Card>
            ))}
        </div>
    );
}

export default Home;
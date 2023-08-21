import React, { useEffect, useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useParams } from 'react-router-dom'

function SinglePost() {
    const [post, setPost] = useState('')
    const { postId } = useParams()
    useEffect(() => {
        const api = `http://127.0.0.1:8000/api/${postId}/`
        fetch(api)
            .then((res) => res.json())
            .then((data) => setPost(data))
    }, [setPost])
    return (
        <Card>
            <CardHeader>
                <CardTitle>{post.title} </CardTitle>
                <CardDescription>{post.excerpt} </CardDescription>
            </CardHeader>

            <CardContent>
                {post.content}
            </CardContent>

            <CardFooter>
                {post.published}
            </CardFooter>
        </Card>
    )
}

export default SinglePost
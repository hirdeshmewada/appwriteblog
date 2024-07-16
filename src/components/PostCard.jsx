import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
    const [previewUrl, setPreviewUrl] = useState('');

    useEffect(() => {
        const fetchPreviewUrl = async () => {
            try {
                const url = await appwriteService.getFilePreview(featuredImage);
                setPreviewUrl(url);
            } catch (error) {
                console.error("Error fetching file preview:", error);
            }
        };

        fetchPreviewUrl();
    }, [featuredImage]);

    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    {previewUrl ? (
                        <img src={previewUrl} alt={title} className='rounded-xl' />
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    );
}

export default PostCard;

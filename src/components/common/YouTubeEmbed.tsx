'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';

interface YouTubeEmbedProps {
    videoId: string;
    title: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    if (isLoaded) {
        return (
            <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                frameBorder="0"
                className="w-full h-full rounded-2xl"
            />
        );
    }

    return (
        <div
            className="relative w-full h-full cursor-pointer group"
            onClick={() => setIsLoaded(true)}
        >
            <Image
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt={title}
                fill
                className="object-cover rounded-2xl"
                priority={false}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 rounded-2xl flex items-center justify-center">
                <div className="w-16 h-16 bg-brand-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-brand-primary/20">
                    <FaPlay className="text-black ml-1 text-2xl" />
                </div>
            </div>
        </div>
    );
};

export default YouTubeEmbed;

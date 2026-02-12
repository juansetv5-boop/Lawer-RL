"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Intro() {
    const [isVisible, setIsVisible] = useState(true);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        // Start fading out after 2 seconds
        const timer = setTimeout(() => {
            setOpacity(0);
        }, 2000);

        // Remove from DOM after transition completes (2s + 1s fade)
        const cleanup = setTimeout(() => {
            setIsVisible(false);
        }, 3000);

        return () => {
            clearTimeout(timer);
            clearTimeout(cleanup);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-1000 ease-in-out"
            style={{ opacity: opacity }}
        >
            <div className="relative w-64 h-64 md:w-96 md:h-96 animate-pulse">
                <Image
                    src="/logo.png"
                    alt="Representación Legal Popayán"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </div>
    );
}

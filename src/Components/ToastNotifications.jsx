import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const ToastNotifications = () => {
    const messages = [
        "Welcome to the Movie Finder!",
        "❤️ Are you Google? Because you have everything I search!",
        "🫶 Are you WiFi? Because I’m totally connected to you!",
        "Enter a movie name and click search.",
        "Try searching for popular movies!",
        "Don't forget to check movie details!",
        "Enjoy discovering new movies!"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            toast.success(messages[currentIndex], {
                position: 'bottom-right',
                autoClose: 3000, // Auto-close after 3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });

            // Move to next message or loop back to the first
            setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 5000); // ✅ Show toast every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [currentIndex]); // Depend on currentIndex

    return null; // ✅ This component only handles notifications
};

export default ToastNotifications;

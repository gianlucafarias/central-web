'use client'
import { ArrowUpIcon } from "lucide-react";
import React, { useState, useEffect } from 'react';

export default function ToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      className="fixed bottom-4 right-4 bg-club-dark hover:bg-club-secondary cursor-pointer text-white p-2 rounded-full"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <ArrowUpIcon className="w-6 h-6" />
    </button>
  );
}


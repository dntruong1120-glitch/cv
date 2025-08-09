import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: Array<{
    src: string;
    title: string;
    description: string;
  }>;
  currentIndex: number;
  onIndexChange: (index: number) => void;
}

export default function Lightbox({ 
  isOpen, 
  onClose, 
  images, 
  currentIndex, 
  onIndexChange 
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          if (currentIndex > 0) {
            onIndexChange(currentIndex - 1);
          }
          break;
        case 'ArrowRight':
          if (currentIndex < images.length - 1) {
            onIndexChange(currentIndex + 1);
          }
          break;
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, currentIndex, images.length, onClose, onIndexChange]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div 
      className="fixed inset-0 bg-black/90 lightbox flex items-center justify-center z-50 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative max-w-4xl max-h-full">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10 bg-black/50"
        >
          <X size={24} />
        </Button>

        {images.length > 1 && currentIndex > 0 && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onIndexChange(currentIndex - 1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors bg-black/50"
          >
            <ChevronLeft size={24} />
          </Button>
        )}

        {images.length > 1 && currentIndex < images.length - 1 && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onIndexChange(currentIndex + 1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors bg-black/50"
          >
            <ChevronRight size={24} />
          </Button>
        )}

        <img 
          src={currentImage.src} 
          alt={currentImage.title} 
          className="max-w-full max-h-full object-contain rounded-lg" 
        />
        
        <div className="absolute bottom-4 left-4 right-4 bg-black/80 p-4 rounded-lg">
          <h3 className="text-white text-xl font-semibold mb-2">{currentImage.title}</h3>
          <p className="text-gray-300">{currentImage.description}</p>
        </div>
      </div>
    </div>
  );
}

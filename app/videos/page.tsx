"use client";

import React, { useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

interface VideoProps {
  instagramUrl: string;
}

const VideoPage: React.FC<VideoProps> = ({ instagramUrl }) => {
  useEffect(() => {
    // Load Elfsight script dynamically
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;

    // Prevent adding multiple times
    if (!document.querySelector(`script[src="${script.src}"]`)) {
      document.body.appendChild(script);
    }

    return () => {
      // Optional: cleanup only if you want to remove on unmount
      // document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <Navigation/>
      <h1 className="text-3xl font-bold mb-8 text-center">Our Videos</h1>

      <div className="w-full max-w-5xl space-y-12">
        {/* ✅ YouTube Channel via Elfsight */}
        <div className="w-full">
          <div
            className="elfsight-app-abb0258b-8cd2-4c73-9299-6ed32cd61bf8"
            data-elfsight-app-lazy
          ></div>
        </div>

        {/* Instagram Video */}
        <div className="relative w-full h-0 pb-[125%] md:pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            src={instagramUrl}
            title="Instagram Video"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VideoPage;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FarmerPic from '../assets/FarmerPic.png'; // Make sure the image is in assets!

const GetStarted = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#d1dcd4] flex items-center justify-center p-4">
      {/* Main Card */} 
      <div className="bg-[#f2f4f2] w-full max-w-sm rounded-[32px] shadow-2xl p-8 flex flex-col items-center text-center border border-white/20">
        
        {/* Title */}
        <h1 className="text-[#2d5a27] text-4xl font-bold mb-6 tracking-tight">
          AquaSense
        </h1>

        {/* Illustration Container */}
        <div className="w-full mb-6 rounded-3xl overflow-hidden shadow-sm">
          <img 
            src={FarmerPic} 
            alt="Smart Irrigation Illustration" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Subtitle Badge */}
        <div className="bg-white/60 px-6 py-2 rounded-full mb-12 shadow-sm">
          <p className="text-gray-500 font-semibold text-sm">
            Smart Irrigation. Real Decisions
          </p>
        </div>

        {/* Action Button */}
        <button 
            onClick={() => navigate('/register')}        
            className="bg-[#2d5a27] hover:bg-[#23461f] transition-colors w-full py-4 rounded-full shadow-lg group">
          <div className="text-white font-bold text-xl uppercase tracking-wider">
            Get Started
          </div>
          <div className="text-white/80 text-sm font-medium mt-1">
            (आरंभ)
          </div>
        </button>

        {/* Bottom Decorative Line */}
        <div className="w-4/5 h-[1px] bg-gray-300 mt-10 opacity-50"></div>
      </div>
    </div>
  );
};

export default GetStarted;
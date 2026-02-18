import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  CheckCircle2, 
  Zap, 
  Bot, 
  BarChart3 
} from 'lucide-react';

const FieldStatus = () => {
  const navigate = useNavigate();
  // State for the primary Device toggle
  const [isDeviceOn, setIsDeviceOn] = useState(false);
  // State for the secondary Auto Irrigation toggle
  const [isAutoIrrigation, setIsAutoIrrigation] = useState(false);

  return (
    <div className="min-h-screen bg-[#d1dcd4] flex justify-center">
      <div className="w-full max-w-md px-4 py-6">
        
        
        

        {/* MAIN CARD */}
        <div className="bg-[#f8f9f8] rounded-[32px] shadow-lg p-6 min-h-[500px]">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <button 
              onClick={() => navigate('/field-setup')}
              className="text-[#2d5a27] hover:bg-green-50 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={32} />
            </button>
            <h1 className="text-2xl font-semibold text-[#2d5a27]">Field Status</h1>
          </div>
          <h2 className="text-[#2d5a27] text-2xl font-bold text-center mb-8">My Field</h2>

          <div className="space-y-6">
            
            {/* 1. Crop Status Box */}
            <div className="border border-[#2d5a27] rounded-2xl p-4 flex gap-4 bg-white">
              <CheckCircle2 className="text-[#2d5a27] shrink-0" size={48} />
              <div className="flex flex-col justify-between w-full">
                <div>
                  <h3 className="text-[#2d5a27] font-bold text-xl leading-tight">Crops are good!</h3>
                  <p className="text-[#2d5a27] text-[10px] leading-tight opacity-80">
                    Soil is slightly moist, irrigation is paused.
                  </p>
                </div>
                <button className="text-[#2d5a27]/40 text-[10px] self-end underline mt-1">
                  हिंदी अनुवाद
                </button>
              </div>
            </div>

            {/* 2. Device Status Box (Dynamic) */}
            <div className="border border-[#2d5a27] rounded-2xl p-4 flex gap-4 bg-white relative">
              <Zap className="text-[#2d5a27] shrink-0" size={48} />
              <div className="w-full space-y-3">
                
                {/* Primary Device Toggle */}
                <div className="flex justify-between items-center">
                  <h3 className="text-[#2d5a27] font-bold text-xl">
                    Device: {isDeviceOn ? 'On' : 'Off'}
                  </h3>
                  <button 
                    onClick={() => {
                      setIsDeviceOn(!isDeviceOn);
                      if(isDeviceOn) setIsAutoIrrigation(false); // Reset nested toggle if parent turns off
                    }}
                    className={`w-11 h-6 rounded-full p-1 transition-colors duration-300 flex items-center ${
                      isDeviceOn ? 'bg-[#2d5a27]' : 'border border-[#2d5a27]'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full shadow-sm transform transition-transform duration-300 ${
                      isDeviceOn ? 'translate-x-5 bg-white' : 'translate-x-0 bg-[#2d5a27]'
                    }`} />
                  </button>
                </div>

                {/* Nested Options - Only shows when Device is On */}
                {isDeviceOn && (
                  <div className="space-y-3 pt-2 border-t border-[#2d5a27]/10">
                    
                    {/* Auto Irrigation Toggle */}
                    <div className="flex justify-between items-center">
                      <p className="text-[#2d5a27] text-sm font-bold">
                        Auto irrigation: {isAutoIrrigation ? 'On' : 'Off'}
                      </p>
                      <button 
                        onClick={() => setIsAutoIrrigation(!isAutoIrrigation)}
                        className={`w-11 h-6 rounded-full p-1 transition-colors duration-300 flex items-center ${
                          isAutoIrrigation ? 'bg-[#2d5a27]' : 'border border-[#2d5a27]'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full shadow-sm transform transition-transform duration-300 ${
                          isAutoIrrigation ? 'translate-x-5 bg-white' : 'translate-x-0 bg-[#2d5a27]'
                        }`} />
                      </button>
                    </div>

                    {/* View Dashboard Button (In a border box per image) */}
                    <button 
                      onClick={() => navigate('/dashboard')}
                      className="w-full mt-2 py-2 px-3 border border-[#2d5a27]/40 rounded-lg flex items-center justify-center gap-2 text-green-800 hover:bg-green-50 transition-colors"
                    >
                      <BarChart3 size={18} />
                      <span className="text-sm underline font-medium">View Dashboard</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* 3. Chatbot Button */}
            <button 
              onClick={() => navigate('/chatbot')}
              className="w-full border border-[#2d5a27] rounded-2xl p-4 flex gap-4 bg-white hover:bg-green-50 transition-all active:scale-[0.98] group text-left"
            >
              <Bot className="text-[#2d5a27] shrink-0" size={48} />
              <div className="flex items-center">
                <h3 className="text-[#2d5a27] font-bold text-xl leading-tight group-hover:translate-x-1 transition-transform">
                  Click to talk to our Chatbot
                </h3>
              </div>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldStatus;
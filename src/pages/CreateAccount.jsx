import React from 'react';
import { User, Phone, MapPin, ClipboardList, ChevronRight } from 'lucide-react';

const CreateAccount = () => {
  const [region, setRegion] = useState("");
  const [role, setRole] = useState("");
  return (
    <div className="min-h-screen w-full bg-[#d1dcd4] flex items-center justify-center p-4">
      {/* Main Card */}
      <div className="bg-[#f2f4f2] w-full max-w-[400px] rounded-[40px] shadow-2xl p-8 flex flex-col items-center border border-white">
        
        {/* Header Section */}
        <h1 className="text-[#2d5a27] text-4xl font-extrabold mb-2">AquaSense</h1>
        <h2 className="text-[#2d5a27] text-2xl font-bold mb-1">Create your account</h2>
        <p className="text-[#2d5a27] text-sm font-medium mb-8">Enter your details to get started</p>

        {/* Form Fields */}
        <div className="w-full space-y-5">
          
          {/* Name Field */}
          <div>
            <label className="block text-[#2d5a27] font-bold text-sm mb-1 ml-1">Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-white border-2 border-green-800/20 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:border-[#2d5a27] text-gray-700 placeholder:text-gray-300 transition-all"
              />
            </div>
          </div>

          {/* Phone Number Field */}
          <div>
            <label className="block text-[#2d5a27] font-bold text-sm mb-1 ml-1">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="+91 | 12345 67890" 
                className="w-full bg-white border-2 border-green-800/20 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:border-[#2d5a27] text-gray-700 placeholder:text-gray-300 transition-all"
              />
            </div>
          </div>

          {/* Region Field */}
          <div>
            <label className="block text-[#2d5a27] font-bold text-sm mb-1 ml-1">Region</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select className="w-full bg-white border-2 border-green-800/20 rounded-2xl py-3 pl-12 pr-10 focus:outline-none focus:border-[#2d5a27] text-gray-400 appearance-none transition-all">
                <option>Select your region</option>
                <option>Punjab</option>
                <option>Haryana</option>
                <option>Himachal Pradesh</option>  
              </select>
              <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Role Field */}
          <div>
            <label className="block text-[#2d5a27] font-bold text-sm mb-1 ml-1">Role</label>
            <div className="relative">
              <ClipboardList className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select className="w-full bg-white border-2 border-green-800/20 rounded-2xl py-3 pl-12 pr-10 focus:outline-none focus:border-[#2d5a27] text-gray-400 appearance-none transition-all">
                <option>Select your role</option>
                <option>Farmer</option>
                <option>Field Supervisor</option>
                <option>Technician</option>
              </select>
              <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

        </div>

        {/* Register Button */}
        <button className="bg-[#2d5a27] hover:bg-[#1e3d1a] transition-all w-full py-4 rounded-[40px] shadow-lg mt-10">
          <div className="text-white font-bold text-2xl uppercase tracking-wider">
            REGISTER
          </div>
          <div className="text-white/90 text-sm font-medium">
            (पंजीकरण करें)
          </div>
        </button>

      </div>
    </div>
  );
};

export default CreateAccount;
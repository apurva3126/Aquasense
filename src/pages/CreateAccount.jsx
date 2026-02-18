import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Phone, MapPin, ClipboardList, ChevronRight } from "lucide-react";
import { punjabDistricts } from "../data/punjabDistricts";



const CreateAccount = () => {
  const navigate = useNavigate();
  

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [region, setRegion] = useState("");
  const [district, setDistrict] = useState("");
  const [role, setRole] = useState("");

  const handleRegister = () => {
   
    if (!name || !phone || !region || !role) {
      alert("Please fill all required fields");
      return;
    }

    if (region === "Punjab" && !district) {
      alert("Please select your district");
      return;
    }
    if (phone.length !== 10) {
      alert("Phone number must be exactly 10 digits");
      return;
    }

    navigate("/field-setup");
  };

  return (
    <div className="min-h-screen w-full bg-[#d1dcd4] flex items-center justify-center p-4">
      <div className="bg-[#f2f4f2] w-full max-w-[400px] rounded-[40px] shadow-2xl p-8 flex flex-col items-center border border-white">

        <h1 className="text-[#2d5a27] text-4xl font-extrabold mb-2">AquaSense</h1>
        <h2 className="text-[#2d5a27] text-2xl font-bold mb-1">
          Create your account
        </h2>
        <p className="text-[#2d5a27] text-sm font-medium mb-8">
          Enter your details to get started
        </p>

        <div className="w-full space-y-5">

          {/* Name */}
          <div>
            <label className="block text-[#2d5a27] font-bold text-sm mb-1 ml-1">
              Name
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                inputMode="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value.replace(/[^a-zA-Z\s]/g, ""))
                }}
                placeholder="Your Name"
                className="w-full bg-white border-2 border-green-800/20 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:border-[#2d5a27] text-gray-700"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-[#2d5a27] font-bold text-sm mb-1 ml-1">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                value={phone}
                maxLength={10}
                onChange={(e) => {
                  setPhone(e.target.value.replace(/\D/g, ""))
                }}
                placeholder="+91 | 12345 67890"
                className="w-full bg-white border-2 border-green-800/20 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:border-[#2d5a27] text-gray-700"
              />
            </div>
          </div>

          {/* Region */}
          <div>
            <label className="block text-[#2d5a27] font-bold text-sm mb-1 ml-1">
              Region
            </label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={region}
                onChange={(e) => {
                  setRegion(e.target.value);
                  setDistrict(""); // reset district on region change
                }}
                className="w-full bg-white border-2 border-green-800/20 rounded-2xl py-3 pl-12 pr-10 focus:outline-none focus:border-[#2d5a27] text-gray-700 appearance-none"
              >
                <option value="">Select your region</option>
                <option value="Punjab">Punjab</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
              </select>
              <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* District (Only if Punjab) */}
          {region === "Punjab" && (
            <div>
              <label className="block text-[#2d5a27] font-bold text-sm mb-1 ml-1">
                District
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full bg-white border-2 border-green-800/20 rounded-2xl py-3 pl-12 pr-10 focus:outline-none focus:border-[#2d5a27] text-gray-700 appearance-none"
                >
                  <option value="">Select your district</option>
                  {punjabDistricts.map((dist) => (
                    <option key={dist} value={dist}>
                      {dist}
                    </option>
                  ))}
                </select>
                  <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
          )}

          {/* Role */}
          <div>
            <label className="block text-[#2d5a27] font-bold text-sm mb-1 ml-1">
              Role
            </label>
            <div className="relative">
              <ClipboardList className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-white border-2 border-green-800/20 rounded-2xl py-3 pl-12 pr-10 focus:outline-none focus:border-[#2d5a27] text-gray-700 appearance-none"
              >
                <option value="">Select your role</option>
                <option value="Farmer">Farmer</option>
                <option value="Field Supervisor">Field Supervisor</option>
                <option value="Technician">Technician</option>
              </select>
              <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

        </div>

        {/* Register Button */}
        <button
          onClick={handleRegister}
          className="bg-[#2d5a27] hover:bg-[#1e3d1a] transition-all w-full py-4 rounded-[40px] shadow-lg mt-10"
        >
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

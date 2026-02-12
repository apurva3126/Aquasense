import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 1. Import the hook

// crop images
import wheatImg from "../assets/wheat.png";
import paddyImg from "../assets/paddy.png";
import cottonImg from "../assets/cotton.png";
import tomatoImg from "../assets/tomato.png";

const crops = [
  { id: "wheat", name: "Wheat", img: wheatImg },
  { id: "paddy", name: "Paddy", img: paddyImg },
  { id: "cotton", name: "Cotton", img: cottonImg },
  { id: "tomato", name: "Tomato", img: tomatoImg },
];

const categories = ["Cereal", "Vegetable", "Pulse", "Fruit", "Oilseed"];

const units = [
  "Killa", "Kanal", "Marla", "Bigha", "Hectare", "Acre", "Square meter", "Square foot",
];

const waterSources = ["Tubewell", "Tank", "Canal", "Tap"];

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];
const years = Array.from({ length: 30 }, (_, i) => 2020 + i);

export default function FieldSetup() {
  const navigate = useNavigate(); // 2. Initialize the hook
  
  const [selectedCrop, setSelectedCrop] = useState("wheat");
  const [category, setCategory] = useState("Cereal");
  const [unit, setUnit] = useState("Killa");
  const [waterSource, setWaterSource] = useState("");

  return (
    <div className="min-h-screen bg-[#dbe4d8] flex justify-center">
      <div className="w-full max-w-md px-4 py-6">

        {/* MAIN CARD */}
        <div className="bg-white rounded-2xl shadow-md p-5">

          {/* ✅ BACK BUTTON LINKED */}
          <div className="flex items-start gap-3 mb-3">
            <button 
              onClick={() => navigate('/register')} // 3. Set path to Register page
              className="text-2xl text-green-700 hover:bg-green-50 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
            >
              ←
            </button>
            <div>
              <h1 className="text-lg font-semibold text-green-800 mt-1">
                Field Setup
              </h1>
            </div>
          </div>

          <p className="text-sm text-green-700 text-center">
            What are you growing?
          </p>
          <p className="text-sm text-green-700 text-center mt-2">
            Select your crop and field details to get started
          </p>

          {/* Search */}
          <input
            type="text"
            placeholder="Search Crop"
            className="mt-4 w-full border border-green-600 rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-green-500/20"
          />

          {/* Categories */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`whitespace-nowrap px-4 py-1 rounded-full border text-sm transition-all ${
                  category === item
                    ? "bg-green-700 text-white border-green-700"
                    : "border-green-600 text-green-700 hover:bg-green-50"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Crop Cards */}
          <div className="grid grid-cols-2 gap-4 mt-5">
            {crops.map((crop) => (
              <button
                key={crop.id}
                onClick={() => setSelectedCrop(crop.id)}
                className={`border rounded-xl p-4 flex flex-col items-center gap-3 transition-all ${
                  selectedCrop === crop.id
                    ? "border-green-700 bg-green-50 ring-1 ring-green-700"
                    : "border-green-400 hover:border-green-600"
                }`}
              >
                <img
                  src={crop.img}
                  alt={crop.name}
                  className="w-14 h-14 object-contain"
                />
                <span className="font-medium text-green-800">
                  {crop.name}
                </span>
              </button>
            ))}
          </div>

          {/* Field Size */}
          <div className="mt-6">
            <label className="text-sm font-semibold text-green-800">
              Field Size
            </label>
            <input
              type="number"
              placeholder="Size"
              className="mt-2 w-full border border-green-600 rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-green-500/20"
            />
          </div>

          {/* Units */}
          <div className="flex flex-wrap gap-2 mt-3">
            {units.map((u) => (
              <button
                key={u}
                onClick={() => setUnit(u)}
                className={`px-4 py-1 rounded-full border text-sm transition-all ${
                  unit === u
                    ? "bg-green-700 text-white border-green-700"
                    : "border-green-600 text-green-700 hover:bg-green-50"
                }`}
              >
                {u}
              </button>
            ))}
          </div>

          {/* Date */}
          <div className="mt-6">
            <label className="text-sm font-semibold text-green-800">
              Date
            </label>
            <div className="flex gap-3 mt-2">
              <select className="flex-1 border border-green-600 rounded-full px-3 py-2 outline-none text-sm bg-white">
                <option>Day</option>
                {days.map((d) => <option key={d}>{d}</option>)}
              </select>

              <select className="flex-1 border border-green-600 rounded-full px-3 py-2 outline-none text-sm bg-white">
                <option>Month</option>
                {months.map((m) => <option key={m}>{m}</option>)}
              </select>

              <select className="flex-1 border border-green-600 rounded-full px-3 py-2 outline-none text-sm bg-white">
                <option>Year</option>
                {years.map((y) => <option key={y}>{y}</option>)}
              </select>
            </div>
          </div>

          {/* Water Source */}
          <div className="mt-6">
            <label className="text-sm font-semibold text-green-800">
              Water Source
            </label>
            <div className="flex flex-wrap gap-2 mt-2">
              {waterSources.map((src) => (
                <button
                  key={src}
                  onClick={() => setWaterSource(src)}
                  className={`px-4 py-1 rounded-full border text-sm transition-all ${
                    waterSource === src
                      ? "bg-green-700 text-white border-green-700"
                      : "border-green-600 text-green-700 hover:bg-green-50"
                  }`}
                >
                  {src}
                </button>
              ))}
            </div>
          </div>

          {/* Continue */}
          <button 
            className="mt-8 w-full bg-green-800 hover:bg-green-900 transition-colors text-white py-3 rounded-full text-lg font-semibold shadow-lg active:scale-95 transform"
          >
          <div className="text-white font-bold text-xl uppercase tracking-wider">
            Continue
          </div>
          <div className="text-white/80 text-sm font-medium mt-1">
            (आगे बढ़ें)
          </div>
          </button>

        </div>
      </div>
    </div>
  );
}
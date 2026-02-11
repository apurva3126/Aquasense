import { useState } from "react";

// crop images
import wheatImg from "./assets/wheat.png";
import paddyImg from "./assets/paddy.png";
import cottonImg from "./assets/cotton.png";
import tomatoImg from "./assets/tomato.png";

const crops = [
  { id: "wheat", name: "Wheat", img: wheatImg },
  { id: "paddy", name: "Paddy", img: paddyImg },
  { id: "cotton", name: "Cotton", img: cottonImg },
  { id: "tomato", name: "Tomato", img: tomatoImg },
];

const categories = ["Cereal", "Vegetable", "Pulse", "Fruit", "Oilseed"];

const units = [
  "Killa",
  "Kanal",
  "Marla",
  "Bigha",
  "Hectare",
  "Acre",
  "Square meter",
  "Square foot",
];

const waterSources = ["Tubewell", "Tank", "Canal", "Tap"];

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];
const years = Array.from({ length: 30 }, (_, i) => 2020 + i);

export default function FieldSetup() {
  const [selectedCrop, setSelectedCrop] = useState("wheat");
  const [category, setCategory] = useState("Cereal");
  const [unit, setUnit] = useState("Killa");
  const [waterSource, setWaterSource] = useState("");

  return (
    <div className="min-h-screen bg-[#dbe4d8] flex justify-center">
      <div className="w-full max-w-md px-4 py-6">

        {/* MAIN CARD */}
        <div className="bg-white rounded-2xl shadow-md p-5">

          {/* ✅ UPDATED HEADER (ONLY CHANGE) */}
          <div className="flex items-start gap-3 mb-3">
            <button className="text-2xl text-green-700">←</button>
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
            className="mt-4 w-full border border-green-600 rounded-full px-4 py-2 outline-none"
          />

          {/* Categories */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`whitespace-nowrap px-4 py-1 rounded-full border text-sm ${
                  category === item
                    ? "bg-green-700 text-white border-green-700"
                    : "border-green-600 text-green-700"
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
                className={`border rounded-xl p-4 flex flex-col items-center gap-3 ${
                  selectedCrop === crop.id
                    ? "border-green-700 bg-green-50"
                    : "border-green-400"
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
              className="mt-2 w-full border border-green-600 rounded-full px-4 py-2"
            />
          </div>

          {/* Units */}
          <div className="flex flex-wrap gap-2 mt-3">
            {units.map((u) => (
              <button
                key={u}
                onClick={() => setUnit(u)}
                className={`px-4 py-1 rounded-full border text-sm ${
                  unit === u
                    ? "bg-green-700 text-white border-green-700"
                    : "border-green-600 text-green-700"
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
              <select className="flex-1 border border-green-600 rounded-full px-3 py-2">
                <option>Day</option>
                {days.map((d) => <option key={d}>{d}</option>)}
              </select>

              <select className="flex-1 border border-green-600 rounded-full px-3 py-2">
                <option>Month</option>
                {months.map((m) => <option key={m}>{m}</option>)}
              </select>

              <select className="flex-1 border border-green-600 rounded-full px-3 py-2">
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
                  className={`px-4 py-1 rounded-full border text-sm ${
                    waterSource === src
                      ? "bg-green-700 text-white border-green-700"
                      : "border-green-600 text-green-700"
                  }`}
                >
                  {src}
                </button>
              ))}
            </div>
          </div>

          {/* Continue */}
          <button className="mt-8 w-full bg-green-800 text-white py-3 rounded-full text-lg font-semibold">
            Continue <span className="text-sm">(आगे बढ़ें)</span>
          </button>

        </div>
      </div>
    </div>
  );
}

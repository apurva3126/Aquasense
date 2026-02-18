import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { crops } from "../data/cropsData";

const categories = [
  "Cereal",
  "Vegetable",
  "Pulse",
  "Fruit",
  "Oilseed",
  "Fiber",
];

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

const FieldSetup = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState("Cereal");
  const [selectedCrop, setSelectedCrop] = useState("");
  const [soilType, setSoilType] = useState("");
  const [fieldSize, setFieldSize] = useState("");
  const [unit, setUnit] = useState("Killa");
  const [waterSource, setWaterSource] = useState("");

  // Filter crops based on selected category
  const filteredCrops = crops.filter(
    (crop) => crop.category === category
  );

  // Get selected crop data
  const selectedCropData = crops.find(
    (crop) => crop.id === selectedCrop
  );

  // Soil types only for selected crop
  const relevantSoilTypes = selectedCropData
    ? selectedCropData.soilTypes
    : [];

  const handleContinue = () => {
    if (!selectedCrop || !soilType || !fieldSize || !waterSource) {
      alert("Please complete all required fields");
      return;
    }

    navigate("/field-status");
  };

  return (
    <div className="min-h-screen bg-[#dbe4d8] flex justify-center">
      <div className="w-full max-w-md px-4 py-6">
        <div className="bg-white rounded-2xl shadow-md p-5">

          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => navigate("/register")}
              className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-green-200 transition"
            >
              <ChevronLeft size={24} className="text-green-900" />
            </button>
            <h1 className="text-lg font-semibold text-green-800">
              Field Setup
            </h1>
          </div>

          {/* Category Selection */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setCategory(cat);
                  setSelectedCrop("");
                  setSoilType("");
                }}
                className={`px-4 py-1 rounded-full border text-sm transition ${
                  category === cat
                    ? "bg-green-700 text-white border-green-700"
                    : "border-green-600 text-green-700 hover:bg-green-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Crop Selection */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            {filteredCrops.map((crop) => (
              <button
                key={crop.id}
                onClick={() => {
                  setSelectedCrop(crop.id);
                  setSoilType("");
                }}
                className={`border rounded-xl p-4 text-sm font-medium transition ${
                  selectedCrop === crop.id
                    ? "border-green-700 bg-green-50"
                    : "border-green-400 hover:border-green-600"
                }`}
              >
                {crop.name}
              </button>
            ))}
          </div>

          {/* Soil Type (Appears After Crop Selection) */}
          {selectedCrop && (
            <div className="mt-6">
              <label className="text-sm font-semibold text-green-800">
                Soil Type
              </label>
              <div className="flex flex-wrap gap-2 mt-2">
                {relevantSoilTypes.map((soil) => (
                  <button
                    key={soil}
                    onClick={() => setSoilType(soil)}
                    className={`px-4 py-1 rounded-full border text-sm transition ${
                      soilType === soil
                        ? "bg-green-700 text-white border-green-700"
                        : "border-green-600 text-green-700 hover:bg-green-50"
                    }`}
                  >
                    {soil}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Field Size */}
          <div className="mt-6">
            <label className="text-sm font-semibold text-green-800">
              Field Size
            </label>
            <input
              type="number"
              value={fieldSize}
              onChange={(e) => setFieldSize(e.target.value)}
              placeholder="Enter size"
              className="mt-2 w-full border border-green-600 rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-green-500/20"
            />
          </div>

          {/* Units */}
          <div className="flex flex-wrap gap-2 mt-3">
            {units.map((u) => (
              <button
                key={u}
                onClick={() => setUnit(u)}
                className={`px-4 py-1 rounded-full border text-sm transition ${
                  unit === u
                    ? "bg-green-700 text-white border-green-700"
                    : "border-green-600 text-green-700 hover:bg-green-50"
                }`}
              >
                {u}
              </button>
            ))}
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
                  className={`px-4 py-1 rounded-full border text-sm transition ${
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

          {/* Continue Button */}
          <div className="w-full mt-10 flex justify-center">
            <button
              onClick={handleContinue}
              className="w-full max-w-[300px] bg-[#2d5a27] hover:bg-[#1e3d1a] text-white py-4 rounded-[40px] shadow-xl transition active:scale-95"
            >
              Continue
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FieldSetup;

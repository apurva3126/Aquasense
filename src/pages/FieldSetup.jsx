import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { crops } from "../data/cropsData";   // 👈 static crops file

const categories = [
  "Cereal",
  "Vegetable",
  "Pulse",
  "Fruit",
  "Oilseed",
  "Commercial",
];

const units = [
  "Killa","Kanal","Marla","Bigha",
  "Hectare","Acre","Square meter","Square foot"
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

  const filteredCrops = crops.filter(
    (crop) => crop.category === category
  );

  const selectedCropData = crops.find(
    (crop) => crop.id === selectedCrop
  );

  const relevantSoilTypes = selectedCropData?.soilTypes || [];

  const handleContinue = () => {
    if (!selectedCrop || !soilType || !fieldSize || !waterSource) {
      alert("Please complete all required fields");
      return;
    }

    console.log({
      crop: selectedCropData.name,
      soil: soilType,
      size: fieldSize,
      unit,
      waterSource
    });

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
              className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-green-200"
            >
              <ChevronLeft size={24} className="text-green-900" />
            </button>
            <h1 className="text-lg font-semibold text-green-800">
              Field Setup
            </h1>
          </div>

          {/* Category */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setCategory(cat);
                  setSelectedCrop("");
                  setSoilType("");
                }}
                className={`px-4 py-1 rounded-full border text-sm ${
                  category === cat
                    ? "bg-green-700 text-white"
                    : "border-green-600 text-green-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Crop */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            {filteredCrops.map((crop) => (
              <button
                key={crop.id}
                onClick={() => {
                  setSelectedCrop(crop.id);
                  setSoilType("");
                }}
                className={`border rounded-xl p-4 text-sm ${
                  selectedCrop === crop.id
                    ? "border-green-700 bg-green-50"
                    : "border-green-400"
                }`}
              >
                {crop.name}
              </button>
            ))}
          </div>

          {/* Soil Type */}
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
                    className={`px-4 py-1 rounded-full border text-sm ${
                      soilType === soil
                        ? "bg-green-700 text-white"
                        : "border-green-600 text-green-700"
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
              value={fieldSize}
              onChange={(e) => setFieldSize(e.target.value)}
              className="mt-2 w-full border rounded-full px-4 py-2"
              placeholder="Enter size"
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
                    ? "bg-green-700 text-white"
                    : "border-green-600 text-green-700"
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
                  className={`px-4 py-1 rounded-full border text-sm ${
                    waterSource === src
                      ? "bg-green-700 text-white"
                      : "border-green-600 text-green-700"
                  }`}
                >
                  {src}
                </button>
              ))}
            </div>
          </div>

          {/* Continue */}
          <div className="w-full mt-10 flex justify-center">
            <button
              onClick={handleContinue}
              className="w-full max-w-[300px] bg-[#2d5a27] text-white py-4 rounded-[40px]"
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
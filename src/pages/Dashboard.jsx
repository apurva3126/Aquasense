import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    /* OUTER BACKGROUND (outside app) */
    <div className="min-h-screen bg-[#eaf3ec] flex justify-center">
      
      {/* APP BOUNDARY (phone-like) */}
      <div className="w-full max-w-[420px] min-h-screen bg-[#f8f9f8] shadow-xl">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-green-700 to-green-500 px-4 py-5 rounded-b-3xl">
          <div className="flex items-center gap-3 text-white">
            <button
              onClick={() => navigate("/field-status")}
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20"
            >
              <ChevronLeft size={28} />
            </button>

            <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center text-green-800 font-bold">
              🤖
            </div>

            <div>
              <h1 className="text-lg font-semibold">
                Smart Soil Monitor
              </h1>
              <p className="text-xs opacity-80">
                Real-time field intelligence
              </p>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="px-4 py-6 space-y-4">

          {/* Soil Moisture */}
          <div className="bg-white rounded-2xl p-4 shadow border border-green-100">
            <h3 className="text-sm font-semibold text-green-900 flex items-center gap-1">
              Soil Moisture
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            </h3>

            <div className="flex justify-between items-center mt-3">
              <div>
                <div className="text-3xl font-bold text-green-900">
                  62%
                </div>
                <p className="text-xs text-green-700 mt-1">
                  Optimal range
                </p>
              </div>

              <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center text-xs text-green-700">
                Gauge
              </div>
            </div>
          </div>

          {/* Soil Humidity */}
          <div className="bg-white rounded-2xl p-4 shadow border border-green-100">
            <h3 className="text-sm font-semibold text-green-900 flex items-center gap-1">
              Soil Humidity
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            </h3>

            <div className="mt-3">
              <div className="text-3xl font-bold text-green-900">
                48%
              </div>
              <p className="text-xs text-green-700 mt-1">
                Stable
              </p>

              <div className="mt-3 h-10 bg-green-100 rounded-lg overflow-hidden">
                <div className="h-full w-[48%] bg-green-400 rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Temperature */}
          <div className="bg-white rounded-2xl p-4 shadow border border-green-100">
            <h3 className="text-sm font-semibold text-green-900 flex items-center gap-1">
              Temperature
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            </h3>

            <div className="mt-3">
              <div className="text-3xl font-bold text-green-900">
                29°C
              </div>
              <p className="text-xs text-green-700 mt-1">
                Current level
              </p>

              <div className="mt-3 h-10 bg-green-100 rounded-lg"></div>
            </div>
          </div>

          {/* Pressure */}
          <div className="bg-white rounded-2xl p-4 shadow border border-green-100">
            <h3 className="text-sm font-semibold text-green-900 flex items-center gap-1">
              Pressure
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            </h3>

            <div className="flex justify-between items-center mt-3">
              <div>
                <div className="text-3xl font-bold text-green-900">
                  1012 hPa
                </div>
                <p className="text-xs text-green-700 mt-1">
                  Normal pressure
                </p>
              </div>

              <div className="w-16 h-16 rounded-full border-4 border-green-400 flex items-center justify-center text-xs text-green-700">
                Meter
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

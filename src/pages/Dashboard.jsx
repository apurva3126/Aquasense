import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { CheckCircle2 } from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    /* OUTER BACKGROUND (outside app) */
    <div className="min-h-screen bg-[#eaf3ec] flex justify-center">
      
      {/* APP BOUNDARY (phone-like) */}
      <div className="w-full max-w-[420px] min-h-screen bg-[#f8f9f8] shadow-xl">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-[#2d5a27] to-green-700 px-4 py-5 rounded-b-3xl">
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

          {/* Soil Moisture */}
          <div className="bg-white rounded-2xl p-4 shadow border border-green-100">
            <h3 className="text-sm font-semibold text-green-900 flex items-center gap-1">
              Soil Moisture
              <span className="w-2 h-2 bg-green-700 rounded-full"></span>
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

              <div className="w-16 h-16 rounded-full border-4 border-green-700 flex items-center justify-center text-xs text-green-700">
                Gauge
              </div>
            </div>
          </div>

          {/* Soil Humidity */}
          <div className="bg-white rounded-2xl p-4 shadow border border-green-100">
            <h3 className="text-sm font-semibold text-green-900 flex items-center gap-1">
              Humidity
              <span className="w-2 h-2 bg-green-700 rounded-full"></span>
            </h3>

            <div className="mt-3">
              <div className="text-3xl font-bold text-green-900">
                48%
              </div>
              <p className="text-xs text-green-700 mt-1">
                Stable
              </p>

              <div className="mt-3 h-10 bg-green-100 rounded-lg overflow-hidden">
                <div className="h-full w-[48%] bg-gradient-to-r from-[#2d5a27] to-green-700 rounded-lg"></div>
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

              <div className="w-16 h-16 rounded-full border-4 border-green-700 flex items-center justify-center text-xs text-green-700">
                Meter
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

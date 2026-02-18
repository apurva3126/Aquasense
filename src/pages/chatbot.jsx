import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { ChevronLeft } from "lucide-react";


export default function ChatBot() {
  const navigate = useNavigate();

  // Text input state
  const [message, setMessage] = useState("");

  // Mic listening state
  const [listening, setListening] = useState(false);

  // Speech recognition reference
  const recognitionRef = useRef(null);

  // Start speech-to-text
  const startListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech recognition not supported in this browser");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-IN"; // change to "hi-IN" for Hindi
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setMessage(transcript);
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  return (
    <div className="min-h-screen bg-green-50 flex justify-center">
      {/* Phone-sized container */}
      <div className="w-full max-w-[420px] min-h-screen bg-white shadow-xl flex flex-col">

        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 bg-[#2d5a27]">
          <button
  onClick={() => navigate("/field-status")}
  className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-green-200 transition"
>
  <ChevronLeft size={32} className="text-white" />
</button>


          <div className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
            🤖
          </div>

          <h1 className="text-base font-semibold text-white">
            AI Chatbot
          </h1>
        </div>

        {/* Chat area (empty state) */}
        <div className="flex-1 flex items-center justify-center text-center px-4">
          <div>
            <p className="text-green-800 font-medium">No messages yet</p>
            <p className="text-xs text-green-700 opacity-70 mt-1">
              Start the conversation by typing or speaking below
            </p>
          </div>
        </div>

        {/* Input area */}
        <div className="p-3 border-t flex items-center gap-2">

          {/* Mic button */}
          <button
            onClick={startListening}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition
              ${listening ? "bg-red-500 text-white" : "bg-green-100 text-green-800"}
            `}
          >
            🎤
          </button>

          {/* Text input */}
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Send button (disabled for now) */}
          <button
            className="bg-green-600 text-white px-4 py-2 rounded-full disabled:opacity-50"
            disabled={!message}
          >
            ➤
          </button>

        </div>
      </div>
    </div>
  );
}

"use client";

import { MdContentCopy } from "react-icons/md";
import toast from "react-hot-toast";

export default function CopyButton() {

  const handleCopy = async () => {
    const url = window.location.href;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(url);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = url;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }

      // ✅ Glass Toast
      toast.success("Link Copied!", {
        duration: 2000,
        style: {
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          color: "#000",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "12px",
          padding: "10px 16px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
        },
        iconTheme: {
          primary: "#00a20b",
          secondary: "#fff",
        },
      });

    } catch (err) {
      console.error("Copy failed:", err);

      toast.error("Copy failed!", {
        style: {
          background: "rgba(255, 0, 0, 0.1)",
          backdropFilter: "blur(12px)",
          color: "#000",
          borderRadius: "12px",
        },
      });
    }
  };

  return (
    <MdContentCopy
      onClick={handleCopy}
      title="Copy Link"
      className="text-gray-500 hover:text-black duration-200 transition-all text-2xl cursor-pointer"
    />
  );
}
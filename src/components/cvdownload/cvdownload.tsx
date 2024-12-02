import { Download } from "lucide-react";

export default function CVDownload() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/your-cv.pdf";
    link.download = "Your_Name_CV.pdf";
    link.click();
  };

  return (
    <div className="flex justify-center py-8">
      <button
        onClick={handleDownload}
        className="flex items-center gap-2 px-6 py-3 
          bg-slate-800 text-slate-200 
          border border-slate-700 
          rounded-lg 
          hover:bg-slate-700 
          hover:border-slate-600 
          transition-colors duration-300 
          focus:outline-none focus:ring-2 focus:ring-slate-600"
      >
        <Download size={20} className="text-slate-300" />
        Download CV
      </button>
    </div>
  );
}

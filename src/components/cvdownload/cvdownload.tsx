import { Download } from "lucide-react";

interface CVDownloadProps {
  className?: string;
}

export default function CVDownload({ className = "" }: CVDownloadProps) {
  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = "/your-cv.pdf";
    link.download = "Your_Name_CV.pdf";

    // Ensure full compatibility across devices
    link.style.display = "none";
    document.body.appendChild(link);

    try {
      link.click();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      // Fallback method for mobile devices
      window.open(link.href, "_blank");
    } finally {
      // Clean up
      document.body.removeChild(link);
    }
  };

  return (
    <div className={`flex justify-center py-8 ${className}`}>
      <button
        onClick={handleDownload}
        className="flex items-center gap-2 px-6 py-3 
          bg-slate-800 text-slate-200 
          border border-slate-700 
          rounded-lg 
          hover:bg-slate-700 
          hover:border-slate-600 
          transition-colors duration-300 
          focus:outline-none focus:ring-2 focus:ring-slate-600
          active:scale-95" // Add subtle press effect for better mobile interaction
      >
        <Download size={20} className="text-slate-300" />
        Download CV
      </button>
    </div>
  );
}

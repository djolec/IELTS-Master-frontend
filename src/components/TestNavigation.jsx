import { ChevronLeft, ChevronRight } from "lucide-react";

const TestNavigation = ({ currentPassage, setCurrentPassage }) => {
  return (
    <div className="flex justify-between bg-gray-50 px-6">
      <button
        onClick={() => setCurrentPassage((prev) => prev - 1)}
        disabled={currentPassage === 0}
        className="flex items-center gap-2 px-4 py-2 border rounded-md disabled:opacity-50 cursor-pointer"
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="hidden sm:inline">Previous</span>
      </button>
      <button
        onClick={() => setCurrentPassage((prev) => prev + 1)}
        disabled={currentPassage === 2}
        className="flex items-center gap-2 px-4 py-2 border rounded-md disabled:opacity-50 cursor-pointer"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
};
export default TestNavigation;

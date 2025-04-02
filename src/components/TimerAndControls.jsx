import { Timer, ListChecks, Book } from "lucide-react";

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
};

const TimerAndControls = ({
  currentPassage,
  isTimerActive,
  setIsTimerActive,
  activeView,
  setActiveView,
  timeLeft,
}) => {
  return (
    <div className="w-full flex flex-col md:flex-row md:items-center gap-4 md:gap-20 mb-4">
      <div className="flex items-center justify-between md:justify-start gap-4 h-8">
        <h1 className="text-xl font-bold">Reading Test</h1>
        <span className="text-sm text-gray-500">
          Passage {currentPassage + 1}/3
        </span>
      </div>

      <div className="flex items-center justify-between md:justify-start gap-4 h-8">
        <div className="flex items-center gap-2">
          <Timer className="h-5 w-5 text-blue-600" />
          <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
        </div>
        <button
          onClick={() => setIsTimerActive(!isTimerActive)}
          className="px-4 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          {isTimerActive ? "Pause" : "Start"}
        </button>
        <button className="px-4 py-1 bg-green-600 text-white rounded-md hover:bg-green-700">
          Submit
        </button>
      </div>

      {/* Mobile View Toggle */}
      <div className="flex md:hidden gap-2 border rounded-lg p-1 bg-white h-12">
        <button
          onClick={() => setActiveView("passage")}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md ${
            activeView === "passage"
              ? "bg-blue-600 text-white"
              : "text-gray-600"
          }`}
        >
          <Book className="h-4 w-4" />
          <span>Passage</span>
        </button>

        <button
          onClick={() => setActiveView("questions")}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md ${
            activeView === "questions"
              ? "bg-blue-600 text-white"
              : "text-gray-600"
          }`}
        >
          <ListChecks className="h-4 w-4" />
          <span>Questions</span>
        </button>
      </div>
    </div>
  );
};
export default TimerAndControls;

import ReadingPassage from "./ReadingPassage";
import ReadingPassageQuestions from "./ReadingPassageQuestions";
import TimerAndControls from "./TimerAndControls";

const ReadingTest = () => {
  return (
    <main className="flex-1 bg-gray-50 flex flex-col max-h-[calc(100vh-7rem)] py-4 px-4 md:px-8">
      {/* Timer and Controls */}
      <TimerAndControls />

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row gap-6 h-full">
        {/* Reading Passage */}
        <ReadingPassage />

        {/* Questions */}
        <ReadingPassageQuestions />
      </div>
    </main>
  );
};
export default ReadingTest;

import { useState, useEffect } from "react";
import { passages } from "../data/reading";
import TimerAndControls from "../components/TimerAndControls";
import ReadingPassage from "../components/ReadingPassage";
import ReadingPassageQuestions from "../components/ReadingPassageQuestions";

const ReadingTestPage = () => {
  const [currentPassage, setCurrentPassage] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60 * 60);
  const [answers, setAnswers] = useState({});
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [activeView, setActiveView] = useState("passage"); // 'passage' or 'questions

  useEffect(() => {
    console.log(answers);
  }, [answers]);

  useEffect(() => {
    let interval;
    if (isTimerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, timeLeft]);

  const handleAnswerChange = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  return (
    <main className="flex-1 bg-gray-50 flex flex-col max-h-[calc(100vh-7rem)] py-4 px-4 md:px-8">
      {/* Timer and Controls */}
      <TimerAndControls
        currentPassage={currentPassage}
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
        activeView={activeView}
        setActiveView={setActiveView}
        timeLeft={timeLeft}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row gap-6 h-full">
        {/* Reading Passage */}
        <ReadingPassage
          activeView={activeView}
          passage={passages[currentPassage]}
        />

        {/* Questions */}
        <ReadingPassageQuestions
          activeView={activeView}
          passage={passages[currentPassage]}
          handleAnswerChange={handleAnswerChange}
          answers={answers}
          currentPassage={currentPassage}
          setCurrentPassage={setCurrentPassage}
        />
      </div>
    </main>
  );
};
export default ReadingTestPage;

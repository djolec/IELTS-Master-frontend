import { useReadingTest } from "../context/ReadingTestContext";
import QuestionSection from "./QuestionSection";
import TestNavigation from "./TestNavigation";

const ReadingPassageQuestions = () => {
  const {
    activeView,
    passages,
    handleAnswerChange,
    answers,
    currentPassage,
    setCurrentPassage,
  } = useReadingTest();

  const passage = passages[currentPassage];

  return (
    <div
      className={`w-full md:w-1/2 ${
        activeView === "passage" ? "hidden md:block" : ""
      }`}
    >
      <div className="h-full flex flex-col gap-4 max-h-[calc(100vh-320px)] md:max-h-[calc(100vh-192px)]">
        <div className="overflow-y-auto">
          <div className="space-y-6">
            {passage.questions.map((section, sectionIndex) => (
              <QuestionSection
                key={sectionIndex}
                section={section}
                handleAnswerChange={handleAnswerChange}
                answers={answers}
              />
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <TestNavigation
          currentPassage={currentPassage}
          setCurrentPassage={setCurrentPassage}
          length={passages.length}
        />
      </div>
    </div>
  );
};
export default ReadingPassageQuestions;

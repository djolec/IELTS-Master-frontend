import { createContext, useState, useContext, useEffect } from "react";
import { passages } from "../data/reading2";

const ReadingTestContext = createContext();

const ReadingTestProvider = ({ children }) => {
  const [currentPassage, setCurrentPassage] = useState(0);
  const [answers, setAnswers] = useState({});
  const [activeView, setActiveView] = useState("passage");

  useEffect(() => {
    console.log(answers);
  }, [answers]);

  const handleAnswerChange = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  return (
    <ReadingTestContext.Provider
      value={{
        currentPassage,
        setCurrentPassage,
        answers,
        handleAnswerChange,
        activeView,
        setActiveView,
        passages,
      }}
    >
      {children}
    </ReadingTestContext.Provider>
  );
};

const useReadingTest = () => {
  const context = useContext(ReadingTestContext);

  if (context === undefined)
    throw new Error("ReadingTestContext was used outside ReadingTestProvider");

  return context;
};

export { ReadingTestProvider, useReadingTest };

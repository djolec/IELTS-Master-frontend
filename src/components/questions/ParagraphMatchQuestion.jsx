"use client";

const ParagraphMatchQuestion = ({ answers, handleAnswerChange, section }) => {
  return (
    <>
      {section.questions.map((question) => (
        <div
          key={question.id}
          className="space-y-2 mb-4 pb-4 border-b last:border-0"
        >
          <p className="font-medium">
            {question.id}. {question.text}
          </p>
          <select
            value={answers[question.id] || ""}
            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
            className="w-full md:w-40 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="">Select paragraph</option>
            {section.paragraphLetters.map((letter) => (
              <option key={letter} value={letter}>
                Paragraph {letter}
              </option>
            ))}
          </select>
        </div>
      ))}
    </>
  );
};

export default ParagraphMatchQuestion;

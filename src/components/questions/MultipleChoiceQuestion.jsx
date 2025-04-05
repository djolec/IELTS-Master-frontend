const MultipleChoiceQuestion = ({ question, answers, handleAnswerChange }) => {
  return (
    <div key={question.id} className="space-y-4">
      <p className="font-medium">
        {question.id}. {question.text}
      </p>
      <div className="space-y-2">
        {question.options.map((option, optIndex) => (
          <label
            key={optIndex}
            className="flex items-start gap-2 cursor-pointer"
          >
            <input
              type="radio"
              name={`q${question.id}`}
              value={String.fromCharCode(65 + optIndex)} // A, B, C, D...
              checked={
                answers[question.id] === String.fromCharCode(65 + optIndex)
              }
              onChange={(e) => handleAnswerChange(question.id, e.target.value)}
              className="mt-1 text-blue-600"
            />
            <span>
              <strong>{String.fromCharCode(65 + optIndex)}.</strong> {option}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};
export default MultipleChoiceQuestion;

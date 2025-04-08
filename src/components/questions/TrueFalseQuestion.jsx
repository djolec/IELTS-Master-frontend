const TrueFalseQuestion = ({ section, answers, handleAnswerChange }) => (
  <>
    {section.questions.map((question) => (
      <div key={question.id} className="space-y-2">
        <p className="font-medium">
          {question.id}. {question.text}
        </p>
        <div className="flex gap-4">
          {section.options.map((option) => (
            <label key={option} className="flex items-center gap-2">
              <input
                type="radio"
                name={`q${question.id}`}
                value={option}
                checked={answers[question.id] === option}
                onChange={(e) =>
                  handleAnswerChange(question.id, e.target.value)
                }
                className="text-blue-600"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>
    ))}
  </>
);
export default TrueFalseQuestion;

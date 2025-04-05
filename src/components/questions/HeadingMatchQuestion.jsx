const HeadingMatchQuestion = ({ section, answers, handleAnswerChange }) => (
  <>
    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
      <h4 className="font-medium mb-3">List of Headings</h4>
      <ol className="list-roman space-y-2 pl-4">
        {section.headings.map((heading, index) => (
          <li key={index} className="text-gray-600">
            {index + 1} - {heading}
          </li>
        ))}
      </ol>
    </div>

    {section.questions.map((question) => (
      <div key={question.id} className="space-y-2">
        <p className="font-medium">
          {question.id}. {question.text}
        </p>
        <select
          value={answers[question.id] || ""}
          onChange={(e) => handleAnswerChange(question.id, e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="">Select a heading</option>
          {section.headings.map((_, index) => (
            <option key={index} value={`${index + 1}`}>
              {`${index + 1}`}
            </option>
          ))}
        </select>
      </div>
    ))}
  </>
);
export default HeadingMatchQuestion;

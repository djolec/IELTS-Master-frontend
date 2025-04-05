const ShortAnswerQuestion = ({ question, answers, handleAnswerChange }) => (
  <div className="space-y-2">
    <p className="font-medium">
      {question.id}. {question.text}
    </p>
    <input
      type="text"
      value={answers[question.id] || ""}
      onChange={(e) => handleAnswerChange(question.id, e.target.value)}
      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
      placeholder="Type your answer here"
    />
  </div>
);
export default ShortAnswerQuestion;

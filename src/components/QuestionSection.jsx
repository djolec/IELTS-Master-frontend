import HeadingMatchQuestion from "./questions/HeadingMatchQuestion";
import ShortAnswerQuestion from "./questions/ShortAnswerQuestion";
import TrueFalseQuestion from "./questions/TrueFalseQuestion";
import MultipleChoiceQuestion from "./questions/MultipleChoiceQuestion";
import FlowChart from "./questions/FlowChart";

const QuestionSection = ({ section, handleAnswerChange, answers }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-bold mb-2">{section.title}</h3>
      <p className="text-gray-600 mb-6">{section.instruction}</p>

      <div className="space-y-6">
        {(section.type === "true-false-ng" || section.type === "yes-no-ng") &&
          section.questions.map((question) => (
            <TrueFalseQuestion
              key={question.id}
              question={question}
              options={section.options}
              answers={answers}
              handleAnswerChange={handleAnswerChange}
            />
          ))}

        {section.type === "short-answer" &&
          section.questions.map((question) => (
            <ShortAnswerQuestion
              key={question.id}
              question={question}
              answers={answers}
              handleAnswerChange={handleAnswerChange}
            />
          ))}

        {section.type === "heading-match" && (
          <HeadingMatchQuestion
            section={section}
            answers={answers}
            handleAnswerChange={handleAnswerChange}
          />
        )}

        {section.type === "flow-chart" && (
          <FlowChart
            section={section}
            handleAnswerChange={handleAnswerChange}
            answers={answers}
          />
        )}

        {section.type === "multiple-choice" && (
          <>
            {section.questions.map((question) => (
              <MultipleChoiceQuestion
                key={question}
                question={question}
                answers={answers}
                handleAnswerChange={handleAnswerChange}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default QuestionSection;

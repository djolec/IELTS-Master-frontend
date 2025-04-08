import HeadingMatchQuestions from "./questions/HeadingMatchQuestions";
import ShortAnswerQuestion from "./questions/ShortAnswerQuestion";
import TrueFalseQuestion from "./questions/TrueFalseQuestion";
import MultipleChoiceQuestion from "./questions/MultipleChoiceQuestion";
import FlowChart from "./questions/FlowChart";
import ParagraphMatchQuestion from "./questions/ParagraphMatchQuestion";
import NotesCompletionQuestions from "./questions/NotesCompletionQuestions";
import TableCompletionQuestions from "./questions/TableCompletionQuestions";

const QuestionSection = ({ section, handleAnswerChange, answers }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6 flex flex-col gap-2">
        <h3 className="text-lg font-bold">{section.title}</h3>
        <p className="text-gray-600">{section.instruction}</p>
        {section.note && <p className="text-gray-600 italic">{section.note}</p>}
      </div>

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
          <HeadingMatchQuestions
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
                key={question.id}
                question={question}
                answers={answers}
                handleAnswerChange={handleAnswerChange}
              />
            ))}
          </>
        )}

        {section.type === "paragraph-match" && (
          <>
            {section.questions.map((question) => (
              <ParagraphMatchQuestion
                key={question.id}
                answers={answers}
                question={question}
                handleAnswerChange={handleAnswerChange}
                paragraphLetters={section.paragraphLetters}
              />
            ))}
          </>
        )}

        {section.type === "table-completion" && (
          <TableCompletionQuestions
            section={section}
            answers={answers}
            handleAnswerChange={handleAnswerChange}
          />
        )}

        {section.type === "notes-completion" && (
          <NotesCompletionQuestions
            section={section}
            answers={answers}
            handleAnswerChange={handleAnswerChange}
          />
        )}
      </div>
    </div>
  );
};

export default QuestionSection;

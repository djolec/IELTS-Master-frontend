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
        {(section.type === "true-false-ng" || section.type === "yes-no-ng") && (
          <TrueFalseQuestion
            section={section}
            answers={answers}
            handleAnswerChange={handleAnswerChange}
          />
        )}

        {section.type === "short-answer" && (
          <ShortAnswerQuestion
            section={section}
            answers={answers}
            handleAnswerChange={handleAnswerChange}
          />
        )}

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
          <MultipleChoiceQuestion
            section={section}
            answers={answers}
            handleAnswerChange={handleAnswerChange}
          />
        )}

        {section.type === "paragraph-match" && (
          <ParagraphMatchQuestion
            answers={answers}
            section={section}
            handleAnswerChange={handleAnswerChange}
          />
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

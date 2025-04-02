import HeadingMatchQuestion from "./HeadingMatchQuestion";
import ShortAnswerQuestion from "./ShortAnswerQuestion";
import TrueFalseQuestion from "./TrueFalseQuestion";

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
          <>
            <div className="space-y-6">
              <h4 className="font-medium">{section.chartTitle}</h4>

              <div className="border rounded-lg p-4 bg-white">
                {section.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="mb-6 last:mb-0">
                    <div className="font-medium mb-2">{step.title}</div>
                    <div className="pl-4 border-l-2 border-blue-200">
                      {step.content.map((item, itemIndex) => {
                        // Check if this item contains a blank to fill
                        const hasBlank = item.questionId !== undefined;

                        if (!hasBlank) {
                          // Regular text content
                          return (
                            <p key={itemIndex} className="">
                              {item.text}
                            </p>
                          );
                        } else {
                          // Content with blank to fill
                          const parts = item.text.split("......");

                          return (
                            <div key={itemIndex} className="">
                              <span className="">{parts[0]}</span>

                              <input
                                type="text"
                                value={answers[item.questionId] || ""}
                                onChange={(e) =>
                                  handleAnswerChange(
                                    item.questionId,
                                    e.target.value
                                  )
                                }
                                className="w-40 px-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-center inline-block mx-1"
                                placeholder="Answer"
                              />

                              {/* <div className="text-xs text-gray-500 text-center mt-1">
                                  {item.questionId}
                                </div> */}

                              <span className="">{parts[1] || ""}</span>
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {section.type === "multiple-choice" && (
          <>
            {section.questions.map((question) => (
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
                          answers[question.id] ===
                          String.fromCharCode(65 + optIndex)
                        }
                        onChange={(e) =>
                          handleAnswerChange(question.id, e.target.value)
                        }
                        className="mt-1 text-blue-600"
                      />
                      <span>
                        <strong>{String.fromCharCode(65 + optIndex)}.</strong>{" "}
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default QuestionSection;

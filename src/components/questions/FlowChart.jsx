const FlowChart = ({ section, handleAnswerChange, answers }) => {
  return (
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
                  return <p key={itemIndex}>{item.text}</p>;
                } else {
                  // Content with blank to fill
                  const parts = item.text.split("......");

                  return (
                    <div key={itemIndex}>
                      <span>{parts[0]}</span>
                      <div className="inline-block relative mx-2">
                        <input
                          type="text"
                          value={answers[item.questionId] || ""}
                          onChange={(e) =>
                            handleAnswerChange(item.questionId, e.target.value)
                          }
                          className="w-44 px-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-center"
                          placeholder="Answer"
                        />
                        <span className="absolute top-1/2 left-0 text-xs bg-white font-bold -translate-x-1/2 -translate-y-1/2">
                          {item.questionId}
                        </span>
                      </div>

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
  );
};
export default FlowChart;

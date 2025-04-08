const NotesCompletionQuestions = ({ section, answers, handleAnswerChange }) => {
  return (
    <div className="space-y-4">
      {section.title && (
        <h4 className="font-medium text-gray-700">{section.title}</h4>
      )}

      {section.notes.map((noteGroup, groupIndex) => (
        <div key={groupIndex} className="mb-4">
          {noteGroup.heading && (
            <h5 className="font-medium mb-2">{noteGroup.heading}</h5>
          )}

          <ul className="pl-4 space-y-2 list-disc">
            {noteGroup.items.map((item, itemIndex) => {
              // Check if this item contains a question
              const hasQuestion = item.questionId !== undefined;

              // If it doesn't have a question, just render the text
              if (!hasQuestion) {
                return (
                  <li
                    key={`${groupIndex}-${itemIndex}`}
                    className="text-gray-700"
                  >
                    {item.text}
                  </li>
                );
              }

              // If it has a question, split the text at the blank and insert an input
              const parts = item.text.split("...........");

              return (
                <li
                  key={`${groupIndex}-${itemIndex}`}
                  className="text-gray-700"
                >
                  {/* <span className="w-1.5 h-1.5 bg-black rounded translate-y-3 mr-2 shrink-0" /> */}
                  <div className="">
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
                    <span className="break-words">{parts[1]}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default NotesCompletionQuestions;

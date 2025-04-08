const TableCompletionQuestions = ({ section, answers, handleAnswerChange }) => {
  // Helper function to render text with input field for blanks
  const renderTextWithBlanks = (content) => {
    // If content is a simple string with no blanks, just return it
    if (typeof content === "string" && !content.includes("...........")) {
      return <li>{content}</li>;
    }

    // If content is an object with textBefore, textAfter, and questionId properties
    if (content && typeof content === "object" && "questionId" in content) {
      return (
        <li>
          <span>{content.textBefore}</span>
          <div className="inline-block relative">
            <input
              type="text"
              value={answers[content.questionId] || ""}
              onChange={(e) =>
                handleAnswerChange(content.questionId, e.target.value)
              }
              className="w-44 px-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-center"
              placeholder="Answer"
            />
            <span className="absolute top-1/2 left-0 text-xs bg-white font-bold -translate-x-1/2 -translate-y-1/2">
              {content.questionId}
            </span>
          </div>
          <span>{content.textAfter}</span>
        </li>
      );
    }

    // If content is an array (list of items)
    if (Array.isArray(content)) {
      return (
        <>
          {content.map((item, index) => (
            <span key={index} className="text-gray-700">
              {renderTextWithBlanks(item)}
            </span>
          ))}
        </>
      );
    }

    // Fallback
    return <span>{String(content)}</span>;
  };

  return (
    <div className="space-y-4">
      {section.tableTitle && (
        <h4 className="font-medium text-gray-700 mb-2">{section.tableTitle}</h4>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              {section.columns.map((column, index) => (
                <th
                  key={index}
                  className="border border-gray-300 px-4 py-2 text-left"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                {/* Strategy column */}
                <td className="border border-gray-300 px-4 py-3 align-top font-medium">
                  {row.strategy}
                </td>

                {/* Approach column */}
                <td className="border border-gray-300 px-4 py-3 align-top">
                  <ul className="list-disc pl-1">
                    {renderTextWithBlanks(row.approach)}
                  </ul>
                </td>

                {/* Customer column */}
                <td className="border border-gray-300 px-4 py-3 align-top">
                  <ul className="list-disc pl-1">
                    {renderTextWithBlanks(row.customer)}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableCompletionQuestions;

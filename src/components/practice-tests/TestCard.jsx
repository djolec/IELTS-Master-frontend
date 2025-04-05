import { Calendar, CheckCircle, Clock } from "lucide-react";
import { Link } from "react-router";

const TestCard = ({ test, activeTab }) => {
  const formatDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div
      key={test.id}
      className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold">{test.testNumber}</h3>
            {test.type && (
              <span className="text-sm text-gray-500">{test.type}</span>
            )}
          </div>
          {test.completed && (
            <div className="flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
              <CheckCircle className="h-3 w-3 mr-1" />
              Completed
            </div>
          )}
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">
            {activeTab === "reading" ? "Passages:" : "Sections:"}
          </h4>
          <ul className="space-y-1 text-sm text-gray-600">
            {activeTab === "reading"
              ? test.passages.map((passage, index) => (
                  <li key={index} className="line-clamp-1">
                    • {passage.title}{" "}
                    <span className="text-gray-500">({passage.topic})</span>
                  </li>
                ))
              : test.sections.map((section, index) => (
                  <li key={index} className="line-clamp-1">
                    • {section.title}
                  </li>
                ))}
          </ul>
        </div>

        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Clock className="h-4 w-4 mr-1" />
          <span>{test.estimatedTime} minutes</span>

          {test.lastAttemptDate && (
            <>
              <span className="mx-2">•</span>
              <Calendar className="h-4 w-4 mr-1" />
              <span>Last attempt: {formatDate(test.lastAttemptDate)}</span>
            </>
          )}
        </div>

        {test.completed ? (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-600">Previous Score</span>
              <span className="text-sm font-medium">
                {test.lastScore}/{test.totalQuestions}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{
                  width: `${(test.lastScore / test.totalQuestions) * 100}%`,
                }}
              ></div>
            </div>
            <div className="text-right text-xs text-gray-500 mt-1">
              Band Score:{" "}
              {Math.floor((test.lastScore / test.totalQuestions) * 9)}
            </div>
          </div>
        ) : (
          <div className="h-10"></div> // Spacer for alignment
        )}

        <div className="flex justify-between items-center">
          <Link
            href={`/${activeTab === "reading" ? "reading" : "listening"}-test/${
              test.id
            }`}
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            {test.completed ? "Retake Test" : "Start Test"}
          </Link>

          {test.completed && (
            <Link
              href={`/results/${
                activeTab === "reading" ? "reading" : "listening"
              }/${test.id}`}
              className="text-blue-600 text-sm hover:underline"
            >
              View Results
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default TestCard;

import { useReadingTest } from "../context/ReadingTestContext";

const ReadingPassage = () => {
  const { activeView, passages, currentPassage } = useReadingTest();
  const passage = passages[currentPassage];

  return (
    <div
      className={`w-full md:w-1/2 flex-1 ${
        activeView === "questions" ? "hidden md:block" : ""
      }`}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 max-h-[calc(100vh-320px)] md:max-h-[calc(100vh-192px)] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-2">{passage.title}</h2>
        <h3 className="text-lg text-gray-600 mb-4">{passage.subtitle}</h3>
        <div className="prose max-w-none">
          {passage.content.map((paragraph, index) => {
            return (
              <div key={index} className="not-last:mb-4 flex items-start gap-2">
                {paragraph.paragraphLetter && (
                  <span className="font-bold">{paragraph.paragraphLetter}</span>
                )}

                <div>
                  {paragraph.paragraphTitle && (
                    <h6 className="font-semibold">
                      {paragraph.paragraphTitle}
                    </h6>
                  )}
                  <p className="whitespace-pre-line">
                    {paragraph.paragraphContent}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ReadingPassage;

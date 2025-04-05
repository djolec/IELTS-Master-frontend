import { BookOpen, Headphones } from "lucide-react";

const TestTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex border-b mb-6">
      <button
        className={`cursor-pointer flex grow basis-0 items-center justify-center px-4 py-2 border-b-2 font-medium ${
          activeTab === "reading"
            ? "border-blue-600 text-blue-600"
            : "border-transparent text-gray-500 hover:text-gray-700"
        }`}
        onClick={() => setActiveTab("reading")}
      >
        <BookOpen className="h-5 w-5 mr-2" />
        Reading Tests
      </button>

      <button
        className={`cursor-pointer flex grow basis-0 items-center justify-center px-4 py-2 border-b-2 font-medium ${
          activeTab === "listening"
            ? "border-blue-600 text-blue-600"
            : "border-transparent text-gray-500 hover:text-gray-700"
        }`}
        onClick={() => setActiveTab("listening")}
      >
        <Headphones className="h-5 w-5 mr-2" />
        Listening Tests
      </button>
    </div>
  );
};
export default TestTabs;

import TestCard from "./TestCard";

const TestCards = ({ filteredTests, activeTab }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {filteredTests.map((test) => (
        <TestCard key={test.id} test={test} activeTab={activeTab} />
      ))}
    </div>
  );
};
export default TestCards;

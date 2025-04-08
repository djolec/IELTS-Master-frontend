import { ReadingTestProvider } from "../context/ReadingTestContext";
import ReadingTest from "../components/ReadingTest";

const ReadingTestPage = () => {
  return (
    <ReadingTestProvider>
      <ReadingTest />
    </ReadingTestProvider>
  );
};
export default ReadingTestPage;

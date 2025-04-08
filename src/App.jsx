import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import PricingPage from "./pages/PricingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReadingTestPage from "./pages/ReadingTestPage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import SubscribePage from "./pages/SubscribePage";
import { useAuth0 } from "@auth0/auth0-react";
import FeaturesPage from "./pages/FeaturesPage";
import PracticeTestsPage from "./pages/PracticeTestsPage";

function App() {
  const { isLoading } = useAuth0();

  return (
    <div className="flex flex-col min-h-[100dvh]">
      {isLoading ? (
        <div className="grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600" />
        </div>
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/practice-tests" element={<PracticeTestsPage />} />
            <Route path="/reading-test" element={<ReadingTestPage />} />
            <Route path="/auth-callback" element={<AuthCallbackPage />} />
            <Route path="/subscribe" element={<SubscribePage />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

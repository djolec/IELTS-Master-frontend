import { useAuth0 } from "@auth0/auth0-react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { useCreateCheckoutSession } from "../features/authentication/useOrderActions";

const SubscribePage = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [searchParams] = useSearchParams();

  const plan = searchParams.get("plan");
  const { isAuthenticated, user } = useAuth0();
  const { createCheckoutSession, isPending, error } =
    useCreateCheckoutSession();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleCheckout = async () => {
    setIsProcessing(true);

    const data = await createCheckoutSession({
      auth0Id: user.sub,
      email: user.email,
      plan,
    });
    window.location.href = data.url;
  };

  return (
    <div className="grow bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="p-8">
              <h1 className="text-2xl font-bold mb-2">
                Complete Your Subscription
              </h1>
              <p className="text-gray-600 mb-8">
                You're just one step away from accessing all our IELTS practice
                materials.
              </p>

              <div className="mb-8 p-6 bg-blue-50 rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="font-medium text-lg">
                      {plan === "monthly" ? "Monthly Plan" : "3-Month Plan"}
                    </span>
                    {plan === "quarterly" && (
                      <span className="ml-2 text-sm bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                        Save 15%
                      </span>
                    )}
                  </div>
                  <span className="text-2xl font-bold">
                    {plan === "monthly" ? "$19" : "$49"}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  {plan === "monthly"
                    ? "Billed monthly. Cancel anytime."
                    : "Billed once for 3 months. Cancel anytime."}
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">What's Included</h2>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                    <span>Unlimited Practice Tests</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                    <span>Detailed Performance Analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                    <span>Progress Tracking</span>
                  </li>
                  {plan === "quarterly" && (
                    <>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                        <span>Priority Support</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                        <span>Study Plan Template</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isProcessing}
                className={`cursor-pointer w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-4 rounded-md font-medium hover:bg-blue-700 transition-colors disabled:cursor-not-allowed ${
                  isProcessing ? "opacity-70" : ""
                }`}
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Proceed to Payment</span>
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                You'll be redirected to Stripe's secure payment page.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Have questions?{" "}
              <a href="/contact" className="text-blue-600 hover:underline">
                Contact our support team
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribePage;

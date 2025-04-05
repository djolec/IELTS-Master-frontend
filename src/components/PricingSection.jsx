import { CheckCircle } from "lucide-react";
import useHandlePlanSelection from "../hooks/useHandlePlanSelection";

const PricingSection = () => {
  const handlePlanSelection = useHandlePlanSelection();

  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-28 bg-sky-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl">
              Choose the plan that fits your preparation needs
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl items-stretch gap-6 py-12 lg:grid-cols-2">
          <div className="flex flex-col rounded-xl border bg-white p-6 shadow-lg">
            <div className="flex-1">
              <h3 className="text-xl font-bold">Monthly Plan</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold">$19</span>
                <span className="ml-1 text-gray-600">/month</span>
              </div>
              <ul className="mt-4 space-y-3 min-h-[160px]">
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
              </ul>
            </div>
            <div className="mt-6">
              <button
                onClick={() => handlePlanSelection("monthly")}
                className="inline-flex h-12 w-full items-center justify-center rounded-md bg-blue-600 px-6 text-sm font-medium text-white transition-colors hover:bg-blue-600/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
              >
                Get Started
              </button>
            </div>
          </div>

          <div className="flex flex-col rounded-xl border bg-white p-6 shadow-lg">
            <div className="flex-1">
              <div className="flex gap-4 items-center">
                <h3 className="text-xl font-bold">3-Month Plan</h3>
                <div>
                  <span className="text-sm text-green-600 font-medium">
                    Save 15%
                  </span>
                </div>
              </div>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold">$49</span>
                <span className="ml-1 text-gray-600">/3 months</span>
              </div>

              <ul className="mt-4 space-y-3 min-h-[160px]">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>All Monthly Plan Features</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>Priority Support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>Study Plan Template</span>
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <button
                onClick={() => handlePlanSelection("quarterly")}
                className="inline-flex h-12 w-full items-center justify-center rounded-md bg-blue-600 px-6 text-sm font-medium text-white transition-colors hover:bg-blue-600/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
              >
                Best Value - Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PricingSection;

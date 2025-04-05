import { Check, HelpCircle, X } from "lucide-react";
import { Link } from "react-router";
import useHandlePlanSelection from "../hooks/useHandlePlanSelection";

const PricingPage = () => {
  const handlePlanSelection = useHandlePlanSelection();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-12 lg:py-20 lg:pt-36 bg-gradient-to-b from-sky-100 to-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simple, Transparent Pricing
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Choose the plan that fits your preparation needs. All plans
                include a 14-day free trial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="w-full py-12 md:py-24 lg:py-28 bg-gradient-to-b from-white to-sky-100">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Monthly Plan */}
            <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg border border-gray-200 relative">
              <div className="flex flex-col space-y-2">
                <h3 className="text-2xl font-bold">Monthly Plan</h3>
                <p className="text-gray-500">
                  Perfect for short-term preparation
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">$19</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </div>
              <div className="mt-8 space-y-4 flex-1">
                <h4 className="font-semibold text-lg">What's included:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Unlimited Practice Tests</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Detailed Performance Analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Progress Tracking Dashboard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Basic Study Materials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Email Support</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => handlePlanSelection("monthly")}
                className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-6 font-medium text-white transition-colors hover:bg-blue-600/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                Get Started
              </button>
            </div>

            {/* 3-Month Plan */}
            <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg border-2 border-blue-600 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex gap-4 items-center">
                  <h3 className="text-2xl font-bold">3-Month Plan</h3>
                  <span className="text-sm text-green-600 font-medium">
                    Save 15%
                  </span>
                </div>
                <p className="text-gray-500">
                  Best value for serious preparation
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="text-gray-500">/3 months</span>
                </div>
              </div>
              <div className="mt-8 space-y-4 flex-1">
                <h4 className="font-semibold text-lg">
                  Everything in Monthly, plus:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Priority Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Personalized Study Plan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Advanced Study Materials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Progress Reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Score Prediction</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/register?plan=quarterly"
                className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-6 font-medium text-white transition-colors hover:bg-blue-600/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                Best Value - Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white border-t">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">
            Detailed Feature Comparison
          </h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center">Monthly</th>
                  <th className="py-4 px-6 text-center">3-Month Plan</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-4 px-6">Practice Tests</td>
                  <td className="py-4 px-6 text-center">Unlimited</td>
                  <td className="py-4 px-6 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Performance Analytics</td>
                  <td className="py-4 px-6 text-center">Basic</td>
                  <td className="py-4 px-6 text-center">Advanced</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Study Materials</td>
                  <td className="py-4 px-6 text-center">Basic</td>
                  <td className="py-4 px-6 text-center">Advanced</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Support</td>
                  <td className="py-4 px-6 text-center">Email</td>
                  <td className="py-4 px-6 text-center">Priority</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Study Plan</td>
                  <td className="py-4 px-6 text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Progress Reports</td>
                  <td className="py-4 px-6 text-center">Monthly</td>
                  <td className="py-4 px-6 text-center">Weekly</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Score Prediction</td>
                  <td className="py-4 px-6 text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <HelpCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <h3 className="font-semibold">Can I cancel my subscription?</h3>
              </div>
              <p className="text-gray-500 ml-7">
                Yes, you can cancel your subscription at any time. If you cancel
                during your free trial, you won't be charged.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <HelpCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <h3 className="font-semibold">
                  What payment methods do you accept?
                </h3>
              </div>
              <p className="text-gray-500 ml-7">
                We accept all major credit cards, PayPal, and local payment
                methods in select countries.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <HelpCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <h3 className="font-semibold">Do you offer refunds?</h3>
              </div>
              <p className="text-gray-500 ml-7">
                We offer a 30-day money-back guarantee if you're not satisfied
                with our service.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <HelpCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <h3 className="font-semibold">Are there any hidden fees?</h3>
              </div>
              <p className="text-gray-500 ml-7">
                No hidden fees. The price you see is the price you pay,
                including all features listed in your plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl font-bold">30-Day Money-Back Guarantee</h2>
            <p className="text-gray-600">
              Try IELTS Master risk-free. If you're not completely satisfied
              with our platform within the first 30 days, we'll refund your
              payment in full — no questions asked.
            </p>
            <Link
              href="/register"
              className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 font-medium text-white transition-colors hover:bg-blue-600/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              Start Your Free Trial Today
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PricingPage;

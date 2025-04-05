import {
  BookOpen,
  BarChart2,
  UserCheck,
  Award,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to Master IELTS
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools, practice, and
            guidance you need to achieve your target band score.
          </p>
        </div>
      </section>

      {/* Feature Categories Navigation */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#practice-tests"
              className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium hover:bg-blue-200 transition-colors"
            >
              Practice Tests
            </a>
            <a
              href="#analytics"
              className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium hover:bg-blue-200 transition-colors"
            >
              Analytics
            </a>
            <a
              href="#study-materials"
              className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium hover:bg-blue-200 transition-colors"
            >
              Study Materials
            </a>
            <a
              href="#personalization"
              className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium hover:bg-blue-200 transition-colors"
            >
              Personalization
            </a>
            <a
              href="#support"
              className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium hover:bg-blue-200 transition-colors"
            >
              Expert Support
            </a>
          </div>
        </div>
      </section>

      {/* Practice Tests Section */}
      <section id="practice-tests" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="flex items-center gap-2 text-blue-600 mb-4">
                <BookOpen className="h-6 w-6" />
                <h2 className="text-2xl font-bold">Authentic Practice Tests</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Practice with tests that mirror the real IELTS exam in format,
                difficulty, and timing. Our extensive library includes:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium">Full-Length Mock Tests</h3>
                    <p className="text-gray-600">
                      Complete tests with all four sections: Listening, Reading,
                      Writing, and Speaking
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium">Section-Specific Practice</h3>
                    <p className="text-gray-600">
                      Focus on individual sections to strengthen specific skills
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium">Realistic Timing</h3>
                    <p className="text-gray-600">
                      Built-in timers help you develop crucial time management
                      skills
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium">Varied Question Types</h3>
                    <p className="text-gray-600">
                      Experience all question formats you'll encounter on test
                      day
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="IELTS Practice Test Interface"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section id="analytics" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <div className="flex items-center gap-2 text-blue-600 mb-4">
                <BarChart2 className="h-6 w-6" />
                <h2 className="text-2xl font-bold">
                  Detailed Performance Analytics
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                Gain insights into your performance with comprehensive analytics
                that help you understand your strengths and weaknesses.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium">Score Breakdown</h3>
                    <p className="text-gray-600">
                      See your performance by section, question type, and
                      specific skills
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium">Progress Tracking</h3>
                    <p className="text-gray-600">
                      Visual charts show your improvement over time
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium">Weakness Identification</h3>
                    <p className="text-gray-600">
                      AI-powered analysis identifies areas needing improvement
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium">
                      Personalized Recommendations
                    </h3>
                    <p className="text-gray-600">
                      Get tailored suggestions for study materials based on your
                      results
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Performance Analytics Dashboard"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Study Materials Section */}
      <section id="study-materials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="flex items-center gap-2 text-blue-600 mb-4">
                <Award className="h-6 w-6" />
                <h2 className="text-2xl font-bold">
                  Comprehensive Study Materials
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                Access a rich library of resources designed specifically for
                IELTS success, created by experienced instructors.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium">IELTS Strategies</h3>
                    <p className="text-gray-600">
                      Proven techniques for each test section to maximize your
                      score
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium">Vocabulary Builder</h3>
                    <p className="text-gray-600">
                      Essential vocabulary organized by topics common in IELTS
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium">Sample Answers</h3>
                    <p className="text-gray-600">
                      Model responses for Writing and Speaking with examiner
                      comments
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium">Interactive Lessons</h3>
                    <p className="text-gray-600">
                      Engaging content that makes learning effective and
                      enjoyable
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="IELTS Study Materials"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Personalization Section */}
      <section id="personalization" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <div className="flex items-center gap-2 text-blue-600 mb-4">
                <UserCheck className="h-6 w-6" />
                <h2 className="text-2xl font-bold">
                  Personalized Learning Experience
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                Everyone's IELTS journey is different. Our platform adapts to
                your specific needs and goals.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium">Custom Study Plans</h3>
                    <p className="text-gray-600">
                      Tailored schedules based on your target test date and band
                      score
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium">Adaptive Learning</h3>
                    <p className="text-gray-600">
                      Content that adjusts to your strengths and weaknesses
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium">Progress Milestones</h3>
                    <p className="text-gray-600">
                      Clear goals and achievements to keep you motivated
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium">Multi-device Access</h3>
                    <p className="text-gray-600">
                      Study seamlessly across desktop, tablet, and mobile
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Personalized Study Plan"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expert Support Section */}
      <section id="support" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="flex items-center gap-2 text-blue-600 mb-4">
                <MessageCircle className="h-6 w-6" />
                <h2 className="text-2xl font-bold">
                  Expert Support & Community
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                You're never alone in your IELTS preparation. Get help when you
                need it and connect with fellow test-takers.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium">Writing Feedback</h3>
                    <p className="text-gray-600">
                      Detailed evaluation of your writing tasks with improvement
                      suggestions
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium">Speaking Practice</h3>
                    <p className="text-gray-600">
                      AI-powered speaking assessment with pronunciation feedback
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium">Community Forums</h3>
                    <p className="text-gray-600">
                      Connect with other students to share tips and motivation
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium">Live Events</h3>
                    <p className="text-gray-600">
                      Regular webinars and Q&A sessions with IELTS experts
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Expert Support and Community"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Choose the Right Plan for You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare our plans to find the perfect fit for your IELTS
              preparation needs.
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center">Free</th>
                  <th className="py-4 px-6 text-center">Monthly Plan</th>
                  <th className="py-4 px-6 text-center">3-Month Plan</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-4 px-6">Practice Tests</td>
                  <td className="py-4 px-6 text-center">Limited</td>
                  <td className="py-4 px-6 text-center">Unlimited</td>
                  <td className="py-4 px-6 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Performance Analytics</td>
                  <td className="py-4 px-6 text-center">Basic</td>
                  <td className="py-4 px-6 text-center">Advanced</td>
                  <td className="py-4 px-6 text-center">Advanced</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Study Materials</td>
                  <td className="py-4 px-6 text-center">Limited</td>
                  <td className="py-4 px-6 text-center">Full Access</td>
                  <td className="py-4 px-6 text-center">Full Access</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Personalized Study Plan</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-block w-5 h-5 text-red-500">✕</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Writing Feedback</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-block w-5 h-5 text-red-500">✕</span>
                  </td>
                  <td className="py-4 px-6 text-center">2 per month</td>
                  <td className="py-4 px-6 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Priority Support</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-block w-5 h-5 text-red-500">✕</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-block w-5 h-5 text-red-500">✕</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Achieve Your Target Band Score?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who have improved their IELTS
            scores with our comprehensive platform.
          </p>
          <Link
            href="/register"
            className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-block"
          >
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;

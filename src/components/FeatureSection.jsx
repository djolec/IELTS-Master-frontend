import { BookOpen, Headphones, Timer } from "lucide-react";

const FeatureSection = () => {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-28 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Practice Like It's Test Day
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl">
              Our platform simulates the real IELTS experience with timed tests,
              authentic questions, and detailed feedback.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
              <Headphones className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">Listening Practice</h3>
            <p className="text-gray-600">
              High-quality audio recordings with native speakers and varied
              accents.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">Reading Practice</h3>
            <p className="text-gray-600">
              Diverse academic texts and passages matching IELTS complexity.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
              <Timer className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">Timed Practice</h3>
            <p className="text-gray-600">
              Real test timing conditions to build your speed and confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeatureSection;

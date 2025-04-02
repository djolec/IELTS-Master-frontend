import { CheckCircle, Star } from "lucide-react";
import { Link } from "react-router";
import heroImage from "../assets/img/ielts.jpg";

const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-28 xl:py-36 bg-gradient-to-b from-sky-100 to-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-600">
                <Star className="h-5 w-5 fill-blue-600" />
                <span className="text-sm font-medium">
                  Trusted by 10,000+ IELTS aspirants
                </span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Master IELTS Listening & Reading
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Practice with authentic IELTS-style tests, track your progress,
                and improve your score with our comprehensive practice platform.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/register"
                className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-6 text-sm font-medium text-white transition-colors hover:bg-blue-600/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                Start Free Trial
              </Link>
              <Link
                href="/demo"
                className="inline-flex h-12 items-center justify-center rounded-md border border-gray-200 bg-white px-6 text-sm font-medium transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                Try Demo Test
              </Link>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-blue-600" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-blue-600" />
                <span>No credit card required</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-full min-h-[300px]">
              <img
                alt="Student practicing IELTS"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center shadow-2xl"
                src={heroImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;

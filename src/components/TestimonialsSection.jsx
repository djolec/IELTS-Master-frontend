import { useState, useEffect } from "react";
import avatar1 from "../assets/img/avatar1.webp";
import avatar2 from "../assets/img/avatar2.webp";
import avatar3 from "../assets/img/avatar3.webp";
import avatar4 from "../assets/img/avatar4.webp";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah K.",
    score: "8.0",
    image: avatar2,
    text: "The practice tests helped me identify my weak areas in listening. After two months of practice, I improved my score from 6.5 to 8.0!",
  },
  {
    name: "Michael R.",
    score: "7.5",
    image: avatar1,
    text: "The timed practice really helped me manage my time better during the actual test. The reading strategies were invaluable!",
  },
  {
    name: "Emma L.",
    score: "7.0",
    image: avatar3,
    text: "I was struggling with time management in the reading section. The practice tests helped me develop a better strategy. Thank you IELTS Master!",
  },
  {
    name: "David W.",
    score: "8.5",
    image: avatar4,
    text: "The variety of accents in the listening practice really prepared me for the actual test. I couldn't have achieved my score without this platform.",
  },
  {
    name: "Jessica M.",
    score: "7.5",
    image: avatar2,
    text: "What I love most is the detailed feedback after each practice test. It helped me understand exactly where I needed to improve.",
  },
  {
    name: "Alex P.",
    score: "8.0",
    image: avatar1,
    text: "The reading techniques taught here are gold! I went from struggling to finish the test to having extra time for review.",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="flex-shrink-0 w-full flex flex-col justify-start space-y-4 rounded-xl border bg-white p-6 shadow-sm h-full">
    <div className="flex items-center space-x-4">
      <img
        alt={`${testimonial.name}'s avatar`}
        className="rounded-full"
        height="40"
        src={testimonial.image || "/placeholder.svg"}
        style={{
          aspectRatio: "40/40",
          objectFit: "cover",
        }}
        width="40"
      />
      <div>
        <h3 className="text-lg font-bold">{testimonial.name}</h3>
        <p className="text-sm text-gray-600">Band Score: {testimonial.score}</p>
      </div>
    </div>
    <p className="text-gray-600">"{testimonial.text}"</p>
  </div>
);

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);

  // Update itemsPerView based on window width
  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth >= 768 ? 2 : 1);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + itemsPerView;
      return nextIndex > testimonials.length - itemsPerView
        ? prevIndex
        : nextIndex;
    });
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - itemsPerView;
      return nextIndex < 0 ? 0 : nextIndex;
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(index * itemsPerView);
  };

  return (
    <section
      id="testimonials"
      className="w-full py-12 md:py-24 lg:py-28 bg-white"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Success Stories
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl">
              See what our students have achieved with consistent practice.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex items-center">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className={`z-10 p-2 rounded-full bg-white shadow-lg border focus:outline-none focus:ring-2 focus:ring-blue-600
              ${
                currentIndex === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-50 cursor-pointer"
              }`}
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            {/* Testimonials Container */}
            <div className="overflow-hidden md:mx-4">
              <div
                className="flex items-stretch transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${
                    (currentIndex * 100) / itemsPerView
                  }%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full md:w-1/2 flex-shrink-0 px-3"
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={next}
              disabled={currentIndex >= testimonials.length - itemsPerView}
              className={`z-10 p-2 rounded-full bg-white shadow-lg border focus:outline-none focus:ring-2 focus:ring-blue-600
              ${
                currentIndex >= testimonials.length - itemsPerView
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-50 cursor-pointer"
              }`}
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({
              length: Math.ceil(testimonials.length / itemsPerView),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  Math.floor(currentIndex / itemsPerView) === index
                    ? "bg-blue-600 w-4"
                    : "bg-gray-300 cursor-pointer"
                }`}
                aria-label={`Go to testimonial group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

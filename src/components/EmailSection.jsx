import { Link } from "react-router";

const EmailSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-sky-100">
      <div className="container grid items-center gap-6 px-4 text-center md:px-6 mx-auto">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Ready to Improve Your IELTS Score?
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Join thousands of successful students who have achieved their target
            scores.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex flex-col gap-2">
            <input
              className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              placeholder="Enter your email"
              type="email"
            />
            <button
              className="inline-flex cursor-pointer h-12 w-full items-center justify-center rounded-md bg-blue-600 px-6 text-sm font-medium text-white transition-colors hover:bg-blue-600/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              type="submit"
            >
              Start Free Trial
            </button>
          </form>
          <p className="text-xs text-gray-600">
            14-day free trial.{" "}
            <Link
              className="text-blue-600 hover:underline underline-offset-2"
              href="/terms"
            >
              Terms & Conditions
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
export default EmailSection;

import { Search } from "lucide-react";

const EmtpyState = () => {
  return (
    <div className="text-center py-12">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
        <Search className="h-8 w-8 text-gray-400" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">No tests found</h3>
      <p className="text-gray-500 max-w-md mx-auto">
        We couldn't find any tests matching your current filters. Try adjusting
        your search criteria or check back later for new tests.
      </p>
    </div>
  );
};
export default EmtpyState;

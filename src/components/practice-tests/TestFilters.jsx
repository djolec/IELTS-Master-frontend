import { Search } from "lucide-react";

const TestFilters = ({
  searchQuery,
  setSearchQuery,
  completedFilter,
  setCompletedFilter,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-end">
        <div className="flex-1 w-full">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search by test number or content"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="completed"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Status
          </label>
          <select
            id="completed"
            className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            value={completedFilter}
            onChange={(e) => setCompletedFilter(e.target.value)}
          >
            <option value="all">All Tests</option>
            <option value="completed">Completed</option>
            <option value="not-completed">Not Attempted</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default TestFilters;

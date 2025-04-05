const useGetFilteredTests = (
  completedFilter,
  activeTab,
  searchQuery,
  readingTests,
  listeningTests
) => {
  const getFilteredTests = () => {
    const testsToFilter =
      activeTab === "reading" ? readingTests : listeningTests;

    return testsToFilter.filter((test) => {
      // Search filter
      let matchesSearch =
        searchQuery === "" ||
        test.testNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        test.type?.toLowerCase().includes(searchQuery.toLowerCase());

      // Also search in passages/sections
      if (!matchesSearch) {
        const contentToSearch =
          activeTab === "reading" ? test.passages : test.sections;
        matchesSearch = contentToSearch.some(
          (item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.topic?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.type?.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      // Completed filter
      const matchesCompleted =
        completedFilter === "all" ||
        (completedFilter === "completed" && test.completed) ||
        (completedFilter === "not-completed" && !test.completed);

      return matchesSearch && matchesCompleted;
    });
  };

  const filteredTests = getFilteredTests();

  return filteredTests;
};
export default useGetFilteredTests;

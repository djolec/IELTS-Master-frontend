import { useState } from "react";
import TestFilters from "../components/practice-tests/TestFilters";
import TestHeroSection from "../components/practice-tests/TestHeroSection";
import TestTabs from "../components/practice-tests/TestTabs";
import EmtpyState from "../components/practice-tests/EmtpyState";
import TestCards from "../components/practice-tests/TestCards";
import useGetFilteredTests from "../hooks/useGetFilteredTests";

const PracticeTestsPage = () => {
  const [activeTab, setActiveTab] = useState("reading");
  const [searchQuery, setSearchQuery] = useState("");
  const [completedFilter, setCompletedFilter] = useState("all");

  // Mock data for reading tests
  const readingTests = [
    {
      id: 1,
      testNumber: "Reading Test 1",
      type: "Academic",
      estimatedTime: 60,
      completed: true,
      lastScore: 26,
      totalQuestions: 40,
      lastAttemptDate: "2023-10-15",
      passages: [
        {
          title: "The History of the Tortoise",
          topic: "Natural History",
        },
        {
          title: "Urban Planning in the 21st Century",
          topic: "Urban Development",
        },
        {
          title: "The Psychology of Decision Making",
          topic: "Psychology",
        },
      ],
    },
    {
      id: 2,
      testNumber: "Reading Test 2",
      type: "Academic",
      estimatedTime: 60,
      completed: true,
      lastScore: 30,
      totalQuestions: 40,
      lastAttemptDate: "2023-09-28",
      passages: [
        {
          title: "William Henry Perkin",
          topic: "Biography/Science",
        },
        {
          title: "Is There Anybody Out There?",
          topic: "Astronomy",
        },
        {
          title: "The Nature of Genius",
          topic: "Psychology",
        },
      ],
    },
    {
      id: 3,
      testNumber: "Reading Test 3",
      type: "Academic",
      estimatedTime: 60,
      completed: false,
      lastScore: null,
      totalQuestions: 40,
      lastAttemptDate: null,
      passages: [
        {
          title: "The Silk Road",
          topic: "History",
        },
        {
          title: "Renewable Energy Sources",
          topic: "Environment",
        },
        {
          title: "The Human Brain",
          topic: "Biology",
        },
      ],
    },
    {
      id: 4,
      testNumber: "Reading Test 4",
      type: "Academic",
      estimatedTime: 60,
      completed: false,
      lastScore: null,
      totalQuestions: 40,
      lastAttemptDate: null,
      passages: [
        {
          title: "The History of Currency",
          topic: "Economics",
        },
        {
          title: "Sleep Patterns",
          topic: "Health Science",
        },
        {
          title: "Endangered Languages",
          topic: "Linguistics",
        },
      ],
    },
    {
      id: 5,
      testNumber: "Reading Test 5",
      type: "General Training",
      estimatedTime: 60,
      completed: false,
      lastScore: null,
      totalQuestions: 40,
      lastAttemptDate: null,
      passages: [
        {
          title: "Workplace Safety Guidelines",
          topic: "Workplace",
        },
        {
          title: "Community Services Information",
          topic: "Society",
        },
        {
          title: "Travel and Accommodation",
          topic: "Tourism",
        },
      ],
    },
    {
      id: 6,
      testNumber: "Reading Test 6",
      type: "General Training",
      estimatedTime: 60,
      completed: false,
      lastScore: null,
      totalQuestions: 40,
      lastAttemptDate: null,
      passages: [
        {
          title: "Job Application Process",
          topic: "Employment",
        },
        {
          title: "Student Housing Options",
          topic: "Education",
        },
        {
          title: "Public Transportation Guide",
          topic: "Transportation",
        },
      ],
    },
  ];

  // Mock data for listening tests
  const listeningTests = [
    {
      id: 101,
      testNumber: "Listening Test 1",
      estimatedTime: 30,
      completed: true,
      lastScore: 32,
      totalQuestions: 40,
      lastAttemptDate: "2023-10-10",
      sections: [
        {
          title: "Section 1: Conversation about University Accommodation",
          type: "Conversation",
        },
        {
          title: "Section 2: Monologue about Community Facilities",
          type: "Monologue",
        },
        {
          title: "Section 3: Discussion between Students about a Project",
          type: "Discussion",
        },
        {
          title: "Section 4: Lecture on Marine Biology",
          type: "Lecture",
        },
      ],
    },
    {
      id: 102,
      testNumber: "Listening Test 2",
      estimatedTime: 30,
      completed: false,
      lastScore: null,
      totalQuestions: 40,
      lastAttemptDate: null,
      sections: [
        {
          title: "Section 1: Conversation about Renting an Apartment",
          type: "Conversation",
        },
        {
          title: "Section 2: Monologue about Museum Exhibits",
          type: "Monologue",
        },
        {
          title: "Section 3: Discussion about Research Methods",
          type: "Discussion",
        },
        {
          title: "Section 4: Lecture on Climate Change",
          type: "Lecture",
        },
      ],
    },
    {
      id: 103,
      testNumber: "Listening Test 3",
      estimatedTime: 30,
      completed: false,
      lastScore: null,
      totalQuestions: 40,
      lastAttemptDate: null,
      sections: [
        {
          title: "Section 1: Conversation about Job Application",
          type: "Conversation",
        },
        {
          title: "Section 2: Monologue about City Tour",
          type: "Monologue",
        },
        {
          title: "Section 3: Discussion about Group Presentation",
          type: "Discussion",
        },
        {
          title: "Section 4: Lecture on Psychology",
          type: "Lecture",
        },
      ],
    },
    {
      id: 104,
      testNumber: "Listening Test 4",
      estimatedTime: 30,
      completed: false,
      lastScore: null,
      totalQuestions: 40,
      lastAttemptDate: null,
      sections: [
        {
          title: "Section 1: Conversation about Travel Arrangements",
          type: "Conversation",
        },
        {
          title: "Section 2: Monologue about Library Services",
          type: "Monologue",
        },
        {
          title: "Section 3: Discussion about Research Findings",
          type: "Discussion",
        },
        {
          title: "Section 4: Lecture on Architecture",
          type: "Lecture",
        },
      ],
    },
    {
      id: 105,
      testNumber: "Listening Test 5",
      estimatedTime: 30,
      completed: false,
      lastScore: null,
      totalQuestions: 40,
      lastAttemptDate: null,
      sections: [
        {
          title: "Section 1: Conversation about Course Registration",
          type: "Conversation",
        },
        {
          title: "Section 2: Monologue about Community Event",
          type: "Monologue",
        },
        {
          title: "Section 3: Discussion about Team Project",
          type: "Discussion",
        },
        {
          title: "Section 4: Lecture on Business Management",
          type: "Lecture",
        },
      ],
    },
  ];

  const filteredTests = useGetFilteredTests(
    completedFilter,
    activeTab,
    searchQuery,
    readingTests,
    listeningTests
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Hero Section */}
      <TestHeroSection />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <TestTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Filters and Search */}
        <TestFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          completedFilter={completedFilter}
          setCompletedFilter={setCompletedFilter}
        />

        {/* Test Cards */}
        <TestCards filteredTests={filteredTests} activeTab={activeTab} />

        {/* Empty State */}
        {filteredTests.length === 0 && <EmtpyState />}
      </div>
    </div>
  );
};

export default PracticeTestsPage;

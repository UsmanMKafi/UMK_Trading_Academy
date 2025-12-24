import React, { useState, useMemo } from 'react';
import { Search, Filter, BookOpen } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import Button from '../components/Button';
import { courses } from '../data/courses';
import { useApp } from '../context/AppContext';

const Courses = () => {
  const { courseFilter, updateFilter, searchQuery, updateSearchQuery } = useApp();
  const [localSearch, setLocalSearch] = useState('');

  const difficultyFilters = ['all', 'Beginner', 'Intermediate', 'Advanced'];
  // Keep logic but visual change

  const filteredCourses = useMemo(() => {
    let filtered = courses;

    // Filter by difficulty
    if (courseFilter && courseFilter !== 'all') {
      filtered = filtered.filter((course) => course.difficulty === courseFilter);
    }

    // Filter by search query
    const query = localSearch.toLowerCase();
    if (query) {
      filtered = filtered.filter(
        (course) =>
          course.title.toLowerCase().includes(query) ||
          course.description.toLowerCase().includes(query) ||
          course.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [courseFilter, localSearch]);

  const handleSearchChange = (e) => {
    setLocalSearch(e.target.value);
    updateSearchQuery(e.target.value);
  };

  return (
    <div className="pt-24 min-h-screen bg-background text-slate-300 pb-20">
      {/* Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 mb-12 text-center animate-fade-in">
        <div className="absolute top-0 right-[20%] w-64 h-64 bg-primary/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
          Elite <span className="text-gradient-gold">Curriculum</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Proprietary strategies derived from institutional trading desks.
          Select your path to mastery.
        </p>
      </section>

      {/* Filters and Search Panel */}
      <section className="sticky top-20 z-40 px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-5xl mx-auto">
          <div className="glass-panel rounded-2xl p-4 md:p-6 flex flex-col md:flex-row gap-6 items-center justify-between backdrop-blur-xl">

            {/* Search Bar */}
            <div className="relative w-full md:w-96 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Search strategies, assets..."
                value={localSearch}
                onChange={handleSearchChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              <Filter className="w-5 h-5 text-slate-500 flex-shrink-0 hidden md:block" />
              {difficultyFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => updateFilter(filter)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap border ${courseFilter === filter
                      ? 'bg-primary text-black border-primary shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                      : 'bg-transparent text-slate-400 border-white/10 hover:border-white/30 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {filter === 'all' ? 'All Levels' : filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredCourses.length > 0 ? (
          <>
            <div className="flex items-center justify-between mb-8 px-2">
              <p className="text-slate-500 text-sm">
                Showing <span className="text-white font-semibold">{filteredCourses.length}</span> active modules
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, index) => (
                <div
                  key={course.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-20 animate-fade-in">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-slate-600" />
            </div>
            <h3 className="text-xl font-heading font-bold text-white mb-3">
              No modules found
            </h3>
            <p className="text-slate-500 mb-8 max-w-md mx-auto">
              We couldn't find any courses matching your criteria. Try adjusting your filters.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                updateFilter('all');
                setLocalSearch('');
                updateSearchQuery('');
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Courses;



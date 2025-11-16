import { useState, useMemo } from 'react'
import { Search, Filter } from 'lucide-react'
import CourseCard from '../components/CourseCard'
import { courses } from '../data/courses'
import { useApp } from '../context/AppContext'

const Courses = () => {
  const { courseFilter, updateFilter, searchQuery, updateSearchQuery } = useApp()
  const [localSearch, setLocalSearch] = useState('')

  const difficultyFilters = ['all', 'Beginner', 'Intermediate', 'Advanced']
  const categoryFilters = ['all', 'Forex', 'Synthetics', 'Risk Management', 'Psychology']

  const filteredCourses = useMemo(() => {
    let filtered = courses

    // Filter by difficulty
    if (courseFilter !== 'all') {
      filtered = filtered.filter((course) => course.difficulty === courseFilter)
    }

    // Filter by search query
    const query = localSearch.toLowerCase()
    if (query) {
      filtered = filtered.filter(
        (course) =>
          course.title.toLowerCase().includes(query) ||
          course.description.toLowerCase().includes(query) ||
          course.category.toLowerCase().includes(query)
      )
    }

    return filtered
  }, [courseFilter, localSearch])

  const handleSearchChange = (e) => {
    setLocalSearch(e.target.value)
    updateSearchQuery(e.target.value)
  }

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-success-600 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Course Catalog
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Explore our comprehensive range of trading courses designed for every skill level
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={localSearch}
                  onChange={handleSearchChange}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Difficulty Filter */}
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {difficultyFilters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => updateFilter(filter)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      courseFilter === filter
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {filter === 'all' ? 'All Levels' : filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCourses.length > 0 ? (
            <>
              <div className="mb-6">
                <p className="text-gray-600">
                  Showing <span className="font-semibold">{filteredCourses.length}</span> course
                  {filteredCourses.length !== 1 ? 's' : ''}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No courses found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters or search query to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    updateFilter('all')
                    setLocalSearch('')
                    updateSearchQuery('')
                  }}
                  className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Courses



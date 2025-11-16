import { Link } from 'react-router-dom'
import { BookOpen, Clock, TrendingUp, Award, ArrowRight } from 'lucide-react'
import { courses } from '../data/courses'

const Dashboard = () => {
  // Placeholder enrolled courses (in a real app, this would come from user data)
  const enrolledCourses = courses.slice(0, 2)

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-success-600 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">
            Student Dashboard
          </h1>
          <p className="text-xl text-white/90">
            Welcome back! Continue your learning journey
          </p>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Enrolled Courses</p>
                  <p className="text-3xl font-bold text-gray-900">{enrolledCourses.length}</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary-600" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Hours Learned</p>
                  <p className="text-3xl font-bold text-gray-900">24</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-success-100 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-success-600" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Certificates</p>
                  <p className="text-3xl font-bold text-gray-900">1</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-accent-gold/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent-gold-dark" />
                </div>
              </div>
            </div>
          </div>

          {/* My Enrolled Courses */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-heading font-bold text-gray-900">
                My Enrolled Courses
              </h2>
              <Link
                to="/courses"
                className="text-primary-600 hover:text-primary-700 font-semibold flex items-center space-x-1"
              >
                <span>Browse All Courses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            {enrolledCourses.length > 0 ? (
              <div className="space-y-6">
                {enrolledCourses.map((course) => (
                  <div
                    key={course.id}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {course.title}
                          </h3>
                          <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                            {course.difficulty}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-3">{course.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <TrendingUp className="w-4 h-4" />
                            <span>{course.category}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          to={`/courses/${course.slug}`}
                          className="px-6 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-center"
                        >
                          Continue Learning
                        </Link>
                      </div>
                    </div>
                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>45%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary-600 to-success-600 h-2 rounded-full"
                          style={{ width: '45%' }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No enrolled courses yet
                </h3>
                <p className="text-gray-600 mb-6">
                  Start your trading journey by enrolling in one of our courses
                </p>
                <Link
                  to="/courses"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-success-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all"
                >
                  Browse Courses
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Continue Learning
              </h3>
              <p className="text-gray-600 mb-4">
                Pick up where you left off and continue your trading education journey.
              </p>
              <Link
                to="/courses"
                className="text-primary-600 hover:text-primary-700 font-semibold flex items-center space-x-1"
              >
                <span>View My Courses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Explore New Courses
              </h3>
              <p className="text-gray-600 mb-4">
                Discover new trading strategies and expand your knowledge with our full course catalog.
              </p>
              <Link
                to="/courses"
                className="text-primary-600 hover:text-primary-700 font-semibold flex items-center space-x-1"
              >
                <span>Browse Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard


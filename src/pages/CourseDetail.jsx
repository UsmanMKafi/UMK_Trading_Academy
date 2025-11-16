import { useParams, Link, Navigate } from 'react-router-dom'
import { Clock, Users, TrendingUp, Check, ArrowRight, User } from 'lucide-react'
import Accordion from '../components/Accordion'
import { courses } from '../data/courses'

const CourseDetail = () => {
  const { slug } = useParams()
  const course = courses.find((c) => c.slug === slug)

  if (!course) {
    return <Navigate to="/courses" replace />
  }

  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-800',
    Intermediate: 'bg-yellow-100 text-yellow-800',
    Advanced: 'bg-red-100 text-red-800',
  }

  const accordionItems = course.modules.map((module) => ({
    question: module.title,
    answer: (
      <ul className="space-y-2">
        {module.lessons.map((lesson, index) => (
          <li key={index} className="flex items-start space-x-2">
            <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
            <span>{lesson}</span>
          </li>
        ))}
      </ul>
    ),
  }))

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-success-600 text-white py-12 md:py-16 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${course.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-success-600/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span
              className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm ${
                difficultyColors[course.difficulty] || difficultyColors.Beginner
              }`}
            >
              {course.difficulty}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              {course.title}
            </h1>
            <p className="text-xl text-white/90 mb-6">{course.description}</p>
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>{course.students} students enrolled</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5" />
                <span>{course.category}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                Course Overview
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {course.description}
              </p>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What You'll Learn
                </h3>
                <ul className="space-y-3">
                  {course.modules.map((module, moduleIndex) => (
                    <li key={moduleIndex} className="flex items-start space-x-3">
                      <Check className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Master {module.title.toLowerCase()} and apply it to real trading scenarios
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Curriculum */}
            <section className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                Course Curriculum
              </h2>
              <Accordion items={accordionItems} />
            </section>

            {/* Prerequisites */}
            <section className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                Prerequisites
              </h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span>
                    {course.difficulty === 'Beginner'
                      ? 'No prior trading experience required'
                      : course.difficulty === 'Intermediate'
                      ? 'Basic understanding of trading concepts recommended'
                      : 'Strong foundation in trading fundamentals required'}
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span>Access to a trading platform (demo or live account)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span>Commitment to complete all modules and practice exercises</span>
                </li>
              </ul>
            </section>

            {/* Instructor */}
            <section className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                Your Instructor
              </h2>
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-400 to-success-400 flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                  {course.instructor.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {course.instructor}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {course.instructor} is a seasoned trading professional with over 10 years of
                    experience in {course.category.toLowerCase()} markets. Having managed millions
                    in trading capital and trained hundreds of successful traders, {course.instructor.split(' ')[0]} brings
                    real-world expertise and proven strategies to every lesson.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students}+ students</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4" />
                      <span>Expert Trader</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar - Enrollment */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-xl shadow-lg p-8 border-2 border-primary-200">
              <div className="text-center mb-6">
                <div className="mb-4">
                  {course.originalPrice && (
                    <p className="text-sm text-gray-500 line-through mb-1">
                      ${course.originalPrice}
                    </p>
                  )}
                  <p className="text-4xl font-bold text-gray-900">
                    ${course.price}
                  </p>
                  {course.originalPrice && (
                    <p className="text-sm text-green-600 font-semibold mt-1">
                      Save ${course.originalPrice - course.price}
                    </p>
                  )}
                </div>
                <p className="text-sm text-gray-600">
                  One-time payment • Lifetime access
                </p>
              </div>

              <Link
                to="/pricing"
                className="w-full block text-center px-6 py-4 bg-gradient-to-r from-primary-600 to-success-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 mb-4"
              >
                Enroll Now
              </Link>

              <div className="space-y-4 pt-6 border-t border-gray-200">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">
                    Lifetime access to course materials
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">
                    Certificate of completion
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">
                    Access to student community
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">
                    Regular course updates
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">
                    30-day money-back guarantee
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail



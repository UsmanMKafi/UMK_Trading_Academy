import { Link } from 'react-router-dom'
import { ArrowRight, Users, BookOpen, Shield, Award, TrendingUp, Target, Zap } from 'lucide-react'
import CourseCard from '../components/CourseCard'
import TestimonialCarousel from '../components/TestimonialCarousel'
import { courses, testimonials } from '../data/courses'

const Home = () => {
  const featuredCourses = courses.slice(0, 3)

  const trustItems = [
    {
      icon: Users,
      title: 'Expert Mentors',
      description: 'Learn from industry professionals with years of trading experience',
    },
    {
      icon: BookOpen,
      title: 'Proven Strategies',
      description: 'Battle-tested methods that have generated consistent results',
    },
    {
      icon: Shield,
      title: 'Risk Management Focus',
      description: 'Comprehensive risk management modules in every course',
    },
    {
      icon: Award,
      title: 'Lifetime Access',
      description: 'Access course materials and updates for life',
    },
  ]

  const academyDifferences = [
    {
      icon: TrendingUp,
      title: 'Synthetics Expertise',
      description: 'We specialize in synthetic trading instruments, offering unique insights into 24/7 markets and volatility indices that most academies overlook.',
    },
    {
      icon: Target,
      title: 'Dedicated Risk Management',
      description: 'Every course includes comprehensive risk management modules. We believe protecting capital is as important as making profits.',
    },
    {
      icon: Users,
      title: 'Supportive Community',
      description: 'Join a vibrant community of traders sharing strategies, insights, and support. Network with like-minded individuals on the same journey.',
    },
    {
      icon: Zap,
      title: 'Practical Application',
      description: 'Learn through real-world examples, live trading sessions, and hands-on exercises. Theory meets practice in every lesson.',
    },
  ]

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-success-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div 
          className="absolute inset-0 opacity-30" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
              Master Forex & Synthetics Trading
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Learn proven strategies from industry experts and achieve financial freedom
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent-gold text-gray-900 font-semibold rounded-lg hover:bg-accent-gold-dark hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Enroll Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20"
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustItems.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="text-center group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-100 to-success-100 text-primary-600 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Featured Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start your trading journey with our most popular courses, designed for traders at every level
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
            >
              View All Courses
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Student Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our students who have transformed their trading careers
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Academy Difference */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-success-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              The UMK Academy Difference
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What sets us apart in the world of trading education
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {academyDifferences.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-success-500 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-600 to-success-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Start Your Trading Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of successful traders who have transformed their financial future with UMK Trading Academy
          </p>
          <Link
            to="/pricing"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent-gold text-gray-900 font-semibold rounded-lg hover:bg-accent-gold-dark hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home



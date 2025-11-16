import { TrendingUp, Target, Users, Award, Heart, Shield } from 'lucide-react'
// Import local team member images
import usmanImage from '../image/Usman-M-Kafi.jpg'

const About = () => {
  // Team Members Data
  // Each member includes: name, role, bio, and professional headshot image
  // Note: Usman M. Kafi uses a local image, others use Unsplash images
  const teamMembers = [
    {
      name: 'Usman M. Kafi',
      role: 'Founder & Lead Instructor',
      bio: 'With over 15 years of trading experience, Usman has managed multi-million dollar portfolios and trained hundreds of successful traders.',
      image: usmanImage, // Local image from src/image/Usman-M-Kafi.jpg
    },
    {
      name: 'Sarah Johnson',
      role: 'Senior Trading Strategist',
      bio: 'Sarah specializes in advanced forex strategies and algorithmic trading. She holds multiple certifications and has a proven track record.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80',
    },
    {
      name: 'David D. John',
      role: 'Synthetics Trading Expert',
      bio: 'David is a pioneer in synthetic trading instruments, with deep expertise in volatility indices and 24/7 market strategies.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80',
    },
    {
      name: 'Mariam Joseph',
      role: 'Trading Psychology Coach',
      bio: 'Mariam combines her background in psychology with trading expertise to help students overcome mental barriers and build discipline.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80',
    },
  ]

  // Academy Core Values
  // Each value includes: icon component, title, and description
  const values = [
    {
      icon: Shield,
      title: 'Transparency',
      description: 'We believe in honest, transparent communication about trading risks and realistic expectations. No false promises, just real education.',
    },
    {
      icon: Target,
      title: 'Education First',
      description: 'Our primary goal is to educate, not just to sell courses. We focus on building long-term trading skills and knowledge.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Trading can be isolating. We foster a supportive community where students learn from each other and grow together.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We continuously improve our courses based on student feedback and market developments, ensuring the highest quality education.',
    },
    {
      icon: Heart,
      title: 'Student Success',
      description: 'Your success is our success. We measure our achievement by the progress and accomplishments of our students.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We stay ahead of the curve, teaching cutting-edge strategies and techniques that work in today\'s markets.',
    },
  ]

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-success-600 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            About UMK Trading Academy
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Empowering traders worldwide with comprehensive education, proven strategies, and unwavering support
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                UMK Trading Academy was founded with a simple yet powerful mission: to democratize
                access to professional trading education. After years of witnessing traders struggle
                with inadequate resources and misleading information, we set out to create something
                different.
              </p>
              <p>
                Our journey began when our founder, Usman M. Kafi, realized that most trading education
                platforms focused on quick profits rather than building sustainable trading skills.
                We saw a gap in the market for comprehensive, honest, and practical trading education
                that truly prepares students for long-term success.
              </p>
              <p>
                Today, UMK Trading Academy has grown into a trusted institution, having trained
                thousands of traders across the globe. We specialize in both traditional forex
                trading and the emerging field of synthetic trading instruments, providing our
                students with a unique competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To provide world-class trading education that empowers individuals to achieve
                financial independence through disciplined trading, comprehensive risk management,
                and continuous learning. We are committed to transparency, integrity, and the
                long-term success of every student.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To become the world's most trusted trading education platform, recognized for
                producing consistently successful traders who understand not just how to trade, but
                how to manage risk, maintain discipline, and build sustainable trading careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Meet the Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our expert instructors bring years of real-world trading experience to every course
            </p>
          </div> 

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                {/* Member Photo */}
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full rounded-full object-cover border-4 border-primary-100 shadow-md"
                  />
                </div>
                
                {/* Member Info */}
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academy Values */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-success-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at UMK Trading Academy
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-success-500 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About



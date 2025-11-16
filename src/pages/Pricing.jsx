import { Link } from 'react-router-dom'
import { Check, Star, ArrowRight } from 'lucide-react'

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: 199,
      period: 'month',
      description: 'Perfect for beginners starting their trading journey',
      features: [
        'Access to 2 beginner courses',
        'Community forum access',
        'Email support',
        'Basic trading resources',
        'Certificate of completion',
      ],
      popular: false,
    },
    {
      name: 'Pro',
      price: 499,
      period: 'month',
      description: 'Ideal for serious traders looking to advance their skills',
      features: [
        'Access to all courses (6+ courses)',
        'Priority email support',
        '1:1 mentorship (2 hours/month)',
        'Advanced trading strategies',
        'Live trading sessions',
        'Exclusive community access',
        'All certificates',
        'Course updates for life',
      ],
      popular: true,
    },
    {
      name: 'VIP',
      price: 999,
      period: 'month',
      description: 'Complete package for professional traders',
      features: [
        'Everything in Pro',
        'Unlimited 1:1 mentorship',
        'Personalized trading plan',
        'Direct access to instructors',
        'Private VIP community',
        'Advanced risk management tools',
        'Portfolio review sessions',
        'Trading psychology coaching',
        'Lifetime access to all future courses',
      ],
      popular: false,
    },
  ]

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-success-600 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Select the perfect plan for your trading journey. All plans include lifetime access to course materials.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                  plan.popular
                    ? 'border-2 border-primary-500 scale-105 md:scale-110'
                    : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary-600 to-success-600 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-gray-900">
                        ${plan.price}
                      </span>
                      <span className="text-gray-600 ml-2">/{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`block w-full text-center px-6 py-4 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary-600 to-success-600 text-white hover:shadow-lg hover:scale-105'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Select Plan
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I change my plan later?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Contact our support team
                to make changes to your subscription.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is there a money-back guarantee?
              </h3>
              <p className="text-gray-600">
                Yes, we offer a 30-day money-back guarantee on all plans. If you're not satisfied,
                we'll provide a full refund.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do I get lifetime access?
              </h3>
              <p className="text-gray-600">
                Yes, all plans include lifetime access to the courses you enroll in. You'll also
                receive updates and new content as it's released.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How does the mentorship work?
              </h3>
              <p className="text-gray-600">
                Mentorship sessions are scheduled directly with your assigned mentor. Pro plan
                includes 2 hours per month, while VIP includes unlimited sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-success-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help you choose the right plan for your needs
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent-gold text-gray-900 font-semibold rounded-lg hover:bg-accent-gold-dark hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Pricing



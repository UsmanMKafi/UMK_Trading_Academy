import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import Accordion from '../components/Accordion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Placeholder submission logic
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const faqItems = [
    {
      question: 'How do I enroll in a course?',
      answer:
        'You can enroll in any course by visiting our Courses page, selecting your desired course, and clicking "Enroll Now". You\'ll be redirected to our pricing page where you can choose a plan that suits your needs.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards, debit cards, and PayPal. All payments are processed securely through our payment gateway.',
    },
    {
      question: 'Can I get a refund if I\'m not satisfied?',
      answer:
        'Yes, we offer a 30-day money-back guarantee on all courses. If you\'re not satisfied with your purchase, contact our support team within 30 days for a full refund.',
    },
    {
      question: 'How long do I have access to the courses?',
      answer:
        'All courses come with lifetime access. Once you enroll, you can access the course materials, updates, and new content for as long as the academy exists.',
    },
    {
      question: 'Do you offer certificates upon completion?',
      answer:
        'Yes, all courses include a certificate of completion that you can download and share on your professional profiles.',
    },
    {
      question: 'What makes your academy different from others?',
      answer:
        'We specialize in both forex and synthetics trading, with a strong emphasis on risk management. Our courses are taught by real traders with proven track records, and we focus on building sustainable trading skills rather than quick profits.',
    },
    {
      question: 'Is there a community or forum for students?',
      answer:
        'Yes, all enrolled students get access to our exclusive community forum where you can interact with other traders, share strategies, ask questions, and get support from instructors.',
    },
    {
      question: 'Do you offer one-on-one mentorship?',
      answer:
        'Yes, our Pro and VIP plans include one-on-one mentorship sessions. Pro plan includes 2 hours per month, while VIP includes unlimited mentorship.',
    },
    {
      question: 'Are the courses suitable for complete beginners?',
      answer:
        'Absolutely! We have courses designed specifically for beginners, starting with the fundamentals. Our courses are structured to take you from zero knowledge to advanced trading skills.',
    },
    {
      question: 'What trading platforms do you recommend?',
      answer:
        'We provide guidance on various trading platforms in our courses. We focus on teaching principles that apply across platforms, but we do provide specific recommendations based on your trading style and needs.',
    },
  ]

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-success-600 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a
                        href="mailto:info@umktradingacademy.com"
                        className="text-primary-600 hover:text-primary-700"
                      >
                        info@umktradingacademy.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <a
                        href="tel:+1234567890"
                        className="text-primary-600 hover:text-primary-700"
                      >
                        +2348136752195
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600">
                        No.7 Lere Close,<br />
                        Off Kirfi Road,<br />
                        New GRA, Bauchi, Nigeria.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="What is this regarding?"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-primary-600 to-success-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion items={faqItems} />
        </div>
      </section>
    </div>
  )
}

export default Contact



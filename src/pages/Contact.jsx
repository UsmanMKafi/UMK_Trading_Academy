import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Accordion from '../components/Accordion';
import Button from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! To actually send emails, you would integrate a backend service here.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
        'Yes, our Pro and VIP plans include one-on-one mentorship sessions. Pro plan includes 2 hours per month, while VIP includes unlimited sessions.',
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
  ];

  return (
    <div className="pt-24 min-h-screen bg-background pb-20">
      {/* Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 mb-20 text-center animate-fade-in">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/10 blur-[90px] rounded-full mix-blend-screen pointer-events-none" />

        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
          Get in <span className="text-gradient-gold">Touch</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Have questions about your trading journey? Our support team is ready to assist.
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Contact Info Card */}
          <div className="lg:col-span-1">
            <div className="glass-panel rounded-2xl p-8 h-full border border-white/5">
              <h2 className="text-2xl font-heading font-bold text-white mb-8">
                Contact Info
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors border border-primary/20">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Email Us</h3>
                    <a href="mailto:info@umktradingacademy.com" className="text-slate-400 hover:text-primary transition-colors text-sm">
                      info@umktradingacademy.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors border border-primary/20">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Call Us</h3>
                    <a href="tel:+2348136752195" className="text-slate-400 hover:text-primary transition-colors text-sm">
                      +234 813 675 2195
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors border border-primary/20">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Visit HQ</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
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
            <div className="bg-[#0B1221] border border-white/5 rounded-2xl p-8 md:p-10 shadow-xl">
              <h2 className="text-2xl font-heading font-bold text-white mb-8">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all placeholder:text-slate-600"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all placeholder:text-slate-600"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all placeholder:text-slate-600"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all placeholder:text-slate-600 resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                <Button type="submit" className="w-full md:w-auto">
                  <span className="flex items-center gap-2">
                    Send Message <Send className="w-4 h-4" />
                  </span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-heading font-bold text-center text-white mb-12">
          Common Questions
        </h2>
        <Accordion items={faqItems} />
      </section>
    </div>
  );
};

export default Contact;



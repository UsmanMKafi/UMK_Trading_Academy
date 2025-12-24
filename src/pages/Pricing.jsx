import { Link } from 'react-router-dom';
import { Check, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import Button from '../components/Button';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: 199,
      period: 'one-time',
      description: 'The essential foundation for new traders.',
      features: [
        'Access to "Forex Basics 101"',
        'Community Forum Access',
        'Weekly Market Breakdown (Email)',
        'Basic Risk Calculator',
        'Certificate of Completion',
      ],
      popular: false,
      variant: 'ghost'
    },
    {
      name: 'Institutional',
      price: 499,
      period: 'one-time',
      description: 'Full academy access for serious commitments.',
      features: [
        'Access to All 12+ Courses',
        'Live Trading Sessions (Monthly)',
        'Priority Discord Access',
        'Advanced Synthetic Strategies',
        '1-on-1 Strategy Call (30 mins)',
        'Prop Firm Application Guide',
        'Lifetime Updates',
      ],
      popular: true,
      variant: 'primary'
    },
    {
      name: 'Mentorship',
      price: 999,
      period: 'quarterly',
      description: 'Direct access to mentors for rapid scaling.',
      features: [
        'Everything in Institutional',
        'Weekly 1-on-1 Mentorship (12 Weeks)',
        'Direct WhatsApp Support',
        'Portfolio & Trade Review',
        'Private Signal Channel',
        'Psychology Coaching',
        'Funded Account Fast-Track',
      ],
      popular: false,
      variant: 'outline'
    },
  ];

  return (
    <div className="bg-background min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="text-center px-4 mb-20 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
          Invest in Your <span className="text-gradient-gold">Financial Future</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          One trade can change your week. One skill can change your life.
          Choose the path that fits your ambition.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${plan.popular
                  ? 'bg-gradient-to-b from-white/10 to-[#0B1221] border border-primary/50 shadow-glow transform md:-translate-y-4'
                  : 'bg-[#0B1221] border border-white/5 hover:border-white/20'
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Recommended
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-xl font-heading font-bold mb-2 ${plan.popular ? 'text-primary' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <p className="text-slate-400 text-sm h-10">{plan.description}</p>
              </div>

              <div className="mb-8 p-6 bg-black/20 rounded-xl text-center">
                <div className="flex items-start justify-center text-white">
                  <span className="text-2xl mt-2">$</span>
                  <span className="text-6xl font-bold font-heading">{plan.price}</span>
                </div>
                <span className="text-slate-500 text-sm lowercase">/{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-primary' : 'text-slate-500'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? 'primary' : 'outline'}
                className="w-full justify-center"
              >
                Choose {plan.name}
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-heading font-bold text-white mb-10 text-center">
            Common Questions
          </h2>
          <div className="space-y-6">
            {[
              { q: "Can I upgrade later?", a: "Absolutely. You can upgrade from Starter to Institutional at any time by just paying the difference." },
              { q: "Do you offer refunds?", a: "We offer a 7-day money-back guarantee if you've completed less than 20% of the course material." },
              { q: "What platform do you use?", a: "Our community is hosted on Discord for real-time interaction, and course content is on our custom learning portal." }
            ].map((item, i) => (
              <div key={i} className="border-b border-white/5 pb-6 last:border-0 hover:bg-white/5 p-4 rounded-lg transition-colors">
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-3">
                  <HelpCircle size={18} className="text-primary" />
                  {item.q}
                </h3>
                <p className="text-slate-400 pl-8">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="text-center py-20 px-4">
        <div className="inline-flex items-center gap-2 text-slate-500 mb-4">
          <ShieldCheck className="text-primary" />
          <span className="uppercase tracking-widest text-xs font-semibold">Secure Payment</span>
        </div>
        <p className="text-slate-600 text-sm">
          All prices are in USD. Secure payment via Stripe & PayPal.
        </p>
      </section>
    </div>
  );
};

export default Pricing;



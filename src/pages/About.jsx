import { TrendingUp, Target, Users, Award, Heart, Shield } from 'lucide-react';
// Import local team member images
import usmanImage from '../image/Usman-M-Kafi.jpg';

const About = () => {
  // Team Members Data
  const teamMembers = [
    {
      name: 'Usman M. Kafi',
      role: 'Founder & Lead Instructor',
      bio: 'With over 15 years of trading experience, Usman has managed multi-million dollar portfolios and trained hundreds of successful traders.',
      image: usmanImage,
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
  ];

  // Academy Core Values
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
  ];

  return (
    <div className="pt-24 min-h-screen bg-background pb-16">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 mb-20 text-center animate-fade-in">
        {/* Background Effect */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
          Our <span className="text-gradient-gold">Legacy</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Empowering traders worldwide with institutional-grade education,
          proprietary strategies, and unwavering mentorship.
        </p>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl font-heading font-bold text-white mb-8 text-center">
              The Origin Story
            </h2>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                UMK Trading Academy was founded on a rebellion against the status quo.
                After witnessing countless aspiring traders fall victim to "get rich quick" schemes
                and shallow signal services, we decided to build the antidote.
              </p>
              <p>
                Our founder, <strong className="text-primary">Usman M. Kafi</strong>, realized that true profitability
                couldn't be copied—it had to be learned. We stripped away the noise to focus
                on what actually moves markets: <span className="text-white">Institutional Logic, Market Structure, and Biological Psychology.</span>
              </p>
              <p>
                Today, we aren't just an academy; we are a fortress of discipline for thousands of
                traders globally, mastering both Forex and Synthetic indices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0B1221] border border-white/5 rounded-2xl p-8 hover:border-primary/30 transition-colors duration-300">
            <h3 className="text-2xl font-heading font-bold text-white mb-4 flex items-center gap-3">
              <Target className="text-primary" />
              Our Mission
            </h3>
            <p className="text-slate-400 leading-relaxed">
              To democratize access to institutional trading knowledge. We exist to prove that
              financial independence is a skill set, not a stroke of luck, by providing
              mentorship that is as rigorous as it is accessible.
            </p>
          </div>
          <div className="bg-[#0B1221] border border-white/5 rounded-2xl p-8 hover:border-primary/30 transition-colors duration-300">
            <h3 className="text-2xl font-heading font-bold text-white mb-4 flex items-center gap-3">
              <TrendingUp className="text-primary" />
              Our Vision
            </h3>
            <p className="text-slate-400 leading-relaxed">
              To be the global standard for retail trading education, creating a verified
              community of profitable traders who understand risk, respect the market,
              and trade with unwavering self-control.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Master <span className="text-gradient-gold">Instructors</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Real traders. Real portfolios. Real experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-[#0B1221] border border-white/5 rounded-2xl p-6 text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-glow"
            >
              {/* Member Photo */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:bg-primary/40 transition-all" />
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full rounded-full object-cover border-2 border-white/10 group-hover:border-primary transition-colors relative z-10"
                />
              </div>

              <h3 className="text-xl font-heading font-bold text-white mb-1 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-primary/80 text-sm font-medium mb-4 uppercase tracking-wider">{member.role}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Academy Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Core Values
          </h2>
          <p className="text-slate-400">The architecture of our discipline.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-white/5 border border-white/5 rounded-xl p-8 hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default About;



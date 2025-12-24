import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, Shield, Trophy } from 'lucide-react';
import Button from '../components/Button';
import CourseCard from '../components/CourseCard';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { courses, testimonials } from '../data/courses';

const Home = () => {
  const featuredCourses = courses.slice(0, 3);

  const benefits = [
    {
      icon: TrendingUp,
      title: "Scientific Precision",
      desc: "Stop gambling. Start trading with mathematical models and institutional strategies tailored for synthetics."
    },
    {
      icon: Shield,
      title: "Risk-First Approach",
      desc: "We teach you how to keep your money before we teach you how to multiply it. Capital preservation is key."
    },
    {
      icon: Trophy,
      title: "Proven Track Record",
      desc: "Join a community of students who have collectively withdrawn over $1M+ in verified payouts."
    }
  ];

  return (
    <div className="bg-background min-h-screen text-slate-300">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-50" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full mix-blend-screen" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-semibold mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            New Cohort Filling Fast
          </div>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] animate-slide-up">
            Master the Markets <br />
            <span className="text-gradient-gold">With Institutional Edge.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Transform from a reactive gambler to a precision trader.
            The comprehensive academy for Forex and Synthetic Indices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/pricing">
              <Button variant="primary" className="w-full sm:w-auto text-lg h-14">
                Join the Academy
              </Button>
            </Link>
            <Link to="/courses">
              <Button variant="secondary" className="w-full sm:w-auto text-lg h-14">
                Explore Curriculum
              </Button>
            </Link>
          </div>

          {/* Social Proof Mini */}
          <div className="mt-12 flex items-center gap-4 text-sm text-slate-500 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-slate-700" />
              ))}
            </div>
            <p>Trusted by <span className="text-white font-semibold">1,250+</span> Traders</p>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <p className="text-center text-slate-500 text-xs tracking-widest uppercase mb-6">Built for all major platforms</p>
          <div className="flex justify-center flex-wrap gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Simulated Partner Logos - Text for now */}
            <span className="text-xl font-heading font-bold text-white">MetaTrader 5</span>
            <span className="text-xl font-heading font-bold text-white">TradingView</span>
            <span className="text-xl font-heading font-bold text-white">cTrader</span>
            <span className="text-xl font-heading font-bold text-white">Deriv</span>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Why the Top 1% Choose UMK</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Most academies sell dreams. We sell discipline, data, and edge.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="glass-panel p-8 rounded-2xl hover:bg-white/10 transition-colors group">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <b.icon size={28} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-white mb-3">{b.title}</h3>
                <p className="text-slate-400 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Preview */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Masterclass Series</h2>
              <p className="text-slate-400">Deep dives into specific market mechanics.</p>
            </div>
            <Link to="/courses" className="hidden md:block">
              <Button variant="ghost">View All Courses <ArrowRight size={16} className="ml-2" /></Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredCourses.map(course => (
              <div key={course.id} className="relative group">
                {/* Overlay wrapper for CourseCard since we can't easily modify CourseCard internals right this second without opening it */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <CourseCard course={course} />
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/courses">
              <Button variant="secondary" className="w-full">View All Courses</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof / CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8">
            Stop watching from the sidelines.
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            Every day you wait is another day the market moves without you. Join the elite.
          </p>
          <Link to="/pricing">
            <Button variant="primary" className="text-lg px-8 py-4 h-16 w-full sm:w-auto shadow-glow">
              Start Your Transformation Now
            </Button>
          </Link>
          <p className="mt-6 text-sm text-slate-500 flex items-center justify-center gap-2">
            <Shield size={14} /> 30-Day Money-Back Guarantee
          </p>
        </div>
      </section>

    </div>
  );
};

export default Home;



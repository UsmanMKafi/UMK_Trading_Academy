import { Link } from 'react-router-dom';
import { Clock, Users, ArrowRight, BarChart } from 'lucide-react';

const CourseCard = ({ course }) => {
  const difficultyColors = {
    Beginner: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    Intermediate: 'bg-primary/20 text-primary border-primary/30',
    Advanced: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
  };

  return (
    <div className="group relative bg-[#0B1221] border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221] via-[#0B1221]/40 to-transparent" />

        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border ${difficultyColors[course.difficulty] || difficultyColors.Beginner
              }`}
          >
            {course.difficulty}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-primary transition-colors">
          {course.title}
        </h3>

        <p className="text-slate-400 text-sm mb-6 line-clamp-2 h-10">
          {course.description}
        </p>

        {/* Meta Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-2 text-sm text-slate-500">
            <Clock className="w-4 h-4 text-primary" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-slate-500">
            <Users className="w-4 h-4 text-primary" />
            <span>{course.students} students</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex flex-col">
            {course.originalPrice && (
              <span className="text-xs text-slate-500 line-through mb-0.5">
                ${course.originalPrice}
              </span>
            )}
            <span className="text-2xl font-bold text-white group-hover:text-gradient-gold">
              ${course.price}
            </span>
          </div>

          <Link
            to={`/courses/${course.slug}`}
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary border border-white/10 group-hover:bg-primary group-hover:text-black transition-all duration-300"
          >
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;



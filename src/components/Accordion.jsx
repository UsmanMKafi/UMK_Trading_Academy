import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className={`border rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index
              ? 'bg-white/10 border-primary/50 shadow-glow'
              : 'bg-white/5 border-white/5 hover:border-white/20'
            }`}
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors"
          >
            <span className={`font-semibold pr-4 font-heading transition-colors ${openIndex === index ? 'text-primary' : 'text-white'}`}>
              {item.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180 text-primary' : 'text-slate-500'
                }`}
            />
          </button>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
          >
            <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;



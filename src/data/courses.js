export const courses = [
  {
    id: 1,
    slug: 'forex-fundamentals',
    title: 'Forex Trading Fundamentals',
    description: 'Master the basics of forex trading, including currency pairs, market structure, and essential trading concepts. Perfect for beginners starting their trading journey.',
    difficulty: 'Beginner',
    duration: '8 weeks',
    price: 299,
    originalPrice: 399,
    students: 1250,
    category: 'Forex',
    instructor: 'John Smith',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop&q=80',
    modules: [
      {
        title: 'Introduction to Forex Markets',
        lessons: [
          'What is Forex Trading?',
          'Understanding Currency Pairs',
          'Market Participants',
          'Trading Sessions',
        ],
      },
      {
        title: 'Technical Analysis Basics',
        lessons: [
          'Chart Types and Timeframes',
          'Support and Resistance',
          'Trend Analysis',
          'Candlestick Patterns',
        ],
      },
      {
        title: 'Risk Management',
        lessons: [
          'Position Sizing',
          'Stop Loss and Take Profit',
          'Risk-Reward Ratios',
          'Managing Drawdowns',
        ],
      },
    ],
  },
  {
    id: 2,
    slug: 'advanced-forex-strategies',
    title: 'Advanced Forex Trading Strategies',
    description: 'Dive deep into advanced trading strategies, including scalping, swing trading, and algorithmic approaches. Build on your fundamentals with professional techniques.',
    difficulty: 'Advanced',
    duration: '12 weeks',
    price: 599,
    originalPrice: 799,
    students: 850,
    category: 'Forex',
    instructor: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=600&fit=crop&q=80',
    modules: [
      {
        title: 'Advanced Technical Analysis',
        lessons: [
          'Fibonacci Retracements',
          'Elliott Wave Theory',
          'Harmonic Patterns',
          'Multi-Timeframe Analysis',
        ],
      },
      {
        title: 'Trading Strategies',
        lessons: [
          'Scalping Techniques',
          'Swing Trading Systems',
          'Breakout Strategies',
          'Mean Reversion Methods',
        ],
      },
      {
        title: 'Psychology and Discipline',
        lessons: [
          'Trading Psychology',
          'Emotional Control',
          'Journaling and Review',
          'Building Consistency',
        ],
      },
    ],
  },
  {
    id: 3,
    slug: 'synthetics-trading-mastery',
    title: 'Synthetics Trading Mastery',
    description: 'Comprehensive guide to synthetic trading instruments, including synthetic indices, volatility indices, and advanced derivative strategies. Learn to trade 24/7 markets.',
    difficulty: 'Intermediate',
    duration: '10 weeks',
    price: 499,
    originalPrice: 649,
    students: 620,
    category: 'Synthetics',
    instructor: 'Michael Chen',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
    modules: [
      {
        title: 'Introduction to Synthetics',
        lessons: [
          'What are Synthetic Indices?',
          'Volatility Indices Explained',
          'Market Characteristics',
          'Trading Hours and Sessions',
        ],
      },
      {
        title: 'Synthetic Trading Strategies',
        lessons: [
          'Trend Following in Synthetics',
          'Range Trading Techniques',
          'Volatility Breakout Strategies',
          'Multi-Asset Approaches',
        ],
      },
      {
        title: 'Risk Management for Synthetics',
        lessons: [
          'Unique Risk Factors',
          'Position Management',
          'Volatility Considerations',
          'Portfolio Diversification',
        ],
      },
    ],
  },
  {
    id: 4,
    slug: 'risk-management-masterclass',
    title: 'Risk Management Masterclass',
    description: 'Learn professional risk management techniques used by institutional traders. Protect your capital and maximize long-term profitability through disciplined risk control.',
    difficulty: 'Intermediate',
    duration: '6 weeks',
    price: 399,
    originalPrice: 549,
    students: 980,
    category: 'Risk Management',
    instructor: 'David Williams',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=600&fit=crop&q=80',
    modules: [
      {
        title: 'Risk Fundamentals',
        lessons: [
          'Understanding Risk',
          'Types of Trading Risks',
          'Risk Metrics and KPIs',
          'Capital Preservation',
        ],
      },
      {
        title: 'Position Sizing Methods',
        lessons: [
          'Fixed Dollar Amount',
          'Percentage Risk Method',
          'Kelly Criterion',
          'Volatility-Based Sizing',
        ],
      },
      {
        title: 'Portfolio Management',
        lessons: [
          'Correlation Analysis',
          'Diversification Strategies',
          'Drawdown Management',
          'Recovery Plans',
        ],
      },
    ],
  },
  {
    id: 5,
    slug: 'forex-psychology',
    title: 'Trading Psychology & Discipline',
    description: 'Master the mental game of trading. Learn to control emotions, build discipline, and develop the mindset of a successful trader.',
    difficulty: 'Beginner',
    duration: '4 weeks',
    price: 249,
    students: 1450,
    category: 'Psychology',
    instructor: 'Emily Rodriguez',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&q=80',
    modules: [
      {
        title: 'Trading Mindset',
        lessons: [
          'The Trader\'s Mindset',
          'Common Psychological Traps',
          'Fear and Greed',
          'Building Confidence',
        ],
      },
      {
        title: 'Emotional Control',
        lessons: [
          'Managing Losses',
          'Dealing with Winning Streaks',
          'Stress Management',
          'Meditation and Focus',
        ],
      },
    ],
  },
  {
    id: 6,
    slug: 'forex-intermediate',
    title: 'Intermediate Forex Trading',
    description: 'Bridge the gap between beginner and advanced. Learn intermediate strategies, improve your analysis skills, and refine your trading approach.',
    difficulty: 'Intermediate',
    duration: '10 weeks',
    price: 449,
    originalPrice: 599,
    students: 1100,
    category: 'Forex',
    instructor: 'Robert Taylor',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80',
    modules: [
      {
        title: 'Intermediate Analysis',
        lessons: [
          'Advanced Chart Patterns',
          'Indicator Combinations',
          'Market Structure Analysis',
          'Price Action Trading',
        ],
      },
      {
        title: 'Strategy Development',
        lessons: [
          'Building Your Trading Plan',
          'Backtesting Methods',
          'Strategy Optimization',
          'Performance Tracking',
        ],
      },
    ],
  },
]

export const testimonials = [
  {
    name: 'Alex Thompson',
    role: 'Professional Trader',
    quote: 'The synthetics trading course completely transformed my approach to trading. The 24/7 market access and clear strategies have been game-changers for my portfolio.',
  },
  {
    name: 'Maria Garcia',
    role: 'Forex Trader',
    quote: 'I started as a complete beginner and the fundamentals course gave me the confidence to start trading live. The risk management module alone was worth the investment.',
  },
  {
    name: 'James Wilson',
    role: 'Day Trader',
    quote: 'The advanced strategies course taught me techniques I never knew existed. My win rate has improved significantly, and I finally understand how to properly manage risk.',
  },
  {
    name: 'Lisa Anderson',
    role: 'Swing Trader',
    quote: 'The psychology course helped me overcome my fear of losses. I now trade with discipline and confidence. This academy truly cares about student success.',
  },
  {
    name: 'Chris Brown',
    role: 'Part-Time Trader',
    quote: 'As someone with a full-time job, the flexible learning format was perfect. The instructors are responsive, and the community support is incredible.',
  },
]



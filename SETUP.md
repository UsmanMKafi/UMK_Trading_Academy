# Quick Start Guide

## Prerequisites

You need to have Node.js installed (version 16 or higher). If you don't have it installed:

1. **Download Node.js**: Visit [https://nodejs.org/](https://nodejs.org/) and download the LTS version
2. **Install Node.js**: Follow the installation instructions for your operating system
3. **Verify Installation**: Open a terminal and run:
   ```bash
   node --version
   npm --version
   ```

## Installation & Running

Once Node.js is installed, follow these steps:

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Open in Browser**:
   The terminal will display a local URL (usually `http://localhost:5173`). Open this URL in your browser to see the website.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
UMK_Trading_Academy/
├── src/
│   ├── components/      # Reusable components
│   ├── pages/          # Page components
│   ├── context/        # Context API
│   ├── data/           # Data files
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## Features Implemented

✅ Modern React + Vite setup
✅ Tailwind CSS styling
✅ React Router for navigation
✅ Context API for state management
✅ Fully responsive design
✅ All pages and components
✅ Animations and transitions
✅ Course filtering and search
✅ Dynamic routing
✅ Professional UI/UX

## Next Steps

After running the development server, you can:
- Navigate through all pages
- Test the course filtering
- View course details
- Check the responsive design on different screen sizes


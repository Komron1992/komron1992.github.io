/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // Добавляем для production build
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html"
    ],
    // Сохраняем важные классы
    safelist: [
      'bg-gradient-to-br',
      'from-slate-900',
      'via-purple-900',
      'to-slate-900'
    ]
  }
}
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'heading': ['Poppins', 'Inter', 'sans-serif'],
        'mono': ['Space Grotesk', 'ui-monospace', 'Consolas', 'monospace'],
      },
    },
  },
};
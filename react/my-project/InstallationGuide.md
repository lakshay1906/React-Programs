Step-1
Run following Commands

here :- You can enter your project name instead of my-project

```
npm create vite@latest my-project -- --template react
cd my-project
```

Step-2
After Creating Vite+React App

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Step-3
Copy this code in tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Step-4
Copy this code in index.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Start your Server
and
You are Ready to GO!!

Installation Guide to setup Tailwind

Run Following Commands-:

Step-: 1

```
npm install -D tailwindcss
npx tailwindcss init
```

Step-:2
Copy and Paste This Code in tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Step-:3 Create a file and name it as input.css
and paste the following code in it.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step-:4 Run this command in terminal

```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

Step-:5 Link the output.css file in your main index.html

And now you are ready to go!!!!!

# LMS Frontend

### Setup Instruction


1. Clone the project 

```
git clone https://github.com/HemantNavlani/Learning-Management-System.git
```

2. Move into the directory
```
cd lms-frontend
```

3. Install dependencies

```
npm i 
```
4. run the server

```
npm run dev
```

### Setup instructions for Tailwind

[Tailwind Official Instruction Doc](https://tailwindcss.com/docs/installation)

1. Install tailwind CSS
```
npm install -D tailwindcss
```

2. Crete Tailwing config file
```
npx tailwindcss init
```

3. Add file extensions to tailwind config file in the contents property

```
./src/**/*.{html,js,jsx,ts,tsx}
```

4. Add the tailwind directives at the top of the `index.css` file
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
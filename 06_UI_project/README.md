# 🎯 Target Audience Segmentation UI Project

A modern, responsive React application showcasing customer segmentation with a beautiful card-based interface. This project demonstrates core React concepts including component composition, props drilling, state management, and dynamic rendering.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.18-38B2AC?style=flat&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=flat&logo=vite)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [Key React Concepts](#-key-react-concepts)
- [Component Breakdown](#-component-breakdown)
- [Learning Resources](#-learning-resources)

---

## ✨ Features

- **Responsive Design** - Fully responsive layout using Tailwind CSS
- **Component-Based Architecture** - Modular and reusable React components
- **Dynamic Card Rendering** - Map through user data to generate cards dynamically
- **Props Drilling** - Demonstrates data flow from parent to child components
- **Horizontal Scroll** - Smooth scrollable card carousel
- **Icon Integration** - RemixIcon for beautiful, scalable icons
- **Modern UI/UX** - Clean, professional design with smooth interactions

---

## 🛠 Tech Stack

| Technology       | Version | Purpose                                            |
| ---------------- | ------- | -------------------------------------------------- |
| **React**        | 19.1.1  | UI library for building component-based interfaces |
| **Tailwind CSS** | 4.1.18  | Utility-first CSS framework for styling            |
| **Vite**         | 7.1.2   | Fast build tool and development server             |
| **RemixIcon**    | 4.8.0   | Icon library for UI elements                       |
| **ESLint**       | 9.33.0  | Code linting and quality assurance                 |

---

## 📁 Project Structure

```
06_UI_project/
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   ├── section1/        # First section components
│   │   │   ├── Arrow.jsx           # Decorative arrow icon
│   │   │   ├── HeroText.jsx        # Main heading and description
│   │   │   ├── LeftContent.jsx     # Left side container
│   │   │   ├── Navbar.jsx          # Top navigation bar
│   │   │   ├── Page1Content.jsx    # Main content wrapper
│   │   │   ├── RightCard.jsx       # Individual user card
│   │   │   ├── RightCardContent.jsx # Card overlay content
│   │   │   ├── RightContent.jsx    # Cards container
│   │   │   └── Section1.jsx        # Section wrapper
│   │   └── section2/        # Second section (placeholder)
│   │       └── Section2.jsx
│   ├── assets/              # Images, fonts, etc.
│   ├── App.jsx              # Main App component
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
└── README.md                # Project documentation
```

---

## 🚀 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/satyapradip/React.js-tutorial_by_sharians.git
   cd React.js-tutorial_by_sharians/06_UI_project
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

---

## 💻 Usage

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

### Customizing User Data

Edit the `users` array in [App.jsx](src/App.jsx) to add or modify cards:

```jsx
const users = [
  {
    img: "your-image-url",
    intro: "Description text",
    color: "royalblue", // Tag background color
    tag: "Satisfied", // Category label
  },
  // Add more users...
];
```

---

## 🎓 Key React Concepts

This project demonstrates essential React concepts for beginners:

### 1. **Components**

- Functional components using arrow functions
- Component composition and nesting
- Reusable UI building blocks

### 2. **Props (Properties)**

- Passing data from parent to child components
- Props drilling through multiple component layers
- Dynamic rendering based on props

### 3. **JSX (JavaScript XML)**

- Writing HTML-like syntax in JavaScript
- Embedding JavaScript expressions with `{}`
- Conditional rendering and loops

### 4. **Array Methods**

- `.map()` for rendering lists
- Dynamic key assignment for list items

### 5. **Styling**

- Tailwind CSS utility classes
- Inline styles for dynamic values
- Responsive design patterns

### 6. **Import/Export**

- ES6 module system
- Default and named imports
- Component organization

---

## 🧩 Component Breakdown

### App Component

**Purpose**: Main application component  
**Props**: None  
**Children**: Section1, Section2  
**Data**: Contains `users` array and passes it down

### Section1 Component

**Purpose**: First section wrapper  
**Props**: `users` (array)  
**Children**: Navbar, Page1Content  
**Function**: Organizes the main content area

### Navbar Component

**Purpose**: Top navigation bar  
**Props**: None (static content)  
**Features**: Title and subtitle buttons

### Page1Content Component

**Purpose**: Main content area  
**Props**: `users` (array)  
**Children**: LeftContent, RightContent  
**Layout**: 60/40 split layout

### LeftContent Component

**Purpose**: Left side hero section  
**Props**: None  
**Children**: HeroText, Arrow  
**Layout**: Vertical flex layout

### RightContent Component

**Purpose**: Scrollable card container  
**Props**: `users` (array)  
**Children**: Multiple RightCard components  
**Features**: Horizontal scroll, maps through users

### RightCard Component

**Purpose**: Individual user card  
**Props**: `img`, `color`, `id`, `tag`  
**Children**: RightCardContent  
**Features**: Background image, overlay content

### RightCardContent Component

**Purpose**: Card overlay with text and buttons  
**Props**: `color`, `id`, `tag`  
**Features**: Number badge, description, dynamic button colors

---

## 📚 Learning Resources

### React Official Documentation

- [React Docs](https://react.dev/)
- [Thinking in React](https://react.dev/learn/thinking-in-react)
- [Passing Props](https://react.dev/learn/passing-props-to-a-component)

### Tailwind CSS

- [Tailwind Documentation](https://tailwindcss.com/docs)
- [Utility-First CSS](https://tailwindcss.com/docs/utility-first)

### JavaScript

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

---

## 🎯 What You'll Learn

By studying this project, you will understand:

- ✅ How to structure a React application
- ✅ Component-based architecture principles
- ✅ Props and data flow in React
- ✅ Rendering dynamic lists with `.map()`
- ✅ Importance of `key` prop in lists
- ✅ Tailwind CSS utility classes
- ✅ Responsive design techniques
- ✅ Modern JavaScript ES6+ features
- ✅ Project organization and file structure

---

## 🐛 Common Beginner Mistakes (Fixed in This Project)

1. ❌ **Import Path Casing** - Fixed: `section1` → `Section1`
2. ❌ **Console.log in Production** - Removed all debug logs
3. ❌ **Missing Keys in Lists** - Added proper `key` prop to mapped items
4. ❌ **Props Type Confusion** - Fixed array vs object confusion

---

## 🤝 Contributing

This is a learning project. Feel free to:

- Fork the repository
- Create your feature branch
- Submit pull requests
- Report issues

---

## 📝 License

This project is part of a React tutorial series by Sharians.

---

## 👨‍💻 Author

**Satya Pradip**

- GitHub: [@satyapradip](https://github.com/satyapradip)

---

## 🙏 Acknowledgments

- Tutorial by Sharians
- Icons by [RemixIcon](https://remixicon.com/)
- Images from [Unsplash](https://unsplash.com/)

---

**Happy Learning! 🚀**

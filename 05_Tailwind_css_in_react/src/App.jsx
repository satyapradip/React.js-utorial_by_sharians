import React, { useState } from "react";
import ExampleButtons from "./components/ExampleButtons";
import ExampleCards from "./components/ExampleCards";
import ExampleLayouts from "./components/ExampleLayouts";
import ExampleForms from "./components/ExampleForms";

const App = () => {
  const [activeTab, setActiveTab] = useState("buttons");

  const tabs = [
    { id: "buttons", label: "Buttons", component: ExampleButtons },
    { id: "cards", label: "Cards", component: ExampleCards },
    { id: "forms", label: "Forms", component: ExampleForms },
    { id: "layouts", label: "Full Layout", component: ExampleLayouts },
  ];

  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
            🎨 Tailwind CSS Mastery
          </h1>
          <p className="text-center text-blue-100">
            Interactive examples to help you master Tailwind CSS
          </p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 md:gap-4 py-4 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-4 md:px-6 py-2 font-semibold rounded-lg transition-all duration-200
                  ${
                    activeTab === tab.id
                      ? "bg-blue-500 text-white shadow-md transform scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Info Banner */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mx-4 mt-6 rounded">
        <div className="flex items-start">
          <div className="shrink-0">
            <span className="text-2xl">💡</span>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              <strong>Tip:</strong> Open your browser's DevTools (F12) and
              inspect elements to see which Tailwind classes are being used!
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto">
        {ActiveComponent && <ActiveComponent />}
      </main>

      {/* Quick Resources */}
      <aside className="bg-linear-to-r from-purple-100 to-pink-100 py-12 mt-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            📚 Learning Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition">
              <div className="text-4xl mb-3">📖</div>
              <h3 className="font-bold mb-2">Mastery Guide</h3>
              <p className="text-sm text-gray-600 mb-3">
                Check TAILWIND_MASTERY_GUIDE.md for complete documentation
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold mb-2">Quick Reference</h3>
              <p className="text-sm text-gray-600 mb-3">
                See QUICK_REFERENCE.md for class cheat sheets
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold mb-2">Practice Exercises</h3>
              <p className="text-sm text-gray-600 mb-3">
                Try PRACTICE_EXERCISES.md to test your skills
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">Built with ❤️ using React + Tailwind CSS</p>
          <p className="text-gray-400 text-sm">
            Inspect the code, experiment with classes, and build amazing things!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;

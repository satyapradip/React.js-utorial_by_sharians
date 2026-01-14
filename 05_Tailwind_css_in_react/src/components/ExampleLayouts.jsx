import React from "react";

const ExampleLayouts = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold">MyLogo</div>
            <ul className="hidden md:flex space-x-8">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Contact
                </a>
              </li>
            </ul>
            <button className="md:hidden">
              <span className="text-2xl">☰</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Tailwind CSS
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Build modern websites with utility-first CSS
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition">
              Get Started
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section - Grid Layout */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Fast</h3>
              <p className="text-gray-600">
                Lightning fast development with utility classes
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Responsive</h3>
              <p className="text-gray-600">
                Built-in responsive design utilities
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2">Customizable</h3>
              <p className="text-gray-600">Highly customizable design system</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Production Ready</h3>
              <p className="text-gray-600">Optimized for production builds</p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Build Faster with Tailwind
              </h2>
              <p className="text-gray-600 mb-4">
                Tailwind CSS is a utility-first CSS framework that allows you to
                build modern websites without leaving your HTML.
              </p>
              <p className="text-gray-600 mb-6">
                Instead of writing custom CSS, you can compose complex designs
                using pre-built utility classes.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span>No context switching</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span>Smaller CSS bundles</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span>Consistent design system</span>
                </li>
              </ul>
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
                Start Learning
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">💻</div>
                <p className="text-gray-700 text-lg">Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Column Layout */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pricing Plans
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <p className="text-4xl font-bold text-blue-500 mb-6">$9</p>
              <ul className="space-y-3 mb-8 text-left">
                <li>✓ 5 Projects</li>
                <li>✓ Basic Support</li>
                <li>✓ 10GB Storage</li>
              </ul>
              <button className="w-full px-4 py-2 border-2 border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition">
                Choose Plan
              </button>
            </div>

            <div className="bg-blue-500 text-white rounded-lg shadow-2xl p-8 text-center transform scale-105">
              <div className="bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <p className="text-4xl font-bold mb-6">$29</p>
              <ul className="space-y-3 mb-8 text-left">
                <li>✓ Unlimited Projects</li>
                <li>✓ Priority Support</li>
                <li>✓ 100GB Storage</li>
                <li>✓ Advanced Features</li>
              </ul>
              <button className="w-full px-4 py-2 bg-white text-blue-500 font-semibold rounded hover:bg-gray-100 transition">
                Choose Plan
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <p className="text-4xl font-bold text-blue-500 mb-6">$99</p>
              <ul className="space-y-3 mb-8 text-left">
                <li>✓ Unlimited Everything</li>
                <li>✓ 24/7 Support</li>
                <li>✓ 1TB Storage</li>
                <li>✓ Custom Solutions</li>
              </ul>
              <button className="w-full px-4 py-2 border-2 border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Products</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    License
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ExampleLayouts;

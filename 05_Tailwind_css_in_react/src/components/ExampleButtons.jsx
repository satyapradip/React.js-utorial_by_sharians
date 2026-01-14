const ExampleButtons = () => {
  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Button Examples</h2>

      {/* Basic Buttons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">1. Basic Buttons</h3>
        <div className="flex gap-4 flex-wrap">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Primary
          </button>

          <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700">
            Secondary
          </button>

          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
            Success
          </button>

          <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">
            Danger
          </button>
        </div>
      </div>

      {/* Outlined Buttons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">2. Outlined Buttons</h3>
        <div className="flex gap-4 flex-wrap">
          <button className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition">
            Outlined Primary
          </button>

          <button className="px-4 py-2 border-2 border-purple-500 text-purple-500 rounded hover:bg-purple-500 hover:text-white transition">
            Outlined Purple
          </button>
        </div>
      </div>

      {/* Rounded Buttons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">3. Rounded Buttons</h3>
        <div className="flex gap-4 flex-wrap">
          <button className="px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-700 transition">
            Pill Button
          </button>

          <button className="px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-700 hover:scale-105 transition transform">
            Hover Scale
          </button>
        </div>
      </div>

      {/* Buttons with Shadows */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">4. Buttons with Shadows</h3>
        <div className="flex gap-4 flex-wrap">
          <button className="px-4 py-2 bg-teal-500 text-white rounded shadow-md hover:shadow-lg transition">
            Shadow
          </button>

          <button className="px-4 py-2 bg-orange-500 text-white rounded shadow-lg hover:shadow-2xl transition">
            Large Shadow
          </button>
        </div>
      </div>

      {/* Button Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">5. Different Sizes</h3>
        <div className="flex gap-4 items-center flex-wrap">
          <button className="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-700">
            Small
          </button>

          <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-700">
            Medium
          </button>

          <button className="px-6 py-3 text-base bg-blue-500 text-white rounded hover:bg-blue-700">
            Large
          </button>

          <button className="px-8 py-4 text-lg bg-blue-500 text-white rounded hover:bg-blue-700">
            Extra Large
          </button>
        </div>
      </div>

      {/* Icon Buttons (using text) */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">6. Special Effects</h3>
        <div className="flex gap-4 flex-wrap">
          <button className="px-4 py-2 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded hover:from-purple-600 hover:to-pink-600">
            Gradient
          </button>

          <button className="px-4 py-2 bg-blue-500 text-white rounded active:scale-95 transition transform">
            Click Effect
          </button>

          <button className="px-4 py-2 bg-yellow-400 text-gray-800 rounded hover:rotate-3 transition transform">
            Rotate on Hover
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExampleButtons;

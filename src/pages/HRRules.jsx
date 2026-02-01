import React from 'react'

const HRRules = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        4 Rules of React HashRouter
      </h2>

      <ol className="space-y-4 list-decimal list-inside text-gray-700">
        <li>
          <span className="font-medium text-gray-900">
            Wrap your app with HashRouter
          </span>
          <p className="text-sm text-gray-600 mt-1">
            HashRouter must wrap the app where routing is required.
          </p>
        </li>

        <li>
          <span className="font-medium text-gray-900">
            URLs use hash (#)
          </span>
          <p className="text-sm text-gray-600 mt-1">
            Routes appear after a <code>#</code> symbol (example: /#/about).
          </p>
        </li>

        <li>
          <span className="font-medium text-gray-900">
            No server configuration needed
          </span>
          <p className="text-sm text-gray-600 mt-1">
            Works well on static hosting because routing is handled on the client.
          </p>
        </li>

        <li>
          <span className="font-medium text-gray-900">
            Use Link or NavLink for navigation
          </span>
          <p className="text-sm text-gray-600 mt-1">
            Avoid anchor tags to prevent full page reloads.
          </p>
        </li>
      </ol>
    </div>
  )
}

export default HRRules
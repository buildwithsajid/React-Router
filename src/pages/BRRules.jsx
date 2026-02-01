import React from 'react'

const BRRules = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        4 Rules of React BrowserRouter
      </h2>

      <ol className="space-y-4 list-decimal list-inside text-gray-700">
        <li>
          <span className="font-medium text-gray-900">
            Wrap your app with BrowserRouter
          </span>
          <p className="text-sm text-gray-600 mt-1">
            BrowserRouter must wrap the entire application or the routing section.
          </p>
        </li>

        <li>
          <span className="font-medium text-gray-900">
            Use Routes inside BrowserRouter
          </span>
          <p className="text-sm text-gray-600 mt-1">
            All Route components should be placed inside the Routes component.
          </p>
        </li>

        <li>
          <span className="font-medium text-gray-900">
            Use Route with path and element
          </span>
          <p className="text-sm text-gray-600 mt-1">
            Each Route must define both a path and an element prop.
          </p>
        </li>

        <li>
          <span className="font-medium text-gray-900">
            Use Link or NavLink for navigation
          </span>
          <p className="text-sm text-gray-600 mt-1">
            Avoid anchor tags; use Link or NavLink to prevent page reloads.
          </p>
        </li>
      </ol>
    </div>
  )
}

export default BRRules
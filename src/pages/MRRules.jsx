import React from 'react'

const MRRules = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        4 Rules of React MemoryRouter
      </h2>

      <ol className="space-y-4 list-decimal list-inside text-gray-700">
        <li>
          <span className="font-medium text-gray-900">
            Routing is stored in memory
          </span>
          <p className="text-sm text-gray-600 mt-1">
            MemoryRouter keeps routing history in memory, not in the URL.
          </p>
        </li>

        <li>
          <span className="font-medium text-gray-900">
            No URL changes in the browser
          </span>
          <p className="text-sm text-gray-600 mt-1">
            Navigation does not affect the browser address bar.
          </p>
        </li>

        <li>
          <span className="font-medium text-gray-900">
            Best for testing and non-browser environments
          </span>
          <p className="text-sm text-gray-600 mt-1">
            Commonly used in unit tests, React Native, or embedded apps.
          </p>
        </li>

        <li>
          <span className="font-medium text-gray-900">
            Define initial routes manually
          </span>
          <p className="text-sm text-gray-600 mt-1">
            Initial navigation state is set using <code>initialEntries</code>.
          </p>
        </li>
      </ol>
    </div>
  )
}

export default MRRules
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col shadow-lg">
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-xl font-bold">Freelancer</h2>
        <p className="text-sm text-gray-300">Dashboard</p>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        <Link to="/" className="flex items-center px-4 py-3 rounded-lg bg-blue-600 text-white">
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>
          </svg>
          Overview
        </Link>

        <Link to="/projects" className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-800 transition">
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
          </svg>
          Projects
        </Link>

        <Link to="/profile" className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-800 transition">
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
          Profile
        </Link>
      </nav>
    </aside>
  )
}

export default Sidebar

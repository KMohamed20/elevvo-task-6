const ProjectTable = () => {
  const projects = [
    { id: 1, name: 'Website Redesign', status: 'Completed', deadline: '2025-04-15' },
    { id: 2, name: 'Mobile App MVP', status: 'In Progress', deadline: '2025-06-30' },
    { id: 3, name: 'E-commerce Site', status: 'Planning', deadline: '2025-08-10' },
    { id: 4, name: 'Brand Identity', status: 'Completed', deadline: '2025-03-20' },
  ]

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deadline</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {projects.map(project => (
            <tr key={project.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{project.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                  project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {project.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.deadline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProjectTable

const ActivityList = () => {
  const activities = [
    { user: 'Alex Rivera', action: 'completed', project: 'Website Redesign', time: '2 hours ago' },
    { user: 'Priya Mehta', action: 'added', project: 'Mobile App Feature', time: '4 hours ago' },
    { user: 'Marcus Lee', action: 'updated status', project: 'E-commerce Site', time: '1 day ago' }
  ]

  return (
    <ul className="space-y-3">
      {activities.map((item, idx) => (
        <li key={idx} className="flex items-center text-sm text-gray-700">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
          <span>
            <strong>{item.user}</strong> {item.action} <em>{item.project}</em> · {item.time}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default ActivityList

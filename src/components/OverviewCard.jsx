const OverviewCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <span className="text-3xl">{icon}</span>
      </div>
    </div>
  )
}

export default OverviewCard

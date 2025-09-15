import OverviewCard from '../components/OverviewCard'
import ActivityList from '../components/ActivityList'
import ChartWrapper from '../components/ChartWrapper'

const Overview = () => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Earnings ($)',
      data: [1200, 1800, 2400, 2100, 3000],
      backgroundColor: '#3b82f6',
      borderColor: '#3b82f6',
      borderWidth: 1
    }]
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <OverviewCard title="Total Projects" value="24" icon="📊" />
        <OverviewCard title="Total Earnings" value="$14,200" icon="$" />
        <OverviewCard title="Tasks Due" value="5" icon="⏰" />
        <OverviewCard title="Clients" value="12" icon="👥" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">Monthly Earnings</h3>
          <ChartWrapper data={chartData} />
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">Recent Activities</h3>
          <ActivityList />
        </div>
      </div>
    </div>
  )
}

export default Overview

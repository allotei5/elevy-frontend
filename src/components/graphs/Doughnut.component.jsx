import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(
    ArcElement, Tooltip, Legend
)

const DoughnutComponent = ({ data, size, title }) => {
  return (
    <div>
        <h1 className="text-lg text-center capitalize">{title}</h1>
        <div style={{height: size}}>
            <Doughnut data={data} options={{ maintainAspectRatio: false}} />
        </div>
    </div>
  )
}

export default DoughnutComponent
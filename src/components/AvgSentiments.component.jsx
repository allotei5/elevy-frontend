import { useEffect, useState } from "react";
import api from "../api";
import PieChart from "./graphs/PieChart.component";


const AvgSentiments = () => {
  const [dataFromDB, setDataFromDb] = useState({})
  const [isLoading, setIsLoading] = useState(true);
  const label = "Average % of Sentiments"

  useEffect(() => {
    const getAvgSentiments = async () => {
      try {
        setIsLoading(true)
        const res = await api.get('/avgSentiments');
        const labels = ['positive', 'negative', 'neutral']
        const data = {
          labels,
          datasets: [
           {
              label,
              data: [res.data[0].positive, res.data[0].negative, res.data[0].neutral],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
              ],
              borderWidth: 1, 
           }
          ]
        }

        setDataFromDb(data)
        setIsLoading(false)
        
      } catch (error) {
        console.log(error)
      }
    }
    getAvgSentiments()
  }, [])
  return (
    <div className="mb-10">
      {!isLoading && <PieChart data={dataFromDB} size="500px" title={label} />}
    </div>
  )
}

export default AvgSentiments
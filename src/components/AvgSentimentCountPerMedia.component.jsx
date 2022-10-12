import { useState, useEffect } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

import api from '../api'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const AvgSentimentCountPerMedia = ({ mediaId, title }) => {
    const [ dataFromDb, setDataFromDb ] = useState({})
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true)
            try {
                const res = await api.get(`/avgSentimentCountPerMedia/${mediaId}`)
            const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', "July", 'Aug', 'Sept']
            const data = {
                labels,
                datasets: [
                  {
                    label: 'Positive',
                    data: res.data.map((dt) => dt.positive),
                    borderColor: 'rgb(0,100,0)',
                    backgroundColor: 'rgb(0,100,0, 0.5)',
                  },
                  {
                    label: 'Neutral',
                    data: res.data.map((dt) => dt.neutral),
                    borderColor: 'rgb(192, 192, 192)',
                    backgroundColor: 'rgba(192, 192, 192, 0.5)',
                  },
                  {
                    label: 'Negative',
                    data: res.data.map((dt) => dt.negative),
                    borderColor: 'rgb(255, 0, 0)',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                  },
                ],
              }
              setDataFromDb(data)
              setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
            
        }
        getData()
    }, [])

    return (
        <div>
            <h1 className="text-lg text-center capitalize">{title}</h1>
            <div style={{height: "300px"}}>
                { !isLoading && <Line data={dataFromDb} options={{ maintainAspectRatio: false}}  />}
            </div>
        </div>
    )
}

export default AvgSentimentCountPerMedia
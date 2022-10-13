import React, { useEffect, useState } from 'react'
import api from '../api'

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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


const AvgSentimentsByDay = () => {
    const [ dataFromDB, setDataFromDB ] = useState({})
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true)
                const res = await api.get('/avgSentimentsByDay') 
                
                const data = {
                    labels: res.data.map((day) => `Week ${day.pubDate}`),
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
                setDataFromDB(data)
                console.log(data)
                setIsLoading(false)

            } catch (error) {
                
            }
        }
        getData();
    }, [])
  return (
    <div>
        <h1 className="text-lg text-center capitalize">Average Sentiments by week</h1>
        <div style={{height: "300px"}}>
            { !isLoading && <Line data={dataFromDB} options={{ maintainAspectRatio: false}}  />}
        </div>
    </div>
  )
}

export default AvgSentimentsByDay
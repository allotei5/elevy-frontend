import { useState, useEffect } from "react"
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js'

import { Doughnut } from 'react-chartjs-2'
import api from "../api"
import DoughnutComponent from "./graphs/Doughnut.component"

ChartJS.register(
    ArcElement, Tooltip, Legend
)


const PostsByMediaCount = () => {
    const [ dataFromDb, setDataFromDb ] = useState({})
    const [loading, setIsLoading] = useState(true)

    useEffect(() => {
        const getPostsByMediaCountData = async () => {
            try {
                setIsLoading(true)
                const res = await api.get('/postsCountByMedia')
                const labels = []
                const data = []
                res.data.forEach((dt) => {
                    labels.push(dt.mediaName)
                    data.push(dt.mediaCount)
                })
                setDataFromDb({
                    labels,
                    datasets: [
                        {
                            data,
                            backgroundColor: [
                                "rgba(255, 99, 132, 0.2)",
                                "rgba(54, 162, 235, 0.2)",
                                "rgba(255, 206, 86, 0.2)",
                                "rgba(75, 192, 192, 0.2)",
                            ]
                        }
                    ]
                })
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            } 
        }

        getPostsByMediaCountData()
    }, [])
  return (
    <div className="mb-10">
        { !loading && <DoughnutComponent data={dataFromDb} size="500px" title="Chart Showing Posts count by media" />}
    </div>
  )
}

export default PostsByMediaCount
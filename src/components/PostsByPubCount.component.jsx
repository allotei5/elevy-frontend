import { useState, useEffect } from "react"
import DoughnutComponent from "./graphs/Doughnut.component"
import api from "../api"
import HorizontalBarChart from "./graphs/HorizontalBarChart.component"

const PostsByPubCount = () => {
    const [ dataFromDb, setDataFromDb ] = useState({})
    const [loading, setIsLoading] = useState(true)

    

    useEffect(() => {
        const getPostsByPubCountData = async () => {
            try {
                setIsLoading(true)
                const res = await api.get('/postsCountByPublication')
                const labels = []
                const data = []
                res.data.forEach((dt) => {
                    labels.push(dt.pubName)
                    data.push(dt.pubCount)
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
                                "rgba(132, 99, 255, 0.2)",
                                "rgba(0, 50, 54, 0.2)",
                                "rgba(89, 0, 100, 0.2)",
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

        getPostsByPubCountData()
    }, [])

  return (
    <div className="mb-10">
        { !loading && <HorizontalBarChart data={dataFromDb} size="500px" title="Chart Showing Posts count by the top 10 publications with the most articles" />}

    </div>
  )
}

export default PostsByPubCount
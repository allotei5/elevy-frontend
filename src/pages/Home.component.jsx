import { useEffect, useState } from "react";
import api from "../api";
import AvgSentiments from "../components/AvgSentiments.component";
import AvgSentimentsByDay from "../components/AvgSentimentsByDay.component";


const Home = () => {
  
  return (
    <div>
      <AvgSentiments />
      <AvgSentimentsByDay />
    </div>
  )
}

export default Home
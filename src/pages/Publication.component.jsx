import { useEffect, useState } from "react";
import api from "../api";
import AvgSentimentCountPerPub from "../components/AvgSentimentCountPerPub.component";
import PostsByPubCount from "../components/PostsByPubCount.component"

const Publication = () => {
  const [pubs, setPubs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMedia = async () => {
      try {
        setIsLoading(true);
        const res = await api.get("/postsCountByPublication");
        
        setPubs(res.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getMedia()
  }, []);

  return (
    <div className="mb-10">
     <h1>Media</h1>
      <PostsByPubCount />
      {!isLoading && (
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 gap-20 mb-[100px]">
          {pubs.map((medium) => (
            <AvgSentimentCountPerPub pubId={medium.id} key={medium.id} title={`Chart showing average sentiments over the months jan-sep reported by the publication: ${medium.pubName}`} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Publication
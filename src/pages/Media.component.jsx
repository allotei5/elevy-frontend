import { useEffect, useState } from "react";
import api from "../api";
import AvgSentimentCountPerMedia from "../components/AvgSentimentCountPerMedia.component";
import PostsByMediaCount from "../components/PostsByMediaCount.component";

const Media = () => {
  const [media, setMedia] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMedia = async () => {
      try {
        setIsLoading(true);
        const res = await api.get("/getAllMedia");
        setMedia(res.data);
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
      <PostsByMediaCount />
      {!isLoading && (
        <div className="grid grid-cols-2 gap-20">
          {media.map((medium) => (
            <AvgSentimentCountPerMedia mediaId={medium.id} key={medium.id} title={`Chart showing average sentiments over the months jan-sep reported by the media: ${medium.media}`} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Media;

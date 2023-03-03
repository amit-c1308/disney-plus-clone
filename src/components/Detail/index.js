import { useParams } from "react-router-dom";
import { DetailContainer } from "./Detail.style";
import { useEffect, useState } from "react";
import { fetchMovies } from "../../features/utils";

const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    fetchMovies("movies").then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        if (doc.id === id) {
          setDetailData(doc.data());
          console.log("details", doc.data());
        }
      });
    });
  }, [id]);

  return (
    <DetailContainer>
      <div className="backgroundContainer">
        <img src={detailData.backgroundImg} alt={detailData.title} />
      </div>
      <div className="imageTitle">
        <img src={detailData.titleImg} alt={detailData.title} />
      </div>
      <div className="contentData">
        <div className="actions">
          <button className="actionBtn play">
            <img src="/images/play-icon-black.png" alt="play" />
            <span>PLAY</span>
          </button>
          <button className="actionBtn darkBtn trailer">
            <img src="/images/play-icon-white.png" alt="trailer" />
            <span>TRAILER</span>
          </button>
          <button className="actionBtn addToList secondary">
            <img src="/images/watchlist-icon.svg" alt="add to list" />
          </button>
          <button className="actionBtn groupWatch secondary">
            <img src="/images/group-icon.png" alt="group watch" />
          </button>
        </div>
        <p className="subTitle">{detailData.subTitle}</p>
        <p className="description">{detailData.description}</p>
      </div>
    </DetailContainer>
  );
};

export default Detail;

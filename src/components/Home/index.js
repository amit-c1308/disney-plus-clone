import React, { useEffect } from "react";
import { HomeContainer } from "./Home.style";
import ImgSlider from "../ImgSlider";
import Viewers from "../Viewers";
import { useDispatch, useSelector } from "react-redux";
import db, { collection, getDocs } from "../../firebase";
import {
  selectNewDisney,
  selectOriginals,
  selectRecommends,
  selectTrending,
  setMovies,
} from "../../features/movie/movieSlice";
import { selectUserName } from "../../features/user/userSlice";
import Showcase from "../Showcase";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const recommendedMovies = useSelector(selectRecommends);
  const newDisneyMovies = useSelector(selectNewDisney);
  const originalMovies = useSelector(selectOriginals);
  const trendingMovies = useSelector(selectTrending);
  let recommends = [];
  let newDisney = [];
  let originals = [];
  let trending = [];

  const fetchData = async () => {
    return await getDocs(collection(db, "movies"));
  };

  useEffect(() => {
    fetchData().then((snapshot) => {
      snapshot.forEach((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [
              ...recommends,
              {
                id: doc.id,
                ...doc.data(),
              },
            ];
            break;
          case "new":
            newDisney = [
              ...newDisney,
              {
                id: doc.id,
                ...doc.data(),
              },
            ];
            break;
          case "original":
            originals = [
              ...originals,
              {
                id: doc.id,
                ...doc.data(),
              },
            ];
            break;
          case "trending":
            trending = [
              ...trending,
              {
                id: doc.id,
                ...doc.data(),
              },
            ];
            break;
        }
      });
      console.log("data", {
        recommends,
        newDisney,
        originals,
        trending,
      });
      dispatch(
        setMovies({
          recommends,
          newDisney,
          originals,
          trending,
        })
      );
    });
  }, [userName]);

  return (
    <HomeContainer>
      <ImgSlider />
      <Viewers />
      <Showcase title="Recommended for you" data={recommendedMovies} />
      <Showcase title="New on Disney +" data={newDisneyMovies} />
      <Showcase title="Disney + Originals" data={originalMovies} />
      <Showcase title="Trending" data={trendingMovies} />
    </HomeContainer>
  );
};

export default Home;

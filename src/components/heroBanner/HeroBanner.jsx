import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./heroBanner.scss";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../lazyLoadImage/Img";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const { data, loading } = useFetch("/movie/upcoming");
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();


  useEffect(() => {
    // Get random background image
    const bg = url.backdrop + data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;

    // Set background image of random movie
    setBackground(bg);
  }, [data, url.backdrop]);

  // Search input event "Enter button pressed"
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      {!loading && <div className="backdrop-img">
        <Img src={background} />
      </div>}

      <div className="opacity-layer">
        
      </div>

      <ContentWrapper>
        <div className="wrapper">
          <div className="heroBannerContent">
            <span className="title">Welcome.</span>
            <span className="subTitle">
              Milions of movies, TV shows and people to discover. Explore now.
            </span>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a movie or tv show..."
                onKeyUp={searchQueryHandler}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button onClick={() => navigate(`/search/${query}`)} type="button">Search</button>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;

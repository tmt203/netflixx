import { useState } from "react";

import "./videosSection.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import { PlayButton } from "../playButton/PlayButton";
import VideoPopup from "../videoPopup/VideoPopup";
import Img from "../lazyLoadImage/Img";

const VideosSection = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return (
    data?.results?.length > 0 && (
      <div className="videosSection">
        <ContentWrapper>
          <div className="sectionHeading">Official Videos</div>
          {!loading ? (
            <div className="videos">
              {data?.results?.map((video) => (
                <div key={video.id} className="videoItem" onClick={() => {
                  setVideoId(video.key);
                  setShow(true);
                }}>
                  <div className="videoThumbnail">
                    <Img src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`} />
                    <PlayButton />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="videoSkeleton">
              {loadingSkeleton()}
              {loadingSkeleton()}
              {loadingSkeleton()}
              {loadingSkeleton()}
            </div>
          )}
        </ContentWrapper>
        <VideoPopup
          show={show}
          setShow={setShow}
          videoId={videoId}
          setVideoId={setVideoId}
        />
      </div>
    )
  );
};

export default VideosSection;

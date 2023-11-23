import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import "./details.scss";
import DetailsBanner from "../../components/detailsBanner/DetailsBanner";
import Cast from "../../components/cast/Cast";
import VideosSection from "../../components/videosSection/VideosSection";
import Similar from "../../components/similar/Similar";
import Recommendation from "../../components/recommendation/Recommendation";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);

  return (
    <>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </>
  );
};

export default Details;

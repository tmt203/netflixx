import { useSelector } from "react-redux";

import "./cast.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import avatar from "../../assets/avatar.png";

const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };
  return (
    data?.length > 0 && (
      <div className="castSection">
        <ContentWrapper>
          <div className="sectionHeading">Top Cast</div>
          {!loading ? (
            <div className="listItems">
              {data &&
                data.map((item) => {
                  const imgUrl = item.profile_path
                    ? url.profile + item.profile_path
                    : avatar;

                  return (
                    <div key={item.id} className="listItem">
                      <div className="profileImg">
                        <Img src={imgUrl} />
                      </div>
                      <div className="name">{item.name}</div>
                      <div className="character">{item.character}</div>
                    </div>
                  );
                })}
            </div>
          ) : (
            <div className="castSkeleton">
              {skeleton()}
              {skeleton()}
              {skeleton()}
              {skeleton()}
              {skeleton()}
              {skeleton()}
            </div>
          )}
        </ContentWrapper>
      </div>
    )
  );
};

export default Cast;

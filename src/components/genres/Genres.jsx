import { useSelector } from "react-redux";
import "./genres.scss";

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);

  return (
    <div className="genres">
      {data?.map((genreId) => {
        if (!genres[genreId]?.name) return;
        return (
          <div key={genreId} className="genre">{genres[genreId]?.name}</div>
        );
      })}
    </div>
  )
}

export default Genres
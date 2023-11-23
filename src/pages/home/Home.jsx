import { HeroBanner, Popular, TopRated, Trending } from "../../components/imports";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  )
}

export default Home
import { ShowcaseWrapper, ShowcaseContainer } from "./Showcase.style";
import { Link } from "react-router-dom";

const Showcase = ({ title, data }) => {
  return (
    <ShowcaseContainer>
      <h3 className="title">{title}</h3>
      <ShowcaseWrapper>
        {data?.map((movie, index) => (
          <div key={index} className="recommendedItem">
            {movie.id}
            <Link to={`/detail/${movie.id}`}>
              <img src={movie.cardImg} alt={movie.title} />
            </Link>
          </div>
        ))}
      </ShowcaseWrapper>
    </ShowcaseContainer>
  );
};

export default Showcase;

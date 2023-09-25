import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ProjectCard = ({ data }) => {
  return (
    <Link to={`campaign/${data.id}`}>
      <div
        className={`card-container bg-[${data.card_bg}] rounded-lg flex flex-col justify-between overflow-hidden h-84`}
      >
        <img src={data.image} alt="" />
        <div className={`card p-2 space-y-2 py-4 h-28`}>
          <span
            className={`bg-[${data.category_bg}] px-2 rounded w-min text-[${data.text_color}]`}
          >
            {data.category}
          </span>
          <h1 className={`text-[${data.text_color}] text-xl`}>{data.title}</h1>
        </div>
      </div>
    </Link>
  );
};
ProjectCard.propTypes = {
  data: PropTypes.object,
};
export default ProjectCard;

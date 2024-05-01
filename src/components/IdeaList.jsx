import PropTypes from "prop-types";
import Idea from "./Idea";

export default function IdeaList({ ideaList }) {
  return (
    <div className="mt-8">
      {ideaList.map((idea, index) => (
        <Idea key={index} idea={idea} />
      ))}
    </div>
  );
}

IdeaList.propTypes = {
  ideaList: PropTypes.array.isRequired,
};

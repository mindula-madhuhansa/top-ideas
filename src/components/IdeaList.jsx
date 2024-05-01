import PropTypes from "prop-types";
import Idea from "./Idea";

export default function IdeaList({ ideaList, refreshData }) {
  return (
    <div className="mt-8">
      {ideaList.map((idea, index) => (
        <Idea key={index} idea={idea} refreshData={refreshData} />
      ))}
    </div>
  );
}

IdeaList.propTypes = {
  ideaList: PropTypes.array.isRequired,
  refreshData: PropTypes.func.isRequired,
};

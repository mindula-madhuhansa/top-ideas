import PropTypes from "prop-types";

export default function Idea({ idea }) {
  return (
    <div className="my-4 border shadow-md rounded-lg p-5">
      <div className="flex justify-between space-x-4">
        <p className="text-lg font-semibold">{idea?.content}</p>
        <div className="flex flex-col items-center border-l-2 pl-4">
          <span className="text-lg hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
            👍
          </span>
          <span className="text-lg cursor-default p-2">{idea?.vote}</span>
          <span className="text-lg hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
            👎
          </span>
        </div>
      </div>
      <span className="opacity-80 italic text-sm flex mt-4">
        Idea by {idea?.username} on {idea?.created_at}
      </span>
    </div>
  );
}

Idea.propTypes = {
  idea: PropTypes.object.isRequired,
};

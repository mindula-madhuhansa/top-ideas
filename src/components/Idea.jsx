import PropTypes from "prop-types";
import { eq } from "drizzle-orm";

import { db } from "../utils";
import { Ideas } from "../schemas/schema";
import { checkDownVoted, checkUpVoted, downvote, upvote } from "../service";

export default function Idea({ idea, refreshData }) {
  const handleUpvote = async () => {
    if (upvote(idea.id)) {
      const res = await db
        .update(Ideas)
        .set({ vote: idea.vote + 1 })
        .where(eq(Ideas.id, idea.id))
        .returning({ id: Ideas.id });

      if (res) {
        refreshData();
      }
    }
  };

  const handleDownvote = async () => {
    if (downvote(idea.id)) {
      const res = await db
        .update(Ideas)
        .set({ vote: idea.vote - 1 })
        .where(eq(Ideas.id, idea.id))
        .returning({ id: Ideas.id });

      if (res) {
        refreshData();
      }
    }
  };

  return (
    <div className="my-4 border shadow-md rounded-lg p-5">
      <div className="flex justify-between space-x-4">
        <p className="text-lg font-semibold">{idea?.content}</p>
        <div className="flex flex-col items-center border-l-2 pl-4">
          <span
            onClick={handleUpvote}
            className={`text-lg hover:bg-gray-200 p-2 rounded-lg cursor-pointer ${
              checkUpVoted(idea.id) ? "bg-slate-200" : ""
            }`}
          >
            👍
          </span>
          <span className="text-lg cursor-default p-2 font-bold">
            {idea?.vote}
          </span>
          <span
            onClick={handleDownvote}
            className={`text-lg hover:bg-gray-200 p-2 rounded-lg cursor-pointer ${
              checkDownVoted(idea.id) ? "bg-slate-200" : ""
            }`}
          >
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
  refreshData: PropTypes.func.isRequired,
};

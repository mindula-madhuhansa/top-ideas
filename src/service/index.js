export const upvote = (id) => {
  const votes = localStorage.getItem("votes")
    ? JSON.parse(localStorage.getItem("votes"))
    : {
        upvotes: [],
        downvotes: [],
      };

  if (votes.upvotes.indexOf(id) !== -1) {
    return false;
  }

  votes.upvotes.push(id);
  const downvotes = votes.downvotes?.filter((vote) => vote !== id);
  votes.downvotes = downvotes;

  localStorage.setItem("votes", JSON.stringify(votes));

  return true;
};

export const downvote = (id) => {
  const votes = localStorage.getItem("votes")
    ? JSON.parse(localStorage.getItem("votes"))
    : {
        upvotes: [],
        downvotes: [],
      };

  if (votes.downvotes.indexOf(id) !== -1) {
    return false;
  }

  votes.downvotes.push(id);
  const upvotes = votes.upvotes?.filter((vote) => vote !== id);
  votes.upvotes = upvotes;

  localStorage.setItem("votes", JSON.stringify(votes));

  return true;
};

export const checkUpVoted = (id) => {
  const votes = JSON.parse(localStorage.getItem("votes"));

  return votes.upvotes.find((vote) => vote === id);
};

export const checkDownVoted = (id) => {
  const votes = JSON.parse(localStorage.getItem("votes"));

  return votes.downvotes.find((vote) => vote === id);
};

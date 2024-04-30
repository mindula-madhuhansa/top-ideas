import { useEffect, useState } from "react";
import { ArrowLeft, SendIcon } from "lucide-react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import { db } from "../utils";
import { Ideas } from "../schemas/schema";

export default function AddNewIdea() {
  const navigation = useNavigate();

  const [idea, setIdea] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setUsername(localStorage.getItem("username"));
      setUser(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await db
      .insert(Ideas)
      .values({
        username: username,
        content: idea,
        created_at: moment().format("DD MMM YYYY"),
      })
      .returning({ id: Ideas.id });

    if (res) {
      localStorage.setItem("username", username);
      console.log("Idea submitted successfully!");

      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }

    setIdea("");
    setUsername("");
  };

  return (
    <div>
      <Header />

      {showAlert && (
        <div role="alert" className="alert alert-success mt-4 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Your idea submitted successfully!</span>
        </div>
      )}

      <div>
        <button
          onClick={() => navigation("/")}
          className="btn btn-circle btn-outline btn-primary mt-4 space-x-2"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>

        <h2 className="mt-8 font-bold text-4xl md:text-5xl text-center">
          From Concept to Creation
        </h2>

        <div className="mt-16 border p-4 py-8 rounded-lg shadow-md w-full max-w-3xl mx-auto">
          {!user && (
            <div className="flex flex-col space-y-2 w-full max-w-2xl mx-auto">
              <label className="font-bold text-sm opacity-80">Your Name*</label>
              <input
                type="text"
                placeholder="John Doe"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input input-bordered"
              />
            </div>
          )}

          <div className="flex flex-col mt-8 space-y-2  w-full max-w-2xl mx-auto">
            <label className="font-bold text-sm opacity-80">Your Idea*</label>
            <textarea
              placeholder="Describe your idea here..."
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              className="textarea textarea-bordered border-primary"
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            disabled={!idea || !username}
            className="btn flex w-full max-w-2xl mx-auto btn-primary mt-8 uppercase font-bold text-lg"
          >
            Submit
            <SendIcon className="ml-2 w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

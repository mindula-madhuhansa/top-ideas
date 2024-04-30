import Header from "../components/Header";

import { ArrowLeft, SendIcon } from "lucide-react";

export default function AddNewIdea() {
  return (
    <div>
      <Header />

      <div>
        <button
          onClick={() => window.history.back()}
          className="btn btn-primary mt-4 space-x-2"
        >
          <ArrowLeft className="h-5 w-5" />
          Back
        </button>

        <h2 className="mt-8 font-bold text-4xl md:text-5xl text-center">
          From Concept to Creation
        </h2>

        <form className="mt-16 border p-4 py-8 rounded-lg shadow-md w-full max-w-3xl mx-auto">
          <div className="flex flex-col space-y-2 w-full max-w-2xl mx-auto">
            <label className="font-bold text-sm opacity-80">Your Name*</label>
            <input
              type="text"
              placeholder="John Doe"
              className="input input-bordered"
            />
          </div>

          <div className="flex flex-col mt-8 space-y-2  w-full max-w-2xl mx-auto">
            <label className="font-bold text-sm opacity-80">Your Idea*</label>
            <textarea
              className="textarea textarea-bordered border-primary"
              placeholder="Describe your idea here..."
            />
          </div>

          <button
            type="submit"
            className="btn flex w-full max-w-2xl mx-auto btn-primary mt-8 uppercase font-bold text-lg"
          >
            <SendIcon className="w-6 h-6" />
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

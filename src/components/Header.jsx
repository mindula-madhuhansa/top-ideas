export default function Header() {
  return (
    <header className="flex flex-1 items-center justify-between shadow-lg p-4 md:p-10 rounded-lg">
      <h2 className="font-bold text-base md:text-2xl">Top Ideas</h2>
      <button className="btn btn-primary btn-sm md:btn-md">New Idea</button>
    </header>
  );
}

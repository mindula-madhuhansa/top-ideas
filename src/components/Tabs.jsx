import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("new");
  const params = useLocation().hash.substring(1);

  useEffect(() => {
    setActiveTab(params);
  }, [params]);

  return (
    <div className="mt-16">
      <div role="tablist" className="tabs tabs-bordered">
        <a
          role="tab"
          href="/#hot"
          className={`tab text-lg font-bold ${
            activeTab === "hot" && "tab-active"
          }`}
        >
          🔥 Hot
        </a>
        <a
          role="tab"
          href="/#new"
          className={`tab text-lg font-bold ${
            activeTab === "new" && "tab-active"
          }`}
        >
          ✨ New
        </a>
        <a
          role="tab"
          href="/#top"
          className={`tab text-lg font-bold ${
            activeTab === "top" && "tab-active"
          }`}
        >
          🏆 Top
        </a>
      </div>
    </div>
  );
}

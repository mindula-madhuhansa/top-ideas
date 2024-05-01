import { useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { desc } from "drizzle-orm";

import { db } from "../utils";
import { Ideas } from "../schemas/schema";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Tabs from "../components/Tabs";
import IdeaList from "../components/IdeaList";

export default function Home() {
  const params = useLocation().hash.substring(1);
  const [ideaList, setIdeaList] = useState([]);

  const getAllIdeas = useCallback(async () => {
    const res = await db
      .select()
      .from(Ideas)
      .orderBy(
        desc(params === "hot" || params === "top" ? Ideas.vote : Ideas.id)
      )
      .limit(20);
    setIdeaList(res);
  }, [params]);

  useEffect(() => {
    getAllIdeas();
  }, [getAllIdeas]);

  return (
    <div>
      <Header />
      <Hero />
      <Tabs />
      <IdeaList ideaList={ideaList} refreshData={getAllIdeas} />
    </div>
  );
}

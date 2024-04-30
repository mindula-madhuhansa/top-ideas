import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "../schemas/schema";

const pg = neon(
  "postgresql://top_ideas_owner:aZUjBG52DVoy@ep-polished-star-a143c8xl.ap-southeast-1.aws.neon.tech/top-ideas?sslmode=require"
);
export const db = drizzle(pg, { schema });

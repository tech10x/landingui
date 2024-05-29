import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { cors } from "hono/cors";
import { projectRouter } from "./routes/project";

// type Bindings = {
//   HONO_R2_UPLOAD: Bindings;
// };

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
    HONO_R2_UPLOAD: any;
  };
  Variables: {
    prisma: any;
  };
}>();

app.use(
  "/*",
  cors({
    origin: ["http://localhost:5173", "https://tech10xlandingui.netlify.app"],
    credentials: true,
  })
);

app.get("/", async (c) => {
  return c.text("Hello Hono!");
});
app.post("/api/v1/upload", async (c) => {
  const body = await c.req.parseBody();

  const file = body["file"];
  if (file && file instanceof File) {
    console.log("Uploading File to R2!");
  }

  console.log(body["file"]); // File | string
  await c.env.HONO_R2_UPLOAD.put(`medium.png`, file);
  console.log("Uploading file to R2 completeed!");
  return c.text("File uploaded!");
});

app.use("/*", async (c, next) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  c.set("prisma", prisma);
  await next();
});

app.route("/api/v1", projectRouter);

export default app;

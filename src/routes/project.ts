import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";

import { connect } from "mongoose";

export const projectRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
    //  HONO_R2_UPLOAD: any;
    //  R2_URL: string;
  };
  Variables: {
    //   userId: string;
    prisma: any;
  };
}>();

// middleware
// projectRouter.use("/*", async (c, next) => {
//   const authHeader = c.req.header("authorization") || "";

//   try {
//     if (!authHeader) {
//       c.status(403);
//       return c.json({ err: "Unauthorized" });
//     }

//     const token = authHeader.split(" ")[1];
//     const user = await verify(token, c.env.JWT_SECRET);
//     if (user) {
//       c.set("userId", user.id);
//       await next();
//     } else {
//       c.status(403);
//       return c.json({ err: "Unauthorized" });
//     }
//   } catch (error) {
//     c.status(411);
//     return c.json({ err: "You are not logged in!" });
//   }
// });

projectRouter.post("/create", async (c) => {
  const prisma = c.get("prisma");

  const body = await c.req.json();

  // const body = await c.req.parseBody();

  //   const file = body["file"];
  //   console.log("file", file);

  //   let thumbNailURL = "";
  //   if (file && file instanceof File) {
  //     //  console.log("Uploading File to R2!");

  //     const fileName = file.lastModified + file.name;
  //     await c.env.HONO_R2_UPLOAD.put(fileName, file);

  //     // console.log("fileName", fileName);
  //     thumbNailURL = `${c.env.R2_URL}/${fileName}`;

  //     // console.log("thumbNailURL", thumbNailURL);
  //   }
  //   const authorId = c.get("userId");
  try {
    const project = await prisma.project.create({
      data: {
        title: body.title,
        url: body.url,
        // authorId: authorId,
        thumbNail: body.thumbNail,
      },
    });
    return c.json({ id: project.id });
  } catch (e) {
    c.status(411);
    console.log(e);
    return c.json({ err: "Error while creating project!" });
  }
});

// projectRouter.put("/update/:id", async (c) => {
//   const prisma = c.get("prisma");
//   const body = await c.req.parseBody();

//   // const body = await c.req.json();
//   const authorId = c.get("userId");
//   const id = String(c.req.param("id"));
//   const file = body["file"];

//   const oldPost = await prisma.post.findUnique({
//     where: {
//       id: id,
//     },
//   });
//   let thumbNailURL = oldPost?.thumbNail;
//   if (file && file instanceof File) {
//     //  console.log("Uploading File to R2!");

//     const prevFileName = oldPost?.thumbNail.split("/").pop();
//     console.log(prevFileName);
//     await c.env.HONO_R2_UPLOAD.delete(prevFileName);

//     const fileName = file.lastModified + file.name;
//     await c.env.HONO_R2_UPLOAD.put(fileName, file);

//     console.log("fileName", fileName);
//     thumbNailURL = `${c.env.R2_URL}/${fileName}`;

//     console.log("thumbNailURL", thumbNailURL);
//   }
//   try {
//     const post = await prisma.post.update({
//       where: {
//         id: id,
//         authorId: authorId,
//       },
//       data: {
//         title: body.title,
//         content: body.content,
//         slug: body.slug,
//         thumbNail: thumbNailURL,
//       },
//     });

//     return c.json({ post });
//   } catch (e) {
//     c.status(411);
//     console.log(e);
//     return c.json({ err: "Error while updating blog posts!" });
//   }
// });

// projectRouter.delete("/delete", async (c) => {
//   const prisma = c.get("prisma");

//   const body = await c.req.json();
//   const authorId = c.get("userId");

//   try {
//     await prisma.post.delete({
//       where: {
//         id: body.id,
//         authorId: authorId,
//       },
//     });
//     // return c.json({ id: post.id });
//     return c.json({ msg: "Post Deleted Successfully!" });
//   } catch (e) {
//     c.status(411);
//     console.log(e);
//     return c.json({ err: "Error while updating blog posts!" });
//   }
// });
// projectRouter.delete("/delete/all", async (c) => {
//   const prisma = c.get("prisma");

//   const body = await c.req.json();
//   // const authorId = c.get("userId");

//   try {
//     await prisma.post.deleteMany();
//     // return c.json({ id: post.id });
//     return c.json({ msg: "Post Deleted Successfully!" });
//   } catch (e) {
//     c.status(411);
//     console.log(e);
//     return c.json({ err: "Error while updating blog posts!" });
//   }
// });
// projectRouter.get("/post/:id", async (c) => {
//   const prisma = c.get("prisma");
//   const userId = c.get("userId");

//   const id = c.req.param("id");
//   // console.log(prisma);
//   //   const body = await c.req.json();
//   try {
//     const post = await prisma.post.findUnique({
//       where: {
//         id: id,
//       },
//       select: {
//         id: true,
//         title: true,
//         content: true,
//         slug: true,
//         thumbNail: true,
//         createdAt: true,
//         author: {
//           select: {
//             name: true,
//             id: true,
//             profileImg: true,
//             _count: {
//               select: {
//                 following: true,
//                 followers: true,
//               },
//             },
//           },
//         },
//         _count: {
//           select: {
//             likes: true,
//           },
//         },
//         likes: {
//           where: {
//             userId: userId,
//           },
//           select: {
//             id: true,
//           },
//         },
//       },
//     });
//     if (post && post._count) {
//       post.likeCount = post._count.likes;
//       delete post._count; // Optional: remove the _count object if you don't need it
//     }
//     post.hasLiked = post.likes?.length > 0;
//     delete post.likes;

//     if (post && post.author._count) {
//       post.author.followingCount = post.author._count.following;
//       post.author.followersCount = post.author._count.followers;

//       delete post.author._count; // Optional: remove the _count object if you don't need it
//     }

//     if (!post) {
//       c.status(411);
//       return c.json({ err: "Invalid Post!" });
//     }
//     return c.json({ post });
//   } catch (e) {
//     c.status(411);
//     console.log(e);
//     return c.json({ err: " Error while getting single blog post!" });
//   }
// });
projectRouter.get("/bulk", async (c) => {
  const prisma = c.get("prisma");
  try {
    const totalPosts = await prisma.project.count();
    const projects = await prisma.project.findMany({
      select: {
        id: true,
        title: true,
        url: true,
        thumbNail: true,
      },
    });

    return c.json({
      projects,
      totalPosts,
    });
  } catch (e) {
    c.status(411);
    console.log(e);
    return c.json({ err: " Error while getting all projects!" });
  }
});

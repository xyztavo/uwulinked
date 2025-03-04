import { Album } from "./types/config.gallery";

const gallery: { albums: Album[] } = {
  albums: [
    {
      title: "kuromi <3",
      route: "kuromi",
      coverImageSrc:
        "/assets/kuromi/kuromi-album.png",
      posts: [
        {
          title: "1",
          src: "/assets/kuromi/1.png",
        },
        {
          title: "2",
          src: "/assets/kuromi/2.png",
        },
        {
          title: "3",
          src: "/assets/kuromi/3.png",
        },
        {
          title: "4",
          src: "/assets/kuromi/4.png",
        },
        {
          title: "5",
          src: "/assets/kuromi/5.png",
        },
      ],
    },
    {
      title: "hello kittyuwu",
      route: "hello-kitty",
      coverImageSrc:
        "/assets/kuromi/kuromi-album.png",
      posts: [
        {
          title: "1",
          src: "/assets/hello-kitty/1.png",
        },
        {
          title: "2",
          src: "/assets/hello-kitty/2.png",
        },
        {
          title: "3",
          src: "/assets/hello-kitty/3.png",
        },
        {
          title: "4",
          src: "/assets/hello-kitty/4.png",
        },
        {
          title: "5",
          src: "/assets/hello-kitty/5.png",
        },
      ],
    },
  ],
};

export default gallery;

import { Config } from "./types/config";

const config: Config = {
  options: {
    blog: true,
    gallery: false, // this will only hide the gallery page, you can still access it by going to its respective routes.
  },
  nickname: "marikitty",
  lanyard: {
    active: true, /* if you don't wish to expose your Discord activities with lanyard, set to false */
    discordId: "1342638294961360949",
  },
  accentColor: "#fc9aee",
  avatarImgSrc: "/assets/profile.png",
  buttons: [
    {
      title: "My minecraft skinseed",
      link: "https://www.google.com/search?q=skinseed+ayashii",
    },
    {
      title: "lorem ipsum",
      link: "https://www.google.com/search?q=skinseed+ayashii",
    },
    {
      title: "dolor sit amet",
      link: "https://www.google.com/search?q=skinseed+ayashii",
    },
  ],
  instagramLink: "https://www.instagram.com/mariana.0lv/",
  discordLink: "https://discord.com/users/1342638294961360949",
  youtubeLink: "https://www.youtube.com/@luvvykkj",
  spotifyLink: "https://open.spotify.com/user/vu17cdzwl3nysuaf9w458bivs",
  footer: "made with ❤️, marikitty",
};

export default config;

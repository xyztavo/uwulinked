import { Config } from "./types/config";

const config: Config = {
  options: {
    blog: true,
    gallery: true, // this will only hide the gallery page, you can still access it by going to its respective routes.
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
      title: "💌 ୨♡୧ mari's playlist ✧ ˚.",
      link: "https://www.youtube.com/playlist?list=PLggpdHXCYzD8_yF2yIh2qIS83RF5SnKd0",
    },
    {
      title: "爱 minecraft textures packs  ˖ ࣪⊹ ִֶָ 🩰",
      link: "https://www.youtube.com/playlist?list=PLggpdHXCYzD9keHB7A2z8PsTKSzkd6YXV",
    },
    {
      title: "୨☆୧ makeup playlist 𝅄 🪞 𝅄 ੭",
      link: "https://www.youtube.com/playlist?list=PLggpdHXCYzD9bd1yjVUnMSjSipdoHbfeA",
    },
  ],
  instagramLink: "https://www.instagram.com/mariana.0lv/",
  discordLink: "https://discord.com/users/1342638294961360949",
  youtubeLink: "https://www.youtube.com/@luvvykkj",
  spotifyLink: "https://open.spotify.com/user/vu17cdzwl3nysuaf9w458bivs",
  footer: "made with 💞, marikitty and ustav",
};

export default config;

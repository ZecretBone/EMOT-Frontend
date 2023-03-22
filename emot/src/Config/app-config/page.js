import Feed from "../../pages/Feed";
import User from "../../pages/User";
import VideoDetail from "../../pages/VideoDetail";
import CreatedUser from "../../pages/createdUser";
import Otp from "../../pages/otp";


export const routePath = [
  {
    name: "user",
    path: "/",
    component: () => {
      return <User />;
    },
    show: {
      header: true,
      footer: false,
    },
    childPage: null,
  },
  {
    name: "feed",
    path: "/:title",
    component: () => {
      return <Feed />
    },
    show: {
      header: true,
      footer: false,
    },
    childPage: null,
  },
  {
    name: "videoDetail",
    path: "/video/:id",
    component: () => {
      return <VideoDetail />;
    },
    show: {
      header: true,
      footer: false,
    },
    childPage: null
  },
  {
    name: "createdNewUser",
    path: "/createdNewUser",
    component: () => {
      return <CreatedUser />
    },
    show: {
      header: true,
      footer: false,
    },
    childPage: null
  },
  {
    name: "otp",
    path: "/createdNewUser/otp",
    component: () => {
      return <Otp />
    },
    show: {
      header: true,
      footer: false,
    },
    childPage: null
  },

];

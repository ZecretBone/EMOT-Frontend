import Feed from "../../pages/Feed";
import User from "../../pages/User";
import VideoDetail from "../../pages/VideoDetail";
import CreatedUser from "../../pages/createdUser";
import PlayingVideo from "../../pages/playingVideo";
import RecordVideo from "../../pages/recordVideo";
import ScanPage from "../../pages/scanPage";
import ScanPagenewrec from "../../pages/scanPagenewrec";
import TabEMOT from "../../pages/tabEmot";


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
    name: "videoDetail",
    path: ":AccName/video/:id",
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
    name: "recordVideo",
    path: "/:AccName/recordVideo",
    component: () => {
      return <RecordVideo />
    },
    show: {
      header: true,
      footer: false,
    },
    childPage: null
  },

  {
    name: "scanCard",
    path: "/verifyWithEMOT",
    component: () => {
      return <ScanPage />
    },
    show: {
      header: true,
      footer: false,
    },
    childPage: null
  },

  {
    name: "newrecScanCard",
    path: "/:AccName/recordVideo/verifyWithEMOT",
    component: () => {
      return <ScanPagenewrec />
    },
    show: {
      header: true,
      footer: false,
    },
    childPage: null
  },

  {
    name: "tabEMOT",
    path: "/:AccName/recordVideo/tabEMOT",
    component: () => {
      return <TabEMOT />
    },
    show: {
      header: true,
      footer: false,
    },
    childPage: null
  },

  {
    name: "playingVideo",
    path: "/:AccName/recordVideo/:id",
    component: () => {
      return <PlayingVideo />
    },
    show: {
      header: true,
      footer: false,
    },
    childPage: null
  },

];

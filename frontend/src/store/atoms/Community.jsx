import {atom} from 'recoil'
// import { recoilPersist } from 'recoil-persist'
// const {persistAtom} = recoilPersist()



const communityAtom = atom({
    key : "communityAtom",
    default :  [
  {
    _id: "community_1",
    name: "JavaScript",
    admin: "user_1",
    moderators: ["user_2", "user_3"],
    description: "Everything JavaScript — from basics to advanced frameworks.",
    created: new Date("2023-02-15"),
    posts: ["post_1", "post_3", "post_7"],
    subscribers: ["user_1", "user_3", "user_4", "user_6"],
    count: {
      subscribers: 4,
      posts: 3,
    },
    banner: {
      exists: true,
      url: "https://example.com/banners/js-banner.png",
    },
  },

  {
    _id: "community_2",
    name: "ReactDevelopers",
    admin: "user_4",
    moderators: ["user_1"],
    description: "A community for React developers. Hooks, components, patterns, and more.",
    created: new Date("2023-03-10"),
    posts: ["post_2"],
    subscribers: ["user_4", "user_1", "user_5"],
    count: {
      subscribers: 3,
      posts: 1,
    },
    banner: {
      exists: false,
      url: null,
    },
  },

  {
    _id: "community_3",
    name: "WebDev",
    admin: "user_6",
    moderators: ["user_7"],
    description: "HTML, CSS, JS, frameworks, UI/UX — all things web development.",
    created: new Date("2023-01-18"),
    posts: ["post_6"],
    subscribers: ["user_1", "user_2", "user_6", "user_9"],
    count: {
      subscribers: 4,
      posts: 1,
    },
    banner: {
      exists: true,
      url: "https://example.com/banners/webdev-banner.png",
    },
  },

  {
    _id: "community_4",
    name: "BackendEngineering",
    admin: "user_8",
    moderators: ["user_9", "user_10"],
    description: "APIs, databases, microservices, DevOps, scaling and backend design.",
    created: new Date("2023-06-20"),
    posts: ["post_10", "post_11"],
    subscribers: ["user_8", "user_10", "user_4", "user_2"],
    count: {
      subscribers: 4,
      posts: 2,
    },
    banner: {
      exists: false,
      url: null,
    },
  },

  {
    _id: "community_5",
    name: "DataStructuresAlgo",
    admin: "user_12",
    moderators: ["user_3"],
    description: "DSA, competitive programming, coding problems & algorithm discussions.",
    created: new Date("2023-09-01"),
    posts: ["post_12", "post_13", "post_14"],
    subscribers: ["user_1", "user_12", "user_3", "user_11", "user_16"],
    count: {
      subscribers: 5,
      posts: 3,
    },
    banner: {
      exists: true,
      url: "https://example.com/banners/dsa-banner.png",
    },
  },
],
    // effects_UNSTABLE : [persistAtom]
})

const communityIdAtom = atom({
   key : "communityIdAtom",
   default : null
})


export {communityAtom,communityIdAtom}
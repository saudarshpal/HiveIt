import {atom} from 'recoil'

const postAtom = atom({
    key : "postAtom",
    default : [
  {
    _id: "post_1",
    title: "My First Post",
    content: "This is a dummy post used for testing the UI.",
    author: "user_1",             // fake ObjectId
    community: "community_1",     // fake ObjectId
    votes: {
      upvotes: 12,
      downvotes: 3,
    },
    comments: [
      {
        _id: "comment_1",
        author: "user_2",
        content: "This looks awesome!",
        votes: {
          upvotes: 4,
          downvotes: 0,
        },
      },
      {
        _id: "comment_2",
        author: "user_3",
        content: "Nice work!",
        votes: {
          upvotes: 2,
          downvotes: 1,
        },
      },
    ],
  },

  {
    _id: "post_2",
    title: "Welcome to the Community!",
    content: "Feel free to share anything here. This is just example content.",
    author: "user_2",
    community: "community_2",
    votes: {
      upvotes: 30,
      downvotes: 1,
    },
    comments: [
      {
        _id: "comment_3",
        author: "user_1",
        content: "Thanks for the warm welcome!",
        votes: {
          upvotes: 6,
          downvotes: 0,
        },
      },
    ],
  },

  {
    _id: "post_3",
    title: "React + Recoil + Node = ❤️",
    content: "Building a Reddit-like voting system is actually fun.",
    author: "user_3",
    community: "community_1",
    votes: {
      upvotes: 9,
      downvotes: 0,
    },
    comments: [],
  },
]
})

const postIdAtom = atom({
  key : "postIdAtom",
  default : null
})

const postCommentAtom = atom({
  key: "postCommentAtom",
  default : []
})


export {postAtom,postCommentAtom,postIdAtom}
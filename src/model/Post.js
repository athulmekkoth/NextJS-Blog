import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
let PostModel;

if (mongoose.models.Post) {
  PostModel = mongoose.models.Post;
} else {
  PostModel = mongoose.model('Post', postSchema);
}

export default PostModel;
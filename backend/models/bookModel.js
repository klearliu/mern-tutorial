import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      requried: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      requeired: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model("Cat", bookSchema);

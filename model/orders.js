import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ordersProduk = new Schema(
  {
    namaPembeli: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    produkId: {
      type: Schema.Types.ObjectId,
      ref: `Produks`,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Orders", ordersProduk);

import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },

    mobile: {
      type: String,
      required: true,
    },

    fatherMotherMobile: {
      type: String,
    },

    relativeMobile: {
      type: String,
    },

    aadhaar: {
      type: String,
    },

    pan: {
      type: String,
    },

    amount: {
      type: Number,
      required: true,
    },

    interestRate: {
      type: Number,
      required: true,
    },

    interestAmount: {
      type: Number,
      required: true,
    },

    totalAmount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Customer =
  mongoose.models.Customer ||
  mongoose.model("Customer", customerSchema);

export default Customer;
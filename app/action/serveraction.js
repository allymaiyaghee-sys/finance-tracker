"use server";

import connectDB from "@/lib/db";
import Customer from "@/app/models/Customer";

export const saveCustomer = async (customerData) => {
  try {
    await connectDB();

    const customer = await Customer.create(customerData);

    return {
      success: true,
      message: "Customer saved successfully",
      customer: JSON.parse(JSON.stringify(customer)),
    };
  } catch (error) {
    console.log("Save Customer Error:", error);

    return {
      success: false,
      message: "Customer save nahi hua",
    };
  }
};
"use client";

import { useState, useEffect } from "react";
import { saveCustomer } from "../action/serveraction";

export default function AddCustomer() {
  const [form, setForm] = useState({
    fullName: "",
    date: new Date().toISOString().split("T")[0],
    mobile: "",
    fatherMotherMobile: "",
    relativeMobile: "",
    aadhaar: "",
    pan: "",
    amount: "",
    interestRate: "3",
  });


  useEffect(() => {
    const savedForm = sessionStorage.getItem("customerForm");

    if (savedForm) {
      setForm(JSON.parse(savedForm));
    }
  }, []);


  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    const updatedForm = {
      ...form,
      [e.target.name]: e.target.value,
    };

    setForm(updatedForm);
    sessionStorage.setItem("customerForm", JSON.stringify(updatedForm));

    setSaved(false);
  };

  const selectInterest = (rate) => {
    setForm({
      ...form,
      interestRate: rate,
    });

    setSaved(false);
  };

  const amount = Number(form.amount) || 0;
  const interestRate = Number(form.interestRate) || 0;

  const interestAmount = (amount * interestRate) / 100;
  const totalAmount = amount + interestAmount;

  const handleSave = async (e) => {
    e.preventDefault();

    const customerData = {
      ...form,
      amount,
      interestRate,
      interestAmount,
      totalAmount,
    };

    const result = await saveCustomer(customerData);

    if (result.success) {
      console.log(result.message);

      sessionStorage.removeItem("customerForm");

      setForm({
        fullName: "",
        date: new Date().toISOString().split("T")[0],
        mobile: "",
        fatherMotherMobile: "",
        relativeMobile: "",
        aadhaar: "",
        pan: "",
        amount: "",
        interestRate: "3",
      });

      setSaved(true);
    } else {
      console.log(result.message);
    }
  };

  const handleCancel = () => {
    setForm({
      fullName: "",
      date: new Date().toISOString().split("T")[0],
      mobile: "",
      fatherMotherMobile: "",
      relativeMobile: "",
      aadhaar: "",
      pan: "",
      amount: "",
      interestRate: "3",
    });

    setSaved(false);
  };

  return (
    <main className="min-h-[calc(100vh-64px)] bg-white px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">

        {/* Header */}
        <div className="mb-5 flex items-end justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[#021d3a]">
              Add Customer
            </h1>

            <p className="mt-1 text-xs text-slate-500">
              Enter customer and loan details
            </p>
          </div>

          <div className="h-1 w-20 rounded-full bg-[#f59e0b]" />
        </div>

        <form onSubmit={handleSave}>

          {/* Customer Details */}
          <div className="space-y-4">

            {/* Row 1 - Name + Date */}
            <div className="grid gap-4 md:grid-cols-2">

              <div>
                <label className="mb-1.5 block text-xs font-bold text-[#021d3a]">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-[#f59e0b] focus:bg-white focus:ring-2 focus:ring-[#f59e0b]/20"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold text-[#021d3a]">
                  Date
                </label>

                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-[#f59e0b] focus:bg-white focus:ring-2 focus:ring-[#f59e0b]/20"
                />
              </div>

            </div>

            {/* Row 2 - Three Numbers */}
            <div className="grid gap-4 md:grid-cols-3">

              <div>
                <label className="mb-1.5 block text-xs font-bold text-[#021d3a]">
                  Customer Mobile Number
                </label>

                <input
                  type="tel"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="Customer mobile number"
                  maxLength="10"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-[#f59e0b] focus:bg-white focus:ring-2 focus:ring-[#f59e0b]/20"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold text-[#021d3a]">
                  Father / Mother Number
                </label>

                <input
                  type="tel"
                  name="fatherMotherMobile"
                  value={form.fatherMotherMobile}
                  onChange={handleChange}
                  placeholder="Father / Mother number"
                  maxLength="10"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-[#f59e0b] focus:bg-white focus:ring-2 focus:ring-[#f59e0b]/20"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold text-[#021d3a]">
                  Relative / Friend Number
                </label>

                <input
                  type="tel"
                  name="relativeMobile"
                  value={form.relativeMobile}
                  onChange={handleChange}
                  placeholder="Relative / Friend number"
                  maxLength="10"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-[#f59e0b] focus:bg-white focus:ring-2 focus:ring-[#f59e0b]/20"
                />
              </div>

            </div>

            {/* Row 3 - Aadhaar + PAN */}
            <div className="grid gap-4 md:grid-cols-2">

              <div>
                <label className="mb-1.5 block text-xs font-bold text-[#021d3a]">
                  Aadhaar Card
                </label>

                <input
                  type="text"
                  name="aadhaar"
                  value={form.aadhaar}
                  onChange={handleChange}
                  placeholder="Enter Aadhaar number"
                  maxLength="12"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-[#f59e0b] focus:bg-white focus:ring-2 focus:ring-[#f59e0b]/20"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold text-[#021d3a]">
                  PAN Card
                </label>

                <input
                  type="text"
                  name="pan"
                  value={form.pan}
                  onChange={handleChange}
                  placeholder="Enter PAN number"
                  maxLength="10"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm uppercase outline-none transition focus:border-[#f59e0b] focus:bg-white focus:ring-2 focus:ring-[#f59e0b]/20"
                />
              </div>

            </div>

            {/* Loan Amount */}
            <div>
              <label className="mb-1.5 block text-xs font-bold text-[#021d3a]">
                Loan Amount
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base font-bold text-[#d97706]">
                  ₹
                </span>

                <input
                  type="number"
                  name="amount"
                  value={form.amount}
                  onChange={handleChange}
                  placeholder="Enter loan amount"
                  min="0"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-4 text-sm font-semibold text-[#021d3a] outline-none transition focus:border-[#f59e0b] focus:bg-white focus:ring-2 focus:ring-[#f59e0b]/20"
                />
              </div>
            </div>

            {/* Interest Rates */}
            <div>
              <label className="mb-2 block text-xs font-bold text-[#021d3a]">
                Interest Rate
              </label>

              <div className="grid w-full grid-cols-3 gap-3">

                {[3, 4, 5].map((rate) => {
                  const selected = form.interestRate === String(rate);

                  return (
                    <button
                      key={rate}
                      type="button"
                      onClick={() => selectInterest(String(rate))}
                      className={`flex w-full items-center justify-center gap-2 rounded-xl border-2 py-3 transition-all duration-200 ${selected
                        ? "border-[#f59e0b] bg-[#f59e0b] text-[#021d3a] shadow-md"
                        : "border-slate-200 bg-slate-50 text-[#021d3a] hover:border-[#f59e0b] hover:bg-[#fffbeb]"
                        }`}
                    >
                      <span className="text-xl font-extrabold">
                        {rate}%
                      </span>

                      <span className="text-xs font-semibold">
                        Interest
                      </span>
                    </button>
                  );
                })}

              </div>
            </div>

          </div>

          {/* Payment Calculation */}
          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

            <div className="flex items-center justify-between bg-[#021d3a] px-5 py-3">
              <h2 className="text-sm font-bold text-white">
                Payment Calculation
              </h2>

              <span className="rounded-full bg-[#f59e0b] px-3 py-1 text-xs font-bold text-[#021d3a]">
                {interestRate}% Interest
              </span>
            </div>

            <div className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">

              {/* Left Side Calculation */}
              <div className="flex-1">

                <p className="text-sm font-semibold text-slate-600">
                  ₹{amount.toLocaleString("en-IN")} at {interestRate}% interest
                  {" = "}
                  <span className="font-bold text-[#d97706]">
                    ₹{interestAmount.toLocaleString("en-IN")}
                  </span>{" "}
                  interest
                </p>

                <p className="mt-2 text-lg font-bold text-[#021d3a]">
                  Total payable:{" "}
                  <span className="text-emerald-400">
                    ₹{totalAmount.toLocaleString("en-IN")}
                  </span>
                </p>

              </div>

              {/* Right Side Highlight */}
              <div className="min-w-[310px] rounded-xl bg-[#1e1b4b] px-6 py-4 text-right ">

                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Interest
                </p>

                <p className="mt-1 text-2xl font-extrabold text-emerald-400">
                  ₹{interestAmount.toLocaleString("en-IN")}
                </p>

              </div>

            </div>
          </div>

          {/* Saved Message */}
          {saved && (
            <div className="mt-3 rounded-xl bg-green-50 px-4 py-2.5 text-center text-sm font-semibold text-green-700 ring-1 ring-green-200">
              Customer details saved successfully.
            </div>
          )}

          {/* Buttons */}
          <div className="mt-5 flex justify-end gap-3">

            <button
              type="button"
              onClick={handleCancel}
              className="rounded-xl border border-slate-300 px-6 py-2.5 text-sm font-semibold text-[#021d3a] transition hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#d97706] px-7 py-2.5 text-sm font-bold text-[#021d3a] shadow-md transition hover:from-[#fbbf24] hover:to-[#f59e0b]"
            >
              Save Details
            </button>

          </div>

        </form>
      </div>
    </main>
  );
}


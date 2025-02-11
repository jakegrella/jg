"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

interface ContactFormInputs {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    setIsSubmitting(true);
    try {
      // Handle form submission logic, e.g., sending to API
      alert(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg space-y-4 border border-red-500"
    >
      <div>
        <label htmlFor="firstName" className="block">
          First Name (optional)
        </label>
        <input
          id="firstName"
          type="text"
          className="mt-1 block w-full border-gray-300 bg-gray-400 rounded-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
          {...register("firstName")}
        />
      </div>

      <div>
        <label htmlFor="lastName">Last Name (optional)</label>
        <input
          id="lastName"
          type="text"
          className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
          {...register("lastName")}
        />
      </div>

      <div>
        <label htmlFor="phone">Phone (optional)</label>
        <input
          id="phone"
          type="tel"
          className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
          {...register("phone")}
        />
      </div>

      <div>
        <label htmlFor="email">
          Email <span className="text-red-600">*</span>
        </label>
        <input
          id="email"
          type="email"
          className={`mt-1 block w-full border-gray-300 rounded-sm shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
            errors.email ? "border-red-600" : ""
          }`}
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <p className="mt-1 text-red-600 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message">
          Message <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          className={`mt-1 block w-full border-gray-300 rounded-sm shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
            errors.message ? "border-red-600" : ""
          }`}
          rows={4}
          {...register("message", { required: "Message is required" })}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-red-600 text-sm">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

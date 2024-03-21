"use client";

import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";

const MyComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [apiResponse, setApiResponse] = useState("");

  const onSubmit = async (formData: any) => {
    try {
      const response = await axios.post("/api/chart", formData);
      setApiResponse(JSON.stringify(response.data, null, 2));
    } catch (error) {
      console.error("Failed to submit form", error);
    }
  };

  return (
    <div className="max-w-md mx-auto my-10">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="title" className="mb-2 font-semibold">
            Title
          </label>
          <input
            id="title"
            className="border border-gray-300 p-2 rounded"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <p className="text-red-500">{String(errors.title.message)}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="description" className="mb-2 font-semibold">
            Description
          </label>
          <textarea
            id="description"
            className="border border-gray-300 p-2 rounded"
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && (
            <p className="text-red-500">{String(errors.description.message)}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="startDate" className="mb-2 font-semibold">
            Event Start
          </label>
          <input
            type="datetime-local"
            id="startDate"
            className="border border-gray-300 p-2 rounded"
            {...register("startDate", { required: "This field is required" })}
          />
          {errors.startDate && (
            <p className="text-red-500">{String(errors.startDate.message)}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="endDate" className="mb-2 font-semibold">
            Event End
          </label>
          <input
            type="datetime-local"
            id="endDate"
            className="border border-gray-300 p-2 rounded"
            {...register("endDate", { required: "This field is required" })}
          />
          {errors.endDate && (
            <p className="text-red-500">{String(errors.endDate.message)}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      <button
        onClick={async () => {
          try {
            const response = await axios.get("/api/chart");
            setApiResponse(JSON.stringify(response.data, null, 2));
          } catch (error) {
            console.error("Failed to get data", error);
          }
        }}
        className="mt-4 w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        GET ALL USEREVENTS
      </button>
      {apiResponse && <pre className="mt-4 text-sm">{apiResponse}</pre>}
    </div>
  );
};

export default MyComponent;

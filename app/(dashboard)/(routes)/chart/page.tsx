"use client";

import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";

// Reusable Form Field Component
const FormField = ({
  id,
  label,
  type = "text",
  register,
  requiredMessage,
  errors,
}: {
  id: string;
  label: string;
  type?: string;
  register: any;
  requiredMessage: string;
  errors: any;
}) => (
  <div className="flex flex-col">
    <label htmlFor={id} className="mb-2 font-semibold">
      {label}
    </label>
    <input
      type={type}
      id={id}
      className="border border-gray-300 p-2 rounded"
      {...register(id, { required: requiredMessage })}
    />
    {errors[id] && <p className="text-red-500">{String(errors[id].message)}</p>}
  </div>
);

// Button Component for Fetching Data
const GetDataButton = ({
  setApiResponse,
}: {
  setApiResponse: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/chart");
      setApiResponse(JSON.stringify(response.data, null, 2));
    } catch (error) {
      console.error("Failed to get data", error);
    }
  };

  return (
    <button
      onClick={fetchData}
      className="mt-4 w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
    >
      GET ALL USEREVENTS
    </button>
  );
};

const MyComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [apiResponse, setApiResponse] = useState("");

  const onSubmit = async (formData: any) => {
    try {
      const response = await axios.post("/api/chart", formData);
      setApiResponse(JSON.stringify(response.data, null, 2));
      reset();
    } catch (error) {
      console.error("Failed to submit form", error);
    }
  };

  return (
    <div className="max-w-md mx-auto my-10">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          id="title"
          label="Title"
          register={register}
          requiredMessage="Title is required"
          errors={errors}
        />
        <FormField
          id="description"
          label="Description"
          register={register}
          requiredMessage="Description is required"
          errors={errors}
          type="textarea"
        />
        <FormField
          id="startDate"
          label="Event Start"
          register={register}
          requiredMessage="This field is required"
          errors={errors}
          type="datetime-local"
        />
        <FormField
          id="endDate"
          label="Event End"
          register={register}
          requiredMessage="This field is required"
          errors={errors}
          type="datetime-local"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      <GetDataButton setApiResponse={setApiResponse} />
      {apiResponse && <pre className="mt-4 text-sm">{apiResponse}</pre>}
    </div>
  );
};

export default MyComponent;

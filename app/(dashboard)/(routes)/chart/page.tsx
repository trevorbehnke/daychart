"use client";

import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import EventModal from "@/components/event-modal";
import { PlusCircle } from "lucide-react";
import EditableDataGrid from "@/components/data-grid";

interface FormData {
  title: string;
  description: string;
  startDate: string; // ISO string if using datetime-local input
  endDate: string; // ISO string if using datetime-local input
}

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

const MyComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [isModalOpen, setModalOpen] = useState(false);
  const [apiResponse, setApiResponse] = useState("");
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const onSubmit = async (formData: FormData) => {
    try {
      const response = await axios.post("/api/chart", formData);
      setApiResponse(JSON.stringify(response.data, null, 2));
      reset();
      closeModal();
    } catch (error) {
      console.error("Failed to submit form", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="space-y-4">
        <button
          onClick={openModal}
          className="btn-primary flex items-center justify-center"
        >
          <PlusCircle size={24} className="mr-2" />
        </button>

        <EventModal isOpen={isModalOpen} onClose={closeModal}>
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
        </EventModal>
      </div>
      <EditableDataGrid />
      {/* <GetDataButton setApiResponse={setApiResponse} /> */}
      {/* {apiResponse && <pre className="mt-4 text-sm">{apiResponse}</pre>} */}
    </div>
  );
};

export default MyComponent;

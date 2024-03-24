"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import EventModal from "@/components/event-modal";
import { PlusCircle } from "lucide-react";
import EditableDataGrid from "@/components/data-grid";
import useFormSubmit from "@/hooks/use-form-submit";
import FormField from "@/components/ui/form-field";
import BarChart from "@/components/chart";

interface MyFormData {
  title: string;
  description: string;
  startDate: string; // ISO string if using datetime-local input
  endDate: string; // ISO string if using datetime-local input
}

const MyComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MyFormData>();

  const data = [
    { label: "A", value: 30 },
    { label: "B", value: 80 },
    { label: "C", value: 45 },
    { label: "D", value: 60 },
    { label: "E", value: 20 },
  ];

  const [isModalOpen, setModalOpen] = useState(false);
  const { onSubmit, error } = useFormSubmit();

  const handleFormSubmit = async (formData: MyFormData) => {
    await onSubmit(formData);
    reset();
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>My First D3.js Chart in Next.js</h1>
      <BarChart data={data} />
      {/* <button
        onClick={() => setModalOpen(true)}
        className="btn-primary flex items-center justify-center"
      >
        <PlusCircle size={24} className="mr-2" />
      </button>

      <EventModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
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
        {error && <p className="text-red-500">{error}</p>}
      </EventModal>

      <EditableDataGrid /> */}
    </div>
  );
};

export default MyComponent;

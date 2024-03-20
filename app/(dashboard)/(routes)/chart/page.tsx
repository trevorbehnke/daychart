"use client";

import axios from "axios";
import { useForm } from "react-hook-form";

const MyComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData: any) => {
    try {
      const response = await axios.post("/api/chart", formData);
      console.log("RESPONSE --> : ", response);
    } catch (error) {
      console.error("Failed to submit form", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">title</label>
          <input
            id="title"
            {...register("title", { required: "title is required" })}
          />
          {errors.title && <p>{String(errors.title.message)}</p>}
        </div>

        <div>
          <label htmlFor="description">description</label>
          <textarea
            id="description"
            {...register("description", {
              required: "description is required",
            })}
          />
          {errors.description && <p>{String(errors.description.message)}</p>}
        </div>

        <div>
          <label htmlFor="startDate">Date and Time</label>
          <input
            type="datetime-local"
            id="startDate"
            {...register("startDate", { required: "This field is required" })}
          />
          {errors.startDate && <p>{String(errors.startDate.message)}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyComponent;

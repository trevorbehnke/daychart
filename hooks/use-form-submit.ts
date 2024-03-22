import { useState } from "react";
import axios from "axios";

interface MyFormData {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}

const useFormSubmit = () => {
  const [apiResponse, setApiResponse] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (formData: MyFormData) => {
    try {
      const response = await axios.post("/api/chart", formData, {
        headers: { "Content-Type": "application/json" },
      });
      setApiResponse(JSON.stringify(response.data, null, 2));
    } catch (errorInstance) {
      console.error("Failed to submit form", errorInstance);
      setError("Failed to submit form");
    }
  };

  return { onSubmit, apiResponse, error };
};

export default useFormSubmit;

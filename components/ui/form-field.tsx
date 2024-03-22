import React from "react";

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  register: any;
  requiredMessage: string;
  errors: any;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type = "text",
  register,
  requiredMessage,
  errors,
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

export default FormField;

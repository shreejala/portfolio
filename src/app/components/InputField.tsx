import React from "react";

interface InputFieldProps {
  value: string;
  onChangeText: (val: string) => void;
  error: string;
  id: string;
  placeholder: string;
  type?: string;
}

const InputField = ({
  id,
  placeholder,
  value,
  onChangeText,
  error,
  type = "text",
}: InputFieldProps) => {
  return (
    <div className="flex flex-1 flex-col gap-1">
      <input
        className="shadow appearance-none bg-cyan-50 border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm xl:text-lg"
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
      />

      <span className="h-5 text-red-400 self-end">{error}</span>
    </div>
  );
};

export default InputField;

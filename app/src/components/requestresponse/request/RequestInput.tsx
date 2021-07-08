import React, { FC } from 'react';
interface RequestInputProps {
  value: string;
  onURLChange: (value: string) => void;
  isValid: boolean;
}
export const RequestInput: FC<RequestInputProps> = ({
  value,
  onURLChange,
  isValid,
}) => {
  return (
    <input
      placeholder="Enter request url"
      value={value}
      onChange={(e) => onURLChange(e.currentTarget.value)}
      data-valid={`${isValid}`}
    ></input>
  );
};

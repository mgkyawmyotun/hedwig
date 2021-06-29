import React, { FC, useEffect } from 'react';
import validator from 'validator';
interface RequestInputProps {
  value: string;
  onURLChange: (value: string) => void;
}
export const RequestInput: FC<RequestInputProps> = ({ value, onURLChange }) => {
  useEffect(() => {
    const isValid = validator.isURL(value, {
      require_host: true,
      require_tld: false,
    });
    console.log(isValid);
  }, [value]);
  return (
    <input
      placeholder="Enter request url"
      value={value}
      onChange={(e) => onURLChange(e.currentTarget.value)}
      data-valid={`${true}`}
    ></input>
  );
};

import type { FC } from 'react';
import React from 'react';

interface RequestHeaderProps {
  onButtonClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  headerText: string;
}
export const RequestHeader: FC<RequestHeaderProps> = ({
  headerText,
  onButtonClick,
}) => {
  return (
    <div>
      <h1>{headerText}</h1>
      <button onClick={onButtonClick}>Add</button>
    </div>
  );
};

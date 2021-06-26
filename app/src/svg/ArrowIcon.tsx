import type { FC } from 'react';
import React from 'react';
export enum ArrowType {
  UP,
  DOWN,
}
interface ArrowIconProps {
  type: ArrowType;
  onChange?: (e: any) => void;
}
export const ArrowIcon: FC<ArrowIconProps> = ({ type, onChange }) => {
  return (
    <>
      {type === ArrowType.UP ? (
        <svg
          width="19"
          height="10"
          viewBox="0 0 19 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onChange}
        >
          <path
            d="M16.8811 10.1271L9.5802 3.98574L2.34627 10.2058L0.103499 8.31512L9.55952 0.166636L19.1032 8.21225L16.8811 10.1271Z"
            fill="#495057"
          />
        </svg>
      ) : (
        <svg
          width="19"
          height="10"
          viewBox="0 0 19 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onChange}
        >
          <path
            d="M2.2325 0L9.5 6.18084L16.7675 0L19 1.90283L9.5 10L0 1.90283L2.2325 0Z"
            fill="#495057"
          />
        </svg>
      )}
    </>
  );
};

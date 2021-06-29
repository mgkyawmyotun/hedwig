import React, { FC, useRef, useState } from 'react';

interface ContentEdiableProps {
  defaultValue: string;
  onContentChange?: (value: string | null) => void;
  maxSize?: number;
}

export const ContentEdiable: FC<ContentEdiableProps> = ({
  onContentChange,
  defaultValue,
  maxSize,
}) => {
  const [editAble, setEditAble] = useState<boolean>(false);
  const [value, setValue] = useState<string>(defaultValue);
  const input_ref = useRef<HTMLInputElement>(null);

  return (
    <input
      ref={input_ref}
      type="text"
      value={value}
      onDoubleClick={() => setEditAble(true)}
      onChange={(e) => setValue(e.currentTarget.value)}
      style={{ minWidth: 0, textOverflow: 'ellipsis' }}
      readOnly={!editAble}
      inputMode={'text'}
      size={
        maxSize
          ? value.length < maxSize
            ? value.length
            : maxSize
          : value.length
      }
    />
  );
};

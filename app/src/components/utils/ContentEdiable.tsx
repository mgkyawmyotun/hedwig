import React, { FC, useState } from 'react';

interface ContentEdiableProps {
  children: React.ReactNode;
  onContentChange?: (value: string | null) => void;
}

export const ContentEdiable: FC<ContentEdiableProps> = ({
  children,
  onContentChange,
}) => {
  const [editAble, setEditAble] = useState<boolean>(false);

  return (
    <p
      contentEditable={editAble}
      onDoubleClick={() => setEditAble(true)}
      onPointerLeave={() => setEditAble(false)}
      onInput={(e) =>
        onContentChange && onContentChange(e.currentTarget.textContent)
      }
      suppressContentEditableWarning={true}
    >
      {children}
    </p>
  );
};

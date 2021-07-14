import React, { useMemo } from 'react';
export interface OptionsProps {
  property: string;
  value: string;
  onChange: (property: string, value: string) => void;
}
export function addNew(fun: Function) {
  return fun.apply(null, [['', ''], -1] as any);
}

export function MapOptions<
  T extends V[],
  V extends [string, string | File],
  Propety,
  Value,
>(C: any, values: T, change: (p: Propety, v: Value, index: number) => void) {
  const iUpdateWhenCLengthChange = useMemo(() => {
    console.log(values);
    return values.map(([p, v], index) => (
      <C
        property={p}
        value={v}
        key={index + p + v}
        onChange={(p: Propety, v: Value) => {
          change(p, v, index);
        }}
      />
    ));
  }, [values.length]);
  return iUpdateWhenCLengthChange;
}

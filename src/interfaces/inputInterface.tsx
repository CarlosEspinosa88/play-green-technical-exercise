import { FocusEvent, ChangeEvent } from 'react';

/* eslint-disable no-unused-vars */
export type InputType = {
  label: string;
  type: string;
  name: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: string | ChangeEvent<Element>) => void;
  onBlur: (e: string | FocusEvent<Element>) => void;
};

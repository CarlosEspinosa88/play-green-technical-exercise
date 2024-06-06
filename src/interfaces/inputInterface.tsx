export type InputType = {
  label: string;
  type: string;
  name: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (_: HTMLInputElement) => void;
  onBlur: (_: HTMLInputElement) => void;
};

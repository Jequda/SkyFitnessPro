import { ChangeEvent, SetStateAction, Dispatch } from "react";

export default function handleInputChange<T>(
  e: ChangeEvent<HTMLInputElement>,
  setState: Dispatch<SetStateAction<T>>,
  currentState: T
): void {
  const { name, value } = e.target;
  setState({
    ...currentState,
    [name]: value,
  });
}

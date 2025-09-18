import type { FC } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer; /* cursor-pointer */
  border: none;
  background-color: #3b82f6; /* bg-blue-500 */
  color: #fff; /* text-white */
  font-weight: bold; /* font-bold */
  padding: 0.5rem 1rem; /* py-2 px-4 */
  border-radius: 0.25rem; /* rounded */
  outline: none; /* focus:outline-none */
  transition: background-color 0.2s;

  &:hover {
    background-color: #1d4ed8; /* hover:bg-blue-700 */
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5); /* focus:shadow-outline */
  }
`
type ButtonProps = {
  text?: string;
};

export const LoginButton: FC<ButtonProps> = ({text}) => {
    if (!text) { text = "Submit" }
  return (
    <StyledButton>
      {text}
    </StyledButton>
  );
};

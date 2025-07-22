import styled from "styled-components";

interface StyledCheckboxProps {
  checked: boolean;
}

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const StyledCheckbox = styled.div<StyledCheckboxProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: ${props => (props.checked ? '#4CAF50' : '#eee')};
  border-radius: 4px;
  transition: all 0.2s;
  border: 2px solid ${props => (props.checked ? '#4CAF50' : '#ddd')};
  
  &::after {
    content: ${props => props.checked ? '"✓"' : '""'};
    color: white;
    font-size: 14px;
    font-weight: bold;
  }

  &:hover {
    border-color: #aaa;
  }
`;

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;

  &:focus-within ${StyledCheckbox} {
    box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.3);
  }
`;

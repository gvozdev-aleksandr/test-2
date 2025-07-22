import styled from "styled-components";

export const CategoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: blue;
`;

interface StyledRadioProps {
    $isSelected: boolean;
}

export const HiddenRadio = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const StyledRadio = styled.div<StyledRadioProps>`
  flex-grow: 1;
  display: inline-block;
  padding: 5px;
  background: ${props => (props.$isSelected ? props.theme.bgButtonHover : props.theme.bgButton)};
  transition: all 0.2s;
  border: 1px solid ${({ theme }) => theme.bgSection};

  &:hover {
    border-color: ${({ theme }) => theme.bgCard};
  }
`;

export const RadioContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
`;

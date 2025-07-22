import type { FC } from 'react';
import { HiddenCheckbox, StyledCheckbox, CheckboxContainer } from "./styled"

interface CheckboxProps {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}
const TaskCheckBox: FC<CheckboxProps> = ({ 
  checked, 
  onChange  
}) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        aria-checked={checked}
        role="checkbox"
      />
    <StyledCheckbox checked={checked} />
    </CheckboxContainer>
  )
}

export default TaskCheckBox;

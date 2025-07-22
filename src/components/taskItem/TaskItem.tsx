import type { FC } from 'react';
import TaskCheckBox from "../checkbox/TaskCheckBox";
import { StyledItem, TaskText, TaskCategory, ControlWrapper, CloseButton } from "./styled";

interface TaskItemProps {
  text: string;
  category?: string;
  completed: boolean;
  onChange: () => void;
  onDelete?: () => void;
}

const TaskItem: FC<TaskItemProps> = ({      
  text = 'Привет',
  category,
  completed, 
  onChange,
  onDelete
}) => {
  return (
    <StyledItem>
        <TaskText>{text}</TaskText>
        <TaskCategory>{category}</TaskCategory>
        <ControlWrapper>
        {onDelete && (
          <CloseButton 
            onClick={onDelete}
            aria-label="Удалить задачу"
          >
            ×
          </CloseButton>
        )}
        <TaskCheckBox
          checked={completed} 
          onChange={onChange}
          aria-label={completed ? 'Отметить как невыполненное' : 'Отметить как выполненное'}
        />
      </ControlWrapper>         
    </StyledItem>
  )
}

export default TaskItem;

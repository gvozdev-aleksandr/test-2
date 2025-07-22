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
  text,
  category,
  completed, 
  onChange,
  onDelete
}) => {
  return (
    <StyledItem>
        {category && <TaskCategory>{category}</TaskCategory>}
        <TaskText completed={completed}>{text}</TaskText>
        <ControlWrapper>
            <TaskCheckBox
                checked={completed} 
                onChange={onChange}
                aria-label={completed ? 'Отметить как невыполненное' : 'Отметить как выполненное'}
            />
            {onDelete && (
                <CloseButton 
                    onClick={onDelete}
                    aria-label="Удалить задачу"
                >
                    ×
                </CloseButton>
            )}
        </ControlWrapper>         
    </StyledItem>
  )
}

export default TaskItem;

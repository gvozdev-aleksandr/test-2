import type { FC } from 'react';
import { InputContainer, StyledInput, SendButton } from "./styled";

interface NewTaskProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onAdd: () => void;
}

const NewTask: FC<NewTaskProps> = ({
    value,
    onChange,
    onAdd,
}) => {
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        onAdd();
    };

    return (
        <InputContainer>
            <StyledInput
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Введите новую задачу..."
                aria-label="Новая задача"
            />
            <SendButton
                onClick={handleClick} // Правильный тип обработчика
                disabled={!value.trim()}
            >Добавить задачу</SendButton>
        </InputContainer>
    )
}

export default NewTask;

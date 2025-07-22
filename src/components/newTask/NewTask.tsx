import type { FC } from 'react';
import { InputContainer, StyledInput, SendButton } from "./styled";
import { Category } from "../../components";

interface NewTaskProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onAdd: () => void;
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}

const NewTask: FC<NewTaskProps> = ({
    value,
    onChange,
    onAdd,
    categories,
    selectedCategory,
    onCategoryChange,
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
            <Category 
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={onCategoryChange}
            />
            <SendButton
                onClick={handleClick}
                disabled={!value.trim()}
            >Добавить задачу</SendButton>
        </InputContainer>
    )
}

export default NewTask;

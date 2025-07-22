import type { FC} from 'react';
import { useRef, useCallback } from 'react';
import { InputContainer, StyledInput, SendButton, FormWrapper } from "./styled";
import { Category } from "../../components";

interface NewTaskProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onAdd: () => void;
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
    isLoading?: boolean;
}

const NewTask: FC<NewTaskProps> = ({
    value,
    onChange,
    onAdd,
    categories,
    selectedCategory,
    onCategoryChange,
    isLoading = false,
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const isDisabled = !value.trim() || isLoading;

    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        if (!isDisabled) {
            onAdd();
            // Возвращаем фокус на input после добавления
            setTimeout(() => inputRef.current?.focus(), 0);
        }
    }, [onAdd, isDisabled]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !isDisabled) {
            e.preventDefault();
            onAdd();
        }
    }, [onAdd, isDisabled]);

    return (
        <FormWrapper onSubmit={handleSubmit} role="form" aria-label="Добавить новую задачу">
            <InputContainer>
                <StyledInput
                    ref={inputRef}
                    type="text"
                    value={value}
                    onChange={onChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Введите новую задачу..."
                    aria-label="Текст новой задачи"
                    aria-describedby="task-help"
                    disabled={isLoading}
                    maxLength={200}
                />
                <Category 
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={onCategoryChange}
                    disabled={isLoading}
                />
                <SendButton
                    type="submit"
                    disabled={isDisabled}
                    aria-label={isLoading ? 'Добавление задачи...' : 'Добавить задачу'}
                >
                    {isLoading ? 'Добавление...' : 'Добавить'}
                </SendButton>
            </InputContainer>
            <div id="task-help" className="sr-only">
                Нажмите Enter или кнопку "Добавить" для создания задачи
            </div>
        </FormWrapper>
    )
}

export default NewTask;

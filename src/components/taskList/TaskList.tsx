import { useState } from 'react';
import TaskItem from "../taskItem/TaskItem";
import { StyledSection, Container, AppTitle, StyledList } from "./styled";
import NewTask from '../newTask/NewTask';

interface Task {
    id: number;
    text: string;
    completed: boolean;
    category: string;
}

const CATEGORIES = ['Работа', 'Личное', 'Учеба'];

const TaskList = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [value, setValue] = useState('');
    const [category, setCategory] = useState(CATEGORIES[0]);

    const addTask = () => {
        if (value.trim()) {
            setTasks([...tasks, {
                id: Date.now(),
                text: value,
                completed: false,
                category: category
            }]);
            setValue('');
        }
    };

    const handleToggle = (taskId: number) => {
        setTasks(tasks.map(task =>
            task.id === taskId
                ? { ...task, completed: !task.completed }
                : task
        ));
    };

    const handleDelete = (taskId: number) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    return (
        <StyledSection>
            <Container>
                <AppTitle>ToDo List</AppTitle>
                <StyledList>
                    {tasks.map(task => (
                        <TaskItem
                            key={task.id}
                            text={task.text}
                            category={task.category}
                            completed={task.completed}
                            onChange={() => handleToggle(task.id)}
                            onDelete={() => handleDelete(task.id)}
                        />
                    ))}
                </StyledList>
                <NewTask
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onAdd={addTask}
                    categories={CATEGORIES}
                    selectedCategory={category}
                    onCategoryChange={setCategory}
                />
            </Container>
        </StyledSection>
    );
};

export default TaskList;

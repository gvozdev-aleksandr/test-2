import { useState } from 'react';
import TaskItem from "../taskItem/TaskItem";
import { StyledSection, Container, AppTitle, StyledList } from "./styled";
import NewTask from '../newTask/NewTask';
import Filter from '../Filter/Filter';
interface Task {
    id: number;
    text: string;
    completed: boolean;
    category: string;
}

const CATEGORIES = ['Работа', 'Личное', 'Учеба'];
const FILTER_OPTIONS = ['Все задачи', 'Выполненные задачи', 'Невыполненные задачи'];
type FilterOption = typeof FILTER_OPTIONS[number];

const TaskList = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [value, setValue] = useState('');
    const [category, setCategory] = useState(CATEGORIES[0]);
    const [selected, setSelected] = useState<FilterOption | ''>('');
    const visibleTasks = tasks.filter((task: Task) => {
        if (!selected || selected === 'Все задачи') {
            return true;
        }
        if (selected === 'Выполненные задачи') {
            return task.completed === true;
        }
        if (selected === 'Невыполненные задачи') {
            return task.completed === false;
        }
        return true;
    });

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
                <Filter selected={selected} setSelected={setSelected as (option: string) => void} options={FILTER_OPTIONS} />
                <StyledList>
                    {visibleTasks.map(task => (
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

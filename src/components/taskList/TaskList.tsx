import { useState, useMemo, useEffect } from 'react';
import TaskItem from "../taskItem/TaskItem";
import { StyledSection, Container, AppTitle, StyledList, EmptyList } from "./styled";
import NewTask from '../newTask/NewTask';
import Filter from '../Filter/Filter';
import Statistic from '../statistic/Statistic';
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
    const [tasks, setTasks] = useState<Task[]>(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [value, setValue] = useState('');
    const [category, setCategory] = useState(CATEGORIES[0]);
    const [selected, setSelected] = useState<FilterOption | ''>('');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

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

    const [realizeCount, unrealizeCount] = useMemo(() => {
        let realized = 0;
        let unrealized = 0;

        tasks.forEach(task => {
            if (task.completed) {
                realized++;
            } else {
                unrealized++;
            }
        });

        return [realized, unrealized];
    }, [tasks]);

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
                    {visibleTasks.length > 0 ? (
                        visibleTasks.map(task => (
                            <TaskItem
                                key={task.id}
                                text={task.text}
                                category={task.category}
                                completed={task.completed}
                                onChange={() => handleToggle(task.id)}
                                onDelete={() => handleDelete(task.id)}
                            />
                        ))
                    ) : (
                        <EmptyList>Список задач пуст</EmptyList>
                    )}
                </StyledList>
                <NewTask
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onAdd={addTask}
                    categories={CATEGORIES}
                    selectedCategory={category}
                    onCategoryChange={setCategory}
                />
                <Statistic realize={realizeCount} unrealize={unrealizeCount} />
            </Container>
        </StyledSection>
    );
};

export default TaskList;

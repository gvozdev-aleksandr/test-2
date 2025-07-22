import { useState } from 'react';
import TaskItem from "../taskItem/TaskItem";
import { StyledSection, Container, StyledList } from "./styled";
import NewTask from '../newTask/NewTask';

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

const TaskList = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [value, setValue] = useState('');

    const addTask = () => {
        if (value.trim()) {
            setTasks([...tasks, {
                id: Date.now(),
                text: value,
                completed: false
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
                <StyledList>
                    {tasks.map(task => (
                        <TaskItem
                            key={task.id}
                            text={task.text}
                            completed={task.completed}
                            onChange={() => handleToggle(task.id)}
                            onDelete={() => handleDelete(task.id)}
                        />
                    ))}
                </StyledList>
                <NewTask
                    value={value}
                    onAdd={addTask}
                    onChange={(e) => setValue(e.target.value)}
                />
            </Container>
        </StyledSection>
    );
};

export default TaskList;

import { StatWrapper, TasksCount } from "./styled";

interface StatisticProps {
    realize: number;
    unrealize: number;
}
const Statistic = ({realize, unrealize} : StatisticProps) => {
  return (
    <StatWrapper>
        <TasksCount>Выполненных задач: {realize}</TasksCount>
        <TasksCount>Невыполненных задач: {unrealize}</TasksCount>
    </StatWrapper>
  )
}

export default Statistic;

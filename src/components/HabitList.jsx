import { Habit } from "./Habit";
export function HabitList({ habitsArray, handleDeleteItem, handleToggle }) {
  return (
    <div className="bg-amber-400 h-[380px] flex justify-center overflow-x-hidden">
      <ul className="grid grid-cols-4 w-[1000px] h-[30px] gap-4 mt-15">
        {habitsArray.map((habit) => (
          <Habit
            habit={habit}
            key={habit.id}
            handleDeleteItem={handleDeleteItem}
            handleToggle={handleToggle}
          />
        ))}
      </ul>
    </div>
  );
}

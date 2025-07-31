export function Footer({ habitsArray }) {
  const totalHabits = habitsArray.length;
  const completedHabits = habitsArray.filter((habit) => habit.completed).length;
  const completedPercentage = (completedHabits / totalHabits) * 100 || 0;
  return (
    <div className="bg-red-500 flex items-center justify-center p-7.5 rounded-b-lg shadow-md shadow-red-700">
      <h1 className="text-lg font-bold capitalize">
        you have {totalHabits} habit. and {completedHabits} completed (
        {completedPercentage}) %
      </h1>
    </div>
  );
}

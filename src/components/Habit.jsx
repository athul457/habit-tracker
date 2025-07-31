export function Habit({ habit, handleDeleteItem, handleToggle }) {
  return (
    <div className="bg-green-400  rounded-lg flex items-center justify-center p-2">
      <input
        type="checkbox"
        className="w-5 h-5 mr-2"
        checked={habit.completed}
        onChange={() => handleToggle(habit.id)}
      />
      <li
        className="capitalize font-bold"
        style={habit.completed ? { textDecoration: "line-through" } : {}}
      >
        <span>{habit.description}</span>
        &nbsp;-
        {habit.time}
      </li>
      <button
        className="ml-2 text-red-600"
        onClick={() => handleDeleteItem(habit.id)}
      >
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}

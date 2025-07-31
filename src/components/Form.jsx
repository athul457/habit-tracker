export function Form({ handleSubmit, handleChange, habits }) {
  return (
    <div className=" bg-yellow-200 flex items-center justify-center">
      <form action="" className="p-6" onSubmit={handleSubmit}>
        <span className="text-4xl">⌚</span>
        <select
          className="font-bold border-0 rounded-lg p-3 bg-green-300"
          value={habits.time}
          name="time"
          onChange={handleChange}
        >
          <option value="select time">select time</option>
          <option value="15 mnt">15 mnt</option>
          <option value="30 mnt">30 mnt</option>
          <option value="1 hr">1 hr</option>
          <option value="2 hr">2 hr</option>
        </select>
        <input
          type="text"
          placeholder="Habit...."
          className="p-3 border-0 bg-green-300 rounded-xl ml-5 font-bold"
          value={habits.description}
          name="description"
          onChange={handleChange}
        ></input>
        <button className="ml-3 bg-green-500 p-3 rounded-lg shadow-md shadow-green-700">
          ADD
        </button>
      </form>
    </div>
  );
}

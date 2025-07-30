const habits = [
  { description: "reading", time: "15 mnt", completed: false, id: 1 },
  { description: "swimming", time: "30 mnt", completed: false, id: 2 },
  { description: "riding", time: "1 hr", completed: true, id: 3 },
  { description: "sleeping", time: "2 hr", completed: false, id: 4 },
];

import "./index.css";
function App() {
  return (
    <div className=" global flexes  ">
      <div className="w-[98%]">
        <Logo />
        <Form />
        <HabitList />
        <Footer />
      </div>
    </div>
  );
}

// ! <-----------------Logo ------------------>
function Logo() {
  return (
    <div className=" bg-green-200 rounded-t-lg ">
      <h1 className="font-bold text-5xl ml-[38%] p-7">📖HABITS🏃‍♀️‍➡️</h1>
    </div>
  );
}

// ! <--------------Form----------------------->
function Form() {
  return (
    <div className=" bg-yellow-200 flex items-center justify-center">
      <form action="" className="p-6">
        <span className="text-4xl">⌚</span>
        <select className="font-bold border-0 rounded-lg p-3 bg-green-300">
          <option value="">15 mnt</option>
          <option value="">30 mnt</option>
          <option value="">1 hr</option>
          <option value="">2 hr</option>
        </select>
        <input
          type="text"
          placeholder="Habit...."
          className="p-3 border-0 bg-green-300 rounded-xl ml-5 font-bold"
        ></input>
        <button className="ml-3 bg-green-500 p-3 rounded-lg shadow-md shadow-green-700">
          ADD
        </button>
      </form>
    </div>
  );
}

// ! <--------------------HabitList--------------------->
function HabitList() {
  return (
    <div className="bg-amber-400 h-[380px] flex justify-center overflow-x-hidden">
      <ul className="grid grid-cols-4 w-[1000px] h-[30px] gap-4 mt-15">
        {habits.map((habit) => (
          <Habit habit={habit} />
        ))}
      </ul>
    </div>
  );
}

// ! <----------------------habit---------------------------->
function Habit({ habit }) {
  return (
    <div className="bg-green-400  rounded-lg flex items-center justify-center p-2">
      <input type="checkbox" className="w-5 h-5 mr-2" />
      <li className="capitalize">
        <span style={habit.completed ? { textDecoration: "line-through" } : {}}>
          {habit.description}
        </span>
        &nbsp;-
        {habit.time}
      </li>
      <button className="ml-2 text-red-600">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}

// ! <--------------footer---------------------------->
function Footer() {
  return (
    <div className="bg-red-500 flex items-center justify-center p-7.5 rounded-b-lg shadow-md shadow-red-700">
      <h1 className="text-lg font-bold capitalize">
        you have added x items and x completed
      </h1>
    </div>
  );
}

export default App;

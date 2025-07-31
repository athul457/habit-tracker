import { useState } from "react";
import "./index.css";
import { Logo } from "./components/Logo";
import { Form } from "./components/Form";
import { HabitList } from "./components/HabitList";
import { Footer } from "./components/Footer";
export default function App() {
  const [habits, setHabits] = useState({
    description: "",
    time: "",
    completed: false,
    id: Date.now(),
  });

  const [habitsArray, setHabitsArray] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setHabits((habits) => ({ ...habits, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!habits.description) return;
    setHabitsArray((habitsArray) => [...habitsArray, habits]);
    setHabits({
      description: "",
      time: "15 mnt",
      completed: false,
      id: Date.now(),
    });
  }

  function handleDeleteItem(id) {
    setHabitsArray((habitsArray) =>
      habitsArray.filter((habit) => habit.id !== id)
    );
  }

  function handleToggle(id) {
    setHabitsArray((habitsArray) =>
      habitsArray.map((habits) =>
        habits.id === id ? { ...habits, completed: !habits.completed } : habits
      )
    );
  }

  return (
    <div className=" global flexes  ">
      <div className="w-[98%]">
        <Logo />
        <Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          habits={habits}
        />
        <HabitList
          habitsArray={habitsArray}
          handleDeleteItem={handleDeleteItem}
          handleToggle={handleToggle}
        />
        <Footer habitsArray={habitsArray} />
      </div>
    </div>
  );
}

import React from "react";
import Expense from "./components/Expensess/Expense";
function App() {
  const expense = [
    {
      id: "e1",
      title: "tissues",
      amount: 25,
      date: new Date(2020, 4, 3),
    },
    {
      id: "e2",
      title: "water",
      amount: 15,
      date: new Date(2020, 7, 26),
    },
    {
      id: "e3",
      title: "car",
      amount: 5000,
      date: new Date(2020, 11, 24),
    },
    {
      id: "e4",
      title: "polish",
      amount: 25,
      date: new Date(2020, 6, 11),
    },
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expense, { items: { expense } })
  // );
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expense items={expense}/>
    </div>
  );
}

export default App;

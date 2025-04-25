import './App.css';
import DisplayList from './components/DisplayList';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import React,{ useState } from 'react';

function App() {

    const [todos, setTodo] = useState([
        { id: "6", title: "Prepare lunch", completed: false },
        { id: "8", title: "Refill the water dispenser", completed: true },
        { id: "8dd6", title: "Clean house", completed: false },
        { id: "b75c", title: "Study for the upcoming exams", completed: false },
        { id: "c71e", title: "Study for the exam", completed: false },
        { id: "8e01", title: "Study for the exam", completed: false },
        { id: "8a64", title: "Create an app", completed: false },
        { id: "51c3", title: "Buy clothes", completed: false }
      ]);

  return (
    <div className="App">
      <Header />
      <SearchBar setTodo={setTodo}/>
      <DisplayList todos={todos} setTodo={setTodo} />
    </div>
  );
}

export default App;
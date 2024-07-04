// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import { TodoProvider } from './context/todoContext';
import AddTodo from './pages/addTodo';
import Navbar from './components/navbar';
import Footer from './components/footer';

const App = () => {
  return (
    <TodoProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-todo" element={<AddTodo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TodoProvider>
  );
};

export default App;

import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"; //npm install react-router-dom (make it easier to route URLs to different React components)
import "bootstrap/dist/css/bootstrap.min.css";  // npm install bootstrap

import Navbar from "./components/navbar.component.js";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

/*
** The url is indicated in the path and depending on it we will go to different component
** We need a file for each component, which are imported ci-dessus ^
*/

function App() {
  return (
    <Router>
        <Navbar />
        <br/>
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
    </Router>
  );
}


export default App;

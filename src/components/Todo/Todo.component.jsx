import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Todo = (user) => {
  const userInfo = user.history.location.state.user;
  const [todo, settodo] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userInfo.id}/todos`
    );
    const data = await response.json();
    settodo(data);
    console.log(data);
  };

  return (
    <div className="columns">
      <div className="column is-one-fifth"></div>
      <div className="column is-two-thirds">
        <section className="section">
          <div class="card">
            <button className="button  is-warning is-rounded">
              <span class="icon">
                <i class="fas fa-backward"></i>
              </span>{" "}
              <Link to="/allUsers">BACK</Link>
            </button>
            <div class="card-content">
              <div class="content">
                <h1> {userInfo.Name}, your Todo List</h1>

                {todo.map((task) => (
                  <p>
                    <span class="icon-text ">
                      {task.completed ? (
                        <span class="icon has-text-success ">
                          <i class="far fa-check-circle"></i>
                        </span>
                      ) : (
                        <span class="icon has-text-danger ">
                          <i class="far fa-times-circle"></i>
                        </span>
                      )}
                      <span>{task.title} </span>
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="column is-one-fifth"></div>
    </div>
  );
};

export default Todo;

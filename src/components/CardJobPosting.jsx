import React from "react";
import { Link } from "react-router-dom";
const CardJobPosting = ({ user }) => {
  return (
    <div>
      <section className="section">
        <div class="card">
          <div className="column is-2"></div>
          <div class="card">
            <div class="card-image">
              <figure class="image is-3by2">
                <img
                  class="is-rounded"
                  alt="user pic"
                  src={`https://avatars.dicebear.com/api/human/${user.Name}.svg`}
                />
              </figure>
            </div>
          </div>

          <button class="button is-rounded is-info">
            <Link to={{ pathname: "/todo", state: { user: user } }}>
              Your Todo List
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default CardJobPosting;

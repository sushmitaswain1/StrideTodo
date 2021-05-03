import React from "react";

import CardJobPosting from "./CardJobPosting";

const Cardlist = ({ users }) => {
  return (
    <div>
      <section class="section ">
        {users.map((user) => (
          <CardJobPosting key={user.id} user={user} />
        ))}
      </section>
    </div>
  );
};

export default Cardlist;

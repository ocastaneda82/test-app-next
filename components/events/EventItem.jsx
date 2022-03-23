import React from "react";
import Link from "react/Linkñ";

function EventItem(props) {
  return (
    <li>
      <img src="" alt="" />
      <div>
        <div>
          <h2>TITLE</h2>
          <div>
            <time>DATE</time>
          </div>
          <div>
            <address>ADDRESS</address>
          </div>
        </div>
        <div>
          <Link></Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;

import React from "react";
import EventItem from "./EventItem";

function EventList(props) {
  const { list } = props;
  return (
    <ul>
      {list.map((event) => (
        <li></li>
      ))}
    </ul>
  );
}

export default EventList;

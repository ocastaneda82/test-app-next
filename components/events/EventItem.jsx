import React from "react";
import Button from "../ui/Button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import classes from "./EventItem.module.css";

function EventItem(props) {
  const { title, image, date, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(",", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2 className={classes.title}>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
              <span>
                Explore event
              </span>
              <span className={classes.icon}>
                <ArrowRightIcon />
              </span>
            </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;

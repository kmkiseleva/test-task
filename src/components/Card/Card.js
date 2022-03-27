import React from "react";
import "./card.css";

const Card = ({ item }) => {
  const { first, last } = item.name;
  const { age } = item.dob;
  const { country, city } = item.location;

  const { date } = item.registered;
  const parseDate = Date.parse(date);
  const dateObj = new Date(parseDate);

  return (
    <div className="card">
      <div className="card__img">
        <img src={item.picture.large} alt="ava" />
      </div>
      <div className="card__info">
        <div className="info__name">
          {first} {last}
        </div>
        <div className="info__details">
          Возраст: <span>{age}</span>
        </div>
        <div className="info__details">
          Пол: <span>{item.gender === "male" ? "Мужской" : "Женский"}</span>
        </div>
        <div className="info__details">
          Адрес:{" "}
          <span>
            {country}, {city}
          </span>
        </div>
        <div className="info__details">
          Дата регистрации: <span>{dateObj.toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;

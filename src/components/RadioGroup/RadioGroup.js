import React from "react";
import "./radioGroup.css";

const RadioGroup = ({ genderValue, setGenderValue }) => {
  return (
    <div className="filters__gender">
      <div className="filters__title">Фильтр по полу</div>
      <div className="gender__list">
        <div className="radio__group">
          <label className="custom__radio">
            <input
              type="radio"
              name="gender"
              value="Все"
              checked={genderValue === "Все" ? true : false}
              onChange={(e) => setGenderValue(e.target.value)}
            />
            <span>Все</span>
          </label>
        </div>
        <div className="radio__group">
          <label className="custom__radio">
            <input
              type="radio"
              name="gender"
              value="Женщины"
              checked={genderValue === "Женщины" ? true : false}
              onChange={(e) => setGenderValue(e.target.value)}
            />
            <span>Только женщины</span>
          </label>
        </div>
        <div className="radio__group">
          <label className="custom__radio">
            <input
              type="radio"
              name="gender"
              value="Мужчины"
              checked={genderValue === "Мужчины" ? true : false}
              onChange={(e) => setGenderValue(e.target.value)}
            />
            <span>Только мужчины</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default RadioGroup;

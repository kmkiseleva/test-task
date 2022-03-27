import React from "react";
import "./checkboxGroup.css";

const CheckboxGroup = ({ onChangeAgeHandler }) => {
  return (
    <div className="filters__age">
      <div className="filters__title">Фильтр по возрастным группам</div>
      <div className="age__checkboxes">
        <div className="checkbox__col">
          <div className="filters__item">
            <label className="custom__checkbox">
              <input
                type="checkbox"
                name="young"
                onChange={(e) => onChangeAgeHandler(e)}
              />
              <span>0-18</span>
            </label>
          </div>
          <div className="filters__item">
            <label className="custom__checkbox">
              <input
                type="checkbox"
                name="mature"
                onChange={(e) => onChangeAgeHandler(e)}
              />
              <span>35-65</span>
            </label>
          </div>
        </div>
        <div className="checkbox__col">
          <div className="filters__item">
            <label className="custom__checkbox">
              <input
                type="checkbox"
                name="adult"
                onChange={(e) => onChangeAgeHandler(e)}
              />
              <span>18-35</span>
            </label>
          </div>
          <div className="filters__item">
            <label className="custom__checkbox">
              <input
                type="checkbox"
                name="elderly"
                onChange={(e) => onChangeAgeHandler(e)}
              />
              <span>65+</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckboxGroup;

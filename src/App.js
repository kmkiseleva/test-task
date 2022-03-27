import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import RadioGroup from "./components/RadioGroup/RadioGroup";
import CheckboxGroup from "./components/CheckboxGroup/CheckboxGroup";
import Card from "./components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "./store/fetchCards";

function App() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cards);

  const [searchValue, setSearchValue] = useState("");
  const [genderValue, setGenderValue] = useState("Все");
  const [nameFilter, setNameFilter] = useState("");

  const [ageFilters, setAgeFilters] = useState({
    young: false,
    adult: false,
    mature: false,
    elderly: false,
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setNameFilter(searchValue);
  };

  const onChangeAgeHandler = (e) => {
    const { target } = e;
    const value = target.checked;
    const { name } = target;

    setAgeFilters({
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <div className="container">
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onSubmitHandler={onSubmitHandler}
      />

      <div className="filters">
        <RadioGroup genderValue={genderValue} setGenderValue={setGenderValue} />
        <CheckboxGroup onChangeAgeHandler={onChangeAgeHandler} />
      </div>

      <div className="cards">
        {items.length !== 0 && (
          <>
            {genderValue === "Все" &&
              !ageFilters.young &&
              !ageFilters.adult &&
              !ageFilters.mature &&
              !ageFilters.elderly &&
              !nameFilter &&
              items.map((item) => <Card key={Math.random()} item={item} />)}
            {genderValue === "Все" &&
              !ageFilters.young &&
              nameFilter &&
              items
                .filter(
                  (item) =>
                    item.name.first.toLowerCase() === searchValue.toLowerCase()
                )
                .map((item) => <Card key={Math.random()} item={item} />)}
            {genderValue === "Все" &&
              ageFilters.young &&
              !nameFilter &&
              items
                .filter((item) => item.dob.age <= 18)
                .map((item) => <Card key={Math.random()} item={item} />)}
            {genderValue === "Все" &&
              ageFilters.young &&
              nameFilter &&
              items
                .filter((item) => item.dob.age <= 18)
                .filter(
                  (item) =>
                    item.name.first.toLowerCase() === searchValue.toLowerCase()
                )
                .map((item) => <Card key={Math.random()} item={item} />)}
            {genderValue === "Все" &&
              !nameFilter &&
              !ageFilters.young &&
              ageFilters.adult &&
              items
                .filter((item) => item.dob.age >= 18 && item.dob.age < 35)
                .map((item) => <Card key={Math.random()} item={item} />)}
            {genderValue === "Все" &&
              !nameFilter &&
              ageFilters.mature &&
              items
                .filter((item) => item.dob.age >= 35 && item.dob.age < 65)
                .map((item) => <Card key={Math.random()} item={item} />)}
            {genderValue === "Все" &&
              !nameFilter &&
              ageFilters.elderly &&
              items
                .filter((item) => item.dob.age >= 65)
                .map((item) => <Card key={Math.random()} item={item} />)}

            {genderValue === "Мужчины" &&
              !nameFilter &&
              items
                .filter((item) => item.gender === "male")
                .map((item) => <Card key={Math.random()} item={item} />)}
            {genderValue === "Мужчины" &&
              nameFilter &&
              items
                .filter((item) => item.gender === "male")
                .filter(
                  (item) =>
                    item.name.first.toLowerCase() === searchValue.toLowerCase()
                )
                .map((item) => <Card key={Math.random()} item={item} />)}

            {genderValue === "Женщины" &&
              !nameFilter &&
              items
                .filter((item) => item.gender === "female")
                .map((item) => <Card key={Math.random()} item={item} />)}
            {genderValue === "Женщины" &&
              nameFilter &&
              items
                .filter((item) => item.gender === "female")
                .filter(
                  (item) =>
                    item.name.first.toLowerCase() === searchValue.toLowerCase()
                )
                .map((item) => <Card key={Math.random()} item={item} />)}
          </>
        )}
      </div>
    </div>
  );
}

export default App;

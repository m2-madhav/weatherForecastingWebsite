import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "61ce79c32b969c4013d4d51c7ff533f3";

export const getData = async (city, country) => {
  return await axios.get(
    `${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`
  );
};

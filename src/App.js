import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          <p>
            This project was coded by{" "}
            <a href="https://github.com/Elsabordeaux">Alana Jackson</a> and is
            open-sourced on{" "}
            <a href="https://github.com/Elsabordeaux/alanas-react-weather-app">
              Github
            </a>{" "}
            and hosted on{" "}
            <a href="https://alanas-react-weather-app.netlify.app/">Netlify</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

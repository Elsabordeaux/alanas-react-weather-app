import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/Elsabordeaux"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alana Jackson
            </a>{" "}
            and is open-sourced on{" "}
            <a
              href="https://github.com/Elsabordeaux/alanas-react-weather-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://alanas-react-weather-app.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

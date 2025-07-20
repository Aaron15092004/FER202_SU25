import "./App.css";
import demoPic from "./assets/img/pngtree-chicken-image-without-background-png-image_11890694.png";

let today = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();

function Header() {
  return (
    <>
      <header>
        <img src={demoPic} alt="demo"/>
        <h1>React Manh Huynh</h1>
        <p>
          Học React - khám phá phong cách xây dựng linh hoạt và đầy sáng tạo!
        </p>
      </header>
    </>
  );
}

function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;

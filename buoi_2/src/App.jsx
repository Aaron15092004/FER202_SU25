// import Badge from "react-bootstrap/Badge";

import "./styles.css";
import Button from "./components/Button";
import CardComponent from "./components/CardComponent";

function App() {
  return (
    <>
      <div>
        <Button colorText={"pink"} buttonVersion={"true"} />
        <div className="mt-4"></div>
        <Button colorText={"red"} />
        <div className="mt-4"></div>
        <CardComponent />
      </div>
    </>
  );
}

export default App;

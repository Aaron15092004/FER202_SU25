// import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Header from "./layout/Header";
import Footer from "./layout/Footer";


function App() {
  return (
    <>
      {/* Tab Header */}
      <Header />

      {/* Tab Content */}
      <Container className="mt-3">
        <h1>Welcome to My Website</h1>
        <p>This is a simple example of a Bootstrap navbar with React.</p>
        <Button variant="primary">Click Me!</Button>
      </Container>

      {/* Tab Footer */}
      <Footer />
    </>
  );
}

export default App;

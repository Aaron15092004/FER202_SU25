import Header from "./layout/Header";
import Footer from "./layout/Footer";
import CardComponent from "./components/CardComponent";
import { useState, useEffect } from "react";
import productApi from "./service/productApi";
import { todoApi } from "./service/todoApi";

function App() {
  const [products, setProducts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [isDisplay, setIsDisplay] = useState(true);

  const fetchDataProducts = async () => {
    const result = await productApi.getProducts();
    setProducts(result.data.products);
  };

  const fetchDataTodos = async () => {
    const result = await todoApi();
    setTodos(result);
  };

  useEffect(() => {
    fetchDataProducts();
    fetchDataTodos();
  }, []);

  const handleDisplayTodos = () => {
    setIsDisplay(!isDisplay);
    console.log("Display todos:", isDisplay);
  };

  return (
    <>
      {/* Tab Header */}
      <Header />

      {/* Tab Content */}
      <button onClick={handleDisplayTodos}>display products</button>
      <button onClick={handleDisplayTodos}>display todo</button>
      <div className="container mt-3">
        {isDisplay ? (
          <div className="row">
            {products.map((item) => (
              <div className="col-md-4 mb-3" key={item.id}>
                <CardComponent itemData={item} />
              </div>
            ))}
          </div>
        ) : (
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Tab Footer */}
      <Footer />
    </>
  );
}

export default App;

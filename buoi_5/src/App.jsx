import { Routes, Route, useNavigate } from "react-router-dom";
import LayoutDefault from "./layouts";
import ProductPage from "./pages/product";
import Contact from "./pages/contact";
import { Result } from "antd";
import { Button } from "antd";
import { Footer, Header } from "antd/es/layout/layout";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Header className="flex">
        <div className="logo" />
        <div className="text-center text-2xl font-bold text-white">
          My Application
        </div>
        <nav className="flex space-x-4 text-white">
          <ul className="flex space-x-4">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/users">Users</a>
            </li>
          </ul>
        </nav>
      </Header>
      <div className="h-[100vh] container p-4 mx-auto">
        <Routes>
          <Route path="/" element={<h1>Welcome to the App</h1>} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:id" element={<h1>Product Detail Page</h1>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<h1>Users Page</h1>} />
          <Route path="/users/:id" element={<h1>User Detail Page</h1>} />
          <Route
            path="*"
            element={
              <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                  <Button onClick={() => navigate("/")} type="primary">
                    Back Home
                  </Button>
                }
              />
            }
          />
        </Routes>
      </div>
      <Footer style={{ textAlign: "center" }}>
        My Application ©{new Date().getFullYear()} Created by Your Name
      </Footer>
      {/* <LayoutDefault /> */}
    </>
  );
}

export default App;

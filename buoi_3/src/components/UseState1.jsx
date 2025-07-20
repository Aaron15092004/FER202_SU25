import React from "react";
import { useState } from "react";
import { Table, Button } from "react-bootstrap";

const UseState1 = () => {
  const [tshirt, setTshirt] = useState([
    {
      id: 1,
      name: "Áo thun",
      price: 100000,
      quantity: 2,
    },
    {
      id: 2,
      name: "Quần jean",
      price: 200000,
      quantity: 1,
    },
    {
      id: 3,
      name: "Giày thể thao",
      price: 300000,
      quantity: 1,
    },
  ]);

  const handleTangSoLuong = (item) => {
    setTshirt(
      tshirt.map((t) => {
        if (t.id === item.id) {
          return { ...t, quantity: t.quantity + 1 };
        }
        return t;
      })
    );
  };

  const handleGiamSoLuong = (item) => {
    setTshirt(
      tshirt.map((t) => {
        if (t.id === item.id) {
          return { ...t, quantity: Math.max(t.quantity - 1, 0) };
        }
        return t;
      })
    );
  };

  return (
    <div className="container mt-5">
      <Table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Số lượng</th>
            <th>Giá</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          {tshirt.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>
                <div>
                  {item.quantity}
                  <Button onClick={() => handleTangSoLuong(item)}>tăng</Button>
                  <Button onClick={() => handleGiamSoLuong(item)}>giảm</Button>
                </div>
              </td>
              <td>{item.price.toLocaleString()} VNĐ</td>
              <td>{(item.price * item.quantity).toLocaleString()} VNĐ</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UseState1;

import "./App.css";
import StudentItem from "./components/StudentItem";

function App() {
  return (
    <>
      <div className="container mt-4">
        <div className="card">
          <div className="card-header">
            <h1>Danh Sach Sinh Vien</h1>
          </div>
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Mã Sinh Viên</th>
                  <th scope="col">Họ Đệm</th>
                  <th scope="col">Tên</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Lê Hoàng</td>
                  <td>Nhật</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Hòang Lê Khánh</td>
                  <td>Linh</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Lê Minh</td>
                  <td>Triệu</td>
                </tr>
                <StudentItem
                  studentId="4"
                  studentLastName="Bui Khanh"
                  studentFirstName="Nam"
                />
                <StudentItem
                  studentId="5"
                  studentLastName="Hoang Manh"
                  studentFirstName="Toan"
                />
                <StudentItem
                  studentId="6"
                  studentLastName="Nguyen Thi Thu"
                  studentFirstName="Ha"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import CardComponent from "./components/CardComponent";

function App() {
  const data = [
    {
      id: 1,
      image:
        "https://png.pngtree.com/element_our/20200609/ourmid/pngtree-children-s-software-programming-image_2230759.jpg",
      title: "Hoc reactJS",
      des: "Day la khoa hoc ve reactJS",
    },
    {
      id: 2,
      image:
        "https://png.pngtree.com/element_our/20200609/ourmid/pngtree-children-s-software-programming-image_2230759.jpg",
      title: "Hoc JavaScript",
      des: "Day la khoa hoc ve JavaScript",
    },
    {
      id: 3,
      image:
        "https://png.pngtree.com/element_our/20200609/ourmid/pngtree-children-s-software-programming-image_2230759.jpg",
      title: "Hoc HTML",
      des: "Day la khoa hoc ve HTML",
    },
  ];
  //Dung map de render Data ra giao dien

  return (
    <>
      {/* Tab Header */}
      <Header />

      {/* Tab Content */}
      <div className="container" style={{ height: "120vh", marginTop: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {data.map((item) => (
            <CardComponent itemData={item} key={item.id} />
          ))}
        </div>
      </div>
      {/* Tab Footer */}
      <Footer />
    </>
  );
}

export default App;

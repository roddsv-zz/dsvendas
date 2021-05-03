import DataTable from "components/DataTabe";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá mundo!</h1>
      
        <DataTable />
      </div>
      
      <Footer />
    </>
  );
}

export default App;

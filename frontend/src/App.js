import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Header from "./components/Header";

function App() {
  // React Hook
  // useEffect(() => {
  //   fetch("http://localhost:3030/banner")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <>
      <Header />
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import Content from "./components/Content";
import Navbar from "./components/Navbar";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch("https://api.punkapi.com/v2/beers");
      const result = await res.json();
      setData(result);
    }
    getData();
  }, []);
  return (
    <div>
      <Navbar handleSetData={setData} />
      <Content data={data} />
    </div>
  );
}

export default App;

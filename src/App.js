import "./App.css";
import { useEffect, useState } from "react";
import WineList from "./components/wineList/WineList";
import BeerList from "./components/beerList/BeerList";
import TopBar from "./components/topBar/Topbar";
import Details from "./components/wineDetails/Details";
import About from "./components/about/About";
import AddBottle from "./components/addBottle/AddBottle";
import { wineBottles } from "./winedata";
import { beerBottles } from "./beerdata";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddButton from "./components/addButton/AddButton";

function App() {
  // const getData = async () => {
  //   const response = await fetch(
  //     "https://wine-recognition2.p.rapidapi.com/v1/version",
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json;charset=utf-8",
  //       },
  //     }
  //   );
  //   const data = await response.json();
  //   console.log(data);
  // };

  const [wineData, setWineData] = useState(wineBottles);
  const [beerData, setBeerData] = useState(beerBottles);
  const [newBottle, setNewBottle] = useState({});

  function isEmpty(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }

  useEffect(() => {
    // getData();
    if (!isEmpty(newBottle)) {
      const updateBottle = () => {
        if (newBottle.type == 1) {
          wineBottles.push(newBottle);
          setWineData(wineBottles);
        } else if (newBottle.type == 2) {
          newBottle.img =
            "https://spar.pt/images/thumbs/0000976_cerveja-super-bock-branca-lata-050lt_550.jpeg";
          beerBottles.push(newBottle);
          setBeerData(beerBottles);
        }
      };
      updateBottle();
    }
  }, [newBottle]);

  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <div className="container">
            <AddButton newBottle={newBottle} setNewBottle={setNewBottle} />
            <div className="featuredItems">
              <WineList size={wineBottles.length} />
            </div>
            <div className="featuredItems">
              <BeerList size={beerBottles.length} />
            </div>
          </div>
        </Route>
        <Route path="/wineDetails">
          <Details type={"wine"} data={wineData} />
        </Route>
        <Route path="/beerDetails">
          <Details type={"beer"} data={beerData} />
        </Route>
        <Route path="/add">
          <AddBottle setNewBottle={setNewBottle} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

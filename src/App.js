import "./App.css";
import { mainRouter } from "./configs/router";
import { Switch, BrowserRouter } from "react-router-dom";
import { RoutesMain } from "./templates/main";

function App() {
  /* Main cho nguoi dung */
  function renderMainRouter(listRouter) {
    return listRouter.map((router, index) => {
      return <RoutesMain {...router} key={index} />;
    });
  }

  return (
    <>
      <BrowserRouter>
        <Switch>{renderMainRouter(mainRouter)}</Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

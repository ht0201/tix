import "./App.css";
import { adminRouter, mainRouter } from "./configs/router";
import { Switch, BrowserRouter } from "react-router-dom";
import { RoutesMain } from "./templates/main";
import { RoutesAdmin } from "./templates/admin";

function App() {
  /* Main cho nguoi dung */
  function renderMainRouter(listRouter) {
    return listRouter.map((router, index) => {
      return <RoutesMain {...router} key={index} />;
    });
  }

  /* Admin */
  function renderAdminRouter(listRouter) {
    return listRouter.map((router, index) => {
      return <RoutesAdmin {...router} key={index} />;
    });
  }

  return (
    <>
      <BrowserRouter>
        <Switch>{renderMainRouter(mainRouter)}</Switch>
        <Switch>{renderAdminRouter(adminRouter)}</Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

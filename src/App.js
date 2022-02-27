import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
import Sidebar from "./Shared/Sidebar/Sidebar";
import Cabanas from "./components/Cabanas/Index";
import Clientes from "./components/Clientes/Index";
import Inicio from "./components/Inicio/Inicio";
import Recepcionistas from "./components/Recepcionistas/Index";
import Reservas from "./components/Reservas/Index";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      {/* <Provider store={store}> */}
      <div className="contenedor">
        <Sidebar />
        <div className="mainOptions">
          <Switch>
            <Route exact path="/" component={Inicio} />

            <Route exact path="/cabanas" component={Cabanas} />

            <Route exact path="/clientes" component={Clientes} />

            <Route exact path="/recepcionistas" component={Recepcionistas} />

            <Route exact path="/reservas" component={Reservas} />
          </Switch>
        </div>
      </div>
      {/* </Provider> */}
      <Footer />
    </Router>
  );
}

export default App;

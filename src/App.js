import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
import Sidebar from "./Shared/Sidebar/Sidebar";
import Cabanas from "./components/Cabanas/Index";
import Clientes from "./components/Clientes/Index";
import Inicio from "./components/Inicio/Inicio";


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

            <Route exact path='/' component={Inicio} />

            <Route exact path='/cabanas' component={Cabanas} />

            <Route exact path='/clientes' component={Clientes} />
          </Switch>
        </div>
      </div>
      {/* </Provider> */}
      <Footer />
    </Router>
  );
}

export default App;

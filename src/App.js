import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

//Componentes -Layout 
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
import Sidebar from "./Shared/Sidebar/Sidebar";

//Componentes - Entidades

import Recepcionistas from './components/Recepcionistas';
import NewRecepcionista from './components/Recepcionistas/NewRecepcionista';
import EditRecepcionista from './components/Recepcionistas/EditRecepcionista';

//Store 
import store from './Store';

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Provider store={store}>
      <div className="contenedor">
        <Sidebar />
        <div className="mainOptions">
          <Switch>
            <Route exact path="/recepcionistas" component={Recepcionistas} />
            <Route exact path="/recepcionistas/new" component={NewRecepcionista} />
            <Route exact path="/recepcionistas/edit/:id" component={EditRecepcionista} />

            
          </Switch>
        </div>
      </div>
      </Provider>
      <Footer />
    </Router>
  );
}

export default App;

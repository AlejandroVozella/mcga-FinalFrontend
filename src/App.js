import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import Sidebar from './Shared/Sidebar/Sidebar';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      {/* <Provider store={store}> */}
        <div className='contenedor'>
          <Sidebar />
          <div className='mainOptions'>
            <Switch>
              {}
            </Switch>
          </div>
        </div>
      {/* </Provider> */}
      <Footer />
    </Router>
  );
}

export default App;
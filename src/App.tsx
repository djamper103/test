import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Header} from './components/header';
import {routes} from './routes/routes';


function App() {
  return (
    <>
      <Header/>
      <Routes>
        {
          routes.map(route => <Route element={route.element} path={route.path} key={route.path} />)
        }
      </Routes>
  </>
  );
}

export default App;

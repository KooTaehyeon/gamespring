import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Home from './pages/Home';
import Main from './pages/Main';
function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Main' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;

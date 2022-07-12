import './App.css';
import React from 'react';
import { useAuth } from 'hooks/useAuth';
import { AuthenticatedApp } from 'components/AuthenticatedApp';
import { UnauthenticatedApp } from 'components/UnauthenticatedApp';

function App() {
  const { user } = useAuth();
  return (
    <div className="container">
      <h1>Chat Room</h1>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      {/* <AuthenticatedApp /> */}

    </div>
  );
  // return (
  //   // <div className="App">
  //   //   <header className="App-header">
  //   //     <img src={logo} className="App-logo" alt="logo" />
  //   //     <p>
  //   //       Edit <code>src/App.js</code> and save to reload.
  //   //     </p>
  //   //     <a
  //   //       className="App-link"
  //   //       href="https://reactjs.org"
  //   //       target="_blank"
  //   //       rel="noopener noreferrer"
  //   //     >
  //   //       Learn React
  //   //     </a>
  //   //   </header>
  //   // </div>
  // );
}

export default App;

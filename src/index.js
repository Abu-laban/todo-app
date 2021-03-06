import React from 'react';
import ReactDOM from 'react-dom';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import App from './app.js';
import AuthProvider from "./context/auth";

class Main extends React.Component {
  render() {

    return (
      <>
        <AuthProvider>
          <App />
        </AuthProvider>
      </>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);

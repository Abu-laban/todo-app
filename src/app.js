import React, { useContext } from "react";
import { If, Else, Then } from "react-if";
import ToDo from "./components/todo/todo";
import SettingsContext from "./context/settings";
import Auth, { AuthContext } from "./context/auth";
import Sign from "./components/auth/Sign";


function App() {

  const { loggedIn } = useContext(AuthContext);

  return (
    <>
      <Auth>
        <If condition={loggedIn == true}>
          {console.log("from app comp", loggedIn)}
          <Then>
            <SettingsContext>
              <ToDo />
            </SettingsContext>
          </Then>
          <Else>
            <Sign />
          </Else>
        </If>
      </Auth>
    </>
  );
}

export default App;
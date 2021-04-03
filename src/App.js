import React, { useContext } from "react";
import Logo from "./components/Logo";
import { GlobalStyle } from "./components/styles/globalStyles";

import NavBar from "./components/NavBar";
import { Router, Redirect } from "@reach/router";
import { Context } from "./Context";
import NotFound from "./components/pages/NotFound";
const { GenerateSW } = require("workbox-webpack-plugin");

const Home = React.lazy(() => import("./components/pages/Home"));
const Detail = React.lazy(() => import("./components/pages/Details"));
const User = React.lazy(() => import("./components/pages/User"));
const Favs = React.lazy(() => import("./components/pages/Favs"));
const NotRegisterUser = React.lazy(() =>
  import("./components/pages/NotRegisterUser")
);
const App = () => {
  const { isAuth } = useContext(Context);
  return (
    <>
      <GlobalStyle />
      <Logo />
      <React.Suspense fallback={<h1>Loading....</h1>}>
        <Router>
          <NotFound default />
          <Home path="/" />
          <Home path="/pet/:id" />
          <Detail path="/detail/:detailId" />
          {!isAuth && <NotRegisterUser path="/login" />}
          {!isAuth && <Redirect from="/favs" to="/login" />}
          {!isAuth && <Redirect from="/user" to="/login" />}
          {isAuth && <Redirect from="/login" to="/" />}
          <Favs path="/favs" />
          <User path="/user" />
        </Router>
      </React.Suspense>

      <NavBar />
    </>
  );
};

export default App;

// APP.propTypes = {
//   favs: PropsTypes.arrayOf(
//     PropsTypes.shape(
//       id: PropTypes.string,
//       src: PropTypes.bool
//     ),
// likes: function (props, propsName, compName){
//   const propValue = props[propsName];
//   if(propValue === undefined){
//     return new Error ('error ')
//   }
//   if(propValue < 0) {
//     return new Error(' valor > 0')
//   }

//}

//   )
// }

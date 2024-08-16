
import { useRoutes } from "react-router-dom";
import routes from "./router/Router";

const App = () => {
  let element = useRoutes(routes);
  return element
};

export default App;

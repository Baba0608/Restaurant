import ReactDOM from "react-dom/client";

import { Header } from "./components/layout/Header";
import { CardContainer } from "./components/menu-card/CardContainer";

const App = () => {
  return (
    <div className="bg-gray-400">
      <Header />
      <CardContainer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

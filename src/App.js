import ReactDOM from "react-dom/client";

import { Header } from "./components/layout/Header";

const App = () => {
  return (
    <>
      <Header />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

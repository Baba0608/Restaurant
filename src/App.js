import ReactDOM from "react-dom/client";

import { Header } from "./components/layout/Header";

const App = () => {
  return (
    <div className="bg-gray-400 h-[100vh]">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

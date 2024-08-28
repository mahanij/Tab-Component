import { useState } from "react";
import TabComponent from "./components/TabComponent";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const data = [
    { title: "Tab 1" , key:0 },
    { title: "Tab 2" , key:1 },
    { title: "Tab 3" , key:2 }
  ];

  return (
    <div className="w-full flex h-10 flex-col">
      <div className="w-full flex">
        <TabComponent data={data} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <span className="w-full mt-10">{data[activeTab].title}</span>
    </div>
  );
}

export default App;

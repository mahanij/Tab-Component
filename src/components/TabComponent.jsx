function TabComponent({ data, activeTab, setActiveTab }) {
  return data.map(({ title, key }) => (
    <button
      key={key}
      className={`text-center bg-gray-800 p-5 w-1/3 m-5 ${
        activeTab == key ? "bg-gray-600" : ""
      }`}
      onClick={() => setActiveTab(key)}
    >
      {title}
    </button>
  ));
}

export default TabComponent;

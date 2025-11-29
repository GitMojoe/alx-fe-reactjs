// src/App.jsx
import Search from "./components/Search";
import './output.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-4xl font-bold text-blue-500">Tailwind is working!</h1>
      <Search />
    </div>
  );
}
export default App;
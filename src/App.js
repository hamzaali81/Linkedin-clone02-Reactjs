import './App.css';
import Header from './Component/Header/Header';
import SideBar from "./Component/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
    
     {/* Header */}
    <Header />

     {/* App Body  */}
     <div className="app__body">
     {/* Sidebar */}
       <SideBar />
     {/* Feed */}
     {/* Widgets */}
     </div>
    </div>
  );
}

export default App;

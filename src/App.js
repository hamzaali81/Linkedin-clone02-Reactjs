import Header from './Component/Header/Header';
import SideBar from "./Component/Sidebar/Sidebar";
import Feed from "./Component/Feed/Feed";

import './App.css';

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
     <Feed />
     {/* Widgets */}
     </div>
    </div>
  );
}

export default App;

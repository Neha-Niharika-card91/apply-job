import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import Profile from "./pages/Profile";
import HelpSupport from "./pages/HelpSupport";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <Header />
      <div className="d-flex flex-grow-1 bg-light mt-5 fixed-top">
        <Sidebar />
        <div>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/help-support" element={<HelpSupport />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;

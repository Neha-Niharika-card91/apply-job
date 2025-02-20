import { Link } from "react-router-dom";
import { useState } from "react";
import { Home, User, HelpCircle } from "lucide-react";

function Sidebar() {
  const [isVisible, setVisible] = useState(false);
  const items = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "Profile", path: "/profile", icon: <User size={20} /> },
    {
      name: "HelpSupport",
      path: "/help-support",
      icon: <HelpCircle size={20} />,
    },
  ];
  return (
    <nav
      className={`d-flex flex-column bg-dark text-white vh-100 p-1 mb-3 ${
        isVisible ? "w-300" : "w-60"
      }`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {items.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className="d-flex align-items-center text-white text-decoration-none py-2 px-3 rounded"
        >
          {item.icon}
          {isVisible && <span>{item.name}</span>}
        </Link>
      ))}
    </nav>
  );
}
export default Sidebar;

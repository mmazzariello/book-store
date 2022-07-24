import { Link } from "react-router-dom";

const NavBar = () => {
  const linkStyle = {
    padding: "10px",
    display: "block",
    fontSize: "18px",
    color: "white",
    textDecoration: "none",
  };

  const navContainerStyle = {
    backgroundColor: "black",
    padding: "10px",
    display: "flex",
    gap: "5px",
    justifyContent: "center",
  };

  return (
    <div style={navContainerStyle}>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="create" style={linkStyle}>
        Create
      </Link>
    </div>
  );
};

export default NavBar;

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        padding: "10px 20px",
        background: "#333",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      
      <h2 style={{ margin: 0 }}>Toy Projects</h2>

      
      <div>
        <Link
          to="/"
          style={{
            color: "#fff",
            marginRight: "15px",
            textDecoration: "none",
          }}
        >
          Home
        </Link>
        <a
          href="https://github.com/mtalha83/assignment2-todo"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}

import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Home = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Home Page</h1>

      {/* ✅ Optimized Image */}
      <StaticImage
        src="../images/New.jpg"
        alt="New Image"
        placeholder="blurred"
        layout="constrained"
        width={600}
        style={{ marginBottom: "2rem", borderRadius: "12px" }}
      />

      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
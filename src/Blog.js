// Blog.js
import React from "react";
import "./Blog.css"; // Import external CSS

function Blog() {
  // Static Blog Details
  const title = "10 Tips for Effective Time Management";
  const author = "John Doe";
  const description =
    "In today's fast-paced world, effective time management is crucial for success. Learn 10 tips to improve your time management skills and boost productivity.";
  const image = "https://via.placeholder.com/150";

  // Inline styles
  const containerStyle = {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    margin: "20px auto",
    maxWidth: "400px",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  };

  const authorStyle = {
    fontSize: "14px",
    fontStyle: "italic",
    color: "#555",
    marginBottom: "15px",
  };

  const descriptionStyle = {
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#444",
    marginBottom: "15px",
  };

  return (
    <div style={containerStyle} className="blog-container">
      <h2 style={titleStyle}>{title}</h2>
      <p style={authorStyle}>By {author}</p>
      <img src={image} alt="Blog Thumbnail" className="blog-image" />
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
}

export default Blog;

import { useState, useEffect } from "react";
import axios from "axios";

 function Blogs() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    author: "",
    image: ""
  });

  const [blogs, setBlogs] = useState([]);

  // ✅ Fetch blogs from backend
  const fetchBlogs = async () => {
    const res = await axios.get("http://localhost:5000/blogs");
    setBlogs(res.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // ✅ Input handler
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Submit blog
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/blogs", form);

    setForm({ title: "", content: "", author: "", image: "" });
    fetchBlogs();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Create Blog</h1>

      {/* ✅ Blog Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={form.title}
          onChange={handleChange}
        /><br /><br />

        <textarea
          name="content"
          placeholder="Blog Content"
          value={form.content}
          onChange={handleChange}
        /><br /><br />

        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={form.author}
          onChange={handleChange}
        /><br /><br />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        /><br /><br />

        <button type="submit">Submit Blog</button>
      </form>

      <h2>All Blogs</h2>

      {/* ✅ Display blogs */}
      {blogs.map((b) => (
        <div
          key={b._id}
          style={{
            border: "1px solid black",
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "5px",
          }}
        >
          <h3>{b.title}</h3>
          <p>{b.content}</p>
          <p><strong>Author:</strong> {b.author}</p>

          {b.image && (
            <img src={b.image} alt="Blog" width="200px" />
          )}

          <p><small>{new Date(b.createdAt).toLocaleString()}</small></p>
        </div>
      ))}
    </div>
  );
}
export default Blogs;

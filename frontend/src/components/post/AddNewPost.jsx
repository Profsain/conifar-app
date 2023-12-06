import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../Blog.css";

const AddNewPost = () => {
  const [formData, setFormData] = useState({
    title: "",
    imgUrl: "",
    tags: "",
    content: "",
  });

  // handle form input change
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

    // handle form submit
    const handleFormSubmit = async(e) => { 
        e.preventDefault();
       
        // send form data to backend
        await fetch("http://localhost:8000/api/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        // clear input
        setFormData({
            title: "",
            imgUrl: "",
            tags: "",
            content: "",
        });
    };

  return (
    <div className="container box">
      <h1>Add New Blog Post</h1>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            onChange={(e) => handleInputChange(e)}
            value={formData.title}
            type="text"
            placeholder="Enter blog title"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="imgUrl">
          <Form.Label>Image Url</Form.Label>
          <Form.Control
            onChange={(e) => handleInputChange(e)}
            value={formData.imgUrl}
            type="text"
            placeholder="Enter url"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="tags">
          <Form.Label>Tags</Form.Label>
          <Form.Control
            onChange={(e) => handleInputChange(e)}
            value={formData.tags}
            type="text"
            placeholder="Enter tags separated by comma"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="content">
          <Form.Label>Blog Content</Form.Label>
          <Form.Control
            onChange={(e) => handleInputChange(e)}
            value={formData.content}
            as="textarea"
            rows={16}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddNewPost;

import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function InputForm() {
  const [formData, setFormData] = useState({
    age: "",
    nationality: "",
    gender: "",
    name: ""
  });

  useEffect(() => {
    // Fetch data from the API

    if (formData.name === "") {
      setFormData({
        age: "",
        nationality: "",
        gender: "",
        name: ""
      });
    }
    formData.name &&
      axios.get("https://dummyjson.com/users").then((response) => {
        const userData = response.data.users[0];
        setFormData({
          age: userData.age,
          nationality: userData.address.city,
          gender: userData.gender
        });
      });
  }, [formData.name]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation for the name field
    if (formData.name === "") {
      alert("Name cannot be empty.");
    } else {
      alert("Information Saved Successfully");
      setFormData({
        age: "",
        nationality: "",
        gender: "",
        name: ""
      });
    }
  };

  return (
    <div className="form-container">
      <h1>User Information Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name*:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input type="text" name="age" value={formData.age} />
        </div>

        <div className="form-group">
          <label>Nationality:</label>
          <input type="text" name="nationality" value={formData.nationality} />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <input type="text" name="gender" value={formData.gender} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

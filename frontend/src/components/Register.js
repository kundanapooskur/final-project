import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [department, setDepartment] = useState("");
  const [classInfo, setClassInfo] = useState(""); // For students
  const [registerNumber, setRegisterNumber] = useState(""); // For students
  const [clubName, setClubName] = useState(""); // For coordinators
  const [phoneNumber, setPhoneNumber] = useState(""); // For coordinators
  const [success, setSuccess] = useState(false); // To manage success popup
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name,
        email,
        password,
        role,
        department,
        phoneNumber,
      };

      if (role === "student") {
        data.class = classInfo;
        data.registerNumber = registerNumber;
      } else if (role === "coordinator") {
        data.clubName = clubName;
      }

      console.log("Submitting data:", data); // Debug log
      const response = await axios.post(
        "http://localhost:8000/api/users/register",
        data
      );
      console.log("Response from server:", response.data);
      setSuccess(true); // Show success popup
      setError(""); // Clear any previous error
      setTimeout(() => {
        setSuccess(false);
        window.location.href = "/login"; // Redirect to login page
      }, 3000);
    } catch (err) {
      setSuccess(false);
      setError(
        err.response.data.error || "Something went wrong. Please try again."
      );
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  const closeSuccessPopup = () => {
    setSuccess(false); // Hide success popup
    window.location.href = "/login"; // Redirect to login page
  };

  const closeErrorPopup = () => {
    setError(""); // Hide error popup
  };

  const navigateToLogin = () => {
    window.location.href = "/login";
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="coordinator">Coordinator</option>
        </select>
        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />
        {role === "student" && (
          <>
            <input
              type="text"
              placeholder="Class"
              value={classInfo}
              onChange={(e) => setClassInfo(e.target.value)}
            />
            <input
              type="text"
              placeholder="Register Number"
              value={registerNumber}
              onChange={(e) => setRegisterNumber(e.target.value)}
            />
          </>
        )}
        {role === "coordinator" && (
          <>
            <input
              type="text"
              placeholder="Club Name"
              value={clubName}
              onChange={(e) => setClubName(e.target.value)}
            />
          </>
        )}
        <button type="submit">Register</button>
        {/* Add the Login button */}
        <button
          type="button"
          className="login-button"
          onClick={navigateToLogin}
        >
          Login
        </button>
      </form>

      {/* Success Popup */}
      {success && (
        <div className="popup">
          <div className="popup-content">
            <h3>Registration Successful!</h3>
            <p>You have been successfully registered. You can now log in.</p>
            <button onClick={closeSuccessPopup}>OK</button>
          </div>
        </div>
      )}

      {/* Error Popup */}
      {error && (
        <div className="popup">
          <div className="popup-content">
            <h3>Registration Failed</h3>
            <p>{error}</p>
            <button onClick={closeErrorPopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;

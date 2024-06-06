import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interests: {
      coding: false,
      design: false,
      gaming: false,
      cooking: false,
    },
    submitted: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      setFormData({
        ...formData,
        interests: {
          ...formData.interests,
          [name]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you could send the form data to your backend or perform any other action

    // Display a personalized message
    const interestsList = Object.keys(formData.interests).filter((key) => formData.interests[key]);
    const message = `Thank you, ${formData.name}, for signing up for our newsletter! Your email address (${formData.email}) has been added to our mailing list. Your interests include: ${interestsList.join(', ')}.`;
    //console.log(message);

    // Reset form data
    setFormData({
      name: '',
      email: '',
      interests: {
        coding: false,
        design: false,
        gaming: false,
        cooking: false,
      },
      submitted: true,
    });
    return message;
  };

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <h2>Newsletter Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Interests:</label>
          <div>
            <label htmlFor="coding">
              <input
                type="checkbox"
                id="coding"
                name="coding"
                checked={formData.interests.coding}
                onChange={handleChange}
              />
              Coding
            </label>
          </div>
          <div>
            <label htmlFor="design">
              <input
                type="checkbox"
                id="design"
                name="design"
                checked={formData.interests.design}
                onChange={handleChange}
              />
              Design
            </label>
          </div>
          <div>
            <label htmlFor="gaming">
              <input
                type="checkbox"
                id="gaming"
                name="gaming"
                checked={formData.interests.gaming}
                onChange={handleChange}
              />
              Gaming
            </label>
          </div>
          <div>
            <label htmlFor="cooking">
              <input
                type="checkbox"
                id="cooking"
                name="cooking"
                checked={formData.interests.cooking}
                onChange={handleChange}
              />
              Cooking
            </label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>

      {formData.submitted && (
        <p>Thank you for signing up! Your interests have been recorded.</p>
      )}

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
    </main>
  );
}

export default App;

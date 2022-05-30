import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  });
  // const [lastName, setLastName] = useState("Henry");

  // function handleFirstNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     firstName: event.target.value,
  //   });
  // }

  // function handleLastNameChange(event) {
  //   setLastName(setFormData({
  //     ...formData,
  //     lastName: event.target.value,
  //   }));
  // }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }


  function handleChange(event) {
    // name is the KEY in of the formData object we're trying to update
    const name = event.target.name;
    let value = event.target.value;
  // use `checked` property of checkboxes instead of `value`
  if (event.target.type === "checkbox") {
    value = event.target.checked;
  }
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" type="text" onChange={handleChange} value={formData.firstName} />
      <input name="lastName" type="text" onChange={handleChange} value={formData.lastName} />
      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

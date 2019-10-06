import React from "react";

const Input = ({ name, placeholder, onChange, error }) => {
  return (
    <div className="form-group">
      <input
        name={name}
        type="text"
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;

import { useState } from "react";
import styles from "./LoginForm.module.css";
import Button from "react-bootstrap/Button";

//import styles1 from "../styles.css";

const User = (props) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const onUpdateField = (e) => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(nextFormState);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2));
  };

  return (
    <div className="User">
      <form className={styles.form} onSubmit={onSubmitForm}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Email</label>
          <input
            className={styles.formField}
            type="text"
            aria-label="Email field"
            name="email"
            value={form.email}
            onChange={onUpdateField}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Password</label>
          <input
            className={styles.formField}
            type="password"
            aria-label="Password field"
            name="password"
            value={form.password}
            onChange={onUpdateField}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Confirm Password</label>
          <input
            className={styles.formField}
            type="password"
            aria-label="Confirm password field"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={onUpdateField}
          />
        </div>
        <div>
          <Button type="submit">Register</Button>
        </div>
      </form>
    </div>
  );
};

export default User;

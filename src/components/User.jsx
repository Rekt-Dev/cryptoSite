import { useState } from "react";
import styles from "./LoginForm.module.css";

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
      <div className={styles.formActions}>
        <button className={styles.formSubmitBtn} type="submit">
          Login
        </button>
      </div>
    </form>
  );
};

export default User;

/* import { useState } from "react";
import "../styles.css";

export const User = () => {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const getValues = (event) => {
    console.log(event.target.value, event.target.name);
  };
  return (
    <div className="User">
      User Component
      <div>
        <div>
          <input
            onChange={getValues}
            name="user"
            type="text"
            placeHolder="User name"
            className="inputForm"
          ></input>

          <input
            onChange={getValues}
            name="password"
            type="password"
            placeHolder="Password"
            className="inputForm"
          ></input>
          <br />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};
 */

import { useState } from "react";
import { useRegister } from "../../services/mutations";
import styles from "./RegistrationForm.module.css";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/router";
const RegistrationForm = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const { mutate } = useRegister();
  const router = useRouter();
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const { username, password } = form;
    mutate(
      { username, password },
      {
        onSuccess: (data) => {
          toast.success("ثبت نام موفقیت امیز");
          router.push("/login");
        },
        onError: (error) => console.log(error.response.data.message),
      }
    );
  };
  return (
    <form onSubmit={formSubmitHandler} className={styles.form}>
      <div className={styles.logoPart}>
        <img src="union.svg" alt="logo" />
        <span>فرم ثبت نام</span>
      </div>
      <input
        type="text"
        name="username"
        value={form.username}
        onChange={changeHandler}
        placeholder="نام کاربری"
      />
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={changeHandler}
        placeholder="رمز عبور"
      />
      <input
        type="password"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={changeHandler}
        placeholder="تکرار رمز عبور"
      />
      <button type="submit" className={styles.authBtn}>
        ثبت نام
      </button>
      <Link href="/login">
        <span className={styles.accountLink}>حساب کاربری دارید؟</span>
      </Link>
    </form>
  );
};

export default RegistrationForm;

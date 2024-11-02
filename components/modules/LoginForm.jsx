import styles from "./LoginForm.module.css";
import { useState } from "react";
import { useLogin } from "../../services/mutations";
import { setCookie } from "../../utils/cookie";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import Link from "next/link";
const LoginForm = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const { mutate } = useLogin();
  const router = useRouter();
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const { username, password } = form;

    if (!username || !password)
      return alert("User Name and Password is Necessary");

    mutate(form, {
      onSuccess: (data) => {
        console.log(data);
        setCookie("token", data?.token);
        toast.success("ورود موفقیت امیز");
        router.push("/")
      },
      onError: (error) => console.log(error.response.data.message),
    });
  };
  return (
    <form onSubmit={formSubmitHandler} className={styles.form}>
      <div className={styles.logoPart}>
        <img src="union.svg" alt="logo" />
        <span>فرم ورود</span>
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
      <button type="submit" className={styles.authBtn}>
        ورود
      </button>
      <Link href="/register">
        <span className={styles.accountLink}>ایجاد حساب کاربری؟</span>
      </Link>
    </form>
  );
};

export default LoginForm;

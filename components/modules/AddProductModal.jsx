import { useAddProduct } from "../../services/mutations";
import styles from "./AddProductModal.module.css";
import { useEffect, useState } from "react";
import { useEditProducts } from "../../services/mutations";
import { useProductsById } from "../../services/queries";
const AddProductModal = ({ isOpen, onClose, productId }) => {
  const [form, setForm] = useState({
    name: "",
    price: 0,
    quantity: 0,
  });
  const { mutate: addProductMutate } = useAddProduct();
  const { mutate: editProductMutate } = useEditProducts();
  const { data: productData } = useProductsById(productId);
  // Update form values with fetched product data if available
  useEffect(() => {
    if (productData && productId) {
      setForm({
        name: productData.name || "",
        price: productData.price || "",
        quantity: productData.quantity || "",
      });
    }
  }, [productData, productId]);

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const mutationData = productId ? { id: productId, ...form } : form;
    const mutationFn = productId ? editProductMutate : addProductMutate;
    mutationFn(mutationData, {
      onSuccess: (data) => {
        setForm({
          name: "",
          price: 0,
          quantity: 0,
        });
        onClose();
      },
      onError: (error) => console.log(error.response.data.message),
    });
  };
  if (!isOpen) return null;
  return (
    <div className={styles.container}>
      <div className={styles.main} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalContent}>
          <h3>{productId ? "ویرایش اطلاعات" : "ایجاد محصول جدید"}</h3>
          <form onSubmit={formSubmitHandler} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">نام کالا</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={changeHandler}
                value={form.name}
                placeholder="نام کالا"
              />
            </div>
            <div className={styles.formGroup}>
              <label>تعداد موجودی</label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={changeHandler}
                placeholder="تعداد موجودی"
              />
            </div>
            <div className={styles.formGroup}>
              <label>قیمت</label>
              <input
                type="number"
                name="quantity"
                value={form.quantity}
                onChange={changeHandler}
                placeholder="قیمت"
              />
            </div>

            <div className={styles.actions}>
              <button
                type="submit"
                className={`${styles.confirmBtn} ${styles.btn}`}
              >
                {productId ? "ثبت اطلاعات جدید" : "ایجاد"}
              </button>
              <button
                className={`${styles.cancel} ${styles.btn}`}
                onClick={(event) => {
                  event.preventDefault();
                  onClose();
                }}
              >
                انصراف
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;

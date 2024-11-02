import toast from "react-hot-toast";
import styles from "./DeleteModal.module.css";
import { useDeleteProducts } from "../../services/mutations";
const DeleteModal = ({ isOpen, onClose, productId }) => {
  const { mutate } = useDeleteProducts();
  if (!isOpen) return null;
  const confirmDeleteHandler = () => {
    mutate(productId, {
      onSuccess: (data) => {
        toast.error("ایتم مورد نظر حذف شد");
        onClose();
      },
      onError: (error) => console.log("error in onError", error),
    });
  };

  return (
    <div className={styles.container} onClick={onClose}>
      <div className={styles.main} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalContent}>
          <img src="close.svg" alt="close icon" />
          <h3>آیا از حذف این محصول مطمئنید؟</h3>
          <div className={styles.actions}>
            <button
              className={`${styles.confirmBtn} ${styles.btn}`}
              onClick={confirmDeleteHandler}
            >
              حذف
            </button>
            <button
              className={`${styles.cancel} ${styles.btn}`}
              onClick={(event) => {
                event.preventDefault();
                onClose();
              }}
            >
              لغو
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;

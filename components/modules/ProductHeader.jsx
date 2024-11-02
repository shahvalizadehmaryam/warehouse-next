import { useState } from "react";
import styles from "./ProductHeader.module.css";
import AddProductModal from "./AddProductModal";
// this part contains header part of table
const ProductHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Close modal without deleting
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <>
      <div className={styles.header}>
        <div className={styles.manageProduct}>
          <img src="setting.svg" alt="manageProductIcon" />
          <span>مدیریت کالا</span>
        </div>
        <button
          className={styles.addProductBtn}
          onClick={() => setIsModalOpen(true)}
        >
          افزودن محصول
        </button>
      </div>
      <AddProductModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default ProductHeader;

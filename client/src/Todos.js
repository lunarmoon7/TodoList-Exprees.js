import styles from "./Todos.module.css";
import Modal from "./Modal";
import axios from "axios";
import { useState } from "react";

const Todos = ({ modalOpen, setModalOpen, index, title, author, content }) => {
  const [isUpdate, setIsUpdate] = useState(false);
    const updateHanlder = () => {
      console.log(index);
      setIsUpdate(true);
      setModalOpen(true);
      console.log(index, title, author, content);
    }
    const delHandler = () => {
      axios.post("http://localhost:3002/api/delete", {
        id: index
      })
      .then(() => {
        // alert("Success!");
      })
      .catch((err) => {
        alert(err);
      });
    }
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>{title}</h2>
          <h5 className={styles.author}>{author}</h5>
        </div>
        <div className={styles.content}>{content}</div>
        <div className={styles.btn_wrapper}>
          <button className={styles.upd_btn} onClick={updateHanlder}>UPD</button>
          <button className={styles.del_btn} onClick={delHandler}>DEL</button>
        </div>
      </div>
      {/* {modalOpen && !isUpdate &&
        <Modal
          // index={index}
          title={title}
          author={author}
          content={content}
          setModalOpen={setModalOpen}
          // isUpdate={isUpdate}
          // setIsUpdate={setIsUpdate}
        />
      } */}
      {isUpdate && modalOpen &&
        <Modal 
          index={index}
          title={title}
          author={author}
          content={content}
          setModalOpen={setModalOpen}
          isUpdate={isUpdate}
          setIsUpdate={setIsUpdate}
        />
      }
    </div>
  );
};

export default Todos;

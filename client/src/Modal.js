import styles from "./Modal.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Modal = ({
  index,
  title,
  author,
  content,
  setModalOpen,
  isUpdate,
  setIsUpdate,
}) => {
  const [info, setInfo] = useState({
    title: isUpdate ? title : "",
    author: isUpdate ? author : "",
    content: isUpdate ? content : "",
  });

  const closeModal = () => {
    setModalOpen(false);
    if (isUpdate) setIsUpdate(false);
  };

  const updateReview = () => {
    console.log("updating...");
    console.log(index);
    axios
      .post("http://localhost:3002/api/update", {
        id: index,
        title: info.title,
        author: info.author,
        content: info.content,
      })
      .then(() => {
        alert("UPDATE Success");
      })
      .catch((err) => {
        alert(err);
      });
    setIsUpdate(false);
    setModalOpen(false);
  };
  const submitReview = () => {
    console.log("inserting");
    axios
      .post("http://localhost:3002/api/insert", {
        id: info.id,
        title: info.title,
        author: info.author,
        content: info.content,
      })
      .then(() => {
        // alert("Success!");
      })
      .catch((err) => {
        alert(err);
      });
    setModalOpen(false);
  };

  const getValue = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
    console.log(info);
  };

  // 저장 버튼 핸들러 필요 => router.post() or app.post()
  return (
    <div className={styles.container}>
      <input
        className={styles.title}
        placeholder="title..."
        name="title"
        onChange={getValue}
        defaultValue={title}
      ></input>
      <input
        className={styles.author}
        placeholder="author..."
        name="author"
        onChange={getValue}
        defaultValue={author}
      ></input>
      <input
        className={styles.content}
        placeholder="content..."
        name="content"
        onChange={getValue}
        defaultValue={content}
      ></input>
      <div className={styles.btn}>
        <button
          className={styles.save_btn}
          onClick={isUpdate ? updateReview : submitReview}
        >
          저장
        </button>
        <button className={styles.close_btn} onClick={closeModal}>
          취소
        </button>
      </div>
    </div>
  );
};

export default Modal;

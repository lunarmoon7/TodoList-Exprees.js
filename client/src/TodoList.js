import styles from "./TodoList.module.css";
import Todos from "./Todos";
import { useState, useEffect } from "react";
import Modal from "./Modal";
import axios from 'axios';

const TodoList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  // const [isUpdate, setIsUpdate] = useState(false);
  const showMoadl = () => {
    setModalOpen(true);
  };
  const [viewContent, setViewContent] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/api/get").then((response) => {
        console.log(response);
        setViewContent(response.data);
    });
  }, [viewContent]);

  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <h2 className={styles.title}>ToDo List</h2>
        <button className={styles.add_btn} onClick={showMoadl}>
          Add
        </button>
        {modalOpen && (
          <Modal
            setModalOpen={setModalOpen}
          />
        )}
      </div>
      <div className={styles.list}>
        {viewContent.map((e) => (
          <Todos 
          // isUpdate={isUpdate}
          // setIsUpdate={setIsUpdate}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          key={e.id}
          index={e.id}
          title={e.title} 
          author={e.author}
          content={e.content}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;

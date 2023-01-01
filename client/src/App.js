import styles from "./App.module.css";
import TodoList from "./TodoList";

function App() {
  // const callAPI = async () => {
  //   axios.get('/api').then((res) => console.log(res));
  // };

  // useEffect(() => {
  //   callAPI();
  // }, []);

  return (
  <div className={styles.container}>
    <TodoList />
  </div>
  );
}

export default App;

import Form from "./components/Form";
import styles from "./page.module.css";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className="App">
        <div>
          <h1>Lista de Compras</h1>
          <Form></Form>
        </div>
      </div>
    </main>
  );
}

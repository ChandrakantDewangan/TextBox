import { useContext } from "react";
import { GlobalContextWrapper, GlobalContext } from "./Context/GlobalContext";
import styles from "./App.module.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import ChatArea from "./Components/ChatArea/ChatArea";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  // storeData was unsused
  const { } = useContext(GlobalContext);

  return (
    <div className={styles.appContainer}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Header />
        <ChatArea />
      </div>
      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
};

function App() {
  return (
    <GlobalContextWrapper>
      <Layout />
    </GlobalContextWrapper>
  );
}

export default App;

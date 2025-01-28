import { Header } from './components/Header';
import {Post} from './Post';
import './styles.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />
    <div className={styles.wrapper}>
      <Sidebar />
         <main>
         <Post author="Ytallo" content="aaaaaaa"/>
         <Post author="Ytallo" content="bbbbbbb"/>
         <Post author="Ytallo" content="ccccccc"/>
         </main>
    </div>
    </div>
 
  )
}



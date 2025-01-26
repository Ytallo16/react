import { Header } from './components/Header';
import {Post} from './Post';
import './styles.css';

export function App() {
  return (
    <div>
      <Header />
    <Post author="Ytallo" content="aaaaaaa"/>
    <Post author="Ytallo" content="bbbbbbb"/>
    <Post author="Ytallo" content="ccccccc"/>
    </div>
 
  )
}



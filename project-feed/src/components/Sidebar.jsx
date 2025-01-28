import styles from './Sidebar.module.css';

export function Sidebar (){
return(
    <aside className={styles.sidebar}>
        <img className={styles.cover} src="https://images.unsplash.com/photo-1525340581945-d5e2b09641c4?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    <div className={styles.profile}>
        <strong>Ytallo Gomes</strong>
        <span>Web developer</span>
    </div>
    <footer> <a href="#">
        Editar seu perfil</a></footer>
    </aside>

)
}
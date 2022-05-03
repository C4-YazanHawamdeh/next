
// import styles from '../styles/Home.module.css'
import styles from '../../../../styles/Home.module.css'
function  Layout({ children }) {

return (

    <div>
        <div className='navbar'>
            <ul>
                <li className="it">home</li>
                <li className="it">about </li>
                <li className="it">contact</li>
            </ul>
        </div>
    {children}

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
          </span>
        </a>
      </footer>
    </div>
)


} 

export  default  Layout;
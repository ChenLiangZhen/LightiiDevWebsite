import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

export default function Home() {
  return (

     <div className={styles.pageContent}>

        <div className={styles.textWrapper}>

          <div className={styles.comingSoonText}>
            Under Construction...
          </div>
        </div>


     </div>

  )
}

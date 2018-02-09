import React from 'react'
import styles from './styles.module.css'

export default function IndexPage () {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Welcome to webpack4!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>
          To get started, edit <code>src/index.js</code> and save to reload
        </li>
        <li>
          <a href='https://medium.com/webpack/webpack-4-beta-try-it-today-6b1d27d7d7e2'>Getting Started</a>
        </li>
      </ul>
    </div>
  )
}

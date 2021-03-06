import React from 'react'

import ExampleComp from '../../components/Example'

import styles from './styles.module.css'

export default class extends React.Component {
  componentDidMount () {
    // you can set a debug breakpoint here
    const a = 1 + 2
    console.log(a)
  }

  render () {
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Welcome to webpack Taste!</h1>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>
            To get started, edit <code>src/index.js</code> and save to reload
          </li>
          <li>
            <a href='https://medium.com/webpack/webpack-4-beta-try-it-today-6b1d27d7d7e2'>Getting Started</a>
          </li>
        </ul>
        <ExampleComp />
      </div>
    )
  }
}

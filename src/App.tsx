import React from 'react'
import MyScreen from './MyScreen'
import styles from './style.css'
import Facebook from './Icons/Facebook'
import Youtube from './Icons/Youtube'
import MyImage from './images/image.jpg'

const App = () => {
  return (
    <>
      <h1>Hello World</h1>
      <br></br>
      <MyScreen index={987} />
      <span className={styles.title}>Hello World</span>
      <Facebook width={100} height={100} />
      <Youtube width={100} height={100} />
      <br></br>
      <img src={MyImage} alt="MyImage" />
    </>
  )
}

export default App

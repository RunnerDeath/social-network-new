import React from 'react'
import styles from './loader.module.css'
import loader from "../../assets/img/Spinner-1s-200px.gif"

let Loader = (props) => {
    debugger;
    return  < img className={styles.loaderImg} src = {loader}/>
}

export default Loader
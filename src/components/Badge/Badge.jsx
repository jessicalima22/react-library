import React from "react"
import styles from './badge.module.css';

export default function Badge({ color, variant, children}){
    return(
        <>
            <span className={`${styles.badge} ${styles[color]} ${styles[variant]} `} >
                <p>{children}</p>
            </span>
        </>
    )
}
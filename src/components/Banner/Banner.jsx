import React from "react"
import styles from "./banner.module.css"

export default function Banner ({ status, title, text, maxWidth}){

    let defaultTitle = false
    let wrongStatus
    let isEmptyStringTitle
    let isEmptyStringText

    switch(status) {
        case "success":
            defaultTitle = "Congratulations!";
            break;
        case "warning":
            defaultTitle = "Attention";
            break;
        case "error":
            defaultTitle = "There is a problem with your application";
            break;
        case "neutral":
            defaultTitle = "Update available";
            break;
        default:
            wrongStatus = "please provide a default status"
            status = ""
    }

    if (title){
        isEmptyStringTitle = title.trim() === "" ? true : false
    }

    if (text){
        isEmptyStringText = text.trim() === "" ? true : false
    }

    console.log(maxWidth)

    return (
        <>
            <div className={`${styles.banner} ${styles[status]}`} style={{maxWidth: `${maxWidth}`}}>
                <div className={`${styles.title}`}>
                    {status && <img src={`${status}.png`} alt={`${status} icon`}/>}
                    {wrongStatus ? <p> {wrongStatus}</p> : <p>{title && !isEmptyStringTitle ? title : defaultTitle}</p>}
                </div>
                {text && !isEmptyStringText && <p>{text}</p>}
            </div>
        </>
    )
}
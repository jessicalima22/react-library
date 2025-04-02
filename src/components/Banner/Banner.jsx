import React from "react"
import styles from "./banner.module.css"

export default function Banner ({ children, status }){

    let title
    let content = []
    let defaultMessage = false

    children === undefined ? defaultMessage = true : content = children

    if (defaultMessage === true || content === ![] && content[0].props.children === undefined) {
        switch(status){
            case "success":
                title = "Congratulations!";
                break;
            case "warning":
                title = "Attention";
                break;
            case "error":
                title = "There is a problem with your application";
                break;
            case "neutral":
                title = "Update available";
                break;
            default:
                return (
                    console.log("aqui")
                )
        }
    } else {
        title = content[0]
    }




    if (React.isValidElement(content)){
        title = content.props.children
    } 

    if (typeof content === "string"){
        title = content
    }
    

    return (
        <>
            <div className={`${styles.banner} ${styles[status]}`}>
                <div className={`${styles.title}`}>
                    <img src={`${status}.png`} alt={`${status} icon`}/>
                    <p>{title}</p>
                </div>
                {typeof content === "object" && content[1] && <p>{content[1]}</p>}
            </div>
        </>
    )
}
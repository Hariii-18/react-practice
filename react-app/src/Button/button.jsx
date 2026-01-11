import styles from './btn.module.css'
function Button() {
    const HandleClick= () => console.log("Doneee!!");
    const HandleClick2=(name) => console.log(`${name},Submitted`)
    return (
        // Click Events
        <button className={styles.button} onClick={() =>HandleClick2("Harii")}>
            Click me
        </button>
    );
}

// function Button(){
//     function event(){
//         alert("Submitted successfully !")
//     }
//     return(
//         <button onClick={event} >Click Me</button>
//     );
// }

export default Button;
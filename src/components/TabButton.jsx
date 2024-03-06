export default function TabButton({ children }) {
    function handleClick(){
        console.log(`I have been clicked 👌`)
    }
    return (
        <li>
            <button onClick={handleClick}>
                {children}
            </button>
        </li>
    )
}
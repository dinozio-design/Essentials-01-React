export default function Section({title, children, ...props}){
    return(
        // here we are using forwarded or proxy props to take all other attributes from the calling element
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}
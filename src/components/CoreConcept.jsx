import "./CoreConcept.css";
/** this code works but it is not so clean 
function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>`
    </li>
  );
}
here is a cleaner version of the code using object destructuring */
export default function CoreConcept({image, title, description}) {
    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }
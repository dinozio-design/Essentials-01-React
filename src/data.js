import componentImage from "./assets/components.png";
import propsImage from "./assets/config.png";
import jsxImage from "./assets/jsx-ui.png";
import stateImage from "./assets/state-mgmt.png";

// this is a named export so when you import it you must use import {CORE_CONCEPTS}
export const CORE_CONCEPTS = [
    {
        image: componentImage,
        title: "Components",
        description: "The core UI building block - compose the user interface by combining multiple components." 
    },
    {
        image: propsImage,
        title: "Props",
        description: "Make components configurable (and therefore reusable) by passing input data to them." 
    },
    {
        image: jsxImage,
        title: "JSX",
        description: "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered." 
    },
    {
        image: stateImage,
        title: "State Management",
        description: "React-managed data which, when changed, causes the component to re-render & the UI to update." 
    },
];
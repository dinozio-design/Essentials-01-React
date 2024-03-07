import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";


export default function Examples() {
    const [tabContent, setTabContent] = useState();

    function handleClick(selectedButton) {
        console.log(`${selectedButton} has been clicked 👌`);
        setTabContent(selectedButton);
    }

    return (
        <Section id="examples" title="Examples">
            <menu>
                <TabButton
                    isSelected={tabContent === "components"}
                    onClick={() => handleClick("components")}
                >
                    Component
                </TabButton>
                <TabButton
                    isSelected={tabContent === "jsx"}
                    onClick={() => handleClick("jsx")}
                >
                    JSX
                </TabButton>
                <TabButton
                    isSelected={tabContent === "props"}
                    onClick={() => handleClick("props")}
                >
                    Props
                </TabButton>
                <TabButton
                    isSelected={tabContent === "state"}
                    onClick={() => handleClick("state")}
                >
                    State
                </TabButton>
            </menu>
            {/* {tabContent} */}
            <div id="tab-content">
                {!tabContent ? <p>Please select a topic!</p> : (<> <h3>{EXAMPLES[tabContent].title}</h3>
                    <p>{EXAMPLES[tabContent].description}</p>
                    <pre>
                        <code>{EXAMPLES[tabContent].code}</code>
                    </pre></>)}
            </div>
        </Section>
    );
}
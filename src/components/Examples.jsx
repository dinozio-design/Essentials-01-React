import TabButton from "./TabButton";
import { useState } from "react";
export default function Examples(){
    const [tabContent, setTabContent] = useState();
    function handleClick(selectedButton) {
      console.log(`${selectedButton} has been clicked 👌`);
      setTabContent(selectedButton);
    }
  
    return(
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={tabContent === "components"}
              onSelect={() => handleClick("components")}
            >
              Component
            </TabButton>
            <TabButton
              isSelected={tabContent === "jsx"}
              onSelect={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={tabContent === "props"}
              onSelect={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={tabContent === "state"}
              onSelect={() => handleClick("state")}
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
        </section>
    );
}
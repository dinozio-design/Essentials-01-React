import { Component, useState } from "react";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  const [tabContent, setTabContent] = useState();
  function handleClick(selectedButton) {
    console.log(`${selectedButton} has been clicked 👌`);
    setTabContent(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts </h2>
          <ul>
           {/* Cleaning it up and making it more dynamic with the help of map() function
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            {/* here is a better and cleaner way of using the props, ONLY if the key value pairs used in the props are exactly the same and the key value pairs in the data object */}
            {/*}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
             */}
             {CORE_CONCEPTS.map((conceptItem)=>(
             <CoreConcept key={conceptItem.title} {...conceptItem} />
             ))}
          </ul>
        </section>
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
      </main>
    </div>
  );
}

export default App;

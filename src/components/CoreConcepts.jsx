import CoreConcept from "./CoreConcept.jsx";
import Section from "./Section.jsx";
import { CORE_CONCEPTS } from "../data";

export default function CoreCocepts(){
    return(
        <Section title={"Core Concepts"} id={"core-concepts"} >
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
      </Section>
    );
}
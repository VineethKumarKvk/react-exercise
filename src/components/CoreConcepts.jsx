import CoreConcept from "./CoreConcept";
import {CORE_CONCEPTS} from '../data.js'
export default function CoreConcepts() {
    return(
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map(coreConcept => <CoreConcept key={coreConcept.title} {...coreConcept}/>)}
            {/* <CoreConcept 
              title="Components"
              description="The core UI building block - compose the user interface by combining multiple components."
              image={componentsImg} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/> */}
          </ul>
            <h2>Time to get started!</h2>
            <h2>This page is created just to publish in Github as git Pages</h2>
        </section>
    );
}
import componentsImg from './assets/components.png';

import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcepts.jsx';
import {CORE_CONCEPTS} from './data.js'

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            <CoreConcept 
              title="Components"
              description="The core UI building block - compose the user interface by combining multiple components."
              image={componentsImg} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <h2>Time to get started!</h2>
        <h2>This page is created just to publish in Github as git Pages</h2>
      </main>
    </div>
  );
}

export default App;

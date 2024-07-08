import componentsImg from './assets/components.png';

import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx';
import {CORE_CONCEPTS} from './data.js'
import {EXAMPLES} from './data.js'
import TabButton from './components/TabButton.jsx';
import {useState} from 'react';


function App() {
  const [tabContent,setTabContent] = useState();
  
  function clickHandler(buttonName) {
    setTabContent(buttonName)
  }
  let tabInformation = <p>Please select the Tab!</p>
  if(tabContent) {
    tabInformation = <div>
    <h3>{EXAMPLES[tabContent].title}</h3>
    <p>{EXAMPLES[tabContent].description}</p>
    <pre>
    <code>{EXAMPLES[tabContent].code}</code>
    </pre>
    </div>
  }
  return (
    <div>
      <Header />
      <main>
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
        </section>
        <h2>Time to get started!</h2>
        <h2>This page is created just to publish in Github as git Pages</h2>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected = {tabContent === 'components'} onSelect={() => clickHandler('components')}>Components</TabButton>
            <TabButton isSelected = {tabContent === 'jsx'} onSelect={() => clickHandler('jsx')}>JSX</TabButton>
            <TabButton isSelected = {tabContent === 'props'} onSelect={() => clickHandler('props')}>Props</TabButton>
            <TabButton isSelected = {tabContent === 'state'} onSelect={() => clickHandler('state')}>State</TabButton>
          </menu>
        </section>
        <div id="tab-content">
          {tabInformation}
        </div>
        
      </main>
    </div>
  );
}

export default App;

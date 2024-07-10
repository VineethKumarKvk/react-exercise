import { useState } from "react";
import {EXAMPLES} from '../data.js'
import TabButton from "./TabButton"; 

export default function Examples() {
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
    <>
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
      </>);
}
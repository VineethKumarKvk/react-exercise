import { useState } from "react";
import {EXAMPLES} from '../data.js'
import TabButton from "./TabButton"; 
import Section from "./Section.jsx";
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
    <Section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton isSelected = {tabContent === 'components'} onClick={() => clickHandler('components')}>Components</TabButton>
          <TabButton isSelected = {tabContent === 'jsx'} onClick={() => clickHandler('jsx')}>JSX</TabButton>
          <TabButton isSelected = {tabContent === 'props'} onClick={() => clickHandler('props')}>Props</TabButton>
          <TabButton isSelected = {tabContent === 'state'} onClick={() => clickHandler('state')}>State</TabButton>
        </menu>
      </Section>
      <div id="tab-content">
        {tabInformation}
      </div>
      </>);
}
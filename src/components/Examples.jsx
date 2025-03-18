import TabButton from './TabButton'
import { useState } from 'react'
import { EXAMPLES } from '../data'
import Section from './Section'

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState('')

  function handleTabSelect(selectedButton) {
    setSelectedTopic(selectedButton)
    console.log(selectedTopic)
  }

  let tabContent = <p>Please select a topic.</p>
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    )
  }
  return (
    <Section title="Examples" id="examples">
      <menu>
        <TabButton
          isSelected={selectedTopic === 'components'}
          onClick={() => handleTabSelect('components')}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'jsx'}
          onClick={() => handleTabSelect('jsx')}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'props'}
          onClick={() => handleTabSelect('props')}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'state'}
          onClick={() => handleTabSelect('state')}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </Section>
  )
}

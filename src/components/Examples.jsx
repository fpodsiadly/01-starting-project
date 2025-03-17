import TabButton from './TabButton'
import { useState } from 'react'
import { EXAMPLES } from '../data'

export default function Examples(props) {
  const [selectedTopic, setSelectedTopic] = useState('')

  function handleTabSelect(selectedButton) {
    setSelectedTopic(selectedButton)
    console.log(selectedTopic)

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
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={props.selectedTopic === 'components'}
          onSelect={() => handleTabSelect('components')}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={props.selectedTopic === 'jsx'}
          onSelect={() => handleTabSelect('jsx')}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={props.selectedTopic === 'props'}
          onSelect={() => handleTabSelect('props')}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={props.selectedTopic === 'state'}
          onSelect={() => handleTabSelect('state')}
        >
          State
        </TabButton>
      </menu>
      {props.tabContent}
    </section>
  )
}

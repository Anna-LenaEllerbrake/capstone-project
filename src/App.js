import React from 'react'
import StartScreen from './Pages/StartScreen'
import ContentScreen from './Pages/ContentScreen'

function App() {
  return (
    <>
      <StartScreen />
      <ContentScreen
        chapter={{
          tocHasContainerId: 'F0JRVQHXJ7RAIGDDTU',
          containerId: 'DMUKRIZE9ROLYMUDFM',
          url: 'deutsch/lektueren/agnes/kontext_einordnung',
          topic: 'Kontext und Einordnung',
          shortenedTopic: 'Kontext und Einordnun...',
          tocId: '2S9MW41TOE90B01YCE',
          position: 1,
          itemLevel: 1,
          isLastElement: true,
          subject: {
            name: 'Deutsch',
            number: 2,
            color1: '#2D6EC8',
            color2: '#82A9DE',
            color3: '#B1C9EA',
            color4: '#E1EAF7',
            created_at: '2014-11-29T20:09:18.000+0000',
            updated_at: null,
            deleted_at: null,
            id: 'frastefemeprat7jem',
          },
          subjectFromUri: 'Deutsch',
          children: null,
        }}
      />
    </>
  )
}

export default App

/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx } from 'theme-ui';
import React from 'react'
import { Event } from './Event'
import { MultipleEvent } from './MutipleEvent'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
function App() {
  return (
    <Flex>
      <Flex sx={{
        flexFlow: 'column'
      }}>
        <h1 sx={{ color: 'redo' }}>56px - h1 font family "Roboto"</h1>
        <h2>32px - h2 font family "Roboto"</h2>
        <h3>22px - h3 font family "Roboto"</h3>
        <p>14 px - p font family "Roboto"</p>
      </Flex>
      <Masonry
        columsCount={3}
        gutter='21px'
      >
        <MultipleEvent />
        <Event />
        <MultipleEvent />
        <Event />
        <MultipleEvent />
        <Event />
      </Masonry>
    </Flex>
  );
}

export default App;

import React from 'react'
import Apples, { Bananas } from './components/01-my-house'
import Jsx1 from './components/02-jsx/01-jsx';
import Jsx4 from './components/02-jsx/04-jsx';
import { Inlinestyling } from './components/03-styles/01-inline-styling';
import { Internalstyling } from './components/03-styles/02-internal-styling';
import { Externalstyling } from './components/03-styles/03-external-styling';
import { Externalmodulestyling } from './components/03-styles/04-external-module-styling';
function App() {
  return (
    <>
        <Apples/>
        <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio unde sapiente porro iusto veniam itaque alias architecto fugit explicabo sit vel a, ab qui dolores maxime! Dolorem ex accusantium quam?
        </div>
        <Bananas/>
        <Jsx1 />
        <Jsx4 />
        <Inlinestyling/>
        <Internalstyling/>
        <Externalstyling/>
        <Externalmodulestyling/>

    </>
  )
}

export default App
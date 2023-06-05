import React from 'react'
import Apples, { Bananas } from './components/01-my-house'
import Jsx1 from './components/02-jsx/01-jsx';
import Jsx4 from './components/02-jsx/04-jsx';
import { Inlinestyling } from './components/03-styles/01-inline-styling';
import { Internalstyling } from './components/03-styles/02-internal-styling';
import { Externalstyling } from './components/03-styles/03-external-styling';
import { Externalmodulestyling } from './components/03-styles/04-external-module-styling';
import SassScss from './components/03-styles/05-sass-scss';
import DigitalUhrApp from './components/digital-uhr-app1/digital-uhr-app';
import Greetings from './components/05-props/01-greetings';
import { Products } from './components/05-props/05.products';
import DigitalUhrApp2 from './components/digital-uhr-app2/digital-uhr-app2';
import Images from './components/07-images/01-images';
import Imagegallery from './components/07-images/02-image-gallery';
import ProfileCard from './components/08-profile-card/profile-card';
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
        <SassScss/>

        <DigitalUhrApp/>
        <Greetings/>
        <Products>Lorem ipsum dolor sit amet.</Products>
        <DigitalUhrApp2 textColor="white" bgColor="red"/>
        <Images/>
        <Imagegallery/>
        <br />
        <ProfileCard name="Abuzer" location="Horw, Luzern"/>

    </>
  )
}

export default App
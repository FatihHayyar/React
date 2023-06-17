import React, { /* useState */ } from 'react'
/* import Apples, { Bananas } from './components/01-my-house'
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
import BootstrapClassic from './components/09-bootstrap/01-bootstrap-classic';
import BootstraModenr from './components/09-bootstrap/02-bootstrap-modenr'; */
import  "./assets/scss/style.scss"
import DigitalClock from './components/digital-app3/digital-clock'
import FilterList from './components/18-filter-list/filter-list'
import UseRef from './components/19-useref/useref'
/* import ClassComponent from './components/20-component-types/class-component'
 */import FunctionComponent from './components/20-component-types/function-component'
import Fetch from './components/21-fetch/01-fetch'
import Fetch2 from './components/21-fetch/02-fetch'
import Countries from './components/22-axios/countries'
import ParentComponent from './components/23-lifting-state-up/ParentComponent'
import Form from './components/24-forms/01-form'
import Form2 from './components/24-forms/02-form'
import Form3 from './components/24-forms/03-form'
import Form4 from './components/24-forms/04-form'
import Form5 from './components/24-forms/05-form'
import FormikYap from './components/formik-yap/01-formik-yap'
/* import UseEffect from './components/16-use-effect/use-effect';
 */
/* import ReactIcons from './components/10-icons/01-react-icons';
import MateriaIcons from './components/10-icons/02-material-icons';
import Events from './components/11-events/events';
import ProductsShop from './components/12-product-shop/products-shop';

import Counter1 from './components/14-counter1/counter1';
import Birthday from './components/15-birthday/birthday';

import { Button } from 'react-bootstrap'; */

/* const profileCardData = {
  name: "Emir",
  location: "New York",
  image: "person4.jpg",
  statistics: [
      { title: "Likes", stat: 145 },
      { title: "Photos", stat: 7 },
      { title: "Following", stat: 329 },
  ] 
};*/
function App() {
 /* const [effect,setEffect]=useState(true);  */
  return (
    <>
        {/* <Apples/>
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
        <ProfileCard name="Abuzer" location="Horw, Luzern"  statistics={[
        {title:"Shot",stat:2},
        {title:"Fallower",stat:237},
        {title:"Fallowing",stat:327}
    ]}/>
     <ProfileCard
                name="Kyle"
                location="London"
                image="profile.jpg"
                statistics={[
                    { title: "Likes", stat: 50 },
                    { title: "Photos", stat: 12 },
                    { title: "Following", stat: 10 },
                ]}
            />

      <ProfileCard {...profileCardData} />

      <BootstrapClassic/>
      <BootstraModenr/>

      <ReactIcons/>

      <MateriaIcons/>

      <Events/>

      <ProductsShop/>
      <State/>
      <Counter1/>
      <Birthday></Birthday>
      <Button onClick={()=>setEffect(prev=>!prev)}>Show</Button>
      */}  {/* {effect&&<UseEffect/>}  */}
      <DigitalClock textColor="gold" bgColor="brown"/>
      <FilterList/>
      <br />
      <UseRef/> 
      <br />
      {/* {effect&&<ClassComponent/>} */}
      <br />
      <FunctionComponent/>
      <Fetch/>
      <br />
      <Fetch2/>
      <br />
      <Countries/>
      <br />
      <ParentComponent/>
      <br />
      <Form/>
      <br />
      <Form2/>
      <br />
      <Form3/>
      <Form4/>
      <Form5/>
      <br />
      <FormikYap/>
    </>
  )
}

export default App
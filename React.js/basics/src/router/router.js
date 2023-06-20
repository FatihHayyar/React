import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {Home,NotFound} from "../pages";
import {Apples,Bananas,
    Jsx1, Form, FormikYap, Jsx4,
    MateriaIcons, Inlinestyling, Internalstyling, Externalmodulestyling,
    DigitalClock, DigitalUhrApp,DigitalUhrApp2,
    Greetings, Products,
    Images, Imagegallery,
    ProfileCard,
    BootstraModenr, BootstrapClassic,
    ReactIcons, ProductsShop
    , Events,
    Externalstyling,
    ClassComponent,
    FunctionComponent,
    Counter1,
    Birthday,
    UseEffect,
    FilterList,
    UseRef,
   
    Fetch,
    Fetch2,
    Countries,
    ParentComponent,
    
    Form2,
    Form3,
    Form4,
    Form5,
    
    FormikYup2} from "../components";
function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/apples' element={<Apples/>}/>
            <Route path='/bananas' element={<Bananas/>}/>
            <Route path='/form' element={<Form/>}/>
            <Route path='2' element={<Countries/>}/>
            <Route path="/jsx">
                    <Route index element={<Jsx1 />} />
                    <Route path="4" element={<Jsx4 />} />
                </Route>
                <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  )
}

export default AppRouter
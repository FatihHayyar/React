import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home } from '../pages'
import { DigitalUhrApp, DigitalUhrApp2, Externalmodulestyling, Externalstyling, Inlinestyling, Internalstyling, ReactRouterDom, RouterParams } from '../components'
import UserLayout from '../layout/user-layout'

const router=createBrowserRouter(
    createRoutesFromElements(  
        <>
            <Route path="/" element={<Home />} />
            <Route path="styles">
                <Route index element={<Inlinestyling />} />
                <Route path="inline" element={<Inlinestyling />} />
                <Route path="internal" element={<Internalstyling />} />
                <Route path="external" element={<Externalstyling />} />
                <Route path="external-module" element={<Externalmodulestyling />} />
            </Route>
            <Route path="router-params">
                <Route index element={<ReactRouterDom />} />
                <Route path=":id" element={<RouterParams />} />
            </Route>
        </>
    )
 /*    [
    {path:'/',
    element:<Home/>
},
{ path: '/saat',
element:<DigitalUhrApp2 /> },
{
    path:'home',
    element:<UserLayout/>,
    children:[
        {
            path:'saat2',
            element:<DigitalUhrApp/>
        }
    ]
}
] */
)
function Router2() {
  return (
    <RouterProvider router={router}/>
  )
}

export default Router2
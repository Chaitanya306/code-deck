import React from 'react'

const Home = React.lazy(() => import('../Pages/Home'))
const Page404 = React.lazy(() => import('../Pages/Page404'))
const PlayGround = React.lazy(() => import('../Pages/PlayGround'))
const routes = [
{
    path:'/',
    component:<Home />
},
{
    path:'/code/:folderId/:playgroundId',
    component:<PlayGround />
},
{
    path:'*',
    component:<Page404 />
}

]

export default routes
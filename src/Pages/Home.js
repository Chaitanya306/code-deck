import React,{useContext} from 'react'
import LeftPanelHomeScreen from '../Components/Home/LeftPanelHomeScreen'
import RightPanelHomeScreen from '../Components/Home/RightPanelHomeScreen'
import { ModalContext } from "../Context/ModalContext"

import Modal from "../Components/Modal"
const Home = () => {
  const { isOpenModal } = useContext(ModalContext);
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      <div className='sm:w-full md:w-full w-5/12' >
        <LeftPanelHomeScreen />
      </div>
      <div className='sm:w-full md:w-full w-7/12'>
        <RightPanelHomeScreen />
      </div>
      {isOpenModal.show && <Modal />}
    </div>
  )
}

export default Home

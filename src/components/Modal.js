import React from 'react'
import styled from 'styled-components'




const Background = styled.div`


`

 const Modal = ({showModal, setShowModal}) => {
  return (
    <div>
    
    {showModal ? <div>Modal</div> : null}
    </div>
  )
}
export default Modal
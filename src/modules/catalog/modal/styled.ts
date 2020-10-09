import styled from 'styled-components'

export const Root = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dededecf;
  .form {
    background: white;
    border-radius: 5px;
    padding: 30px 50px;
    position: relative;
    text-align: center;
  }
`

export const CloseModal = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 20px;
  color: #48a1e6;
  cursor: pointer;
`

export const Error = styled.div`
  color: red;
  padding-top: 5px;
  font-size: 12px;
  text-align: left;
`

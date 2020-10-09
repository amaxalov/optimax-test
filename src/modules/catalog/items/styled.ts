import styled, { css } from 'styled-components'

export const gridLayout = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  .right {
    text-align: right;
  }
`

export const Header = styled.div`
  padding: 0 20px;
  margin-bottom: 20px;
  font-weight: bold;
  ${gridLayout}
`

export const Item = styled.div`
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #333333;
  margin-bottom: 20px;
  ${gridLayout}
  &::last-child {
    margin-bottom: 0;
  }
`

export const Column = styled.div<{ right?: boolean }>`
  display: flex;
  justify-content: ${({ right }) => (right ? 'flex-end' : 'flex-start')};
  align-items: center;
`

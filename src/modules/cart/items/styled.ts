import styled, { css } from 'styled-components'
import { device } from '@/utils/styled'

export const gridLayout = css`
  display: flex;
  justify-content: space-between;
  .right {
    text-align: right;
  }
  ${device.mobile} {
    flex-wrap: wrap;
  }
`

export const Header = styled.div`
  padding: 0 20px;
  margin-bottom: 20px;
  font-weight: bold;
  ${gridLayout}
  ${device.mobile} {
    display: none;
  }
`

export const Item = styled.div`
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #333333;
  margin-bottom: 20px;
  ${gridLayout}
  &::last-child {
    margin-bottom: 0;
    padding: 10px;
  }
`

export const Column = styled.div<{ right?: boolean; quantity?: boolean }>`
  display: flex;
  justify-content: ${({ right }) => (right ? 'flex-end' : 'flex-start')};
  align-items: center;
  width: 30%;
  &:nth-child(4) {
    width: 50px;
  }
  ${device.mobile} {
    width: 50%;
    &:nth-child(3),
    &:nth-child(4) {
      padding-top: 10px;
    }
  }
  ${({ quantity }) =>
    quantity &&
    css`
      ${device.mobile} {
        justify-content: flex-start;
      }
    `}
`

export const Trash = styled.div`
  cursor: pointer;
`

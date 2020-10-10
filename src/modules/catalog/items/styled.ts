import styled, { css } from 'styled-components'
import { device } from '@/utils/styled'

export const gridLayout = css`
  display: flex;
  align-items: center;
  .right {
    text-align: right;
  }
  ${device.mobile} {
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

export const Header = styled.div`
  padding: 0 20px;
  margin-bottom: 20px;
  font-weight: bold;
  ${gridLayout}
  ${device.mobile} {
    padding: 0 10px;
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
  }
  ${device.mobile} {
    padding: 10px;
  }
`

export const Column = styled.div<{ right?: boolean; buttonCont?: boolean }>`
  width: 33%;
  display: flex;
  justify-content: ${({ right }) => (right ? 'flex-end' : 'flex-start')};
  align-items: center;
  ${({ buttonCont }) =>
    buttonCont &&
    css`
      ${device.mobile} {
        width: 100%;
        justify-content: center;
        padding-top: 10px;
      }
    `}
`

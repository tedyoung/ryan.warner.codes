
import styled from 'styled-components'

import { Breakpoints, Colors } from 'styles'

export const ArticlesComponent = styled.div`
  ul {
    margin: 0;
    padding: 0;
  }
`

export const Li = styled.li`
    list-style-type: none;
    margin-bottom: 34px;
    padding-bottom: 34px;
    border-bottom: 1px solid ${Colors.blue30};

    &:last-child {
      border: 0;
    }

    @media(min-width: ${Breakpoints.mobile}) {
      margin-bottom: 74px;
    }
  }
`

export const Title = styled.h1`
  margin-top: 25px;
  margin-bottom: 50px;
  color: ${Colors.text20};

  @media(max-width: ${Breakpoints.mobile}) {
    margin: 30px 0 34px 0;
  }
`

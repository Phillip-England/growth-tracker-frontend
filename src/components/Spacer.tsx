import styled from "styled-components"

export const Spacer = styled.div<{ 
  height: string 
  padding: string
}>`
  height: ${props => props.height ? props.height : 'auto'};
  padding: ${props => props.padding ? props.padding : '0px'};
` 
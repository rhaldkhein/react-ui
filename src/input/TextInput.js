import styled from 'styled-components/native'
import {
  color,
  space,
  borders,
  height,
  width,
  fontWeight,
  fontSize,
} from 'styled-system'

// const shadowColor = style({ prop: 'shadowColor' })
// const shadowOffset = style({ prop: 'shadowOffset' })
// const shadowOpacity = style({ prop: 'shadowOpacity' })
// const shadowRadius = style({ prop: 'shadowRadius' })
const textAlignVertical = style({ prop: 'textAlignVertical' })

const StyledTextInput = styled.TextInput(
  // Default props
  {},
  // Available props
  color,
  space,
  borders,
  height,
  width,
  fontWeight,
  fontSize,
  textAlignVertical
)

export default StyledTextInput

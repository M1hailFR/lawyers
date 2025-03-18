import { computed } from 'vue'

const TYPES = {
  primary: 'primary',
  secondary: 'secondary',
  flat: 'flat',
  outline: 'outline',
  default: 'default',
}

const SIZES = {
  micro: 'micro',
  small: 'small',
  normal: 'normal',
  middle: 'middle',
  large: 'large',
  'extra-large': 'extra-large',
}

const paramsAsJoinedString = (name, value) => {
  let string = ` ${name}`
  if (value) {
    string += `-${value}`
  }
  return string
}

export const setBasicUiProps = (props, componentClass) => {
  const classes = computed(() => {
    let classesAsString = componentClass || ''
    if (props.type && TYPES[props.type]) {
      classesAsString += paramsAsJoinedString('type', props.type)
    }
    if (props.size && SIZES[props.size]) {
      classesAsString += paramsAsJoinedString('size', props.size)
    }
    if (props.disabled) {
      classesAsString += paramsAsJoinedString('state-disabled')
    }
    if (props.error) {
      classesAsString += paramsAsJoinedString('state-error')
    }
    return classesAsString
  })

  return {
    classes,
  }
}

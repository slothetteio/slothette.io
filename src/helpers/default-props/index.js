// TODO: maybe memoize this function
// https://www.w3schools.com/tags/ref_attributes.asp
// https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes


export default function(props, ownStyle = null) {
  let newProps = {};

  if (props.style && ownStyle) {
    newProps.style = {
      ...props.style,
      ...ownStyle,
    };
  } else if (props.style) {
    newProps.style = props.style;
  } else if (ownStyle) {
    newProps.style = ownStyle;
  }

  if(props.disabled) {
    newProps.disabled = props.disabled;
  }

  if(props.value !== null) {
    newProps.value = props.value;
  }
  if(props.onChange) {
    newProps.onChange = props.onChange;
  }
  if (props.placeholder) {
    newProps.placeholder = props.placeholder;
  }
  if (props.autoCorrect) {
    newProps.autoCorrect = props.autoCorrect;
  }
  if (props.spellCheck) {
    newProps.spellCheck = props.spellCheck;
  }

  return newProps;
}

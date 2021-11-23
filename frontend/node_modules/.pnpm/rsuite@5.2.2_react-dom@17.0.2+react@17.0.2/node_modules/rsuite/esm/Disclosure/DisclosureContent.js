import { useContext, useRef } from 'react';
import DisclosureContext from './DisclosureContext';

function DisclosureContent(props) {
  var children = props.children;
  var elementRef = useRef();

  var _useContext = useContext(DisclosureContext),
      open = _useContext[0].open;

  return children({
    open: open
  }, elementRef);
}

DisclosureContent.displayName = 'Disclosure.Content';
export default DisclosureContent;
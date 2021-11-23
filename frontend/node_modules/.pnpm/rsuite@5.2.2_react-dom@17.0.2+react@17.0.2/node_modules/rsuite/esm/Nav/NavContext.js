import React from 'react';
import noop from 'lodash/noop';
var NavContext = /*#__PURE__*/React.createContext({
  activeKey: null,
  onSelect: noop
});
export default NavContext;
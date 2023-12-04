// ScrollLink.ts

import React from 'react';
import {Link, LinkProps} from "react-router-dom";

const ScrollLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  return <Link {...props} ref={ref} onClick={() => window.scrollTo(0, 0)}/>
});

export default ScrollLink;
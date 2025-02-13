/* eslint-disable react/display-name */
import { forwardRef } from "react";

const Child = forwardRef((props, ref) => {
  return <div>Parent ref is here {ref.current}</div>;
});
export default Child;

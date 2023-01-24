const Wrapper = (props) => {
  return props.children;
};

export default Wrapper;

// empty component that only returns the value in props.children to fulfill the JSX requirement of
// no adjacent JSX components. This creates a root wrapping element

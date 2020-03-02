//set state false when u want to active back press tost and at every page do it true.
useEffect(() => {
  BackHandlerClass.mount(false, props.navigation);
  return () => {
    BackHandlerClass.unmount();
  };
}, []);

interface AppContextProviderProps {
  components: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>;
  children: React.ReactNode;
}

export const AppContextProvider = (props: AppContextProviderProps) => {
  const { components = [], children } = props;

  return (
    <>
      {components.reduceRight((acc, Component) => {
        return <Component>{acc}</Component>;
      }, children)}
    </>
  );
};

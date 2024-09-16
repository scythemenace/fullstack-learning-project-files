export function CardWrapper({ innerComponent, children }) {
  return (
    <>
      <h1>I am the boss (wrapper)</h1>
      {innerComponent || children}
      {/* The syntax above says output either innerComponent or children if they exist.
      innerComponent we know since we have seen we input it as props, but children is
      essentially a global keyword that's a feature of react. It means anything written inside
      of <CardWrapper></CardWrapper> will be treated as the children prop and since we are calling it, it
      gets rendered */}
    </>
  );
}

import { memo } from "react";
const Header = memo(function Header(props) {
  return (
    <>
      The number is {props.num}
      <br />
      <br />
    </>
  );
});

export default Header;

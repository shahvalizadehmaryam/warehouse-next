import React, { useState } from "react";
import Header from "../components/modules/Header";
// eslint-disable-next-line
const Layout = ({ children }) => {
  const [searchVal, setSearchVal] = useState("");
  return (
    <>
      <Header setSearchVal={setSearchVal} searchVal={searchVal} />
      <div>
        {/* Pass searchVal as a prop to the main content if it contains Products */}
        {React.cloneElement(children, { searchVal })}
      </div>
    </>
  );
};

export default Layout;

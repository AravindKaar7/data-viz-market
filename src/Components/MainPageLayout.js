import React from "react";
import Nav from "./Nav";
import Title from "./Title";

function MainPageLayout({ children, name }) {
  return (
    <div>
      <Nav>
        <Title
          title="Data Visualization"
          subtitle="A place for Business Intelligence Dashboards"
        />
      </Nav>
      {children}
    </div>
  );
}

export default MainPageLayout;

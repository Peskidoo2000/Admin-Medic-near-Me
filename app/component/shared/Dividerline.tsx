import React from "react";

const DividerLine = ({ styles }: { styles?: string }) => {
  return <hr className={`divider-line ${styles}`} />;
};

export default DividerLine;

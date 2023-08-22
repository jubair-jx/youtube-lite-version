import React from "react";
import RelatedVdoListItem from "./RelatedVdoListItem";

const RelatedVideoList = () => {
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      <RelatedVdoListItem></RelatedVdoListItem>
    </div>
  );
};

export default RelatedVideoList;

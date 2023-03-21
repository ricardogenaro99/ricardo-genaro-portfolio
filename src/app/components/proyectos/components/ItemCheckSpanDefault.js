import React from "react";
import { Checked } from "../../../shared/components";

const ItemCheckSpanDefault = ({ label, name, active, logo, setActive }) => {
  return (
    <span className="item-list-span">
      <span className="section_explorer-flex check-label-filter">
        <Checked name={name} active={active} setActive={setActive} />
        <label className="label-filter" htmlFor={name}>
          {logo}
          <span>{label}</span>
        </label>
      </span>
    </span>
  );
};
export default ItemCheckSpanDefault;

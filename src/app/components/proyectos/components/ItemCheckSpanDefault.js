import React from "react";
import { Checked, TechIcon } from "app/shared/components";

const ItemCheckSpanDefault = ({ label, name, active, logo, setActive }) => {
  return (
    <span className="item-list-span">
      <span className="section_explorer-flex check-label-filter">
        <Checked name={name} active={active} setActive={setActive} />
        <label className="label-filter" htmlFor={name}>
          <TechIcon name={logo} size={20} style={{ marginRight: "8px" }} />
          <span>{label}</span>
        </label>
      </span>
    </span>
  );
};
export default ItemCheckSpanDefault;

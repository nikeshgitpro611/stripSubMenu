import React from "react";
import sublinks from "./data";
import { useGlobalContext } from "./Context";
import Submenu from "./Submenu";
function NavLinks() {
  const { setPageId   } = useGlobalContext();
  return (
    <div className="nav-links">
      {sublinks.map((items) => {
        const { pageId, page } = items;
        return (
          <button
            key={pageId}
            className="nav-link"
            onMouseEnter={() => setPageId(pageId)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}

export default NavLinks;

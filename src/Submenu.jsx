import React, { useRef } from "react";
import sublinks from "./data";
import { useGlobalContext } from "./Context";

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const currentpageId = sublinks.find((items) => items.pageId === pageId);
  console.log("currentpageId : ", currentpageId);

  const shubmenuContainer = useRef(null);

  const handleMouseLeave = (event) => {
    const submenu = shubmenuContainer.current;
    const { left, right, bottom } = submenu.getBoundingClientRect();
    const { clientX, clientY } = event;

    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom -1) {
      setPageId(null);
    }
  };
  return (
    <div
      className={currentpageId ? "submenu show-submenu" : "submenu"}
      onMouseLeave={handleMouseLeave}
    >
      <h5>{currentpageId?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentpageId?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
        ref={shubmenuContainer}
      >
        {currentpageId?.links?.map((link) => {
          const { id, label, icon, url } = link;
          return (
            <a href={url} key={id}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;

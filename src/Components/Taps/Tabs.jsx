import React, { useState } from "react";

import "./Tab.css";
const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="my-10">
      <div className="tab-buttons">
        <button
          className={activeTab === 1 ? "active-tab" : ""}
          onClick={() => handleTabClick(1)}
        >
          Tab 1
        </button>
        <button
          className={activeTab === 2 ? "active-tab" : ""}
          onClick={() => handleTabClick(2)}
        >
          Tab 2
        </button>
        <button
          className={activeTab === 3 ? "active-tab" : ""}
          onClick={() => handleTabClick(3)}
        >
          Tab 3
        </button>
      </div>
      <div className="product-description">
        {activeTab === 1 && <p>This is the content for Tab 1.</p>}
        {activeTab === 2 && <p>This is the content for Tab 2.</p>}
        {activeTab === 3 && <p>This is the content for Tab 3.</p>}
      </div>
    </div>
  );
};

export default ProductTabs;

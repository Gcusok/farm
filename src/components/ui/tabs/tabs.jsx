import React, { useState } from "react";
import { TabButton, Header, Content, TabListItem } from "./styles";

function Tabs({ tabsList = [], maxContentHeight }) {
  const [selectIndex, setSelectIdndex] = useState(0);

  return (
    <div>
      <Header>
        {tabsList.map((tab, index) => (
          <TabListItem key={`tab${index * 10}`}>
            <TabButton
              $isSelect={selectIndex === index}
              {...(selectIndex === index
                ? { as: "span" }
                : {
                    onClick: () => {
                      setSelectIdndex(index);
                    }
                  })}
            >
              {tab.title}
            </TabButton>
          </TabListItem>
        ))}
      </Header>
      <Content $maxContentHeight={maxContentHeight}>
        {tabsList[selectIndex].content}
      </Content>
    </div>
  );
}

export default Tabs;

import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Tab from "../../../../../reusable-ui/Tab";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";
import { tabsConfig } from "../../../../../../utils/tabsConfig";

export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  } = useContext(OrderContext);

  const tabs = tabsConfig;

  const selectTab = (tabSelected) => {
    setIsCollapsed(false);
    setCurrentTabSelected(tabSelected);
  };

  return (
    <AdminTabsStyled>
      <Tab
        Icon={
          isCollapsed ? (
            <FiChevronUp className="icon-chevron" />
          ) : (
            <FiChevronDown className="icon-chevron" />
          )
        }
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
      {tabs.map((tab) => (
        <Tab
          key={tab.index}
          Icon={tab.Icon}
          label={tab.label}
          onClick={() => selectTab(tab.index)}
          className={currentTabSelected === tab.index ? "is-active" : ""}
        />
      ))}
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;

  .is-active {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
  }

  .icon-chevron {
    min-width: 1.5em;
    min-height: 1.5em;
  }

  button {
    margin-left: 1px;
  }
`;

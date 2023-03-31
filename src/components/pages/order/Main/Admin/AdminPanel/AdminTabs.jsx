import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Tab from "../../../../../reusable-ui/Tab";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";
import { tabsConfig } from "../../../../../../utils/admin/tabsConfig";

export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  } = useContext(OrderContext);

  const tabs = tabsConfig;

  const selectTab = (tabSelected) => {
    setCurrentTabSelected(tabSelected);
    setIsCollapsed(false);
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
      {tabs.map(({ index, Icon, label }) => (
        <Tab
          key={index}
          Icon={Icon}
          label={label}
          onClick={() => selectTab(index)}
          className={currentTabSelected === index ? "is-active" : ""}
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

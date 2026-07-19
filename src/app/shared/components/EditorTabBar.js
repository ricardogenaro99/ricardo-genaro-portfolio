import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { SiMarkdown, SiJson, SiJavascript } from "react-icons/si";
import { RiCloseLine } from "react-icons/ri";

const TabBarContainer = styled.div`
  display: flex;
  background: var(--primary-color-blue);
  border-bottom: 1px solid var(--lines-color);
  height: 35px;
  overflow-x: auto;
  user-select: none;
  z-index: 10;

  &::-webkit-scrollbar {
    height: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 830px) {
    display: none;
  }
`;

const TabItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 100%;
  border-right: 1px solid var(--lines-color);
  background: ${(props) => (props.active ? "var(--primary-color-blue-active)" : "transparent")};
  color: ${(props) => (props.active ? "var(--secondary-color-white)" : "var(--secondary-color-gray)")};
  font-family: "Fira Code", monospace;
  font-size: 12px;
  text-decoration: none;
  border-bottom: 1px solid ${(props) => (props.active ? "var(--accent-color-orange)" : "transparent")};
  transition: background 0.15s ease, color 0.15s ease;

  &:hover {
    background: var(--primary-color-blue-active);
    color: var(--secondary-color-white);
  }

  .file-icon {
    margin-right: 8px;
    display: flex;
    align-items: center;
  }

  .close-icon {
    margin-left: 10px;
    font-size: 14px;
    opacity: ${(props) => (props.active ? 1 : 0)};
    transition: opacity 0.15s ease;
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 1px;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }

  &:hover .close-icon {
    opacity: 1;
  }
`;

const getFileIcon = (name) => {
  if (name.endsWith(".md")) return <SiMarkdown color="#8ec07c" />;
  if (name.endsWith(".json")) return <SiJson color="#d79921" />;
  if (name.endsWith(".js")) return <SiJavascript color="#fabd2f" />;
  return null;
};

const EditorTabBar = ({ tabs = [] }) => {
  const location = useLocation();

  return (
    <TabBarContainer>
      {tabs.map((tab, i) => {
        // Strip trailing slash for consistency
        const cleanPath = tab.path.replace(/\/$/, "");
        const cleanLocation = location.pathname.replace(/\/$/, "");
        
        let isActive = cleanLocation === cleanPath;
        if (isActive && tab.hash) {
          const currentHash = location.hash || "#index";
          isActive = currentHash === tab.hash;
        }

        const destination = tab.hash ? `${tab.path}${tab.hash}` : tab.path;

        return (
          <TabItem key={i} to={destination} active={isActive ? 1 : 0}>
            <span className="file-icon">{getFileIcon(tab.name)}</span>
            <span>{tab.name}</span>
            <span className="close-icon">
              <RiCloseLine />
            </span>
          </TabItem>
        );
      })}
    </TabBarContainer>
  );
};

export default EditorTabBar;

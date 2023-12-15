import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    userId: "",
    name: "",
    email: "",
    username: "",
    repos: [],
    reposToBadge: [],
  });
  return (
    <DataContext.Provider value={{ userData, setUserData }}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node,
};

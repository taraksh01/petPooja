import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Test user",
    email: "test@example.com",
  },
});

UserContext.displayName = "UserContext"; // for react dev tools

export default UserContext;

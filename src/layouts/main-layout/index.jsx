import React from "react";
import App from "../../App";
import { WcstProvider } from "../../components/context/wcstContext";

function MainLayout() {
  return (
    <WcstProvider>
      <App />
    </WcstProvider>
  );
}

export default MainLayout;

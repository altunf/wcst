import Sidebar from "./layouts/sidebar-layout";
import ContentArea from "./layouts/content-area-layout";
import { WcstProvider } from "./components/context";
import Maintenance from "../Maintenance";

const operationalMode = (
  <WcstProvider>
    <Sidebar />
    <ContentArea />
  </WcstProvider>
);

function App() {
  return <Maintenance />;
}

export default App;

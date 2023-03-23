import Sidebar from "./layouts/sidebar-layout";
import ContentArea from "./layouts/content-area-layout";
import { WcstProvider } from "./components/context";

function App() {
  return (
    <WcstProvider>
      <Sidebar />
      <ContentArea />
    </WcstProvider>
  );
}

export default App;

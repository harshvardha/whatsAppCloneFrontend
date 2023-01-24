import { GoogleOAuthProvider } from "@react-oauth/google"
import Messenger from "./components/Messenger"
import AccountProvider from "./context/AccountProvider";

function App() {
  const clientId = '83303593718-nqjbgmpsc1lup0hu4gll4cmqsbk96aem.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  )
}

export default App

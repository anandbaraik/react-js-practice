import { Example } from "./components/Example";
import { FeatureFlagProvider } from "./context/FeatureFlag";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Feature Flag</h1>
      <FeatureFlagProvider>
        <Example />
      </FeatureFlagProvider>
    </div>
  );
}

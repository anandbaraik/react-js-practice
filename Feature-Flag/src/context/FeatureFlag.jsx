import { createContext, useContext, useState } from "react";

const FeatureFlag = createContext({
  isGooglePayEnabled: false,
  isApplePayEnabled: false,
  darkMode: false,
  chatEnabled: false
});

export const FeatureFlagProvider = ({ children }) => {
  const [features, setFeatures] = useState({
    isGooglePayEnabled: true,
    isApplePayEnabled: false,
    darkMode: true,
    chatEnabled: false
  });
  /*
   * fetch data from server & use the feature flag to
   * toggle features
   */
  return (
    <FeatureFlag.Provider value={{ features }}>{children}</FeatureFlag.Provider>
  );
};

export const useFeatureFlag = () => useContext(FeatureFlag);

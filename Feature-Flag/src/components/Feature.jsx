import { useFeatureFlag } from "../context/FeatureFlag";

export const Feature = ({ feature, value, children }) => {
  const { features } = useFeatureFlag();
  return features[feature] === value ? children : null;
};

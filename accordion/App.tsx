import { useState, FC } from "react";
import "./styles.css";
type SectionPropType = {
  title: String;
  description: String;
  isSectionVisible: Boolean;
  toggleSection: () => void;
};
const Section: FC<SectionPropType> = ({
  title,
  description,
  isSectionVisible,
  toggleSection,
}) => {
  return (
    <div className="section">
      <h2 className="cursor-pointer underline" onClick={() => toggleSection()}>
        {title}{" "}
      </h2>
      {isSectionVisible && <p>{description}</p>}
    </div>
  );
};

export default function App() {
  const [activeSection, setActiveSection] = useState<String>("section1");
  return (
    <div className="App">
      <Section
        title={`What is Lorem Ipsum?`}
        description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the`}
        isSectionVisible={activeSection === "section1"}
        toggleSection={() => {
          setActiveSection((prev) => (prev == "section1" ? "" : "section1"));
        }}
      />

      <Section
        title={`Why do we use it?`}
        description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the`}
        isSectionVisible={activeSection === "section2"}
        toggleSection={() => {
          setActiveSection((prev) => (prev == "section2" ? "" : "section2"));
        }}
      />

      <Section
        title={`Where can I get some?`}
        description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the`}
        isSectionVisible={activeSection === "section3"}
        toggleSection={() => {
          setActiveSection((prev) => (prev == "section3" ? "" : "section3"));
        }}
      />
    </div>
  );
}

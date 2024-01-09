import { Link, useLocation } from "react-router-dom";
const Breadcrumb = (): JSX.Element => {
  const { pathname } = useLocation();
  const pathNames = pathname?.split("/").filter((path) => path);
  return (
    <div className="breadcrumbs">
      {pathNames.length > 0 ? <Link to={"/"}>Home</Link> : ""}
      {pathNames?.map((path, index) => {
        let breadcrumbPath = `/${path}`;
        const isLastIndex = index === pathNames.length - 1;
        return isLastIndex ? (
          <span key={path}>
            {"/ "} {path}
          </span>
        ) : (
          <span key={path}>
            {"/ "}
            <Link to={`${breadcrumbPath}`}>{path}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;

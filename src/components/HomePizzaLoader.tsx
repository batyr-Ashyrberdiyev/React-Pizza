import ContentLoader from "react-content-loader";

const HomePizzaLoader = () => (
  <ContentLoader
    speed={2}
    width={292}
    height={404}
    viewBox="0 0 292 404"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="141" cy="141" r="141" />
    <rect x="9" y="299" rx="0" ry="0" width="280" height="31" />
    <rect x="8" y="359" rx="0" ry="0" width="142" height="29" />
    <rect x="240" y="380" rx="0" ry="0" width="8" height="16" />
    <rect x="175" y="360" rx="0" ry="0" width="103" height="29" />
  </ContentLoader>
);

export default HomePizzaLoader;

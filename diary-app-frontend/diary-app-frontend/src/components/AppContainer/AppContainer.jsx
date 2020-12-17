import "./AppContainer.css";
import SideNav from "./SideNav/SideNav";
import AppContent from "./AppContent/AppContent";

function AppContainer(props) {
  return (
    <div>
      <div className="container">
        <SideNav firstName={props.firstName} />
        <AppContent />
      </div>
      <div className="blur_img"></div>
    </div>
  );
}

export default AppContainer;

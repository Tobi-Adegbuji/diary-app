import './AppContainer.css';
import SideNav from './SideNav/SideNav';
import AppContent from './AppContent/AppContent';

function AppContainer() {
  return (
    <div>
      <div className="container">
        <SideNav/>
        <AppContent/>
    </div>
    <div className="blur_img"></div>
    </div>
    
  );
}

export default AppContainer;

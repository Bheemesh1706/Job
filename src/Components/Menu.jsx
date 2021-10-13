import React ,{useState}from 'react';
import MenuIcon from "@material-ui/icons/Menu";
import DriveFileMoveIcon from "@material-ui/icons/FileCopyOutlined";
import MessageBox from "@material-ui/icons/MessageOutlined"
import Exit from "@material-ui/icons/ExitToApp"

export default function Menu() {

  const [active,setActive] = useState(false);

    return (
      <div
        className={"menu " + (active ? " menu-modal menu-active-modal" : " ")}
      >
        {active ? (
          <div className="menu-icons">
            <div className="icon" onClick={() => setActive(!active)}>
              <Exit />
            </div>
            <div className="icon">
              <DriveFileMoveIcon />
            </div>
            <div className="icon">
              <MessageBox />
            </div>
          </div>
        ) : (
          <div className="icon" onClick={() => setActive(!active)}>
            <MenuIcon />
          </div>
        )}
      </div>
    );
}

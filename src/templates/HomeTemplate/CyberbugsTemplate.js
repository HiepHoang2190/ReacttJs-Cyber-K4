import React, { Fragment } from 'react';
import MenuCyberbugs from '../../components/CyberBugs/MenuCyberbugs';
import ModalCyberBugs from '../../components/CyberBugs/ModalCyberBugs/ModalCyberBugs';
import SidebarCyberbugs from '../../components/CyberBugs/SidebarCyberbugs';


import '../../index.css';
import CreateProject from '../../pages/CyberBugs/CreateProject/CreateProject';
import IndexCyberBugs from '../../redux/sagas/Cyberbugs/IndexCyberBugs';


export const CyberbugsTemplate = (props) => {

  const { cyberRoute, ...restParam } = props;
  let body
  body = (<>
    {cyberRoute === 'cyberbugs' && <IndexCyberBugs />}
    {cyberRoute === 'createproject' && <CreateProject />}

  </>
  )

  return (
    <>
      <div className="jira">
                <SidebarCyberbugs />
                <MenuCyberbugs />
                  {body}
                <ModalCyberBugs />
            </div>
    </>

  )

}
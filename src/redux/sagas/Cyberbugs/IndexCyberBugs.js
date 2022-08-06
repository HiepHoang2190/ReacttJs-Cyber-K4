import React from 'react'
import ContentMain from '../../../components/CyberBugs/Main/ContentMain'
import HeaderMain from '../../../components/CyberBugs/Main/HeaderMain'
import InfoMain from '../../../components/CyberBugs/Main/InfoMain'
import SidebarCyberbugs from '../../../components/CyberBugs/SidebarCyberbugs'
import MenuCyberbugs from '../../../components/CyberBugs/MenuCyberbugs'
import ModalCyberBugs from '../../../components/CyberBugs/ModalCyberBugs/ModalCyberBugs'

export default function IndexCyberBugs() {
  return (
      <div className="main">
        <HeaderMain />
        <InfoMain />
        <ContentMain />
      </div>
  )
}

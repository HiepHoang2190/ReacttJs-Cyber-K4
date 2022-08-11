import React, { useEffect } from 'react'
import ContentMain from '../../../components/CyberBugs/Main/ContentMain'
import HeaderMain from '../../../components/CyberBugs/Main/HeaderMain'
import InfoMain from '../../../components/CyberBugs/Main/InfoMain'
import SidebarCyberbugs from '../../../components/CyberBugs/SidebarCyberbugs'
import MenuCyberbugs from '../../../components/CyberBugs/MenuCyberbugs'
import ModalCyberBugs from '../../../components/CyberBugs/ModalCyberBugs/ModalCyberBugs'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { GET_PROJECT_DETAIL } from '../../constants/Cyberbugs/Cyberbugs'
export default function IndexCyberBugs(props) {
  const { projectDetail } = useSelector(state => state.ProjectReducer)
  const dispatch = useDispatch();
  console.log('projectDetail', projectDetail)
  const { projectId } = useParams();
  console.log(projectId)
  useEffect(() => {
    //Khi người dùng link qua trang này bằng thẻ navlink hoặc người dùng tự gõ url thì ta sẽ lấy tham số từ url => gọi saga

    dispatch({
      type: GET_PROJECT_DETAIL,
      projectId: projectId
    })

  }, [])

  return (
    <div className="main">
      <HeaderMain projectDetail={projectDetail} />
      <InfoMain projectDetail={projectDetail} />
      <ContentMain projectDetail={projectDetail}/>
    </div>
  )
}

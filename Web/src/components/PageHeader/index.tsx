import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/images/learn.png'
import backIcon from '../../assets/images/icons/back.svg'
import { Header } from './styles'



interface PageHeaderProps {
  title: string;
  description?: string;
}
 
const PageHeader: React.FC<PageHeaderProps> = ({children, title, description}) =>{
  return (
      <Header>
      <div className="top-bar-container">
        <Link to="/" >
          <img src={backIcon} alt="voltar"/>
        </Link>

        <img src={LogoImg} alt="Proffy"/>
        </div>

        <div className="header-content">
          <strong>{title}</strong>
          { description && <p>{description}</p> }


          {children}

        </div>

      </Header>
    )
}

export default PageHeader;
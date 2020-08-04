import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'
import { Header } from './styles'


interface PageHeaderProps {
  title: string;
}
 
const PageHeader: React.FC<PageHeaderProps> = ({ children, title }) =>{
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
        
          {children}

        </div>

      </Header>
    )
}

export default PageHeader;
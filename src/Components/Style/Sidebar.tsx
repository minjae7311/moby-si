import * as React from 'react';

const style: React.CSSProperties = {
  width: '100%',
  border: 'solid 1px #ccc',
  marginRight: '10px',
  marginBottom: '15px',
  borderRadius: '4px',
}

const Sidebar: React.FC = (props) => {
  return (
    <aside style={style}>
      {props.children}
    </aside>  
  )
}

export default Sidebar;

export const SidebarTitle: React.FC = ({children}) => 
  <h1 style={{
    padding: '0 10px',
    marginBottom: -10
  }}>
    {children}
  </h1>

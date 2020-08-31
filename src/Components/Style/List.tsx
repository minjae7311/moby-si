import * as React from "react";

export const List: React.FC = ({ children }) => 
  <ul
    style={{
      listStyle: 'none',
      paddingLeft: '0',
      display:'flex'
    }}>
    { children }
  </ul>


export const ListItem: React.FC = props => {
  const { children } = props;

  return (
    <li
      style={{
        padding: '15px',
        borderBottom: '1px solid #ddd',
        borderTop: '1px solid #ddd'
      }}
    >
      {children}
    </li>
  )
}
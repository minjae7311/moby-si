import * as React from "react";

export const List: React.FC = ({ children }) => 
  <ul
    style={{
      listStyle: 'none',
      paddingLeft: '0',
      display: 'flex',
      flexWrap: 'wrap',
    }}>
    { children }
  </ul>


export const ListItem: React.FC = props => {
  const { children } = props;

  return (
    <li
      style={{
        padding: '10px',
        borderRight: '1px solid #ddd',
        marginTop: 10
      }}
    >
      {children}
    </li>
  )
}
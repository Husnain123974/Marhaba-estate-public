// /app/components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

interface SidebarProps {
  options: { name: string; path: string; icon: React.ReactNode }[];
}

const Sidebar: React.FC<SidebarProps> = ({ options }) => {
  return (
    <List>
      {options.map((option) => (
        <ListItem   key={option.name} component="a" href={option.path}>
          <ListItemIcon className="text-yellow-300">
            {option.icon}
          </ListItemIcon>
          <ListItemText primary={option.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default Sidebar;

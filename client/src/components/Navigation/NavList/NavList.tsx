import ListItem from '@mui/material/ListItem'
import {Link} from 'react-router-dom'
import ListItemButton from '@mui/material/ListItemButton'
import {ListItemIcon, ListItemText} from '@mui/material'
import SelectAllIcon from '@mui/icons-material/SelectAll'
import {Home, Reviews} from '@mui/icons-material'
import List from '@mui/material/List'

const NavList = () => {
  const pages = [
    {to: '/', text: 'Home', icon: <Home/>},
    {to: '/reviews', text: 'Reviews', icon: <Reviews/>},
    {to: '/reactSelect', text: 'React Select', icon: <SelectAllIcon/>},
  ]

  return (
    <List>
      {pages.map((menu, index) => (
        <ListItem key={index} style={{display: 'block'}} disablePadding>
          <Link to={menu.to} style={{color: 'rgba(0, 0, 0, 1)', textDecoration: 'none'}}>
            <ListItemButton>
              <ListItemIcon>
                {menu.icon}
              </ListItemIcon>
              <ListItemText primary={menu.text}/>
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  )
}

export default NavList
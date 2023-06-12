import ListItem from '@mui/material/ListItem'
import {Link} from 'react-router-dom'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import {FormatColorFill, Home, Reviews} from '@mui/icons-material'
import List from '@mui/material/List'

const NavList = () => {
  const pages = [
    {to: '/', text: 'Home', icon: <Home/>},
    {to: '/mui', text: 'Material UI', icon: <FormatColorFill/>},
    {to: '/reviews', text: 'Reviews', icon: <Reviews/>},
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
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
   // const [expandNavbar, setExpandNavbar] = useState(false);
   // const handleClick = () => setExpandNavbar(!expandNavbar);
    
    const links = [
        {
            id: 1,
            link: '/',
        },
        {
            id: 2,
            link: '/About',
            linkName: 'About',
        },
        {
            id: 3,
            link: '/Skill',
            linkName: 'Skills',
        },
        {
            id: 4,
            link: '/Project',
            linkName: 'Project',
        },
        {
            id: 5,
            link: '/Contact',
            linkName: 'Contact',
        }
    ]
  return (
    <div className='flex flex-col w-full max-w-[100%] h-full ml-5'>
        <div className='h-1/5 text-white mt-5'>
            <NavLink to='/'>
                Portfolio
            </NavLink>
        </div>
        <div className='text-white mt-32 h-4/5'>
            <ul>
                {links.map(({ id, link, linkName }) => (
                    <li
                    key={id}
                    className='pb-5'
                    >
                        <NavLink to ={link}>
                            {linkName}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Navbar
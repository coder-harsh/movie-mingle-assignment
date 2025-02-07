import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from '@chakra-ui/react';
import { BiMenu } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
const MobMenu = () => {
    return (
        <div className="flex md:hidden">
            <Menu>
                {({ isOpen }) => (
                    <>
                        <MenuButton isActive={isOpen} as={Button}>
                            {isOpen ? <RiCloseFill size={25} /> : <BiMenu size={25} />}
                        </MenuButton>
                        <MenuList>
                            <MenuItem as={NavLink} to={"/"} className='font-bold text-navcol'>Home</MenuItem>
                            <MenuItem className='font-bold text-navcol' as={NavLink} to={"/services"}>Services</MenuItem>
                            <MenuItem className='font-bold text-navcol' as={NavLink} to={"https://blog.indiandevelopers.org"} target='_blank'>Blog</MenuItem>
                            <MenuItem as={NavLink} to="/about" className='font-bold text-navcol'>About</MenuItem>
                            <MenuItem as={NavLink} to="/contact" className='font-bold text-navcol'>Contact</MenuItem>
                        </MenuList>
                    </>
                )}
            </Menu>
        </div>
    );
};
export default MobMenu;
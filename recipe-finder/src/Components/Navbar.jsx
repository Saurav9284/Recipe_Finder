import React, { useState, useEffect } from "react";
import { Menu, MenuItem, Input, MenuMenu, Popup } from "semantic-ui-react";
import logo from "../Assets/logo.png";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Avatar, AvatarBadge} from '@chakra-ui/react'

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const home = () => {
    navigate("/");
  };


  const recipe = () => {
    navigate("/recipe");
  };

  return (
    <div className="navbar">
      <Menu
        borderless
        fixed="top"
        style={{ backgroundColor: "rgb(255,255,255)" }}
      >
        <Menu.Item>
          <img
            src={logo}
            alt="logo"
            style={{ width: 50, cursor: "pointer" }}
            onClick={home}
          />
        </Menu.Item>
        <MenuItem name="Home" className="navbarmenu" onClick={home} />
        <MenuItem name="Recipes" className="navbarmenu" onClick={recipe} />

        <MenuMenu position="right">
          <MenuItem>
            <Input icon="search" placeholder="Search..." />
          </MenuItem>
        </MenuMenu>

        {loading ? (
          // You can add a loading indicator here if needed
          <MenuItem name="Loading..." className="navbarmenu" />
        ) : user ? (
          <>
          <MenuItem className="navbarmenu">
          <Popup
          trigger={<Avatar>
            <AvatarBadge boxSize='1.25em' bg='green.500' />
        </Avatar>}
          content={`Welcome, ${user.email}`}
          position='bottom center'
        />
          
          </MenuItem>
            
            {/* <MenuItem name={`Welcome, ${user.email}`} className="navbarmenu" /> */}
            <MenuItem
              name="Logout"
              className="navbarmenu"
              onClick={handleLogout}
            />
          </>
        ) : (
          <MenuItem
            name="Login"
            className="navbarmenu"
            onClick={() => navigate("/login")}
          />
        )}

      </Menu>
    </div>
  );
};

export default Navbar;

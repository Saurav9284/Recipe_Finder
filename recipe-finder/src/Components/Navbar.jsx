import React, { useState, useEffect } from "react";
import { Menu, MenuItem, Input, MenuMenu, Popup } from "semantic-ui-react";
import logo from "../Assets/logo.png";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Avatar, AvatarBadge } from "@chakra-ui/react";
import {
  useDisclosure,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";


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
    navigate("/recipes");
  };

  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false });
  const cancelRef = React.useRef();

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
          <MenuItem name="Loading..." className="navbarmenu" />
        ) : user ? (
          <>
            <MenuItem className="navbarmenu">
              <Popup
                trigger={
                  <Avatar>
                    <AvatarBadge boxSize="1.25em" bg="green.500" />
                  </Avatar>
                }
                content={`Welcome, ${user.email}`}
                position="bottom center"
              />
            </MenuItem> 
            
              <MenuItem>
                <Button colorScheme="red" onClick={() => onOpen()}>
                  Logout
                </Button>
              </MenuItem>

              <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
              >
                <AlertDialogOverlay>
                  <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                      Logout your account
                    </AlertDialogHeader>

                    <AlertDialogBody>Are you sure?</AlertDialogBody>

                    <AlertDialogFooter>
                      <Button ref={cancelRef} onClick={onClose}>
                        Cancel
                      </Button>
                      <Button colorScheme="red" onClick={handleLogout} ml={3}>
                        Logout
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>
            </>
        ) : (
          <MenuItem>
            <Button colorScheme="green" onClick={() => navigate("/login")}>
              Login
            </Button>
          </MenuItem>
        )}
      </Menu>
    </div>
  );
};

export default Navbar;

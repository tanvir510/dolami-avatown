// Library Import
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

// File Import
import Logo from "@/assets/images/common/logo.png";
import BlackLogo from "@/assets/images/common/logo-black.png";
import SearchIcon from "@/assets/images/icons/search-icon.png";
import BellIcon from "@/assets/images/icons/bell.png";
import CartIcon from "@/assets/images/icons/cart.png";
import ProfileIcon from "@/assets/images/icons/profile.png";
import CloseIcon from "@/assets/images/icons/close.png";
import CrossIcon from "@/assets/images/icons/cross.png";
import MenuIcon from "@/assets/images/icons/menu.png";

export const Header = ({ handleSearch }: any) => {
  const [searchText, setSearchText] = useState("");
  const [sticky, setSticky] = useState("");
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 100 ? "is-sticky" : "";
    setSticky(stickyClass);
  };

  return (
    <>
      <header className={`${sticky} d-none d-lg-block`}>
        <Row>
          <Col md={2}>
            <div className="site-logo">
              <Link href="/">
                <Image src={Logo} alt="Site logo" />
              </Link>
            </div>
          </Col>
          <Col md={10}>
            <div className="header-navbar">
              <div className="left-content">
                <Link href="/">Go to marketplace</Link>
              </div>

              <div className="right-content">
                <div className="search-input position-relative me-2">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search here (title, name, content)..."
                    value={searchText}
                    onChange={(event) => {
                      setSearchText(event.target.value);
                      handleSearch(event.target.value);
                    }}
                  />
                  <div className="search-icon">
                    {searchText ? (
                      <Image
                        src={CloseIcon}
                        alt="Close Icon"
                        width={15}
                        height={15}
                        onClick={() => {
                          setSearchText("");
                          handleSearch("");
                        }}
                      />
                    ) : (
                      <Image
                        src={SearchIcon}
                        alt="Search Icon"
                        width={18}
                        height={15}
                      />
                    )}
                  </div>
                </div>
                <div className="notification-action icon-shape">
                  <Image src={BellIcon} alt="Bell Icon" />
                  <div className="counter-number">1</div>
                </div>
                <div className="cart-action icon-shape">
                  <Image src={CartIcon} alt="Cart Icon" />
                  <div className="counter-number">3</div>
                </div>
                <div className="profile-btn icon-shape">
                  <Image src={ProfileIcon} alt="Profile Icon" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </header>

      <div className="mobile-nav d-block d-lg-none">
        <div className={`menu-header ${sticky}`}>
          <Container>
            <div className="d-flex align-items-center justify-content-between">
              <Link href="/" className="site-logo">
                <Image src={BlackLogo} alt="Logo Icon" />
              </Link>

              <div
                className="menubar"
                onClick={() => setOpenMobileMenu(!openMobileMenu)}
              >
                <Image
                  src={openMobileMenu ? CrossIcon : MenuIcon}
                  alt="Menu Bar"
                />
              </div>
            </div>
          </Container>
        </div>

        <div className={openMobileMenu ? "menu-wrapper open" : "menu-wrapper"}>
          <Container>
            <div className="search-input position-relative me-2  mb-3 mt-3">
              <input
                type="text"
                name="search"
                placeholder="Search here (title, name, content)..."
                value={searchText}
                onChange={(event) => {
                  setSearchText(event.target.value);
                  handleSearch(event.target.value);
                }}
              />
              <div className="search-icon">
                {searchText ? (
                  <Image
                    src={CloseIcon}
                    alt="Close Icon"
                    width={15}
                    height={15}
                    onClick={() => {
                      setSearchText("");
                      handleSearch("");
                    }}
                  />
                ) : (
                  <Image
                    src={SearchIcon}
                    alt="Search Icon"
                    width={18}
                    height={15}
                  />
                )}
              </div>
            </div>

            <div className="redirect-page  mb-3">
              <Link href="/">Go to marketplace</Link>
            </div>

            <div className="user-panel d-flex align-items-center">
              <div className="notification-action icon-shape">
                <Image src={BellIcon} alt="Bell Icon" />
                <div className="counter-number">1</div>
              </div>
              <div className="cart-action icon-shape">
                <Image src={CartIcon} alt="Cart Icon" />
                <div className="counter-number">3</div>
              </div>
              <div className="profile-btn icon-shape">
                <Image src={ProfileIcon} alt="Profile Icon" />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

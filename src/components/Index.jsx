import React from "react";
import Main from "./Main";
import { Link } from "react-router-dom";
import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  Footer,
  FooterSection,
  FooterLinkList
} from "react-mdl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import {
  faSearch,
  faHome,
  faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";

const Index = () => {
  return (
    <div>
      <Layout>
        <Header
          style={{
            backgroundColor: "#162731"
          }}
          title={
            <Link
              className="secondaryColor"
              style={{ textDecoration: "none" }}
              to="/"
            >
              <h3>Holidaze</h3>
            </Link>
          }
          scroll
        >
          <div className="search">
            <Link className="link-hover grow" to="/HotelResults">
              <FontAwesomeIcon
                className="secondaryColor"
                style={{ fontSize: "20px" }}
                icon={faSearch}
                type="submit"
              />
            </Link>
            <input
              style={{
                marginLeft: "10px",
                height: "25px",
                width: "300px",
                border: "0px",
                borderRadius: "5px"
              }}
              list="dropdown"
              type="text"
              placeholder="Search for establishments.."
            />
            <datalist id="dropdown">
              <option value="Sunset Beach" />
            </datalist>
          </div>
          <Navigation>
            <Link
              className="link-hover grow"
              to="/"
              style={{ fontSize: "17px" }}
            >
              <FontAwesomeIcon className="secondaryColor" icon={faHome} /> Home
            </Link>
            <Link
              className="link-hover grow"
              to="/Contact"
              style={{ fontSize: "17px" }}
            >
              <FontAwesomeIcon
                className="secondaryColor"
                icon={faQuestionCircle}
              />{" "}
              Contact
            </Link>
          </Navigation>
        </Header>
        <Drawer
          style={{
            textAlign: "center",
            backgroundColor: "#162731",
            borderRight: "3px solid #f13d12"
          }}
          title={
            <Link
              style={{
                textDecoration: "none",
                color: "#f13d12"
              }}
              to="/"
            >
              <h3 style={{ marginRight: "30px" }}>Holidaze</h3>
            </Link>
          }
        >
          <input
            style={{
              marginLeft: "28px",
              height: "25px",
              width: "175px",
              border: "0px",
              borderRadius: "5px"
            }}
            type="text"
            placeholder="Search for establishments.."
          />

          <Navigation>
            <Link style={{ color: "#f13d12" }} to="/">
              Home
            </Link>
            <Link style={{ color: "#f13d12" }} to="/Contact">
              Contact
            </Link>
          </Navigation>
          <div
            style={{
              display: "inline-block",
              marginTop: "100px"
            }}
          >
            <Link to="/">
              <FontAwesomeIcon
                className="secondaryColor link-hover grow"
                style={{ fontSize: "30px", padding: "5px" }}
                icon={faFacebook}
              />
            </Link>
            <Link to="/">
              <FontAwesomeIcon
                className="secondaryColor link-hover grow"
                style={{ fontSize: "30px", padding: "5px" }}
                icon={faTwitter}
              />
            </Link>
            <Link to="/">
              <FontAwesomeIcon
                className="secondaryColor link-hover grow"
                style={{ fontSize: "30px", padding: "5px" }}
                icon={faInstagram}
              />
            </Link>
          </div>
        </Drawer>
        <Content style={{ backgroundColor: "#162731" }}>
          <Main />
        </Content>

        <Footer
          style={{
            backgroundColor: "#162731",
            borderTop: "3px solid #f13d12"
          }}
          size="mini"
        >
          <FooterSection type="left" logo="Holidaze">
            <FooterLinkList>
              <Link to="#">
                <FontAwesomeIcon
                  className="secondaryColor link-hover grow"
                  style={{ fontSize: "30px" }}
                  icon={faFacebook}
                />
              </Link>
              <Link to="/">
                <FontAwesomeIcon
                  className="secondaryColor link-hover grow"
                  style={{ fontSize: "30px" }}
                  icon={faTwitter}
                />
              </Link>
              <Link to="/">
                <FontAwesomeIcon
                  className="secondaryColor link-hover grow"
                  style={{ fontSize: "30px" }}
                  icon={faInstagram}
                />
              </Link>
            </FooterLinkList>
          </FooterSection>

          <FooterSection type="right" logo="ADMIN SIDE">
            <FooterLinkList>
              <Link className="link-hover grow" to="/Login">
                Login
              </Link>
              <Link className="link-hover grow" to="/Messages">
                Messages
              </Link>
              <Link className="link-hover grow" to="/AdminEnquiries">
                Enquiries
              </Link>
              <Link className="link-hover grow" to="/CreateEstablishment">
                Create establishment
              </Link>
            </FooterLinkList>
          </FooterSection>
        </Footer>
      </Layout>
    </div>
  );
};

export default Index;

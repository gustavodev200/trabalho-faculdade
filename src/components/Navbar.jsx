import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import nav from "../assets/images/nav.svg";
import { BiWorld } from "react-icons/bi";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <nav>
        <ul>
          <li>
            <h1>RANDOLAS.NET</h1>
          </li>
          <div className="navigation_nav">
            <li>
              <Link to="dados-us">
                <span>
                  <BiWorld size={20} />
                </span>
                DADOS GLOBAIS
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.header`
  width: 100%;
  height: 10rem;
  background-image: url(${nav});
  background-size: cover;
  border-radius: 0 0 10px 10px;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 0 0 10px 10px;

    h1 {
      color: white;
    }

    ul {
      width: 80%;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    li {
      display: flex;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.8);
      padding: 0.5rem 0.9rem;
      border-radius: 5px;
      cursor: pointer;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-decoration: none;

      font-weight: bold;

      span {
        display: flex;
        align-items: center;
        margin-right: 0.5rem;
      }
    }

    .navigation_nav {
      display: flex;
      align-items: center;
      justify-content: center;

      li {
        margin-left: 2rem;
        transition: 0.2s ease-out;

        &:hover {
          background-color: #ff3636;
        }
      }
    }
  }
`;

export default Navbar;

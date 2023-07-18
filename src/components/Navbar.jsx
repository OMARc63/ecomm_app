import { Badge } from "@mui/icons-material";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "max-content" })}
`;

const Wrapper = styled.div`
  position: relative;
  padding: 10px 20px;
  display: flex;
  ign-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 10px", flexWrap: "wrap-reverse" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  ${mobile({ flex: "100%" })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  margin-left: 25px;
  ${mobile({ width: "100%", margin: "10px 0 0" })}
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "100%", outline: "none" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({ textAlign: "start" })}
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

/// right -------------------
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "flex-end" })};
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px" })}
  ${tablet({ marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>CEZAR.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

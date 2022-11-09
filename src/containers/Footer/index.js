import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Box from "../../common/components/Box";
import Text from "../../common/components/Text";
import Image from "../../common/components/Image";
import Heading from "../../common/components/Heading";
import Select from "../../common/components/Select";
import Container from "../../common/components/UI/Container";
import FooterWrapper, { List, ListItem, BgImageWrapper } from "./footer.style";
import { menuWidget } from "../../common/data";

const Footer = ({
  row,
  col,
  colTwo,
  titleStyle,
  textDescStyle,
  textPhoneStyle,
}) => {
  return (
    <FooterWrapper id="footerSection">
      <BgImageWrapper>
        <Image src="assets/image/footer-bg.svg" alt="Footer background" />
      </BgImageWrapper>
      <Container noGutter mobileGutter width="1200px">
        <Box className="row mainRow" {...row}>
          {/* End of footer logo column */}
          <Box {...colTwo}>
            <Box className="col" {...col}>
              <Heading
                content="AUTO ATENDIMENTO BR5 BENEFÍCIOS"
                {...titleStyle}
              />
              <Text
                {...textDescStyle}
                content="Se preferir, ligue na nossa central de atendimento via telefone"
              />
              <Text {...textPhoneStyle} content="0800 006 8402" />
              <Text
                {...textDescStyle}
                content="Atendimento de segunda a sexta das 08:00 às 18:00"
              />
            </Box>
            {menuWidget.map((widget) => (
              <Box className="col" {...col} key={widget.id}>
                <Heading content={widget.title} {...titleStyle} />
                <List>
                  {widget.menuItems.map((item) => (
                    <ListItem key={`list__item-${item.id}`}>
                      <Link
                        className="ListItem"
                        target="_blank"
                        href={item.url}
                      >
                        {item.text}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Box>
          {/* End of footer List column */}
        </Box>
        <Box className="row copyRight" {...row}>
          <Text content="BR5 Benefícios 2022." {...textDescStyle} />
        </Box>
      </Container>
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-4px",
    mr: "-4px",
  },
  // Footer col one style
  colOne: {
    width: ["100%", "30%", "33%", "33%"],
    mb: ["30px", 0],
    pl: ["0px", 0],
    pr: ["0px", "0px", 0],
  },
  // Footer col two style
  colTwo: {
    width: ["100%"],
    flexBox: true,
    flexWrap: "wrap",
  },
  // Footer col default style
  col: {
    width: ["100%", 1 / 3, 1 / 3, 1 / 3],
    pl: [0, "15px"],
    pr: [0, "15px"],
    mb: ["30px", "30px"],
    ml: [0, "30px"],
  },
  // widget title default style
  titleStyle: {
    color: "#FFFFFF",
    fontSize: ["15px", "16px", "16px", "18px", "18px"],
    fontWeight: "600",
    lineHeight: "1.34",
    mb: ["15px", "18px", "18px", "20px", "30px"],
    fontFamily: "Poppins",
  },
  // Default logo size
  logoStyle: {
    width: "128px",
    mb: "15px",
  },
  // widget text default style
  textStyle: {
    color: "#FFFFFF",
    fontSize: "16px",
    mb: "12px",
    fontWeight: "600",
    fontFamily: "Lato",
  },
  textDescStyle: {
    color: "#FFFFFF",
    fontSize: "14px",
    mb: "12px",
  },
  textPhoneStyle: {
    color: "#FFFFFF",
    fontSize: "35px",
  },
};

export default Footer;

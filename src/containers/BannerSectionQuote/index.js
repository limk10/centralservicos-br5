import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Box from "../../common/components/Box";
import Text from "../../common/components/Text";
import Heading from "../../common/components/Heading";
import Button from "../../common/components/Button";
import Image from "../../common/components/Image";
import Container from "../../common/components/UI/Container";
import Particles from "../Particle";
import BannerWrapper, { BgImageWrapper } from "./bannerSection.style";
import { useSelector } from "react-redux";
import { useSeller } from "../../redux/seller/sellerSlice";
import Fade from "react-reveal/Fade";


const BannerSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  subdescription,
  titleDescription,
  outlineBtnStyle,
}) => {
  const { information } = useSelector(useSeller);
  const { telefones, endereco } = information;

  const openWhatsappLink = () => {
    window.open("https://wa.me/+556596040591", "_blank").focus();
  };

  const goToSection = () => {
    const element = document.getElementById("transactions");
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };


  return (
    <BannerWrapper id="banner_section">
      <Particles />
      <BgImageWrapper>
        <Image src='/assets/image/white_bg1.svg' alt="banner background" />
      </BgImageWrapper>
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <Fade down>
              <Heading content="Cotação de Seguros" {...title} />

              <Text
                content={`Olá, preencha os campos abaixo, encontraremos os melhores preços de seguro pra você.`}
                {...description}
              />
            </Fade>
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  discountText: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
    alignItems: "center",
  },
  col: {
    pr: "15px",
    pl: "15px",
    width: ["100%", "100%", "100%", "60%", "65%"],
  },
  title: {
    fontSize: ["26px", "34px", "42px", "42px", "47px"],
    fontWeight: "700",
    color: "#fff",
    letterSpacing: "-0.025em",
    mb: ["20px", "25px"],
    lineHeight: "1.31",
  },
  description: {
    fontSize: ["16px", "18px", "20px", "20px", "22px"],
    color: "#fff",
    lineHeight: "30px",
    mb: "0",
    maxWidth: "550px",
  },
  titleDescription: {
    fontSize: ["12px", "14px", "16px", "16px", "18px"],
    fontWeight: 600,
    color: "#fff",
    lineHeight: "30px",
    mb: "0",
    maxWidth: "550px",
  },
  subdescription: {
    fontSize: ["12px", "14px", "16px", "16px", "18px"],
    color: "#fff",
    lineHeight: "30px",
    mb: "0",
    maxWidth: "550px",
  },
  btnStyle: {
    minWidth: ["120px", "156px"],
    fontSize: "15px",
    fontWeight: "700",
    borderRadius: "6px",
  },
  outlineBtnStyle: {
    minWidth: ["130px", "156px"],
    fontSize: "16px",
    fontWeight: "700",
    color: "#fff",
    p: "5px 10px",
  },
};

export default BannerSection;

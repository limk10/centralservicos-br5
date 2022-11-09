import React from "react";
import PropTypes from "prop-types";
import Box from "../../common/components/Box";
import Fade from "react-reveal/Fade";
import Image from "../../common/components/Image";
import Text from "../../common/components/Text";
import Heading from "../../common/components/Heading";
import Button from "../../common/components/Button";
import FeatureBlock from "../../common/components/FeatureBlock";
import Container from "../../common/components/UI/Container";
import { TransactionsWrapper, FeatureSection } from "./transaction.style";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useSeller } from "../../redux/seller/sellerSlice";

const FEATURE1 = "assets/image/logotop.png";
const FEATURE2 = "assets/image/logo.png";

const TransactionsHistory = ({
  row,
  col,
  title,
  description,
  btnStyle,
  sectionSubTitle,
  cardArea,
  featureTitleStyle,
  featureDescriptionStyle,
  button,
}) => {
  const { information } = useSelector(useSeller);
  const { urlCheckout } = information;

  return (
    <TransactionsWrapper id="transactions">
      <Container>
        <Box className="row" {...row}>
          <Box className="colleft" {...col} style={{ flexDirection: "column" }}>
            <Text {...sectionSubTitle} />
            <FeatureBlock
              title={<Heading {...title} />}
              description={<Text {...description} />}
              // button={<Button title="GET DOCS" {...btnStyle} />}
            />
          </Box>
          <Box className="colright" {...col} {...cardArea}>
            <FeatureSection>
              <Fade up>
                <div className="featureWrapper">
                  <Image
                    style={{ width: "100px", marginBottom: 25 }}
                    src={FEATURE1}
                    alt="Cotação de Segurços"
                  />
                  <Heading
                    as="h3"
                    content="Cotação de Segurços"
                    {...featureTitleStyle}
                  />
                  <Text
                    content="Corretora com mais de 17 anos no mercado, equipe altamente especializada, valores justos e 100% de transparência."
                    {...featureDescriptionStyle}
                  />
                  <Link
                    className="navbar_drawer_button"
                    href="javascript:robocoteOpenChat()"
                  >
                    <Button {...button} title="Fazer Cotação" />
                  </Link>
                </div>
              </Fade>
              <Fade up>
                <div className="featureWrapper">
                  <Image
                    style={{ width: "100px", marginBottom: 25 }}
                    src={FEATURE2}
                    alt="Plano Pessoa Física"
                  />
                  <Heading
                    as="h3"
                    content="Plano Pessoa Física"
                    {...featureTitleStyle}
                  />
                  <Text
                    content="Plano de proteção familiar com 5 grandes benefícios: Desconto em Saúde, com até 80% de economia em consultas e muito mais"
                    {...featureDescriptionStyle}
                  />
                  {urlCheckout && (
                    <Link
                      className="navbar_drawer_button"
                      target="_blank"
                      href={urlCheckout}
                    >
                      <Button {...button} title="Adquirir Plano" />
                    </Link>
                  )}
                </div>
              </Fade>
            </FeatureSection>
          </Box>
        </Box>
      </Container>
    </TransactionsWrapper>
  );
};

// Transactions style props
TransactionsHistory.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  featureTitleStyle: PropTypes.object,
  button: PropTypes.object,
  featureDescriptionStyle: PropTypes.object,
};

// Transactions default style
TransactionsHistory.defaultProps = {
  // Transactions section row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
  },
  // Transactions section col default style
  col: {
    pr: "15px",
    pl: "15px",
    width: [1, 1 / 2, 1 / 2, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: "center",
  },

  // Transactions section title default style
  title: {
    content: "Vantagens para você e toda sua família!",
    fontSize: ["24px", "26px", "30px", "36px", "40px"],
    lineHeight: ["30px", "32px", "40px", "50px", "55px"],
    fontWeight: "700",
    color: "#32325d",
    letterSpacing: "-0.010em",
    mb: "20px",
    maxWidth: ["100%", "100%", "100%", "100%", "415px"],
    textAlign: ["left", "left"],
  },
  // Transactions section description default style
  description: {
    content:
      "Nossa missão é ajudar ao próximo  como a ti mesmo, através de nossos serviços e soluções!",
    fontSize: "16px",
    fontWeight: "400",
    color: "#525f7f",
    lineHeight: "28px",
    mb: ["30px", "30px", "40px", "40px", "55px"],
    textAlign: ["left", "left"],
    maxWidth: ["100%", "100%", "100%", "100%", "430px"],
  },
  sectionSubTitle: {
    content: "Algumas de nossas vantagens",
    as: "span",
    textAlign: "left",
    fontSize: ["16px", "16px", "18px", "20px", "20px"],
    fontFamily: "Poppins",
    fontWeight: "600",
    lineHeight: "27px",
    color: "#525f7f",
    textAlign: ["left", "left"],
  },
  // Button default style
  btnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
  },
  featureTitleStyle: {
    fontSize: ["18px", "18px", "20px", "20px", "20px"],
    lineHeight: ["25px", "27px", "27px", "27px", "27px"],
    fontWeight: "500",
    color: "#32325d",
    letterSpacing: "-0.010em",
    mb: "10px",
    textAlign: ["left", "left"],
  },
  button: {
    type: "button",
    fontSize: "13px",
    borderRadius: "4px",
    pl: "10px",
    pr: "10px",
    colors: "primaryWithBg",
    minHeight: "auto",
  },
  // Transactions section description default style
  featureDescriptionStyle: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#525f7f",
    lineHeight: "27px",
    textAlign: ["left", "left"],
  },
};

export default TransactionsHistory;

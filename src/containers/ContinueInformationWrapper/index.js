import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  ContinueInformationWrapper,
  ButtonWrapper,
} from "./ContinueInformation.style";
import "rc-tabs/assets/index.css";
import Button from "../../common/components/Button";
import Box from "../../common/components/Box";
import Heading from "../../common/components/Heading";
import Input from "../../common/components/Input";
import { postIndication } from "../../services/api/indication";
import { useDispatch } from "react-redux";
import { handleLoading } from "../../redux/general/generalSlice";
import { useRouter } from "next/router";

const ContinueInformation = ({
  titleStyle,
  contentWrapper,
  outlineBtnStyle,
  descriptionStyle,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [form, setForm] = useState({});

  const { id } = router.query;

  const handleChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(handleLoading(true));
      const _data = {
        ...form,
        intication: id,
      };

      const {
        data: { data },
      } = await postIndication(_data);

      window.open(data, "_self");
    } catch (error) {
    } finally {
      dispatch(handleLoading(false));
    }
  };

  return (
    <ContinueInformationWrapper>
      <Box {...contentWrapper}>
        <Box>
          <Heading content="Olá" {...titleStyle} />
          <Heading
            content="Insira seu nome completo e seu telefone para continuar."
            {...descriptionStyle}
          />

          <form onSubmit={handleSubmit}>
            <Box>
              <Input
                inputType="text"
                label="Nome Completo*"
                name="name"
                onChange={(e) => handleChange("name", e)}
                required
                autoComplete="new-password"
              />
            </Box>
            <Box mt={3}>
              <Input
                inputType="phone"
                label="Número de Telefone*"
                name="phone"
                onChange={(e) => handleChange("phone", e)}
                required
                autoComplete="new-password"
              />
            </Box>
            <Box mt={3}>
              <Input
                inputType="email"
                label="Endereço de e-mail"
                name="email"
                onChange={(e) => handleChange("email", e)}
                autoComplete="new-password"
              />
            </Box>

            <ButtonWrapper>
              <Button
                type="submit"
                title="CONTINUAR"
                variant="textButton"
                {...outlineBtnStyle}
              />
            </ButtonWrapper>
          </form>
        </Box>
      </Box>
    </ContinueInformationWrapper>
  );
};

// ContinueInformation style props
ContinueInformation.propTypes = {
  logoStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  input: PropTypes.object,
  contentWrapper: PropTypes.object,
  descriptionStyle: PropTypes.object,
  wrapperButton: PropTypes.object,
  outlineCloseBtnStyle: PropTypes.object,
};

// ContinueInformation default style
ContinueInformation.defaultProps = {
  titleStyle: {
    fontSize: ["28px", "36px", "50px"],
    fontWeight: "400",
    color: "#20201D",
    letterSpacing: "-0.025em",
  },
  descriptionStyle: {
    color: "rgba(52, 61, 72, 0.8)",
    fontSize: "15px",
    lineHeight: "26px",
    fontWeight: "500",
    letterSpacing: "-0.025em",
  },
  contentWrapper: {
    pt: ["50px", "56px"],
    pl: ["17px", "32px", "38px", "40px", "56px"],
    pr: "32px",
    pb: ["50px", "56px"],
  },
  input: {
    mt: "15px",
  },
  outlineBtnStyle: {
    width: ["70vw", "30vw"],
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
    backgroundColor: "#10ac84",
  },
  outlineCloseBtnStyle: {
    width: ["70vw", "30vw"],
    mt: "15px",
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
    backgroundColor: "transparent",
    border: "1px solid #ff9493",
    color: "#ff9493",
  },
};

export default ContinueInformation;

import { Ring } from "@uiball/loaders";
import { useSelector } from "react-redux";
import { useGeneral } from "../../../redux/general/generalSlice";
import { LoadingContent, LoadingWrapper } from "./loading.style";

const LoadingScreen = () => {
  const { loading } = useSelector(useGeneral);
  return (
    <>
      {loading && (
        <LoadingWrapper>
          <LoadingContent>
            <Ring size={75} lineWeight={5} speed={2} color="#FEFEFE" />
          </LoadingContent>
        </LoadingWrapper>
      )}
    </>
  );
};

export default LoadingScreen;

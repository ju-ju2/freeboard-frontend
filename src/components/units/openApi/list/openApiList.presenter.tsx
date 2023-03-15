import { DogImg, Wrapper } from "./openApiList.styles";
import { IOpenApiListUiProps } from "./openApiList.types";

export default function OpenApiListUI(props: IOpenApiListUiProps) {
  return (
    <>
      <Wrapper>
        {props.dogUrl.map((el, index) => (
          <DogImg key={index} src={el}></DogImg>
        ))}
      </Wrapper>
    </>
  );
}

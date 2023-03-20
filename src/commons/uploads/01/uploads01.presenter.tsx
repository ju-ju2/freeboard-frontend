import { BoxImg, FIleImg, HiddenInput } from "./uploads01.styles";
import { IUploads01UIProps } from "./uploads01.types";

export default function Uploads01UI(props: IUploads01UIProps) {
  return (
    <>
      {props.fileUrl ? (
        <FIleImg
          src={`https://storage.googleapis.com/${props.fileUrl}`}
          onClick={props.onClickImg}
        />
      ) : (
        <BoxImg onClick={props.onClickImg}>+</BoxImg>
      )}
      <HiddenInput
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}

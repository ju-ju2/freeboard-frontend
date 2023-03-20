import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef } from "react";
import { UPLOAD_FILE } from "../../../components/units/boards/write/BoardWrite.queries";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../types/generated/types";
import Uploads01UI from "./uploads01.presenter";
import { IUploads01Props } from "./uploads01.types";
import { checkValidation } from "./uploads01.validation";

export default function Uploads01(props: IUploads01Props) {
  //   const [imageUrl, setImageUrl] = useState(["", "", ""]);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidation(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadFile({
        variables: {
          file,
        },
      });
      console.log(result);
      props.onChangeImageUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const fileRef = useRef<HTMLInputElement>(null);

  const onClickImg = () => {
    fileRef.current?.click();
  };

  return (
    <Uploads01UI
      fileUrl={props.fileUrl}
      onChangeFile={onChangeFile}
      onClickImg={onClickImg}
      fileRef={fileRef}
    />
  );
}

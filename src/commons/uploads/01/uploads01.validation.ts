import { Modal } from "antd";

export const checkValidation = (file: File | undefined) => {
  if (!file?.size) {
    Modal.warning({ content: "파일이 없습니다" });
    return false;
  }
  if (file.size > 5 * 1024 * 1024) {
    Modal.warning({
      content: "파일 용량을 확인해주세요. 최대 5MB 까지 업로드 가능합니다",
    });
    return false;
  }
  if (
    !file.type.includes("jpeg") &&
    !file.type.includes("jpg") &&
    !file.type.includes("png")
  ) {
    Modal.warning({
      content:
        "지원하지 않는 파일형식입니다. 파일 형식을 확인해주세요. (png/jpeg/jpg 형식만 지원)",
    });
    return false;
  }
  return file;
};

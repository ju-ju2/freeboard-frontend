import axios from "axios";
import { useEffect, useState } from "react";
import OpenApiListUI from "./openApiList.presenter";

export default function OpenApiList() {
  const [dogUrl, setDogUrl] = useState<string[]>([]);

  useEffect(() => {
    const getDogImg = async () => {
      // map이랑 foreach랑 뭘써도 상관없지만 map은 return 하면 원본에 내용을 채워주는 것이고 foreach는 그런게 없어서 성능관점에서 더 좋다.
      new Array(9).fill(1).forEach(async (el) => {
        const result = await axios.get(
          "https://dog.ceo/api/breeds/image/random"
        );
        setDogUrl((prev) => [...prev, result.data.message]);
      });
    };
    void getDogImg();
  }, []);
  return <OpenApiListUI dogUrl={dogUrl} />;
}

import { RequestHandler } from "express";
import axios, { AxiosError, AxiosResponse } from "axios";

interface zipcodeResult {
  status: number;
  message: string | undefined;
  results: {
    address1: string;
    address2: string;
    address3: string;
    zipcode: string;
  }[];
}

export const getPostCode: RequestHandler = (req, res): void => {
  const code: string = (req.query as { postcode: string }).postcode;
  let address: string = "";
  axios
    .get(`https://zipcloud1.ibsnet.co.jp/api/search?zipcode=${code}`)
    .then((result: AxiosResponse<zipcodeResult>) => {
      if (result.data.status === 200 && result.data.results) {
        const { address1, address2, address3 } = result.data.results[0];
        address = `${address1}${address2}${address3}`;
        res.status(200).json({ address: address });
      } else {
        if (result.data.status === 200 && !result.data.results) {
          res.status(200).json({ message: "住所ヒットなし" });
          return
        }
        res.status(result.data.status).json({ message: result.data.message });
      }
    })
    .catch((e: AxiosError) => {
      console.log(e.message);
    });
};

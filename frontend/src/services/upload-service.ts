import axios from "axios";
import { CloudinaryUploadResponse } from "../types";

export const UploadService = {
  uploadImage: (
    file: any,
    setProgress: React.Dispatch<React.SetStateAction<number>>
  ) => {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "bettermart");
    return axios
      .post<CloudinaryUploadResponse>(
        "https://api.cloudinary.com/v1_1/dxrksxul/image/upload",
        formData,
        {
          onUploadProgress: (progressEvent: any) => {
            let percentComplete = progressEvent.loaded / progressEvent.total;
            percentComplete = parseInt((percentComplete * 100) as any);
            setProgress(percentComplete);
          },
        }
      )
      .then((res) => res)
      .catch((err) => {
        throw err;
      });
  },
};

export type CloudinaryUploadResponse = {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  tags: [];
  pages: number;
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  access_mode: string;
  original_filename: string;
  eager: [
    {
      transformation: string;
      width: number;
      height: number;
      url: string;
      secure_url: string;
    },
    {
      transformation: string;
      width: number;
      height: number;
      url: string;
      secure_url: string;
    }
  ];
};

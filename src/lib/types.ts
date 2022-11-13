export interface SiteProps {
  data: Data;
}

export interface Data {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  logo: SanityAssetProps;
  logo2: SanityAssetProps;
  //   menu: Menu[];
  ogImage: SanityAssetProps;
  siteUrl: string;
}

export interface IGetImage {
  image: SanityAssetProps;
  sizes?: string;
  customWidthSteps?: number;
  minimumWidthStep?: number;
  maxWidth?: string | number;
}

export interface SanityAssetProps {
  _id?: string;
  url?: string;
  path?: string;
  assetId?: string;
  extension?: string;
  [key: string]: any;
}

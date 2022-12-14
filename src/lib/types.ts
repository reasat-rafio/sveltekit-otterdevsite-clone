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
  menu: MenuItem[];
  ogImage: SanityAssetProps;
  siteUrl: string;
}

export interface MenuItem {
  title: string;
  slug: { current: string };
  highlight: boolean;
  submenu?: MenuItem[];
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
export interface HeroProps {
  _key: string;
  _type: string;
  awards: null;
  clients: null;
  heading: any[];
  items: null;
  navItem: NavItem;
  service: null;
  tagline: any[];
  video: Video;
}

export interface NavItem {
  _type: string;
}

export interface Video {
  hevc: string;
  webm: string;
}

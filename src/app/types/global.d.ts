declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.jpg";
declare module "*.png";
declare module "*.mp3";

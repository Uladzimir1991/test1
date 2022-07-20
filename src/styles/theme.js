export const theme = () => ({
  mediaDesktop1920up: (css) => `@media screen and (min-width:1920px){${css}}`,
  mediaDesktop1440up: (css) =>
    `@media screen and (min-width:1440px) and (max-width:1920px){${css}}`,
  mediaTablet1259: (css) =>
    `@media screen and (min-width:1024px) and (max-width:1259px){${css}}`,
  mediaDesktop1260: (css) => `@media screen and (min-width:1260px){${css}}`,
  media1024down: (css) => `@media screen and (max-width:1023px){${css}}`,
  media1280down: (css) => `@media screen and (max-width:1280px){${css}}`,
  media1300up: (css) => `@media screen and (min-width:1300px){${css}}`,
  media1300down: (css) =>
    `@media screen and (min-width:728px) and (max-width:1299px){${css}}`,
  mediaMobileSmall: (css) => `@media screen and (max-width:450px){${css}}`,
  mediaMobileMiddle: (css) =>
    `@media screen and (max-width:727px) and (min-width:451px){${css}}`,
  media360: (css) => `@media screen and (max-width:360px){${css})`,
  media470: (css) => `@media screen and (max-width:470px){${css})`,
  media630: (css) => `@media screen and (max-width:630px){${css})`,
  media470up: (css) =>
    `@media screen and (min-width:471px) and (max-width:541px){${css}}`,
  media542up: (css) =>
    `@media screen and (min-width:542px) and (max-width:727px){${css}}`,
  media1326: (css) =>
    `@media screen and (min-width:1215px) and (max-width:1326px){${css}}`,
  mediaDesktop1024: (css) =>
    `@media screen and (min-width:1024px) and (max-width:1215px){${css}}`,
  mediaTabletHigh: (css) =>
    `@media screen and (min-width:728px) and (max-width:1159px){${css}}`,
  mediaTabletMedium: (css) =>
    `@media screen and (min-width:850px) and (max-width:987px){${css}}`,
  mediaTabletLow: (css) =>
    `@media screen and (min-width:728px) and (max-width:849px){${css}}`,
  mediaMobile: (css) => `@media screen and (max-width:727px){${css}}`,
  mediaTablet: (css) =>
    `@media screen and (min-width:728px) and (max-width:1023px){${css}}`,
  mediaDesktop: (css) => `@media screen and (min-width:1024px){${css}}`,
  mediaDesktop1600UP: (css) => `@media screen and (min-width:1600px){${css}}`,
  mediaLandscape500down: (css) =>
    `@media screen and (orientation: landscape) and (max-height:499px){${css}}`,
  mainFont: 'font-family: "Montserrat", sans-serif; font-style: normal;',
  mainFontWeight: "font-weight: normal",
  mainFontSize: "font-size: 16px; line-height: 21px; font-weight: 400;",
  smallFontSize: "font-size: 14px; line-height: 17px; font-weight: 400;",
  designerFontSize: "font-size: 16px; line-height: 24px; font-weight: 400;",
  designerButtonsFontSize:
    'font-family: "Manrope"; font-size: 14px; line-height: 24px; font-weight: 600;',
  landingForSelector: "font-size: 16px; line-height: 19.2px; font-weight: 600;",
  landingSmallFontSize:
    "font-size: 14px; line-height: 19.12px; font-weight: 600;",
  landingSmallTitleFontSize:
    "font-size: 14px; line-height: 19.12px; font-weight: 400;",
  titleFontWeight: "font-weight: 600",
  titleFontSize: "font-size: 18px; line-height: 22px;",
  textArticleDesktopFontSize:
    ' font-family: "Manrope", sans-serif; font-style: normal; font-weight: 600;font-size: 18px;line-height: 22px;',
  textArticleMobileFontSize:
    ' font-family: "Manrope", sans-serif; font-style: normal; font-weight: 600;font-size: 16px;line-height: 19px;',
  textArticleMobile360FontSize:
    ' font-family: "Manrope", sans-serif; font-style: normal; font-weight: 400;font-size: 13px;line-height: 17px;',
  textArticleForTextFontSize:
    ' font-family: "Manrope", sans-serif; font-style: normal; font-weight: 400; font-size: 16px; line-height:24px;',
  Manrope_Regular_16_T4:
    ' font-family: "Manrope", sans-serif; font-style: normal; font-weight: 400;font-size: 16px;line-height: 19px;',
  titleArticleDesktopFontSize:
    ' font-family: "Manrope", sans-serif; font-style: normal; font-weight: 600;font-size: 48px;line-height: 58px;',
  titleArticleTabletFontSize:
    ' font-family: "Manrope", sans-serif; font-style: normal; font-weight: 600;font-size: 36px;line-height: 43px;',
  titleArticleMobile360FontSize:
    ' font-family: "Manrope", sans-serif; font-style: normal; font-weight: 600;font-size: 18px;line-height: 19px;',
  Manrope_Semibold_14_H7:
    ' font-family: "Manrope", sans-serif; font-style: normal; font-weight: 600;font-size: 14px;line-height: 17px;',
  Manrope_Regular_14_H7:
    ' font-family: "Manrope", sans-serif; font-style: normal; font-weight: 400;font-size: 14px;line-height: 19px;',
  Manrope_Semibold_20_H4:
    ' font-family: "Manrope", sans-serif; font-style: normal; font-weight: 600;font-size: 20px;line-height: 24px;',
  titleArticleMobileFontSize:
    ' font-family: "Manrope", sans-serif; font-style: normal; font-weight: 600;font-size: 24px;line-height: 29px;',
  viewsCountNumberFontSize:
    ' font-family: "Manrope", sans-serif; font-style: normal; font-weight: 400;font-size: 14px;line-height: 17px;',
  termsOfPersonalDataProcessing:
    " font-size: 12px; line-height: 14px; font-weight: 400;",
  mainColor: "#29414D",
  whiteColor: "#fff",
  lightGreyColor: "#ccc",
  titleColor: "#363636",
  darkTextColor: "#131313",
  darkColor: "#2C2F30",
  lightTextColor: "#D4DEE0",
  landingTitleTextColor: "#2c2f30",
  mainBackground: "#F1F1EC",
  firtsScreenBackground: "/images/new_firstScreen.png",
  mainLightBackground: "#F8F8F8",
  newMainColor: "#5895C7",
  yellowColor: "#F7BD42",
  crumbSecondItemColor: "#ACACAC",
  designerTitleColor: "#FEFEFE",
  designerCountColor: "#A5B2BA",
  designerColorText: "#2c2f30",
  hoverColor: "#f7bd42",

  buttonStyle:
    "background-color: #5895C7; border-radius: 5px; color: #FEFEFE; border: none;",
  inputBorder: "border: 1px solid #ECF0F2; border-radius: 5px;",
  inputError: "color: #f54248; font-size: 14px; margin-top: 5px;",
  inputSuccess: "color: #7bf542; font-size: 14px; margin-top: 5px;",
  inputCheck: "color: #f5c842; font-size: 14px; margin-top: 5px;",
  contractorBackground: "#ecf0f2",
  subtitleWindow:
    "font-size: 13px; " +
    "font-weight: normal; " +
    "line-height: 17px; " +
    "text-transform: uppercase; " +
    "color: #787878;" +
    'font-family: "Manrope", sans-serif; font-style: normal;' +
    "padding-top: 2%;",
  textSpeakWindow:
    "font-family: Manrope;" +
    "font-style: normal;" +
    "font-weight: normal;" +
    "font-size: 14.9173px;" +
    "line-height:19px;",
  mainArticleForNavDesktopPadding: "padding: 99px 5% 0 5%;",
  mainArticleForNavTabletPadding: "padding: 74px 3% 0;",
  mainArticleForNavMobilePadding: "padding: 5px 2% 18px;",
  mainArticleForSectionDesktopPadding: "padding: 96px 5%  96px 5%;",
  mainArticleForSectionTabletPadding: "padding: 48px 3% 0;",
  mainArticleForSectionMobilePadding: "padding: 61px 2% 0;",
  mainDesktopPadding: "padding: 10% 5%;",
  mainMobilePadding: "padding:  32px 4%;",
  mainTabletPadding: "padding:  6%;",
  mainLineHeight: "line-height: 120%",
  profileMainPadding: "0 5%;",
  titleBlockDesktopFontSize:
    "font-size: 36px; line-height: 47px; font-weight: 700;",
  titleBlockMobileFontSize:
    "font-size: 24px; line-height: 29px; font-weight: 700;",
  hasNoInDiv: "display: none;",
  mainContentDesktopPadding: "padding: 160px 5% 0 5%;",
  mainContentTabletPadding: "padding: 100px 6% 80px;",
  mainContentMobilePadding: "padding: 70px 4% 64px;",
  footerBG:
    'background-image: url("/images/BG/footer.png"); ' +
    "background-size: cover; " +
    "background-position: center;",
  conceptionBG:
    'background-image: url("/images/BG/conception.png"); ' +
    "background-size: cover; " +
    "background-position: center;",
  designersBlockBackground:
    'background-image: url("/images/MainPage/designersBlock.jpg");' +
    "background-size: cover; " +
    "background-position: center;",
  FSBuildingBackground:
    'background-image: url("/images/FS_building.png"); ' +
    "background-size: contain; " +
    "background-position: right; " +
    "background-repeat: no-repeat;",
  FSBigCloudBackground:
    'background-image: url("/images/FS_cloud.png");  ' +
    "background-position: left; " +
    "background-repeat: no-repeat;",
  FSSmallCloudBackground:
    'background-image: url("/images/FS_cloud.png");  ' +
    "background-position: center;" +
    "background-repeat: no-repeat;",
  ArticlesBackground:
    'background-image: url("/images/BG/articles_BG.png");  ' +
    "background-size: cover;" +
    "background-position-x: center;" +
    "background-repeat: no-repeat;",
  ArticlesArrowDownForFilter:
    'background-image: url("/arrowDownForArticles.svg");' +
    "background-repeat: no-repeat;" +
    "background-size: 20px 9px;" +
    "background-position: 93% 50%;",
  ArticlesArrowUpForFilter:
    'background-image: url("/arrowUpForArticles.svg");' +
    "background-repeat: no-repeat;" +
    "background-size: 25px 70%;" +
    "background-position: 94% 50%;",

  BG_desktop:
    'background-image: url("/assets/BG.png");' +
    "background-size: cover;" +
    "background-repeat: no-repeat;" +
    "width: 100vw;" +
    "height: 100vh;",

  mainPagePadding: "padding: 95px 5%;",
  mainPageBtn:
    "cursor: pointer; " +
    "width: 228px; " +
    "height: 48px; " +
    "border: 1px solid #ecf0f2; " +
    "box-sizing: border-box; " +
    "border-radius: 5px; " +
    "font-weight: 600; " +
    "font-size: 14px; " +
    "line-height: 48px; " +
    "color: #2c2f30; " +
    "background-color: #fff;" +
    "text-align: center;",
  mainPageTitleWithBtn:
    "display: flex;" +
    "flex-direction: row;" +
    "justify-content: space-between;" +
    "align-items: center;",
  contractorBtnDesktopAndTablet:
    "font-size: 14px;" +
    "width: 245px;" +
    "height: fit-content;" +
    "align-self: center;" +
    "text-align: center;" +
    "margin: 0 15px 30px;" +
    "padding: 12px 60px;" +
    "background: transparent;" +
    "border: 1px solid #ECF0F2;" +
    "border-radius: 5px;",
  borderAndBorderRadiusButtons:
    "border: 1px solid #ECF0F2; border-radius: 5px;",
});

import { theme } from "antd";

const darkTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#F9A784",
    colorBgBase	: "#130F0D",
    colorTextBase: "#FEF6E0",
    
    // colorTextFooter: "#ffffff",
    // colorBgFooter: "#000000",
  },
  components: {
    // Button: {
    //   colorPrimary: "#6366f2;",
    //   colorPrimaryHover: "#9192f5",
    // },
    Segmented: {
      colorText: "#F9A784",
      colorBgElevated: '#2E2E2E33',
      
    },
    Breadcrumb: {
      colorText: "#FBBF84",
      colorTextDescription: "#A99F94B3"
    }
  },
};

const lightTheme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: "#BD5849",
    colorBgBase	: "#FDF6E9",
    colorTextBase: "#323D14",
    
    // colorBgFooter: "#3e3f97",
    // colorTextFooter: '#ffffff',
  },
  components: {
    // Button: {
    //   colorPrimary: "#6366f2;",
    //   colorPrimaryHover: "#9192f5",
    // },
    Segmented: {
      colorText: "#BD5849",
      colorBgElevated: '#F9F1E15C'
    },
    Breadcrumb: {
      colorText: "#C57D01",
      colorTextDescription: "#B1865866"
    }
  },
};

export { lightTheme, darkTheme };
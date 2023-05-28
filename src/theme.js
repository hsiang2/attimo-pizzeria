import { theme } from "antd";

const darkTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#F9A784",
    colorBgBase	: "#130F0D",
    colorTextBase: "#FEF6E0",
  },
  components: {
    Segmented: {
      colorText: "#F9A784",
      colorBgElevated: '#2E2E2E33',
      
    },
    Breadcrumb: {
      colorText: "#FBBF84",
      colorTextDescription: "#A99F94B3"
    },
    Tabs: {
      colorBorderSecondary: "#B8B8B84D"
    },
    Input: {
      colorBorder: "#B8B8B84D",
      colorBgContainer: "transparent"
    },
    Select: {
      colorBorder: "#B8B8B84D",
      colorBgContainer: "transparent"
    },
    DatePicker: {
      colorBorder: "#B8B8B84D",
      colorBgContainer: "transparent"
    },
    Checkbox: {
      colorBorder: "#FEF6E0",
      colorBgContainer: "transparent"
    }
  },
};

const lightTheme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: "#BD5849",
    colorBgBase	: "#FDF6E9",
    colorTextBase: "#323D14",
  },
  components: {
    Segmented: {
      colorText: "#BD5849",
      colorBgElevated: '#F9F1E15C'
    },
    Breadcrumb: {
      colorText: "#C57D01",
      colorTextDescription: "#B1865866"
    },
    Tabs: {
      colorBorderSecondary: "#00000016"
    },
    Input: {
      colorBorder: "#AFAFAF",
      colorBgContainer: "transparent",
      colorInfoBgHover: "transparent"
    },
    Select: {
      colorBorder: "#AFAFAF",
      colorBgContainer: "transparent",
      colorInfoBgHover: "transparent"
    },
    DatePicker: {
      colorBorder: "#AFAFAF",
      colorBgContainer: "transparent",
      colorInfoBgHover: "transparent"
    },
    Checkbox: {
      colorBorder: "#323D14",
      colorBgContainer: "transparent"
    }
  },
};

export { lightTheme, darkTheme };
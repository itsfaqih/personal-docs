import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Faqih Docs</span>,
  project: {
    link: "https://github.com/itsfaqih/personal-docs",
  },
  docsRepositoryBase: "https://github.com/itsfaqih/personal-docs",
  footer: {
    text: "Faqih's Docs",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s | Faqih Muntashir's Docs",
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Faqih Muntashir's Docs" />
      <meta
        property="og:description"
        content="Faqih Muntashir's personal documentation"
      />
    </>
  ),
};

export default config;

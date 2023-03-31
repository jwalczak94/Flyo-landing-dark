module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      boxShadow: {
        testimonial: ["0px 0px 8px 4px rgba(56, 56, 56, 0.046)"],
      },
      colors: {
        whiteColor: "hsl(0, 0%, 100%)",
        accentCyan: "hsl(176, 68%, 64%)",
        accentCyanHover: "hsl(186, 62%, 72%)",
        accentBlue: "hsl(198, 60%, 50%)",
        accentBlueHover: "hsl(186, 62%, 72%)",
        warningColor: "hsl(0, 100%, 63%)",
        bgBody: "hsl(218, 28%, 13%)",
        bgFooter: "hsl(216, 53%, 9%)",
        bgTestimonial: "hsl(219, 30%, 18%)",
        bgCards: "hsl(217, 28%, 15%)",
        fontDark: "hsl(243, 87%, 12%)",
      },
      fontFamily: {
        headingFont: ["Raleway", "sans-serif"],
        bodyFont: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        xsLG: ["0.875rem"],
        textBase: ["1rem"],
        textInput: ["0.75rem"],
        xs: ["0.625rem"],
        sm: [
          "clamp(0.75rem, 0.662rem + 0.3756vw, 1rem);",
          {
            LineHeight: "1.17",
          },
        ],
        base: ["clamp(0.875rem, 0.831rem + 0.1878vw, 1rem)"],
        baseHeader: ["clamp(0.875rem, 0.5172rem + 1.5267vw, 1.25rem)"],
      },
      screens: {
        sm: "600px",
        md: "768px",
        lg: "976px",
        xl: "1200px",
        xxl: "1440px",
      },

      gridTemplateColumns: {
        2: "1fr auto",
        boxTest: "repeat(auto-fill, minmax(13rem, 1fr))",
        boxTestLG: "repeat(3,1fr)",
        box: "repeat(auto-fill, minmax(18rem, 1fr))",
        boxLG: "repeat(2, 22.755rem)",
        sectionProductive: "1fr 1fr",
      },
      gridTemplateRows: {
        rowLG: "repeat(2, 13.375rem)",
      },
    },
  },
  plugins: [],
};

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    sm: "4rem",
                    lg: "6rem",
                    xl: "6rem",
                    "2xl": "10rem"
                }
            },
            width: {
                landingPage: "36.25rem"
            },
            boxShadow: {
                navbar: "0px 4px 12px rgba(0, 0, 0, 0.08);",
                testimonialCard: "0px 4px 8px rgba(0, 0, 0, 0.12);",
                testimonialCardHover: "0px 4px 8px rgba(0, 0, 0, 0.16);"
            },
            fontFamily: {
                heading: ["Nunito", "ui-sans-serif"],
                body: ["Poppins", "ui-sans-serif"]
            },
            fontSize: {
                xxs: "0.75rem"
            },
            lineHeight: {
                "extra-loose": "4rem"
            },
            colors: {
                body: "#FDFCF6",
                footer: "#EDCF80",
                link: "#634C2A",
                title: "#574E5A",
                subTitle: "#595959",
                button: "#FFFCE5",
                start: "#FE933E",
                youtube: "#FB7A7A",
                donate: "#54C280",
                faq: "#53B7DD",
                testimonial: "#634C2A",
                FAQAccordion: "#7D6B50",
                FAQAccordionStroke: "#574E5A"
            }
        }
    },
    plugins: []
};

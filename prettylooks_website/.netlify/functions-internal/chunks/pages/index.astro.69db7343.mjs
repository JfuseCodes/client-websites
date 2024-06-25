/* empty css                           */import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, f as renderComponent } from '../astro.4061ee68.mjs';
import 'html-escaper';
import { useState, useEffect } from 'react';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useForm, ValidationError } from '@formspree/react';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const HamburgerIcon = () => {
  return /* @__PURE__ */ jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ jsx("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    })
  });
};
const CancelIcon = () => {
  return /* @__PURE__ */ jsx("svg", {
    className: "fill-black",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ jsx("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M6 18L18 6M6 6l12 12"
    })
  });
};
const RightArrowIcon = () => {
  return /* @__PURE__ */ jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ jsx("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
    })
  });
};
const FaceBookIcon = ({
  width,
  height
}) => {
  return /* @__PURE__ */ jsxs("svg", {
    className: `${width} ${height}`,
    viewBox: "0 0 128 128",
    children: [/* @__PURE__ */ jsx("rect", {
      fill: "#3d5a98",
      x: "4.83",
      y: "4.83",
      width: "118.35",
      height: "118.35",
      rx: "6.53",
      ry: "6.53"
    }), /* @__PURE__ */ jsx("path", {
      fill: "#fff",
      d: "M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0091 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"
    })]
  });
};
__astro_tag_component__(HamburgerIcon, "@astrojs/react");
__astro_tag_component__(CancelIcon, "@astrojs/react");
__astro_tag_component__(RightArrowIcon, "@astrojs/react");
__astro_tag_component__(FaceBookIcon, "@astrojs/react");

function ModalHeader({
  handleClick
}) {
  return /* @__PURE__ */ jsx("header", {
    className: "text-right",
    children: /* @__PURE__ */ jsx("button", {
      onClick: handleClick,
      type: "button",
      className: "btn",
      "aria-label": "Close navigation",
      children: /* @__PURE__ */ jsx(CancelIcon, {})
    })
  });
}
__astro_tag_component__(ModalHeader, "@astrojs/react");

function ModalNav({
  modalLinkClick
}) {
  return /* @__PURE__ */ jsx("nav", {
    role: "navigation",
    children: /* @__PURE__ */ jsxs("ul", {
      className: "flex flex-col",
      children: [/* @__PURE__ */ jsx("li", {
        children: /* @__PURE__ */ jsx("a", {
          onClick: modalLinkClick,
          className: "block py-4 text-center text-xl",
          href: "#featured_looks",
          children: "Featured Looks"
        })
      }), /* @__PURE__ */ jsx("li", {
        children: /* @__PURE__ */ jsx("a", {
          onClick: modalLinkClick,
          className: "block py-4 text-center text-xl",
          href: "#gallery",
          children: "Gallery"
        })
      }), /* @__PURE__ */ jsx("li", {
        children: /* @__PURE__ */ jsx("a", {
          onClick: modalLinkClick,
          className: "block py-4 text-center text-xl",
          href: "#about_me",
          children: "About Me"
        })
      })]
    })
  });
}
__astro_tag_component__(ModalNav, "@astrojs/react");

function Header({
  modalState,
  handleModalOpen,
  modalHidden,
  handleModalClose,
  modalLinkClick
}) {
  return /* @__PURE__ */ jsxs("header", {
    className: "flex z-40 w-full items-center justify-between border-transparent px-2 py-8 lg:px-4 mx-auto max-w-6xl",
    children: [/* @__PURE__ */ jsx("a", {
      className: `${modalState}`,
      children: /* @__PURE__ */ jsx("img", {
        className: "absolute w-24 top-0",
        src: "./prettylookslogo.png",
        alt: ""
      })
    }), /* @__PURE__ */ jsx("div", {
      children: /* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsx("nav", {
          className: "hidden sm:block",
          role: "navigation",
          children: /* @__PURE__ */ jsxs("ul", {
            className: "flex items-center gap-6",
            children: [/* @__PURE__ */ jsx("li", {
              children: /* @__PURE__ */ jsx("a", {
                className: "text-md",
                href: "#featuredlooks",
                children: "Featured Looks"
              })
            }), /* @__PURE__ */ jsx("li", {
              children: /* @__PURE__ */ jsx("a", {
                className: "text-md",
                href: "#gallery",
                children: "Gallery"
              })
            }), /* @__PURE__ */ jsx("li", {
              children: /* @__PURE__ */ jsx("a", {
                className: "text-md",
                href: "#aboutme",
                children: "About Me"
              })
            })]
          })
        }), /* @__PURE__ */ jsx("button", {
          onClick: handleModalOpen,
          className: `sm:hidden ${modalState}`,
          children: /* @__PURE__ */ jsx(HamburgerIcon, {})
        })]
      })
    }), /* @__PURE__ */ jsx("div", {
      id: "menu-modal",
      className: `modal ${modalHidden}`,
      "aria-hidden": "false",
      children: /* @__PURE__ */ jsx("div", {
        className: "fixed inset-0 bg-default px-8 py-4 text-default",
        children: /* @__PURE__ */ jsxs("div", {
          className: "space-y-6",
          role: "dialog",
          "aria-modal": "true",
          children: [/* @__PURE__ */ jsx(ModalHeader, {
            handleClick: handleModalClose
          }), /* @__PURE__ */ jsx(ModalNav, {
            modalLinkClick
          })]
        })
      })
    })]
  });
}
__astro_tag_component__(Header, "@astrojs/react");

function Landing() {
  return /* @__PURE__ */ jsxs("section", {
    className: "md:flex py-12",
    children: [/* @__PURE__ */ jsxs("header", {
      className: "min-h-full",
      children: [/* @__PURE__ */ jsx("h3", {
        className: "py-4 text-2xl md:text-xl",
        children: "Hi, my name is Juday."
      }), /* @__PURE__ */ jsx("h1", {
        className: "py-4 text-5xl md:text-7xl font-black",
        children: "I'm a Hair and Makeup Artist."
      }), /* @__PURE__ */ jsx("p", {
        className: "py-2 text-xl md:w-4/5 lg:w-3/5",
        children: "I have expertise in stunning makeup looks for all occasions, bringing out your best features."
      }), /* @__PURE__ */ jsx("div", {
        className: "pt-10",
        children: /* @__PURE__ */ jsx("a", {
          href: "#contact",
          children: /* @__PURE__ */ jsx("button", {
            className: "bg-[#f9d07e] opacity-100 font-bold w-full max-w-[475px] sm:w-[210px] h-12 rounded-full border-[.5px] border-b-[3px] border-r-[3px] border-solid border-[#1E1E1E] hover:shadow-button hover:-translate-y-2 hover:-translate-x-2 ease-in-out duration-300 lg:w-52",
            children: "Book Me"
          })
        })
      })]
    }), /* @__PURE__ */ jsx("div", {
      children: /* @__PURE__ */ jsx("img", {
        className: "sm:w-[60rem]",
        src: "./assets/landing_page/landing.png",
        alt: ""
      })
    })]
  });
}
__astro_tag_component__(Landing, "@astrojs/react");

const OfferCard = ({
  image,
  title,
  description,
  callToAction,
  imageALT,
  href
}) => {
  return callToAction && href ? /* @__PURE__ */ jsxs("a", {
    href: `#${href}`,
    className: "border-[.5px] border-solid border-[#1E1E1E] max-w-6xl space-y-2 p-4 hover:shadow-button rounded-xl hover:-translate-y-2 hover:-translate-x-2 ease-in-out duration-300 border-b-4 border-r-4 text-justify",
    children: [/* @__PURE__ */ jsx("img", {
      src: `./assets/offer_cards/logo_${image}.png`,
      alt: `${imageALT}`
    }), /* @__PURE__ */ jsx("h1", {
      className: "font-black text-2xl",
      children: title
    }), /* @__PURE__ */ jsx("p", {
      className: "text-md",
      children: description
    }), callToAction && /* @__PURE__ */ jsxs("p", {
      className: "hover:text-gray-600 flex",
      children: [callToAction, /* @__PURE__ */ jsx("span", {
        className: "ml-2",
        children: /* @__PURE__ */ jsx(RightArrowIcon, {})
      }), " "]
    })]
  }) : /* @__PURE__ */ jsxs("div", {
    className: "border-[.5px] border-solid border-[#1E1E1E] max-w-6xl space-y-2 p-4 hover:shadow-button rounded-xl hover:-translate-y-2 hover:-translate-x-2 ease-in-out duration-300 border-b-4 border-r-4",
    children: [/* @__PURE__ */ jsx("img", {
      src: `./assets/offer_cards/logo_${image}.png`,
      alt: `${imageALT}`
    }), /* @__PURE__ */ jsx("h1", {
      className: "font-black text-2xl",
      children: title
    }), /* @__PURE__ */ jsx("p", {
      children: description
    })]
  });
};
const EventCard = ({
  image,
  imageALT,
  title,
  description,
  imageSide
}) => {
  const direction = imageSide == "left" ? "md:flex-row" : "md:flex-row-reverse";
  return /* @__PURE__ */ jsxs("div", {
    className: `border-b-[.1px] border-[#1E1E1E] flex flex-col ${direction} bg-white`,
    children: [/* @__PURE__ */ jsx("img", {
      className: "w-screen md:max-w-[50%]",
      src: `./assets/featured_looks/featured_look_${image}.jpeg`,
      alt: `${imageALT}`
    }), /* @__PURE__ */ jsxs("div", {
      className: "md:w-[40%] flex flex-col justify-center px-10 text-center md:mx-auto py-10 bg-white",
      children: [/* @__PURE__ */ jsx("h1", {
        className: "text-4xl font-black md:self-start",
        children: title
      }), /* @__PURE__ */ jsx("p", {
        className: "text-l md:text-xl mt-8 w-full text-justify",
        children: description
      })]
    })]
  });
};
const Image = ({
  src
}) => {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("img", {
      className: "w-full h-full",
      src: `./assets/gallery/fl${src}.jpeg`,
      alt: "make up look"
    })
  });
};
const ContactForm = () => {
  const [state, handleSubmit] = useForm("mzblelzd");
  if (state.succeeded) {
    return /* @__PURE__ */ jsx("h1", {
      className: "text-12 text-center md:text-4xl md:w-1/2 font-black mt-12 md:mt-24",
      children: "Thank you for choosing me to be your makeup artist, I will get back to you shortly!"
    });
  } else
    return /* @__PURE__ */ jsxs("form", {
      className: "flex flex-col md:flex-col md:w-1/2 mt-12",
      onSubmit: handleSubmit,
      children: [/* @__PURE__ */ jsx("input", {
        className: "h-12 rounded-full border-[.5px] border-b-[3px] border-r-[3px] border-solid border-[#1E1E1E] mb-4 pl-6",
        placeholder: "*Your name",
        type: "text",
        id: "full-name",
        name: "full-name"
      }), /* @__PURE__ */ jsx("input", {
        className: "h-12 rounded-full border-[.5px] border-b-[3px] border-r-[3px] border-solid border-[#1E1E1E] mb-4 pl-6",
        placeholder: "*Your email",
        id: "email",
        type: "email",
        name: "email"
      }), /* @__PURE__ */ jsx(ValidationError, {
        prefix: "Email",
        field: "email",
        errors: state.errors
      }), /* @__PURE__ */ jsx("textarea", {
        className: "rounded-3xl border-[.5px] border-b-[3px] border-r-[3px] border-solid border-[#1E1E1E] mb-4 pl-6 pt-6",
        placeholder: "*How can I help?",
        id: "message",
        name: "message",
        cols: "30",
        rows: "10",
        rows: "5"
      }), /* @__PURE__ */ jsx(ValidationError, {
        prefix: "Message",
        field: "message",
        errors: state.errors
      }), /* @__PURE__ */ jsx("button", {
        className: "bg-[#f9d07e] opacity-100 font-bold w-full max-w-[475px] sm:w-[210px] h-12 rounded-full border-[.5px] border-b-[3px] border-r-[3px] border-solid border-[#1E1E1E] hover:shadow-button hover:-translate-y-2 hover:-translate-x-2 ease-in-out duration-300 lg:w-52",
        type: "submit",
        disabled: state.submitting,
        children: "Message Me"
      })]
    });
};
__astro_tag_component__(OfferCard, "@astrojs/react");
__astro_tag_component__(EventCard, "@astrojs/react");
__astro_tag_component__(Image, "@astrojs/react");
__astro_tag_component__(ContactForm, "@astrojs/react");

const data = [{
  cards: [{
    id: 1,
    imgName: "creative-design",
    alt: "comb, lipstick and eyelash brush",
    title: "Creative Design",
    description: "I specialize in creating stunning makeup looks for various occasions, using my expertise in color theory, contouring, and precision application techniques.",
    action: "See my work",
    href: "gallery"
  }, {
    id: 2,
    imgName: "professionalism",
    alt: "business woman",
    title: "Professionalism",
    description: "You can trust that you are in the hands of a professional who is committed to delivering exceptional results, prioritizing your satisfaction, and creating a memorable and experience."
  }, {
    id: 3,
    imgName: "consistency",
    alt: "thumbs up",
    title: "Consistency",
    description: "I strive to build trust and long-term relationships with my clients. You can trust in my ability to leaving you feeling beautiful and confident every time.",
    action: "Contact me",
    href: "contact"
  }],
  featured_looks: [{
    id: 1,
    imgName: `featured_look_1`,
    alt: "girl with makeup",
    details: {
      title: "Event Name",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore reiciendis velit voluptates facilis sint accusantium id vero pariatur consequatur ex quam, dolores ullam? Ea, error veritatis nobis deserunt dolorem rerum?"
    },
    imageSide: "left"
  }, {
    id: 2,
    imgName: `featured_look_2`,
    alt: "girl with makeup",
    details: {
      title: "Event Name",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore reiciendis velit voluptates facilis sint accusantium id vero pariatur consequatur ex quam, dolores ullam? Ea, error veritatis nobis deserunt dolorem rerum?"
    },
    imageSide: "right"
  }],
  gallery: [{
    id: 1,
    src: "fl"
  }, {
    id: 2,
    src: "fl"
  }, {
    id: 3,
    src: "fl"
  }, {
    id: 4,
    src: "fl"
  }, {
    id: 5,
    src: "fl"
  }, {
    id: 6,
    src: "fl"
  }, {
    id: 7,
    src: "fl"
  }, {
    id: 8,
    src: "fl"
  }, {
    id: 9,
    src: "fl"
  }, {
    id: 10,
    src: "fl"
  }, {
    id: 11,
    src: "fl"
  }, {
    id: 12,
    src: "fl"
  }, {
    id: 13,
    src: "fl"
  }, {
    id: 14,
    src: "fl"
  }, {
    id: 15,
    src: "fl"
  }, , {
    id: 16,
    src: "fl"
  }, {
    id: 17,
    src: "fl"
  }, {
    id: 18,
    src: "fl"
  }]
}];

function Introduction() {
  console.log(data);
  return /* @__PURE__ */ jsxs("section", {
    className: "flex flex-col items-center gap-8 mt-8",
    children: [/* @__PURE__ */ jsxs("header", {
      className: "text-center",
      children: [/* @__PURE__ */ jsx("h3", {
        className: "text-2xl mb-4",
        children: "Driven by Beauty, Guided by Expertise"
      }), /* @__PURE__ */ jsx("h1", {
        className: "font-black text-5xl mb-4",
        children: "What I Offer"
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "",
      children: /* @__PURE__ */ jsx("div", {
        className: "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
        children: data && data[0].cards.map((card) => {
          return /* @__PURE__ */ jsx(OfferCard, {
            image: card.imgName,
            alt: card.alt,
            title: card.title,
            description: card.description,
            callToAction: card.action,
            href: card.href
          }, card.id);
        })
      })
    })]
  });
}
__astro_tag_component__(Introduction, "@astrojs/react");

function FeaturedLooks() {
  return /* @__PURE__ */ jsx("section", {
    id: "featured_looks",
    className: "mt-24 mb-20 mx-auto",
    children: /* @__PURE__ */ jsxs("div", {
      className: "fluid",
      children: [/* @__PURE__ */ jsx("h1", {
        className: "text-5xl font-black text-center mb-12",
        children: "Featured Looks"
      }), data[0].featured_looks.map((event) => {
        return /* @__PURE__ */ jsx(EventCard, {
          image: event.id,
          imageAlt: event.alt,
          title: event.details.title,
          description: event.details.description,
          imageSide: event.imageSide
        }, event.id);
      })]
    })
  });
}
__astro_tag_component__(FeaturedLooks, "@astrojs/react");

function Gallery() {
  console.log(`data:${data[0]}`);
  return /* @__PURE__ */ jsxs("section", {
    id: "gallery",
    className: "mt-24 mb-20 mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      className: "text-5xl font-black text-center mb-16",
      children: "Gallery"
    }), /* @__PURE__ */ jsx("div", {
      className: "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6",
      children: data[0].gallery.map((image) => {
        return /* @__PURE__ */ jsx(Image, {
          className: "w-full h-full",
          src: image.id
        }, image.id);
      })
    })]
  });
}
__astro_tag_component__(Gallery, "@astrojs/react");

function AboutMe() {
  return /* @__PURE__ */ jsxs("section", {
    id: "about_me",
    className: "px-6 w-full mx-auto max-w-6xl lg:px-10",
    children: [/* @__PURE__ */ jsx("h1", {
      className: "mb-16 text-5xl font-black text-center",
      children: "About Me"
    }), /* @__PURE__ */ jsxs("div", {
      className: "text-xl",
      children: [/* @__PURE__ */ jsx("p", {
        className: "my-4",
        children: "Kamusta? Ako si Juday isang professional makeup artist sa bansang tinaguriang “happiest country in the world, Philippines!Bata pa lang ako nasa puso ko na ang humawak ng mga makukulay na gamit, isa sa mga talentong nabihasa ko ay ang pagmamakeup. Nagsimula ‘to no’ng sinubukan akong ayusan ng aking pinsan at nakita ko na ang saya ng kulay ng nasa mukha ko. Hindi ko inaasahan na ang isang masasabi kong nakahiligan ko lang ay magiging bunga ng isang magandang talento."
      }), /* @__PURE__ */ jsx("p", {
        className: "my-4",
        children: "Bago ang isa sa pinaka dilubyong nangyari sa mundo no’ng 2021, ang covid19, Isa akong Guro sa sekondarya sa pribadong paaralan Manila. Sa mga panahon na ‘yon isinanbi ko ang pagiging artist na nagtrabaho ng regular kasama ang mga mahal kong Estudante, pero dahil na rin sa pandemya napilitan akong umalis sa pagtuturo at wlang trabaho ng mahigit 3 buwan. Sa mga panahong ‘yon wala akong nakitang pwedeng pagkaabalahan kundi ang pag-aayos sa sarili habang nagbabakasakaling makahanap ng work from home na trabaho. Mas lalo akong nahasa at maswete naman na naiisingit ko pa rin ang regular kong trabaho at pagiging artist. Dahil na rin sa mahigit walong taon kong pag-aayos sa mga iba’t ibang tao, masaya ako na makilala kayo na bigyan ng magandang serbisyo sa mga party/events niyong dadaluhan."
      }), /* @__PURE__ */ jsx("p", {
        className: "my-4",
        children: "Nagpapasalamat ako sa mga taong naging bahagi kung nasaan ako ngayon. Kung hindi dahil sa mga taong nagtiwala sa’kin mula no’ng bagohan pa lang ako hanggang ngayon at patuloy na nag-aaral ng mga makabaging teknik sa ganitong biyaya ay wala rin ako ngayon sa kung ano ang nakikita niyo. Kaya masaya akong makilala ang mga future clients ko para sa mga masayang events niyo sa buhay."
      })]
    })]
  });
}
__astro_tag_component__(AboutMe, "@astrojs/react");

function Contact() {
  return /* @__PURE__ */ jsxs("section", {
    id: "contact",
    className: "px-6 w-full mx-auto max-w-6xl lg:px-10 mt-20 flex flex-col md:flex-row md:justify-between",
    children: [/* @__PURE__ */ jsxs("section", {
      className: "md:w-1/2",
      children: [/* @__PURE__ */ jsx("h1", {
        className: "text-4xl font-black mb-16 text-center md:text-justify",
        children: "Just say hi."
      }), /* @__PURE__ */ jsx("p", {
        className: "md:text-2xl mb-4 md:w-[80%] text-center md:text-justify",
        children: "I am always open to discuss your hair and makeup needs."
      }), /* @__PURE__ */ jsx("p", {
        className: "md:text-xl text-slate-500 mb-[.2px] text-center md:text-justify mt-12",
        children: "Email me at"
      }), /* @__PURE__ */ jsx("p", {
        className: "md:text-2xl font-bold text-center md:text-justify",
        children: /* @__PURE__ */ jsx("a", {
          href: "mailto: prettylooksbyjuday@gmail.com",
          children: "prettylooksbyjuday@gmail.com"
        })
      }), /* @__PURE__ */ jsxs("section", {
        className: "hidden md:flex md:flex-col md:mt-12",
        children: [/* @__PURE__ */ jsx("header", {
          children: /* @__PURE__ */ jsx("h1", {
            className: "font-medium text-slate-500 mb-2",
            children: "Follow"
          })
        }), /* @__PURE__ */ jsx("a", {
          href: "https://www.facebook.com/PrettylooksbyJuday",
          children: /* @__PURE__ */ jsx(FaceBookIcon, {
            width: "w-8",
            height: "h-8"
          })
        })]
      })]
    }), /* @__PURE__ */ jsx(ContactForm, {})]
  });
}
__astro_tag_component__(Contact, "@astrojs/react");

function Footer() {
  return /* @__PURE__ */ jsxs("section", {
    className: "mx-auto flex flex-col items-center md:flex-row md:justify-between my-6 max-w-6xl px-6 lg:px-10",
    children: [/* @__PURE__ */ jsxs("header", {
      className: "text-center md:text-justify",
      children: [/* @__PURE__ */ jsx("a", {
        href: "https://www.facebook.com/PrettylooksbyJuday",
        className: "flex justify-center md:hidden",
        children: /* @__PURE__ */ jsx(FaceBookIcon, {
          height: "w-6",
          width: "h-6"
        })
      }), /* @__PURE__ */ jsx("h1", {
        children: "Juday Belmonte"
      }), /* @__PURE__ */ jsx("h1", {
        children: "Professional Hair & Makeup Artist"
      })]
    }), /* @__PURE__ */ jsx("footer", {
      className: "flex items-center text-center md:text-justify",
      children: /* @__PURE__ */ jsxs("p", {
        children: ["© 2023 JB ", /* @__PURE__ */ jsx("br", {}), "Developed by ", /* @__PURE__ */ jsx("a", {
          className: "underline underline-offset-auto",
          href: "https://jfusedesigns.com",
          children: "Jfuse"
        })]
      })
    })]
  });
}
__astro_tag_component__(Footer, "@astrojs/react");

function Main() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("main", {
      className: "px-6 w-full mx-auto max-w-6xl lg:px-10",
      children: [/* @__PURE__ */ jsx(Landing, {}), /* @__PURE__ */ jsx(Introduction, {})]
    }), /* @__PURE__ */ jsx(FeaturedLooks, {}), /* @__PURE__ */ jsx(Gallery, {}), /* @__PURE__ */ jsx(AboutMe, {}), /* @__PURE__ */ jsx(Contact, {}), /* @__PURE__ */ jsx("hr", {
      className: "border-none mt-20 h-[.05rem] bg-black"
    }), /* @__PURE__ */ jsx(Footer, {})]
  });
}
__astro_tag_component__(Main, "@astrojs/react");

function App() {
  const [modalHidden, setModalHidden] = useState("hidden");
  const [modalState, setModalState] = useState("");
  const handleModalOpen = () => {
    console.log("open zeh modal");
    setModalHidden("");
  };
  const handleModalClose = () => {
    setModalHidden("hidden");
  };
  const handleModalLink = () => {
    setModalHidden("hidden");
  };
  useEffect(() => {
    modalHidden === "hidden" ? setModalState("") : setModalState("hidden");
  }, [modalHidden]);
  switch (modalHidden) {
    case "":
      return /* @__PURE__ */ jsx(Header, {
        modalLinkClick: handleModalLink,
        modalState,
        handleModalOpen,
        modalHidden,
        handleModalClose
      });
    case "hidden":
      return /* @__PURE__ */ jsxs(Fragment, {
        children: [/* @__PURE__ */ jsx(Header, {
          modalLinkClick: handleModalLink,
          modalState,
          handleModalOpen,
          modalHidden,
          handleModalClose
        }), /* @__PURE__ */ jsx(Main, {})]
      });
  }
}
__astro_tag_component__(App, "@astrojs/react");

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const metaDescription = "Elevate your beauty with a Manila-based freelance makeup artist. Transforming faces with artistic finesse and precision. Book now for a touch of makeup magic.";
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="Astro description">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
		<meta name="description"${addAttribute(metaDescription, "content")}>
		
		<!-- Google Tag Manager -->
			
	<!-- End Google Tag Manager -->
	${renderHead()}</head>
	<body>

		<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5H3KWMQS" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<!-- End Google Tag Manager (noscript) -->	

		${renderSlot($$result, $$slots["default"])}
	</body></html>`;
}, "/Users/JoshuaMendoza/JfuseCodes/client-websites/prettylooks_website/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pretty Looks by Juday", "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "App", App, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/JoshuaMendoza/JfuseCodes/client-websites/prettylooks_website/src/components/react/app", "client:component-export": "default", "class": "astro-J7PV25F6" })}
	
			
		
` })}`;
}, "/Users/JoshuaMendoza/JfuseCodes/client-websites/prettylooks_website/src/pages/index.astro", void 0);

const $$file = "/Users/JoshuaMendoza/JfuseCodes/client-websites/prettylooks_website/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

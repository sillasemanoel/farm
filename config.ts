export const config = {
  brand: {
    name: "Granja França",
    description:
      "Ovos caipiras de galinhas criadas soltas, alimentadas com ração natural e sem hormônios.",
    image: {
      src: "/assets/brand/logo.avif",
      alt: "Granja França",
    },

    contact: {
      whatsapp: "https://wa.me/5588981573429",
      phone: "(88) 98157-3429",
      email: "sillasemanoel.work@gmail.com",
    },
  },

  product: [
    {
      name: "Ovos Caipiras",
      description:
        "Ovos caipiras de galinhas criadas soltas, alimentadas com ração natural e sem hormônios.",
      image: [
        {
          src: "/assets/placeholder.svg",
          alt: "Bandeja de ovos caipiras",
        },
        {
          src: "/assets/product/scrambled-eggs-bread-sandwich.avif",
          alt: "Pão com ovos mexidos",
        },
      ],
      price: 12,
      available: true,
    },
  ],
} as const

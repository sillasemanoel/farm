export const product = [
  {
    id: "ovos-caipiras",
    name: "Ovos Caipiras",
    description:
      "Ovos caipiras de galinhas criadas soltas, alimentadas com ração natural e sem hormônios. Cada embalagem contém 15 ovos frescos, ideais para o consumo e receitas diárias.",
    variations: [
      {
        id: "ovos-caipiras-grandes",
        sku: "OVO-CAIP-G",
        images: [
          {
            src: "/assets/placeholder.svg",
            alt: "Ovos caipiras grandes.",
          },
          {
            src: "/assets/product/scrambled-eggs-bread-sandwich.avif",
            alt: "Pão francês recheado com ovos mexidos cremosos servido em um prato branco sobre mesa azul.",
          },
        ],
        size: "Grandes",
        price: 12,
        available: true,
      },
      {
        id: "ovos-caipiras-extra-grandes",
        sku: "OVO-CAIP-EG",
        images: [
          {
            src: "/assets/placeholder.svg",
            alt: "Ovos caipiras extra grandes.",
          },
          {
            src: "/assets/product/soft-boiled-egg-with-toast.avif",
            alt: "Ovo cozido com gema mole num suporte branco, sendo molhado com um pedaço de torrada crocante.",
          },
        ],
        size: "Extra Grandes",
        price: 16,
        available: true,
      },
    ],
  },
] as const

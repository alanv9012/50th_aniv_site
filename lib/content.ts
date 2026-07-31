export const siteContent = {
  couple: {
    nameOne: "Saul",
    nameTwo: "Socorro",
    displayNames: "Saul & Socorro",
  },
  anniversary: {
    milestone: "50",
    label: "Bodas de Oro",
    subtitle: "Cincuenta años de matrimonio",
    dedication:
      "Un camino de cincuenta años que hoy queremos celebrar junto a quienes más queremos.",
  },
  event: {
    date: "Viernes, 09 de octubre, 2026",
    time: "7:00 PM",
    venue: "Salón Jardínes Del Cedro",
    address: "Carretera Chihuahua-Aldama km 12.5, Chihuahua-Aldama, Valles de Chihuahua, 31620 Chihuahua, Chih.",
    mapsUrl: "https://maps.app.goo.gl/9zyW2zRdK7Jj6FTP6",
  },
  dressCode: {
    title: "Código de Vestimenta",
    style: "Vaquero Formal",
    gentlemen: {
      heading: "Caballeros",
      items: [
        "Camisa de vestir o vaquera",
        "Pantalón de mezclilla o vestir",
        "Botas",
        "Sombrero opcional",
      ],
    },
    ladies: {
      heading: "Damas",
      items: [
        "Vestido midi o largo",
        "Tacones o botas",
      ],
    },
  },
  invitation: {
    headline: "Acompáñanos a celebrar este día tan especial",
    body: [
      "Hace cincuenta años comenzamos una aventura juntos. Hoy queremos celebrar este hermoso camino rodeados de nuestra familia y amigos.",
    ],
  },
  rsvp: {
    headline: "Confirma tu asistencia",
    body: "Será una alegría celebrar juntos. Ayúdanos confirmando tu asistencia.",
    cta: "Confirmar asistencia",
    href: "#rsvp",
    mailto: "mailto:rsvp@example.com?subject=Confirmación%20Bodas%20de%20Oro",
  },
  gallery: {
    headline: "Recuerdos que atesoramos",
    body: "Algunos de los momentos que han marcado nuestra historia y que hoy recordamos con mucho cariño.",
  },
  location: {
    headline: "Cómo llegar",
    body: "Aquí celebraremos este momento tan especial. ¡Te esperamos!",
  },
  footer: {
    closing: "Con mucho cariño,",
    signature: "La familia de Saul y Socorro",
    note: "Tu compañía será nuestro mejor regalo.",
  },
} as const;

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    alt: "Pareja celebrando su aniversario con la familia reunida",
    caption: "Unión y celebración",
    featured: true,
  },
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    alt: "Manos entrelazadas de una pareja mayor",
    caption: "Manos que caminaron juntas",
    featured: false,
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
    alt: "Mesa elegante preparada para una celebración familiar",
    caption: "Mesas compartidas",
    featured: false,
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    alt: "Detalle floral en una mesa de celebración",
    caption: "Detalles con cariño",
    featured: false,
  },
  {
    src: "https://images.unsplash.com/photo-1520854221256-174851aa1fce?auto=format&fit=crop&w=800&q=80",
    alt: "Familia reunida en una celebración al aire libre",
    caption: "Generaciones unidas",
    featured: false,
  },
] as const;

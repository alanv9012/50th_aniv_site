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
      "Medio siglo caminando juntos, con la fe como guía y la familia como hogar.",
  },
  event: {
    date: "Viernes, 16 de octubre, 2026",
    time: "7:00 PM",
    venue: "Salón Jardínes Del Cedro",
    address: "Carretera Chihuahua-Aldama km 12.5, Chihuahua-Aldama, Valles de Chihuahua, 31620 Chihuahua, Chih.",
    mapsUrl: "https://maps.app.goo.gl/9zyW2zRdK7Jj6FTP6",
  },
  invitation: {
    headline: "Con el corazón lleno de gratitud",
    body: [
      "Hace cincuenta años dimos un sí que ha florecido en amor, fe, familia y recuerdos que hoy queremos celebrar juntos.",
      "Sería un honor contar con tu presencia en esta velada. Tu compañía llenaría de alegría a nuestra familia.",
    ],
  },
  rsvp: {
    headline: "Confirma tu asistencia",
    body: "Tu respuesta nos ayuda a recibirte con el cariño que mereces. Por favor avísanos si podrás acompañarnos.",
    cta: "Confirmar asistencia",
    href: "#rsvp",
    mailto: "mailto:rsvp@example.com?subject=Confirmación%20Bodas%20de%20Oro",
  },
  gallery: {
    headline: "Recuerdos que atesoramos",
    body: "Cincuenta años de vida compartida, guardados en fotografías, risas y momentos que hoy recordamos con ternura.",
  },
  location: {
    headline: "Cómo llegar",
    body: "Nos reuniremos en un salón céntrico y de fácil acceso. Estaremos felices de recibirte.",
  },
  footer: {
    closing: "Con amor y gratitud,",
    signature: "La familia de Saul y Socorro",
    note: "Tu presencia es el regalo que más valoramos.",
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

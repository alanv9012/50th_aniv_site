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
    dinnerTime: "7:30 PM",
    venue: "Salón Jardínes Del Cedro",
    address: "Carretera Chihuahua-Aldama km 12.5, Chihuahua-Aldama, Valles de Chihuahua, 31620 Chihuahua, Chih.",
    mapsUrl: "https://maps.app.goo.gl/9zyW2zRdK7Jj6FTP6",
  },
  dressCode: {
    title: "Código de Vestimenta",
    style: "Formal o Vaquero",
    gentlemen: {
      heading: "Caballeros",
      items: [
        "Camisa de vestir o vaquera",
        "Pantalón de vestir o mezclilla",
        "Zapato o Bota",
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
  scripture: {
    verse: "Te he amado con un amor eterno.",
    reference: "Jeremías 31:3",
  },
  music: {
    src: "/music/cancion.mp3",
    title: "50 años juntos",
    label: "The Lyrycal Lanterns",
  },
  rsvp: {
    headline: "Confirma tu asistencia",
    body: "Será una alegría celebrar juntos. Ayúdanos confirmando tu asistencia. Porfavor indica tu nombre y el numero de asistentes.",
    cta: "Confirmar asistencia",
    whatsappUrl:
      "https://wa.me/526141367141?text=" +
      encodeURIComponent(
        "Hola, confirmo mi asistencia al aniversario.\nFamilia: \nAsistentes:",
      ),
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
    src: "/images/aniv_14.jpg",
    alt: "Manos entrelazadas de Saul y Socorro",
    caption: "50 años de amor",
    featured: true,
  },
  {
    src: "/images/aniv_1.jpg",
    alt: "Recuerdo de Saul y Socorro",
    caption: "Juntos en el mar",
    featured: false,
    /** Match featured landscape framing (aniv_14) */
    aspect: "landscape" as const,
    objectPosition: "center",
  },
  {
    src: "/images/aniv_3.jpg",
    alt: "Recuerdo de Saul y Socorro",
    caption: "Nuestros renacuajos",
    featured: false,
  },
  {
    src: "/images/aniv_4.jpg",
    alt: "Recuerdo de Saul y Socorro",
    caption: "Empezando nuestra historia",
    featured: false,
  },
  {
    src: "/images/aniv_5.jpg",
    alt: "Recuerdo de Saul y Socorro",
    caption: "Disfrutando de la vida",
    featured: false,
  },
  {
    src: "/images/aniv_6.jpg",
    alt: "Recuerdo de Saul y Socorro",
    caption: "Compartiendo momentos en familia",
    featured: false,
  },
  {
    src: "/images/aniv_7.jpg",
    alt: "Recuerdo de Saul y Socorro",
    caption: "Llegaron los nietos",
    featured: false,
  },
  {
    src: "/images/aniv_8.jpg",
    alt: "Recuerdo de Saul y Socorro",
    caption: "El Sr. Saul y sus hijos",
    featured: false,
  },
  {
    src: "/images/aniv_9.jpg",
    alt: "Recuerdo de Saul y Socorro",
    caption: "Imitando a papá",
    featured: false,
    /** Keep heads in frame; crop legs if needed */
    objectPosition: "center top",
  },
  {
    src: "/images/aniv_10.jpg",
    alt: "Recuerdo de Saul y Socorro",
    caption: "En la adolesencia",
    featured: false,
  },
  {
    src: "/images/aniv_11.jpg",
    alt: "Recuerdo de Saul y Socorro",
    caption: "Con el preferido",
    featured: false,
    /** Keep heads in frame; crop legs if needed */
    objectPosition: "center top",
  },
] as const;

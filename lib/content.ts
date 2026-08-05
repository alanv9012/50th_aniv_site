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
    address:
      "Carretera Chihuahua-Aldama km 12.5, Chihuahua-Aldama, Valles de Chihuahua, 31620 Chihuahua, Chih.",
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
      items: ["Vestido midi o largo", "Tacones o botas"],
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
    label: "The Lyrical Lanterns",
  },
  rsvp: {
    headline: "Confirma tu asistencia",
    bodyBefore:
      "Será una alegría celebrar juntos. Ayúdanos confirmando tu asistencia a más tardar el",
    bodyHighlight: "20 de septiembre",
    bodyAfter: "Por favor indica tu nombre y el número de asistentes.",
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
    src: "/images/aniv_4.jpg",
    alt: "Recuerdo de Saul y Socorro",
    caption: "Empezando nuestra historia",
    objectPosition: "center top",
  },
  {
    src: "/images/aniv_3.jpg",
    alt: "Recuerdo de Saul y Socorro",
    caption: "Nuestros renacuajos",
  },
  {
    src: "/images/aniv_6.jpg",
    alt: "Recuerdo de Saul y Socorro",
    caption: "Compartiendo momentos en familia",
  },
  {
    src: "/images/aniv_5.jpg",
    alt: "Recuerdo de Saul y Socorro",
    caption: "Disfrutando de la vida",
  },
  {
    src: "/images/aniv_8.jpg",
    alt: "Recuerdo de Saul y Socorro",
    caption: "El Sr. Saul y sus hijos",
  },
  {
    src: "/images/aniv_9.jpg",
    alt: "Recuerdo de Saul y Socorro",
    caption: "Imitando a papá",
    objectPosition: "center top",
  },
  {
    src: "/images/aniv_11.jpg",
    alt: "Recuerdo de Saul y Socorro",
    caption: "Socorro con el preferido",
    objectPosition: "center top",
  },
  {
    src: "/images/aniv_7.jpg",
    alt: "Recuerdo de Saul y Socorro",
    caption: "Llegaron los nietos",
  },
  {
    src: "/images/aniv_10.jpg",
    alt: "Recuerdo de Saul y Socorro",
    caption: "Los hijos",
  },
  {
    src: "/images/aniv_15.jpg",
    alt: "Saul y Socorro",
    caption: "Juntos en familia",
    /** Wide photo — keep native aspect, no portrait crop */
    fit: "natural",
  },
  {
    src: "/images/aniv_14.jpg",
    alt: "Saul y Socorro abrazados",
    caption: "50 años de amor",
    /** Shift crop toward the couple (they sit left of center in the photo) */
    objectPosition: "38% 42%",
  },
] as const;

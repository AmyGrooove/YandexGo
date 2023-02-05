import {
  ARENDA1,
  ARENDA2,
  ARENDA3,
  TARIFF_1,
  TARIFF_2,
  TARIFF_3,
  TARIFF_BACK,
} from "@/theme/sources";

const headerNavigation = [
  {
    name: "Как арендовать самокат",
    url: "#rent",
  },
  {
    name: "Катайтесь с Плюсом",
    url: "#plus",
  },
  {
    name: "Катайтесь аккуратно",
    url: "#gently",
  },
  {
    name: "Где самокаты",
    url: "#where",
  },
];

const towns = [
  {
    name: "Москве",
    url: "#",
  },
  {
    name: "Санкт-петербурге",
    url: "#",
  },
  {
    name: "Краснодаре",
    url: "#",
  },
  {
    name: "Туле",
    url: "#",
  },
];

const arendaText = [
  {
    img: ARENDA1,
    text: "В Яндекс Go нажмите кнопку Самокаты",
  },
  {
    img: ARENDA2,
    text: "Найдите на карте ближайшую парковку",
  },
  {
    img: ARENDA3,
    text: "Дойдите до самоката и отсканируйте QR-код на руле",
  },
];

const tariffs = [
  {
    img: TARIFF_1,
    label: "Тариф Фикс",
    description:
      "Подойдет, если знаете точку назначения. Цена поездки фиксированная. Покажем её заранее.",
  },
  {
    img: TARIFF_2,
    label: "Тариф Поминутный",
    description:
      "Для прогулок по городу. Аренда: от 50 рублей + тариф от 7 рублей в минуту.",
  },
  {
    label1: "Опция",
    label2: "«Ещё один самокат»",
    description:
      "Нужна, чтобы забронировать с одного телефона до трёх самокатов одновременно. Да, и такое бывает",
  },
  {
    img: TARIFF_3,
    back: TARIFF_BACK,
    label: "Катайтесь с Плюсом",
    description:
      "Вернем 5% кешбэка баллами Плюса за каждую поездку. Кешбэк можно тратить в сервисах Яндекса",
  },
  {
    label: "На чём едем?",
    description1:
      "Ninebot Max Plus 2022 года выпуска. Красив и функционален. На его борту есть держатель для телефона с беспроводной зарядкой.",
    description2: "За 30 минут поездки зарядим ваш девайс на 40%",
  },
];

export { headerNavigation, towns, arendaText, tariffs };

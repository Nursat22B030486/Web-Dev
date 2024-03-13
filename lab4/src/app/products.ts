export interface Product {
    name : string;
    description: string;
    link : string;
    imgUrl: string;
    rating: number;
}


export const products = [
  {
    name: 'Смартфон Apple iPhone 15 Pro Max 256Gb серый',
    description: 'Apple iPhone 15 Pro Max - сверхпрочный флагман, изготовленный из титана. За бескомпромиссную производительность смартфона отвечает новейший чип Apple A17 Pro. Устройство получило передовую систему камер, продуманную эргономику, обновленный дизайн и новую программируемую кнопку.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    imgUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium',
    rating: 4.8
  },
  {
    name: 'Смартфон Samsung Galaxy A54 5G 8 ГБ/256 ГБ черный',
    description: 'технология NFC: Да\n' +
      'цвет: черный\n' +
      'тип экрана: Super AMOLED, сенсорный',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a54-5g-8-gb-256-gb-chernyi-110044379/?c=750000000',
    imgUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h81/h13/80435536887838.jpg?format=gallery-medium',
    rating: 4.9
  },
  {
    name: 'Смартфон Apple iPhone 13 128Gb зеленый',
    description: "Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко.",
    link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-zelenyi-104078887/?c=750000000",
    imgUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hd1/h2f/64255724159006.jpg?format=gallery-medium',
    rating: 4.7
  },
  {
    name:'Samsung Galaxy A33 5G 6 ГБ/128 ГБ черный',
    description:'Смартфон Galaxy A33 5G стал тоньше и элегантнее благодаря матовому покрытию, качественным рамкам и безупречному корпусу камеры с Ambient Edge.',
    link:"https://kaspi.kz/shop/p/samsung-galaxy-a33-5g-6-gb-128-gb-chernyi-104398547/?c=750000000",
    imgUrl:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h98/h3f/49894748028958/samsung-galaxy-a33-5g-6-gb-128-gb-cernyj-104398547-1.jpg',
    rating:4.7
  },
  {
    name: 'Смартфон Xiaomi Redmi Note 12 Pro 4G 8 ГБ/256 ГБ серый',
    description: '',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-pro-4g-8-gb-256-gb-seryi-109775102/?c=750000000',
    imgUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h02/ha0/79846423199774.jpg?format=gallery-medium',
    rating: 4.6
  },
  {
    name: 'Смартфон Poco C65 8 ГБ/256 ГБ синий',
    description: 'процессор: 8-ядерный MediaTek Helio G85\n' +
      'объем встроенной памяти: 256.0 ГБ\n' +
      'емкость аккумулятора: 5000.0 мАч',
    link: 'https://kaspi.kz/shop/p/poco-c65-8-gb-256-gb-sinii-115412663/?c=750000000',
    imgUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h42/h5a/84734932516894.jpg?format=gallery-medium',
    rating: 4.6
  },
  {
    name: 'Смарт-часы COLMI P28 Plus черный',
    description: 'поддержка платформ: Android, ,iOS\n' +
      'цвет корпуса: черный\n' +
      'форма корпуса: прямоугольная\n' +
      'интерфейсы: Bluetooth\n' +
      'время работы: 3-7 дней',
    link: 'https://kaspi.kz/shop/p/colmi-p28-plus-chernyi-106096505/?c=750000000',
    imgUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hb0/h7e/63639753555998.jpg?format=gallery-medium',
    rating: 4.3
  },
  {
    name: 'Смартфон Apple iPhone 15 Pro Max 256Gb белый',
    description: 'Аккумулятор смартфона обеспечивает до 29 часов беспрерывной работы устройства в режиме просмотра видео. За 30 минут зарядки смартфон восполняет 50% заряда.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-belyi-113138578/?c=750000000',
    imgUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hfc/h09/83560021983262.png?format=gallery-medium',
    rating: 5.0
  },
  {
    name: 'Смартфон Realme Note 50 4 ГБ/128 ГБ черный',
    description: 'технология NFC: Нет\n' +
      'цвет: черный\n' +
      'тип экрана: IPS, сенсорный\n' +
      'диагональ: 6.74 дюйм',
    link: 'https://kaspi.kz/shop/p/realme-note-50-4-gb-128-gb-chernyi-116138550/?c=750000000',
    imgUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hd6/hcf/84991826722846.png?format=preview-large',
    rating: 4.8
  },
  {
    name: 'Смартфон Apple iPhone 15 Pro Max 256Gb синий',
    description: 'Apple iPhone 15 Pro Max - сверхпрочный флагман, изготовленный из титана. За бескомпромиссную производительность смартфона отвечает новейший чип Apple A17 Pro.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-sinii-113138428/?c=750000000',
    imgUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h64/h50/83559848575006.png?format=gallery-medium',
    rating: 5.0
  },
]

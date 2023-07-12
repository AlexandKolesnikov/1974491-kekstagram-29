/**тексты
 * отсюда мы должны будем брать тексты комментария и использовать
 *
 */
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

/**имя пользователя
 * отсюда берем для структуры
 *
 */
const USERS_NAME = [
  'Роман',
  'Татьяна',
  'Оксана',
  'Лера',
  'Александр',
  'Александра',
  'Максим',
  'Марина',
  'Вераника-Чика-Чика'
];

/**описание фотографий
 * отсуда берем описания фото
 *
 */
const DESCRIPTIONS_PHOTO = [
  'Дождь',
  'Где закат?',
  'Волны будут',
  'Угощайся',
  'Попугаи смеются',
  'Кошечки',
  'Дорога будет?',
  'ЗАчем мы здесь?',
  'Смысла нет'
];

/**количество загруженных фотографий
 * устанавливаем количество загружаемых фотографий. Количество по заданию
 *
 */
const NUMBER_OF_ALL_PHOTO = 25;

/**количество лайков
 * пределы выбраны по заданию
 *
 */
const NUMBER_OF_LIKES = {
  MIN: 15,
  MAX: 200,
};

/**количество комментариев
 * пределы выбраны по заданию
 *
 */
const NUMBER_OF_ALL_COMMENTS = {
  MIN: 0,
  MAX: 30,
};

/**Количество аватарок
 * пределы выбраны по заданию
 *
 */
const NUMBER_OF_ALL_AVATAR = {
  MIN: 1,
  MAX: 6,
};


/**Функция для создания случайного числа в диапозоне от а до b
 * @param {int} a - нижняя граница диапозона
 * @param {int} b - верхняя граница диапозона
 * @param {int} result - возвращает случайное число в диапозоне от а до b
 */
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


/**Функция для генерации случайного элемента массива
 * @param {int} element - сам массив
 * @param {string} result - элемент массива element
 */
const getRandomElements = (elements) => elements[getRandomInteger(0, elements.length - 1)];

/**Функция для генерации порядкого номера
 * @param {int} result - порядковый номер
 */
const getIdGenerator = () => {
  let firstGenerateId = 0;
  return function () {
    firstGenerateId += 1;
    return firstGenerateId;
  };
};

const generatePhotoId = getIdGenerator();
const generatePhotoUrl = getIdGenerator();
const generateCommentsId = getIdGenerator();

/** Функция для создания комментария к фото
  * @param {int} id - идентификатор комментария
  * @param {string} avatar - это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg
  * @param {string} message - сам комментарий
  * @param {string} name - имя пользователя оставившего комментарий
  * @param {Array} return arrayComments[] - возвращает массив комментариев
*/
const generateCommentsPhoto = () => {
  const arrayComments = [];
  for (let i = 0; i < getRandomInteger(NUMBER_OF_ALL_COMMENTS.MIN, NUMBER_OF_ALL_COMMENTS.MAX); i++) {
    arrayComments.push({
      id: generateCommentsId(),
      avatar: `img/avatar-${getRandomInteger(NUMBER_OF_ALL_AVATAR.MIN, NUMBER_OF_ALL_AVATAR.MAX)}.svg`,
      message: getRandomElements(MESSAGES),
      name: getRandomElements(USERS_NAME),
    });
  }
  return arrayComments;
};

/** Функция для создания объекта с описанием фотографии
  * @param {int} id - идентификатор фотографии
  * @param {string} url - ссылка на фотографию
  * @param {string} description - описание фотографии
  * @param {int} likes - количество лайков
  * @param {Array} generateCommentsToPhoto() - массив комментариев
*/
const getPhotoUsers = () => ({
  id: generatePhotoId(),
  url: `photos/${generatePhotoUrl()}.jpg`,
  description: getRandomElements(DESCRIPTIONS_PHOTO),
  likes: getRandomInteger(NUMBER_OF_LIKES.MIN, NUMBER_OF_LIKES.MAX),
  comments: generateCommentsPhoto(),
});


/** Функция для создания массива объектов длиной NUMBER_OF_ALL_PHOTO с описанием фотографий
*/
const getAllPhotoUsers = () => Array.from({ length: NUMBER_OF_ALL_PHOTO }, getPhotoUsers);

getAllPhotoUsers();

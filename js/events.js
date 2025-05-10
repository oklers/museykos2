
const events = [
  { date: "05 мая", year: "1955", title: {
    ru: "Заложен первый камень в ознаменование строительства города Ленинска на космодроме «Байконур».",
    en: "First stone laid to mark the construction of Leninsk at the Baikonur Cosmodrome.",
    de: "Grundsteinlegung zur Gründung von Leninsk am Kosmodrom Baikonur."
  }},
  { date: "06 мая", year: "1966", title: {
    ru: "Скворцов Александр Александрович родился. Герой России, лётчик–космонавт РФ.",
    en: "Alexander Skvortsov was born. Hero of Russia, pilot-cosmonaut of the Russian Federation.",
    de: "Alexander Skworzow wurde geboren. Held Russlands, Pilot-Kosmonaut der RF."
  }},
  { date: "07 мая", year: "1967", title: {
    ru: "Состоялся четвертый регулярный набор космонавтов в отряд Министерства обороны СССР.",
    en: "The fourth regular selection of cosmonauts for the Ministry of Defense of the USSR took place.",
    de: "Die vierte reguläre Auswahl von Kosmonauten für das Verteidigungsministerium der UdSSR fand statt."
  }},
  { date: "07 мая", year: "1992", title: {
    ru: "Подписан указ об образовании Военно-космических сил России.",
    en: "A decree was signed on the formation of the Russian Military Space Forces.",
    de: "Ein Dekret über die Gründung der russischen Militärischen Weltraumstreitkräfte wurde unterzeichnet."
  }},
  { date: "09 мая", year: "1949", title: {
    ru: "Родился Олег Атьков. Герой Советского Союза, космонавт.",
    en: "Oleg Atkov was born. Hero of the Soviet Union, cosmonaut.",
    de: "Oleg Atkow wurde geboren. Held der Sowjetunion, Kosmonaut."
  }},
  { date: "11 мая", year: "1977", title: {
    ru: "В Москве подписано соглашение между АН СССР и НАСА о совместных полетах.",
    en: "Agreement signed in Moscow between USSR Academy of Sciences and NASA on joint flights.",
    de: "Abkommen zwischen der UdSSR-Akademie und der NASA über gemeinsame Flüge unterzeichnet."
  }},
  { date: "13 мая", year: "1942", title: {
    ru: "Родился Владимир Джанибеков, дважды Герой СССР, космонавт.",
    en: "Vladimir Dzhanibekov born, twice Hero of the USSR, cosmonaut.",
    de: "Wladimir Dschanibekow wurde geboren, zweifacher Held der UdSSR, Kosmonaut."
  }},
  { date: "13 мая", year: "1956", title: {
    ru: "Родился Александр Калери. Герой России, пять полётов в космос.",
    en: "Alexander Kaleri born. Hero of Russia, five spaceflights.",
    de: "Alexander Kaleri wurde geboren. Held Russlands, fünf Raumflüge."
  }},
  { date: "13 мая", year: "1982", title: {
    ru: "Старт КК «Союз Т-5». Экипаж: Березовой, Лебедев.",
    en: "Launch of Soyuz T-5. Crew: Berezovoy, Lebedev.",
    de: "Start von Sojus T-5. Besatzung: Beresowoi, Lebedew."
  }},
  { date: "14 мая", year: "1981", title: {
    ru: "Старт КК «Союз-40». Экипаж: Попов, Прунариу.",
    en: "Launch of Soyuz-40. Crew: Popov, Prunariu.",
    de: "Start von Sojus-40. Besatzung: Popow, Prunariu."
  }},
  { date: "15 мая", year: "1942", title: {
    ru: "Первый в стране полет на ракетном самолете БИ-1.",
    en: "First rocket plane flight in the country: BI-1.",
    de: "Erster Raketenflugzeugflug des Landes: BI-1."
  }},
  { date: "15 мая", year: "1960", title: {
    ru: "Запущен «Восток-1П» — беспилотный корабль-спутник.",
    en: "Launched Vostok-1P — uncrewed spacecraft.",
    de: "Start von Wostok-1P — unbemanntes Raumschiff."
  }},
  { date: "15 мая", year: "1995", title: {
    ru: "Основан Центр подготовки космонавтов имени Гагарина.",
    en: "Gagarin Cosmonaut Training Center established.",
    de: "Gagarin-Kosmonautentrainingszentrum gegründet."
  }},
  { date: "17 мая", year: "1982", title: {
    ru: "Запущен студенческий спутник «Искра-2» с «Салюта-7».",
    en: "Student satellite Iskra-2 launched from Salyut-7.",
    de: "Studentensatellit Iskra-2 von Saljut-7 gestartet."
  }},
  { date: "18 мая", year: "1991", title: {
    ru: "Старт КК «Союз ТМ-12». Экипаж: Арцебарский, Крикалев, Шарман.",
    en: "Launch of Soyuz TM-12. Crew: Artsebarsky, Krikalev, Sharman.",
    de: "Start von Sojus TM-12. Besatzung: Artsebarski, Krikalev, Sharman."
  }},
  { date: "21 мая", year: "1941", title: {
    ru: "Родился Анатолий Левченко. Герой СССР, космонавт.",
    en: "Anatoly Levchenko born. Hero of the USSR, cosmonaut.",
    de: "Anatoli Lewtschenko wurde geboren. Held der UdSSR, Kosmonaut."
  }},
  { date: "22 мая", year: "1959", title: {
    ru: "Принято постановление о создании корабля для полета человека в космос.",
    en: "Decree on creation of spacecraft for human flight.",
    de: "Beschluss zur Entwicklung eines Raumschiffs für den Menschenflug."
  }},
  { date: "23 мая", year: "1961", title: {
    ru: "Гагарин назначен командиром отряда космонавтов.",
    en: "Gagarin appointed commander of cosmonaut corps.",
    de: "Gagarin zum Kommandeur der Kosmonautengruppe ernannt."
  }},
  { date: "24 мая", year: "1972", title: {
    ru: "Родился Максим Сураев. Два полёта, два выхода в космос.",
    en: "Maxim Suraev born. Two flights, two EVAs.",
    de: "Maxim Surajew wurde geboren. Zwei Flüge, zwei Außenbordeinsätze."
  }},
  { date: "24 мая", year: "1975", title: {
    ru: "Старт КК «Союз-18». Экипаж: Климук, Севастьянов.",
    en: "Launch of Soyuz-18. Crew: Klimuk, Sevastianov.",
    de: "Start von Sojus-18. Besatzung: Klimuk, Sewastjanow."
  }},
  { date: "25 мая", year: "1931", title: {
    ru: "Родился Георгий Гречко. Три полёта, один выход в космос.",
    en: "Georgy Grechko born. Three flights, one EVA.",
    de: "Georgi Gretschko wurde geboren. Drei Flüge, ein Außenbordeinsatz."
  }},
  { date: "25 мая", year: "1969", title: {
    ru: "Родился Дмитрий Кондратьев. Один полёт, два выхода в космос.",
    en: "Dmitry Kondratyev born. One flight, two EVAs.",
    de: "Dmitri Kondratjew wurde geboren. Ein Flug, zwei Außenbordeinsätze."
  }},
  { date: "26 мая", year: "1980", title: {
    ru: "Старт КК «Союз-36». Экипаж: Кубасов, Фаркаш.",
    en: "Launch of Soyuz-36. Crew: Kubasov, Farkas.",
    de: "Start von Sojus-36. Besatzung: Kubassow, Farkas."
  }},
  { date: "27 мая", year: "1948", title: {
    ru: "Родился Александр Волков. Три полёта, два выхода в космос.",
    en: "Alexander Volkov born. Three flights, two EVAs.",
    de: "Alexander Wolkow wurde geboren. Drei Flüge, zwei Außenbordeinsätze."
  }},
  { date: "30 мая", year: "1934", title: {
    ru: "Родился Алексей Леонов. Первый выход в открытый космос.",
    en: "Alexei Leonov born. First person to walk in space.",
    de: "Alexei Leonow wurde geboren. Erster Mensch im Weltraumspaziergang."
  }},
  { date: "31 мая", year: "1975", title: {
    ru: "Создано Европейское космическое агентство.",
    en: "European Space Agency established.",
    de: "Europäische Weltraumorganisation gegründet."
  }}
];

function renderTimeline() {
  const container = document.getElementById('timeline');
  events.forEach(event => {
    const item = document.createElement('div');
    item.className = 'event-card';
    item.innerHTML = `<strong>${event.date} ${event.year}</strong><p>${event.title['ru']}</p>`;
    item.onclick = () => {
      alert(event.title['ru']);
    };
    container.appendChild(item);
  });
}

document.addEventListener('DOMContentLoaded', renderTimeline);

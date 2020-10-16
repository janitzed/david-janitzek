import React from 'react';

const PL = {
    lightTheme: 'Jasny',
    darkTheme: 'Ciemny',
    codeTheme: 'Kod',
    home: 'Strona główna',
    history: 'Historia',
    projects: 'Projekty',
    changeLanguageTitle: 'Zmień język',
    changeTintTitle: 'Wygląd strony',
    historyBox: 'Tutaj możesz znaleźć wszystkie informacje o moim aktualnym CV. Wszystkie informacje są wyświetlane w kolejności hierarchicznej na osi czasu.',
    projectsBox: 'Tutaj znajdziesz wszystkie informacje o moich aktualnych projektach, które tworzyłem prywatnie od początku mojej kariery.',
    readMore: 'Czytaj więcej',
    coder: 'Koder Następnej Generacji',
    recentProjects: 'Ostatnie projekty',
    project_reactRevolution: 'React Revolution to pakiet NPM z indywidualnymi komponentami React UI i funkcjami Javascript, które ułatwiają programistom rozwijanie ich projektów i uczynienie ich interaktywnymi.',
    project_chat: 'Projekt czatu został stworzony, aby dać użytkownikom końcowym pewność, że ich wiadomości będą traktowane bezpiecznie i z szacunkiem. Celem było dać możliwość usunięcia wszystkich krótkich wiadomości lub e-maili (w aplikacji), zabezpieczenie ich przed atakiem MIM i zapisanie ich w bazie danych w sposób nieczytelny. Całe zarządzanie wiadomościami pozostaje w gestii użytkownika - żadnych kopii zapasowych ani analiz, tylko bezpieczne i anonimowe.',
    project_reactDivcreator: 'React Divcreator to pakiet NPM z indywidualnymi komponentami React UI, które ułatwiają programistom rozwijanie ich projektów i uczynienie ich interaktywnymi.',
    project_imageDownloader: 'Projekt dodatku do Firefoksa, który umożliwia określenie wszystkich żądań (typu: Image), które wysyła strona internetowa, zaprezentowanie ich użytkownikowi końcowemu i zaoferowanie ich do pobrania.',
    project_tracker: 'Projekt dodatków do Firefoksa umożliwiający zdalne zarządzanie własnym komputerem - jego aktywnymi zakładkami. Możesz zamykać karty, zmieniać zawartość, zamykać karty lub zamykać karty za pomocą wiadomości. W ten sposób możesz monitorować swoją przeglądarkę.',
    project_networkMonitor: 'Projekt dodatku do Firefoksa, który umożliwia monitorowanie wszystkich żądań strony internetowej, śledzenie adresów URL i pobieranie wyników żądań lub przeglądanie żądań w postaci listy.',
    project_scriptInjector: 'Projekt dodatku do Firefoksa umożliwiający dodanie własnego kodu do dowolnej witryny internetowej. Wstrzyknięcie własnego kodu można zaplanować. Istnieje również interfejs użytkownika do administrowania.',
    project_sourceCode: 'Projekt dodatku do Firefoksa, który daje użytkownikowi możliwość wyświetlenia kodu źródłowego strony internetowej lub jej poszczególnych elementów, a także pobranie poszczególnych elementów / fragmentów kodu.',
    project_protector: 'Projekt dodatku do Firefoksa, który daje użytkownikowi końcowemu możliwość blokowania żądań stron internetowych, adresów URL lub pojedynczych domen za pomocą różnych czarnych list. Zarządzanie różnymi listami i funkcjami odbywa się w interfejsie użytkownika.',
    open_website: 'Strona',
    "2019_now": (
        <ul>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">Wewnętrzne wprowadzenie i szkolenie programistów w obszarze React jako frontend frameworku</div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">Wykorzystanie PHP 7.4 i Twig jako technologii tworzenia szablonów</div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">Wykorzystanie Doctrine jako pakietu SQL Bundler</div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">Migracja z projektów Symfony 2.7 do Symfony 4.4</div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">Pisanie poleceń PHP uruchamianych przez CronJob</div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">Konfiguracja zadań Gulp</div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">Instalacja Ubuntu</div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">Konfiguracja Apache2</div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">Dokumentacja w Confluence</div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">Korzystanie z systemu biletowego Jira</div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">Korzystanie z systemu wersjonowania: Git</div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">Rozszerzenie i tworzenie responsywnych stron internetowych w językach: Javascript, jQuery, Css, HTML, PHP, SQL</div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">Tworzenie mikroserwisów PHP do wysyłania danych za pomocą żądania curl i przetwarzania wyników z połączeniem zapytań SQL</div>
            </li>
        </ul>
    ),
    "2018_2019": (
        <ul>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">Rozwój, naprawa błędów stron internetowych i mikroserwisów PHP</div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">Rozszerzenie mikrousług Node.js i RabbitMq</div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">Tworzenie responsywnych stron internetowych w językach: PHP, CSS, SCSS, HTML, React, Redux, Javascript i jQuery</div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">Rytm pracy w Scrum Framework</div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">Dockeryzacja aplikacji Node.js</div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">Dockeryzacja bazy danych PostgreSql</div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">Wdrożenie wewnętrznego szkolenia Docker dla programistów</div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">Wdrożenie wewnętrznego szkolenia Docker-compose</div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">Współtworzenie podstawowego obrazu Linuksa dla programistów</div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">Wdrażanie kodu za pomocą Bamboo</div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">Rozwój ChatBota jako prototypu w Node.js.</div>
            </li>
        </ul>
    ),
    "2017_2018": (
        <ul>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">Rozwój i rozbudowa mikroserwisów NodeJ i PHP</div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">Rozszerzanie i tworzenie responsywnych stron internetowych w językach: ExtJs, Javascript, jQuery, Css, HTML, PHP, SQL</div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">Korzystanie z systemu wersjonowania: Git</div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">Rytm pracy w Scrum Framework</div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">Dokumentacja wykonanych prac przy pomocy produktów Atlasian (Jira, Confluence)</div>
            </li>
        </ul>
    ),
    "2015_2017": (
        <ul>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">
                    Akceptacja, analiza i usuwanie usterek w obszarze sprzętu i oprogramowania
                </div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">
                    Dokumentacja komunikatów o błędach w systemie biletowym CISM
                </div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">
                    Przekazywanie komunikatu o błędzie do dalszych jednostek wsparcia
                </div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">
                    Pierwsze rozwiązanie problemów z Windows 7 i Outlookiem
                </div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">
                    Umowa dotycząca poziomu usług 90% bezpośrednich rozwiązań
                </div>
            </li>
        </ul>
    ),
    "2013_2014": (
        <ul>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">
                    Obsługa drugiego poziomu w systemie Windows 7
                </div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">
                    Pierwsze rozwiązanie problemów z Windows 7 i Lotus Notes
                </div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">
                    Dokumentacja i przekazanie raportu o usterce do wsparcia drugiego poziomu
                </div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">
                    Umowa dotycząca poziomu usług 80% bezpośrednich rozwiązań
                </div>
            </li>
        </ul>
    ),
    "2007_2013": (
        <ul>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">
                    Trening osobisty: trening siłowy i fitness
                </div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">
                    Prowadzenie sesji fitness
                </div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">
                    Tworzenie zindywidualizowanych planów żywieniowych i planów treningowych
                </div>
            </li>
            <li className="flex">
                <div>
                    <i className="fas fa-angle-right icon-right"></i>
                </div>
                <div className="text">
                    Porady dotyczące suplementacji, odżywiania i treningu
                </div>
            </li>
        </ul>
    ),
    area_history: 'Historia',
    area_projects: 'Projekty',
    munich: 'Monachium',
    kattowitz: 'Katowice',
    tarnowitz: 'Tarnowskie Góry',
    now: 'teraz',
};

export default PL;

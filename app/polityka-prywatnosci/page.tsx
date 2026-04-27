"use client";

import Script from "next/script";
import { JSX, useEffect } from "react";

export default function PrivacyPolicy(): JSX.Element {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "CookieDeclaration";
    script.src =
      "https://consent.cookiebot.com/df632319-06fe-467a-bdc5-998416fe615e/cd.js";
    script.type = "text/javascript";
    script.async = true;

    const cookieDeclaration = document.querySelector("#cookie-declaration");

    if (cookieDeclaration) {
      cookieDeclaration.appendChild(script);
    }

    return () => {
      if (cookieDeclaration) {
        cookieDeclaration.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="container">
      <section className="tile [&_h2]:mb-1 [&_h2]:mt-5 [&_p]:mb-2 [&_ul]:mb-2 [&_ul]:pl-5 [&_li]:mb-1 [&_li]:ml-3">
        <h1>Polityka prywatności</h1>

        <h2>1. Informacje ogólne</h2>

        <p>
          Niniejsza polityka prywatności określa zasady przetwarzania danych
          osobowych oraz wykorzystywania strony internetowej GA Finanse.
        </p>

        <p>
          Administratorem danych osobowych jest:
          <br />
          <strong>GA Finanse Spółka z ograniczoną odpowiedzialnością</strong>
          <br />
          ul. Świętojańska 59 lok. 4
          <br />
          81-391 Gdynia
          <br />
          NIP: 5862314868
          <br />
          REGON: 366577954
        </p>

        <p>
          W sprawach związanych z ochroną danych osobowych można kontaktować się
          pod adresem e-mail:
          <strong> ga.finanse@wp.pl</strong>
        </p>

        <h2>2. Zakres przetwarzanych danych</h2>

        <p>
          Strona nie zbiera danych osobowych poprzez formularze. Dane mogą być
          przetwarzane w następujących przypadkach:
        </p>

        <ul>
          <li>
            w przypadku kontaktu mailowego lub telefonicznego (np. imię, adres
            e-mail, numer telefonu, treść wiadomości),
          </li>

          <li>
            w ramach logów serwera (np. adres IP, data i czas wizyty, informacje
            o przeglądarce oraz systemie operacyjnym).
          </li>
        </ul>

        <h2>3. Cele i podstawa przetwarzania danych</h2>

        <p>Dane osobowe przetwarzane są w celu:</p>

        <ul>
          <li>
            udzielenia odpowiedzi na zapytania (art. 6 ust. 1 lit. b RODO),
          </li>

          <li>
            realizacji prawnie uzasadnionych interesów administratora (art. 6
            ust. 1 lit. f RODO), takich jak zapewnienie bezpieczeństwa strony,
            prowadzenie statystyk oraz ochrona przed nadużyciami,
          </li>

          <li>
            ewentualnego dochodzenia roszczeń lub obrony przed roszczeniami
            (art. 6 ust. 1 lit. f RODO).
          </li>
        </ul>

        <p>
          Dane techniczne zapisywane w logach serwera przetwarzane są na
          podstawie prawnie uzasadnionego interesu administratora.
        </p>

        <p>
          Podanie danych jest dobrowolne, jednak niezbędne do nawiązania
          kontaktu.
        </p>

        <h2>4. Odbiorcy danych</h2>

        <p>
          Dane mogą być przekazywane podmiotom współpracującym z
          administratorem, w szczególności:
        </p>

        <ul>
          <li>dostawcom usług hostingowych,</li>
          <li>dostawcom usług IT.</li>
        </ul>

        <p>
          Strona jest hostowana przez Vercel Inc., który może przetwarzać dane
          techniczne użytkowników, takie jak adres IP oraz logi serwera.
        </p>

        <h2>5. Czas przechowywania danych</h2>

        <p>Dane będą przechowywane:</p>

        <ul>
          <li>przez czas niezbędny do udzielenia odpowiedzi na zapytanie,</li>

          <li>przez okres wymagany przepisami prawa,</li>

          <li>
            do czasu wniesienia sprzeciwu wobec przetwarzania (jeśli podstawą
            jest uzasadniony interes administratora).
          </li>
        </ul>

        <h2>6. Prawa użytkownika</h2>

        <p>Każdej osobie, której dane dotyczą, przysługuje prawo do:</p>

        <ul>
          <li>dostępu do swoich danych,</li>
          <li>sprostowania danych,</li>
          <li>usunięcia danych,</li>
          <li>ograniczenia przetwarzania,</li>
          <li>przenoszenia danych,</li>
          <li>wniesienia sprzeciwu,</li>

          <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</li>
        </ul>

        <h2>7. Pliki cookies</h2>

        <p>
          Strona wykorzystuje pliki cookies w celu zapewnienia jej prawidłowego
          działania oraz – za zgodą użytkownika – w celach analitycznych.
        </p>

        <p>
          Szczegółowe informacje dotyczące wykorzystywanych plików cookies, ich
          celu oraz czasu przechowywania dostępne są w deklaracji cookies
          wyświetlanej poniżej.
        </p>

        <div id="cookie-declaration" className="mt-4 overflow-x-auto" />

        <h2>8. Usługi zewnętrzne</h2>

        <p>Strona może korzystać z zewnętrznych zasobów, takich jak:</p>

        <ul>
          <li>Google Fonts,</li>
          <li>Font Awesome.</li>
        </ul>

        <p>
          Podmioty te mogą przetwarzać dane techniczne użytkownika (np. adres
          IP). Dane mogą być przekazywane poza Europejski Obszar Gospodarczy
          (np. do USA) na podstawie odpowiednich zabezpieczeń prawnych.
        </p>

        <h2>9. Profilowanie</h2>

        <p>
          Dane osobowe nie są wykorzystywane do zautomatyzowanego podejmowania
          decyzji ani profilowania.
        </p>

        <h2>10. Zmiany polityki prywatności</h2>

        <p>
          Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej
          polityce prywatności.
        </p>

        <h2>11. Kontakt</h2>

        <p>
          W sprawach związanych z ochroną danych osobowych prosimy o kontakt pod
          adresem:
          <br />
          <strong>ga.finanse@wp.pl</strong>
        </p>

        <div className="mt-12 text-sm text-gray-600">
          Ostatnia aktualizacja: 27 kwietnia 2026 r.
        </div>
      </section>
    </div>
  );
}

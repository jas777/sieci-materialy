---
title: IPv4 
category: 'Adresacja' 
position: 4
description: 'Opis i struktura IPv4'
---

IPv4 _(ang. Internet Protocol version 4)_ &mdash; czwarta wersja protokołu komunikacyjnego IP przeznaczonego dla Internetu. 
Identyfikacja hostów w IPv4 opiera się na **adresach IP**.

W modelu TCP/IP protokół IPv4 znajduje się w warstwie Internetu, której odpowiada warstwa sieci w modelu OSI.

### Nagłówek IP

Nagłówek to informacje, które są zawierane na początku każdego zapytania wysyłanego przez każde urządzenie. Owe dane
pozwalają na wytyczenie trasy do urządzenia docelowego oraz identyfikację urządzenia wysyłającego przez docelowe.

#### Reprezentacja nagłówka

<alert type="warning">
Tak naprawdę, bardzo rzadko wymaga się od człowieka znajomości całego nagłówka na pamięć, najważniejsze informacje
zostały zawarte powyżej. Warto jednak pamiętać najważniejsze pola znajdujące się w nim.
</alert>

<table align="center" class="withborders dark:bg-gray-800 bg-gray-100">
  <tbody>
    <tr align="center">
      <th colspan="1">+</th>
      <th colspan="4">Bity 0 - 3</th>
      <th colspan="4">4 - 7</th>
      <th>8 - 13</th>
      <th>14-15</th>
      <th colspan="3">16 - 18</th>
      <th colspan="13">19 - 31</th>
    </tr>
    <tr align="center">
      <th colspan="1">0</th>
      <td colspan="4">Wersja</td>
      <td colspan="4">Długość nagłówka</td>
      <td>Usługi zróźnicowane</td>
      <td>ECN</td>
      <td colspan="16">Całkowita długość</td>
    </tr>
    <tr align="center">
      <th colspan="1">32</th>
      <td colspan="10">Numer identyfikacyjny</td>
      <td colspan="3">Flagi</td>
      <td colspan="13">Przesunięcie</td>
    </tr>
    <tr align="center">
      <th colspan="1">64</th>
      <td colspan="8">Czas życia</td>
      <td colspan="2">Protokół warstwy wyższej</td>
      <td colspan="16">Suma kontrolna nagłówka</td>
    </tr>
    <tr align="center">
      <th colspan="1">96</th>
      <td colspan="26">Adres źródłowy IP</td>
    </tr>
    <tr align="center">
      <th colspan="1">128</th>
      <td colspan="26">Adres docelowy IP</td>
    </tr>
    <tr align="center">
      <th colspan="1">160</th>
      <td colspan="18">Opcje IP</td>
      <td colspan="8">Wypełnienie</td>
    </tr>
    <tr align="center">
      <th colspan="1">192</th>
      <td colspan="26">&nbsp;<br>Dane<br>&nbsp;</td>
    </tr>
  </tbody>
</table>

<alert type="info">
Najważniejsze pola są oznaczone <template><i>kursywą</i></template>
</alert>

**Wersja** <badge>4 bity</badge> &mdash; pole opisujące wersję protokołu, jednoznacznie definiujące format nagłówka.

_**Długość nagłówka**_ <badge>4 bity</badge> &mdash; długość nagłówka IP wyrażona w 32-bitowych słowach; minimalny,
poprawny nagłówek ma długość co najmniej 5.

**Usługi zróżnicowane** i **ECN** <badge>8 bitów (6 bitów / 2 bity)</badge> &mdash; zgodnie z oryginalną specyfikacją `RFC 0791`, pole wskazujące jaka
jest pożądana wartość QoS[^1] dla danych przesyłanych w pakiecie. Na podstawie tego pola, routery ustawiają odpowiednie 
wartości transmisji. Jak wprowadzają nowsze opracowania, m.in. `RFC 2474` oraz `RFC 3260`, pole to zostało podzielone na
Usługi zróżnicowane (6 bitów) oraz ECN (2 bity).

Pierwsze trzy bity pola **Usługi zróżnicowane** informują o priorytecie (gdzie `111` to najwyższy, przeznaczony do
sterowania siecią, a `000` - zwyczajny priorytet). Kolejne trzy bity, oznaczone: D - małe opóźnienie , T - duża 
przepustowość i R - wysoka niezawodność, ustawione na wartość `1`, oznaczają, że dla danego pakietu szczególnie ważny 
jest dany parametr. Bity pola ECN ustawione na wartość `1` informują o przeciążeniu bufora.

_**Całkowita długość pakietu**_ <badge>16 bitów</badge> &mdash; długość całego datagramu IP (nagłówek oraz dane); maksymalna
długość datagramu wynosi **2<sup>16</sup> - 1 = 65535**. Minimalna wielkość datagramu jaką musi obsłużyć każdy host 
wynosi 576 bajtów, dłuższe pakiety mogą być dzielone na mniejsze (fragmentacja).

**Numer identyfikacyjny** <badge>16 bitów</badge> &mdash; numer identyfikacyjny, wykorzystywany podczas fragmentacji
do określenia przynależności pofragmentowanych datagramów

_**Flagi**_ <badge>3 bity</badge> &mdash; flagi wykorzystywane podczas fragmentacji datagramów. Zawierają dwa używane pola: DF,
które wskazuje, czy pakiet może być fragmentowany oraz MF, które wskazuje, czy za danym datagramem znajdują się kolejne fragmenty.

**Przesunięcie** <badge>13 bitów</badge> &mdash; w przypadku fragmentu większego datagramu pole to określa miejsce
danych w oryginalnym datagramie; **wyrażone w jednostkach ośmiooktetowych**

_**Czas życia**_ <badge>8 bitów</badge> &mdash; liczba przeskoków przez jaką
datagram znajduje się w obiegu. Jest zmniejszana za każdym razem, gdy datagram jest przetwarzany w routerze - jeżeli
spada do 0, datagram jest usuwany z sieci (nie przekazywany dalej) o czym nadawca usuniętego
pakietu jest informowany zwrotnie z wykorzystaniem protokołu ICMP[^2].

_**Protokół warstwy wyższej**_ <badge>8 bitów</badge> &mdash; informacja o protokole warstwy wyższej, który jest 
przenoszony w polu danych datagramu IP.

_**Suma kontrolna nagłówka**_ <badge>16 bitów</badge> &mdash; suma kontrolna nagłówka pakietu, pozwalająca stwierdzić 
czy został on poprawnie przesłany, sprawdzana i aktualizowana przy każdym przetwarzaniu nagłówka.

_**Adres źródłowy**_ <badge>32 bity</badge> i _**adres docelowy**_ <badge>32 bity</badge> &mdash; pola adresów nadawcy i
odbiorcy datagramu IP.

**Opcje** <badge>32 bity</badge> &mdash; <u>niewymagane</u> pole opcji, opisujące dodatkowe zachowanie pakietów IP

**Wypełnienie** &mdash; opcjonalne pole wypełniające nagłówek tak, aby jego wielkość była wielokrotnością 32,
wypełnione zerami.

[^1]: ang. _Quality of Service_ &mdash; jakość usługi - charakterystyki zapewniające komfort korzystania z zapewnianej
    usługi.

[^2]: ang. _Internet Control Messaging Protocol_ &mdash; Komunikaty ICMP są w skrócie informacją o stanie połączenia
    pomiędzy dwoma urządzeniami. Jeśli np. pakiet z komputera A nie dotrze do komputera B ostatnie urządzenie, które
    ten pakiet obsłużyło wyśle do komputera A wiadomość o niepowodzeniu.

### Adres IP

Aby umożliwić urządzeniom komunikowanie się między sobą, musimy każdemu przypisać osobny adres IP, który pozowli na
wzajemną identyfikację hostów.

<alert type="danger">
Część w przygotowaniu!
</alert>




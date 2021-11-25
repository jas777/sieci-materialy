---
title: Słownik pojęć 
description: Skondensowana lista pojęć z materiałów 
category: Słownik 
position: 1000
---

## Protokoły podstawowe

#### TCP

Protokół sterowania transmisją &ndash; przy wysyłaniu danych z komputera A do komputera B zwraca on informację, czy
pakiet dotarł do komputera B, a jeżeli nie doszedł, to rozpoczyna transmisję od nowa.

W przeciwieństwie do UDP, TCP gwarantuje wyższym warstwom komunikacyjnym dostarczenie wszystkich pakietów w całości, 
z zachowaniem kolejności i bez duplikatów. Zapewnia to wiarygodne połączenie kosztem większego narzutu w postaci
nagłówka i większej liczby przesyłanych pakietów.

#### UDP

Jest to protokół bezpołączeniowy, więc nie ma narzutu na nawiązywanie połączenia i śledzenie sesji (w przeciwieństwie do
TCP). Nie ma też mechanizmów kontroli przepływu i retransmisji.

Korzyścią płynącą z takiego uproszczenia budowy jest szybsza transmisja danych i brak dodatkowych zadań, którymi musi 
zajmować się host posługujący się tym protokołem. Z tych względów UDP jest często używany w takich zastosowaniach jak
wideokonferencje, strumienie dźwięku w Internecie i gry sieciowe, gdzie dane muszą być przesyłane możliwie szybko, a
poprawianiem błędów zajmują się inne warstwy modelu OSI. Przykładem może być VoIP lub protokół DNS.

## Protokoły

- **Protokół** <badge>Port</badge> &ndash; opis

<alert type="warning">
Nie wszystkie protokoły mają port!
</alert>

### Sieciowe (Routing, adresacja itd.)

- **ICMP (Internet Control Message Protocol)** &ndash; opisany w `RFC 792` protokół warstwy sieciowej
  modelu OSI, wykorzystywany w diagnostyce sieci oraz trasowaniu. Pełni przede wszystkim funkcję kontroli transmisji w
  sieci. Jest wykorzystywany w programach ping oraz traceroute.

- **IGMP (Internet Group Management Protocol)** &ndash; jeden z rodziny protokołów TCP/IP, służący do
  zarządzania grupami multicastowymi w sieciach opartych na protokole IP. Komputery wykorzystują komunikaty IGMP do
  powiadamiania routerów w swojej sieci o chęci przyłączenia się do lub odejścia z określonej grupy multicastowej.

- **IGMP Snooping** &ndash; Protokół filtrujący ruch IGMP, umożliwiający efektywne zarządzanie
  przepływem pakietów multicast, tak, aby pakiety te trafiały tylko do właściwej lokalizacji (hosta), nie obciążając całej sieci ruchem tego typu.

- **CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance)** &ndash; protokół wielodostępu do
  łącza ze śledzeniem stanu nośnika i unikaniem kolizji.

- **CSMA/CD (Carrier Sense Multiple Access with Collision Detection)** &ndash; protokół wielodostępu
  CSMA z badaniem stanu kanału i wykrywaniem kolizji.

- **DHCP (Dynamic Host Configuration Protocol)** <badge>Serwer 67/Klient 68</badge> &ndash; protokół komunikacyjny
  umożliwiający hostom uzyskanie od serwera danych konfiguracyjnych, np. adresu IP hosta, adresu IP bramy sieciowej,
  adresu serwera DNS, maski podsieci.

- **NAT (Network Address Translation)** &ndash; ma na celu zamianę adresów prywatnych stosownych w sieciach lokalnych na
  adresy publiczne stosowane w sieciach rozległych.

### Dostęp do internetu

- **PPPoE (Point to Point Protocol over Ethernet)** &ndash; to rodzaj połączenia internetowego, który zapewnia 
  bezpieczne logowanie do internetu i gwarantuje nam, że dopóki nie udostępnimy nikomu naszych danych do logowania,
  nikt nie podszyje się pod nasze połączenie. Często dostajemy dane do logowania np. od dostawcy internetu, później
  musimy je wpisać przy konfiguracji routera.

### Komunikacyjne

- **Telnet** <badge>23</badge> &ndash; podstawowy protokół komunikacji w sieciach komputerowych do obsługi odległego
  terminala w architekturze klient-serwer

- **SSH (Secure SHell)** <badge>22</badge> &ndash; W ścisłym znaczeniu SSH to tylko następca protokołu Telnet, służącego
  do terminalowego łączenia się ze zdalnymi komputerami. SSH różni się od Telnetu tym, że transfer wszelkich danych jest
  zaszyfrowany oraz możliwe jest rozpoznawanie użytkownika na wiele różnych sposobów.

### Do przesyłu plików

- **FTP (File Transfer Protocol)** <badge>21 (kontrola) & 20 (przesył)</badge> &ndash; podstawowy protokół przesyłania
  plików pomiędzy serwerem a klientem

- **SFTP (SSH File Transfer Protocol)** <badge>22</badge> &ndash; protokół do przesyłania plików pomiędzy serwerem a
  klientem, z tą różnicą, że **komunikacja jest szyfrowana**

- **HTTP (HyperText Transfer Protocol)** <badge>80</badge> &ndash; protokół służący do wysyłania dokumentów
  hipertekstowych (np. HTML, PHP) z serwera do klienta

- **HTTPS (Hypertext Transfer Protocol Secure)** <badge>443</badge> &ndash; szyfrowana wersja protokołu HTTP

- **TLS (Transport Layer Security)** <badge>Taki sam jak usługa</badge> &ndash; przyjęte jako standard w Internecie
  rozwinięcie protokołu SSL, zaprojektowanego pierwotnie przez Netscape Communications. TLS zapewnia poufność i
  integralność transmisji danych, a także uwierzytelnienie serwera, a niekiedy również klienta. Opiera się na
  szyfrowaniu asymetrycznym oraz certyfikatach `X.509`.

- **SSL (Secure Socket Layer)** <badge>Taki sam jak usługa</badge> &ndash; protokół służący do bezpiecznej transmisji
  zaszyfrowanego strumienia danych

- **NTP (Network Time Protocol)** <badge>123</badge> &ndash; Protokół komunikacyjny umożliwiający precyzyjną
  synchronizację czasu pomiędzy komputerami. Wzorcowy czas UTC może pochodzić pośrednio ze specjalizowanych serwerów
  czasu

- **SNTP (Simple NTP)** <badge>123</badge> &ndash; Uproszczona wersja NTP. Wersja ta znajduje powszechne zastosowanie w prostych 
  systemach operacyjnych i rozwiązaniach, w urządzeniach przenośnych i w telefonach komórkowych.

### E-mailowe

- **POP3 (Post Office Protocol v3)** <badge>110/995 z SSL</badge> &ndash; protokół internetowy z warstwy aplikacji
  pozwalający na odbiór poczty elektronicznej ze zdalnego serwera do lokalnego komputera poprzez połączenie TCP/IP.

- **IMAP (Internet Message Access Protocol)** <badge>143/993 z SSL</badge> &ndash; W przeciwieństwie do POP3, który
  umożliwia jedynie pobieranie i kasowanie poczty, IMAP pozwala na zarządzanie wieloma folderami pocztowymi oraz
  pobieranie i operowanie na listach znajdujących się na zdalnym serwerze.

- **SMTP (Simple Mail Transfer Protocol)** <badge>587/465 z SSL</badge> &ndash; SMTP to względnie prosty, tekstowy
  protokół, w którym określa się co najmniej jednego odbiorcę wiadomości (w większości przypadków weryfikowane jest jego
  istnienie), a następnie przekazuje treść wiadomości. SMTP nie pozwala na pobieranie wiadomości ze zdalnego serwera. Do
  tego celu służą POP3 lub IMAP.

- **WAP (Wireless Application Protocol)** &ndash; WAP został stworzony w celu umożliwienia dostępu do
  usług WWW, uwzględniając ograniczenia techniczne urządzeń mobilnych (np. telefon komórkowy) korzystających z tego
  protokołu, oraz ograniczeń łącza danych (które może być realizowane m.in. poprzez połączenie CSD lub GPRS).

### Usługi

- **DNS (Domain Name System)** <badge>53</badge> &ndash; hierarchiczny rozproszony system nazw sieciowych, który odpowiada na zapytania o
  nazwy domen. Dzięki DNS nazwa _np. google.com_ jest tłumaczona na odpowiadający jej adres IP.

### Switche

- **Loopback detection (wykrywanie pętli)** &ndash; jeśli połączymy np. 4 switche w "pierścień" to stworzymy pętlę,
  dane będą krążyły w kółko. W ten sposób możemy unieruchomić całą naszą sieć. Loopback detection polega na tym, że
  switch powie nam, jeśli wykryje pętlę na jednym ze swoich portów.

- **Port mirroring** &ndash; jest funkcją, która pozwala na kopiowanie danych z danego, konkretnego portu lub grupy
  portów na inny. Chodzi o to, że dane, które transmitowane są np. z i do portu 1 mogą być kopiowane np. na port 7.
  Funkcja te może być wykorzystywana w celach diagnostycznych, np. jeśli chcemy analizować ruch sieciowych maszyn w
  naszej sieci.

- **Port trunking** &ndash; umożliwia ustawienie danego portu jako "trunk", pozwala to na przesyłanie danych dostarczanych
  na ten port do wszystkich VLANów na switchu, oraz przesyłanie danych wychodzących ze wszystkich VLANów przez ten port.
  Można się też spotkać z pojęciem "port tagowany", które oznacza to samo.

## Ważne standardy IEEE 802

<alert type="warning">
Nie są to wszystkie standardy IEEE 802.XX! Wymienione są te najważniejsze, które zapewniają podstawy pod inne wersje protokołu.
</alert>

### Standardy IEEE 802.3 (Ethernet)

#### 10 Mb/s (Ethernet)

| Nazwa standardu [IEEE] | Nazwa standardu kabla | Maks. długość segmentu |
| ---------------------- | --------------------- | ---------------------- |
| 802.3                  | 10BASE5               | Do 500m                |
| 802.3a                 | 10BASE2               | Do 185m                |
| 802.3i                 | 10BASE-T              | Do 100m                |
| 802.3j                 | 10BASE-FL             | Do 2000m               |

#### 100 Mb/s (Fast Ethernet)

| Nazwa standardu [IEEE] | Nazwa standardu kabla | Maks. długość segmentu |
| ---------------------- | --------------------- | ---------------------- |
| 802.3u                 | 100BASE-TX            | Do 100m                |

#### 1 Gb/s (Gigabit Ethernet)

| Nazwa standardu [IEEE] | Nazwa standardu kabla | Maks. długość segmentu |
| ---------------------- | --------------------- | ---------------------- |
| 802.3z                 | 1000BASE-LX           | Do 310m                |
| 802.3z                 | 1000BASE-SX           | Do 310m                |
| 802.3z                 | 1000BASE-CX           | Do 310m                |
| 802.3z                 | 1000BASE-T            | Do 25m                 |

#### 10 Gb/s (10 Gigabit Ethernet)

| Nazwa standardu [IEEE] | Nazwa standardu kabla | Maks. długość segmentu |
| ---------------------- | --------------------- | ---------------------- |
| 802.3ae                | 10GBASE-CX4           | Do 15m                 |
| 802.3ae                | 10GBASE-SR            | Do 400m                |
| 802.3ae                | 10GBASE-LR            | Do 10km                |
| 802.3ae                | 10GBASE-ER            | Do 30km                |
| 802.3ae                | 10GBASE-LX4           | Do 10km/300m*          |
| 802.3ae                | 10GBASE-LRM           | Do 220m                |
| 802.3ae                | 10GBASE-PR            | Do 20km                |

*300m obowiązuje przy światłowodzie wielomodowym

### Standardy IEEE 802.11 (Wireless Ethernet)

| Nazwa standardu [IEEE] | Częstotliwość radiowa | Zasięg sygnału | Maksymalna szybkość transmisji |
| ---------------------- | --------------------- | -------------- | ------------------------------ |
| 802.11a                | 5 GHz                 | 30m            | 54 Mb/s                        |
| 802.11b                | 2.4 GHz               | 30m            | 11 Mb/s                        |
| 802.11g                | 2.4 GHz               | 30m            | 54 Mb/s                        |
| 802.11n                | 2.4 GHz               | 50m            | 540 Mb/s                       |
| 802.15.1 (Bluetooth)   | 2.4 GHz               | 10m            | 2 Mb/s                         |

### Standardy szyfrowania

- **WEP (Wired Equivalent Privacy)** &ndash; standard szyfrowania stosowany w sieciach bezprzewodowych standardu `IEEE 802.11`.

- **WPA (Wi-Fi Protected Access)** &ndash; standard szyfrowania stosowany w sieciach bezprzewodowych standardu `IEEE 802.11`.
- **WPA2** &ndash; protokół sieci bezprzewodowych. Implementuje w sobie: 802.1x oraz CCMP (protokół szyfrujący oparty na [AES](https://pl.wikipedia.org/wiki/Advanced_Encryption_Standard)).
- **WPA2-PSK** &ndash; WPA2 używające PSK*
- **WPA-PSK** &ndash; WPA używające PSK*

*Klucz, który był ustalony między dwoma stronami przed jego użyciem

## Sieci bezprzewodowe

- **Wi-Fi** &ndash; nazwa handlowa standardu `IEEE 802.11b`.

- **SSID (Service Set IDentification)** &ndash; identyfikator (nazwa) sieci bezprzewodowej.

## Typy sieci

- **LAN (Local Area Network)** &ndash; sieć lokalna.

- **WLAN (Wireless Local Area Network)** &ndash; bezprzewodowa sieć lokalna.
- **MAN (Metropolitan Area Network)** &ndash; sieć zajmująca większy obszar niż pomieszczenie czy budynek. Sieci typu 
  MAN zlokalizowane są na obszarze całego miasta lub aglomeracji.
- **PAN (Personal Area Network)** &ndash; sieć "personalna" &mdash; np. Bluetooth.
- **WAN (Wide Area Network)** &ndash; sieć komputerowa znajdująca się na obszarze wykraczającym poza miasto, kraj lub kontynent.

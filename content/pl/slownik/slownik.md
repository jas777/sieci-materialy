---
title: Słownik pojęć
description: Skondensowana lista pojęć z materiałów
category: Słownik
position: 1000
---

### Protokoły

- **Protokół** <badge>Port</badge> &ndash; opis

- **Telnet** <badge>23</badge> &ndash; podstawowy protokół komunikacji w sieciach komputerowych do obsługi odległego terminala w architekturze 
    klient-serwer
- **FTP (File Transfer Protocol)** <badge>21 (kontrola) & 20 (przesył)</badge> &ndash; podstawowy protokół przesyłania plików pomiędzy serwerem a klientem
- **SFTP (SSH File Transfer Protocol)** <badge>22</badge> &ndash; protokół do przesyłania plików pomiędzy serwerem a klientem, z tą różnicą, że **komunikacja jest 
    szyfrowana**
- **SSH (Secure SHell)** <badge>22</badge> &ndash; W ścisłym znaczeniu SSH to tylko następca protokołu Telnet, służącego do terminalowego 
    łączenia się ze zdalnymi komputerami. SSH różni się od Telnetu tym, że transfer wszelkich danych jest zaszyfrowany 
    oraz możliwe jest rozpoznawanie użytkownika na wiele różnych sposobów. 
- **HTTP (HyperText Transfer Protocol)** <badge>80</badge> &ndash; protokół służący do wysyłania dokumentów hipertekstowych (np. HTML, PHP) z serwera do klienta
- **HTTPS (Hypertext Transfer Protocol Secure)** <badge>443</badge> &ndash; szyfrowana wersja protokołu HTTP
- **TLS (Transport Layer Security)** <badge>Taki sam jak usługa</badge> &ndash; przyjęte jako standard w Internecie rozwinięcie protokołu SSL,
    zaprojektowanego pierwotnie przez Netscape Communications. TLS zapewnia poufność i integralność transmisji danych, a
    także uwierzytelnienie serwera, a niekiedy również klienta. Opiera się na szyfrowaniu asymetrycznym oraz 
    certyfikatach `X.509`.
- **SSL (Secure Socket Layer)** <badge>Taki sam jak usługa</badge> &ndash; protokół służący do bezpiecznej transmisji zaszyfrowanego strumienia danych
- **NTP (Network Time Protocol)** <badge>123</badge> &ndash; Protokół komunikacyjny umożliwiający precyzyjną synchronizację czasu pomiędzy 
    komputerami. Wzorcowy czas UTC może pochodzić pośrednio ze specjalizowanych serwerów czasu
- **POP3 (Post Office Protocol v3)** <badge>110/995 z SSL</badge> &ndash; protokół internetowy z warstwy aplikacji pozwalający na odbiór poczty 
    elektronicznej ze zdalnego serwera do lokalnego komputera poprzez połączenie TCP/IP.
- **IMAP (Internet Message Access Protocol)** <badge>143/993 z SSL</badge> &ndash; W przeciwieństwie do POP3, który umożliwia jedynie pobieranie i 
    kasowanie poczty, IMAP pozwala na zarządzanie wieloma folderami pocztowymi oraz pobieranie i operowanie na listach 
    znajdujących się na zdalnym serwerze.
- **SMTP (Simple Mail Transfer Protocol)** <badge>587/465 z SSL</badge> &ndash; SMTP to względnie prosty, tekstowy protokół, w którym określa się co 
    najmniej jednego odbiorcę wiadomości (w większości przypadków weryfikowane jest jego istnienie), a następnie
    przekazuje treść wiadomości. SMTP nie pozwala na pobieranie wiadomości ze zdalnego serwera. Do tego celu służą POP3 lub IMAP.
- **WAP (Wireless Application Protocol)** <badge>-</badge> &ndash; WAP został stworzony w celu umożliwienia dostępu do usług WWW, 
    uwzględniając ograniczenia techniczne urządzeń mobilnych (np. telefon komórkowy) korzystających z tego
    protokołu, oraz ograniczeń łącza danych (które może być realizowane m.in. poprzez połączenie CSD lub GPRS).
- **ICMP (Internet Control Message Protocol)** <badge>-</badge> &ndash; opisany w `RFC 792` protokół warstwy sieciowej modelu OSI,
    wykorzystywany w diagnostyce sieci oraz trasowaniu. Pełni przede wszystkim funkcję kontroli transmisji w sieci. Jest
    wykorzystywany w programach ping oraz traceroute.
- **CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance)** <badge>-</badge> &ndash; protokół wielodostępu do łącza ze 
    śledzeniem stanu nośnika i unikaniem kolizji.
- **CSMA/CD (Carrier Sense Multiple Access with Collision Detection)** <badge>-</badge> &ndash; protokół wielodostępu CSMA z badaniem 
    stanu kanału i wykrywaniem kolizji.
- **DHCP (Dynamic Host Configuration Protocol)** <badge>Serwer 67/Klient 68</badge> &ndash; protokół komunikacyjny umożliwiający hostom 
    uzyskanie od serwera danych konfiguracyjnych, np. adresu IP hosta, adresu IP bramy sieciowej, adresu serwera DNS, maski podsieci. 

-----

### Usługi

- **DNS (Domain Name System)** &ndash; hierarchiczny rozproszony system nazw sieciowych, który odpowiada na zapytania o 
    nazwy domen. Dzięki DNS nazwa _np. google.com_ jest tłumaczona na odpowiadający jej adres IP.

-----

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

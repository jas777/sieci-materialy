---
title: TCP/IP
description: Warstwy sieciowe w modelu TCP/IP
category: Warstwy sieci
position: 11
---

## Wprowadzenie do TCP/IP

<alert type="warning">
Materiał w przygotowaniu!
</alert>

**TCP/IP** jest teoretycznym modelem warstwowej struktury protokołów komunikacyjnych. Czyli w uproszczeniu pokazuje w którym _"miejscu"_ działa określona grupa protokołów.

Model **TCP/IP** został stworzony w latach 70. XX wieku w **DARPA**, aby pomóc w tworzeniu odpornych na atak sieci komputerowych. Potem stał się podstawą struktury Internetu.

## Warstwy

Podstawowym założeniem modelu **TCP/IP** jest podział całego zagadnienia komunikacji sieciowej na szereg współpracujących ze sobą warstw. Każda z nich może być tworzona przez programistów zupełnie niezależnie, jeżeli narzucimy pewne protokoły według których wymieniają się one informacjami. 

Założenia modelu **TCP/IP** są pod względem organizacji warstw zbliżone do modelu OSI. Jednak liczba warstw jest mniejsza i bardziej odzwierciedla prawdziwą strukturę Internetu. Model **TCP/IP** składa się z czterech warstw.


<table class="withborders dark:bg-gray-800 bg-gray-100">
    <tr align="center">
        <td>Aplikacji</td>
    </tr>
    <tr align="center">
        <td>Transportowa</td>
    </tr>
    <tr align="center">
        <td>Internetu</td>
    </tr>
    <tr align="center">
        <td>Dostępu do sieci</td>
    </tr>
</table>


### Warstwa aplikacji

Warstwa procesowa czy warstwa aplikacji to __najwyższy poziom__, w którym pracują użyteczne dla człowieka aplikacje, takie jak np. **serwer WWW** czy przeglądarka internetowa. Obejmuje ona zestaw gotowych protokołów, które aplikacje wykorzystują do przesyłania różnego typu informacji w sieci. Wykorzystywane protokoły to m.in.: `HTTP`, `Telnet`, `FTP`, `TFTP`, `SNMP`, `DNS`, `SMTP`, `X Window`.

### Warstwa transportowa

Warstwa transportowa gwarantuje pewność przesyłania danych oraz kieruje właściwe informacje do odpowiednich aplikacji. Opiera się to na wykorzystaniu portów określonych dla każdego połączenia. **W jednym komputerze może istnieć wiele aplikacji** wymieniających dane z tym samym komputerem w sieci i nie nastąpi wymieszanie się przesyłanych przez nie danych.

### Warstwa Internetu

Warstwa Internetu lub _warstwa protokołu internetowego_ to sedno działania Internetu. **W tej warstwie przetwarzane są datagramy posiadające adresy IP**. Ustalana jest odpowiednia droga do docelowego komputera w sieci.

### Warstwa dostępu do sieci

Warstwa dostępu do sieci lub warstwa fizyczna jest najniższą warstwą i to ona **zajmuje się przekazywaniem danych przez fizyczne połączenia między urządzeniami sieciowymi**. __Najczęściej są to karty sieciowe lub modemy__. Dodatkowo warstwa ta jest czasami wyposażona w _protokoły do dynamicznego określania adresów IP_.

---
title: ISO/OSI
description: Warstwy sieciowe w modelu ISO/OSI
category: Warstwy sieci
position: 12
---

## Model ISO/OSI

<alert type="warning">
Materiał w przygotowaniu!
</alert>

Model ISO/OSI jest znacznie bardziej rozbudowaną wersją modelu TCP/IP, posiadający o wiele więcej warstw.

Model ISO OSI jest traktowany jako model odniesienia (wzorzec) dla większości rodzin protokołów komunikacyjnych. Podstawowym założeniem modelu jest podział systemów sieciowych na 7 warstw współpracujących ze sobą w ściśle określony sposób.

Model warstwowy został przyjęty przez ISO w 1984 roku. Najbardziej istotnym organem jest wspólny komitet powołany przez `ISO/IEC`, zwany `Joint Technical Committee Information Technology` (`JTC1`). Formalnie dzieli się jeszcze na podkomitety `SC`.

#### Warstwy

<table class="withborders dark:bg-gray-800 bg-gray-100">
    <tr align="center">
        <td>Aplikacji</td>
    </tr>
    <tr align="center">
        <td>Prezentacji</td>
    </tr>
    <tr align="center">
        <td>Sesji</td>
    </tr>
    <tr align="center">
        <td>Transportowa</td>
    </tr>
    <tr align="center">
        <td>Sieci</td>
    </tr>
    <tr align="center">
        <td>Łącza danych</td>
    </tr>
    <tr align="center">
        <td>Fizyczna</td>
    </tr>
</table>

## Kapsułkowanie danych

Model OSI opisuje drogę danych od aplikacji w systemie jednej stacji roboczej do aplikacji w systemie drugiej. Przed wysłaniem dane wraz z przekazywaniem do niższych warstw sieci zmieniają swój format, co nosi nazwę procesu kapsułkowania (enkapsulacji).

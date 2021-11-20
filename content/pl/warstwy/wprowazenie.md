---
title: Wprowadzenie
description: Wprowadzenie do warstw sieciowych ISO/OSI
category: Warstwy sieci
position: 2
---

Komunikacja pomiędzy urządzeniami w sieciach komputerowych, jak każdy inny typ komunikacji rządzi się określonymi
prawami i regułami. Reguły te określa się mianem **protokołów komunikacyjnych**. Różnią się one pomiędzy sobą w zależności
od rodzaju komunikacji. Dokładnie tak samo jak w życiu codziennym, inny rodzaj zasad rządzi przy połączeniach
telefonicznych, inny przy przekazywaniu informacji poprzez popularne komunikatory.

Aby w sieciach komputerowych komunikacja przebiegała we właściwy sposób wymagane jest współdziałanie wielu protokołów,
które określa się mianem **zestawu protokołów**. Na zestaw taki składają się zarówno składniki programowe, jak również
urządzenia sieciowe. Najbardziej efektywną metodą wizualizacji współdziałania protokołów jest postrzeganie ich jako
nałożone na siebie warstwy stanowiące swojego rodzaju **stos**.

Stosowanie takiej metody pozwala na pogrupowanie elementów komunikacji sieciowej w warstwy, co pozwala np. producentom
na tworzenie urządzeń zaprojektowanych do pracowania w danej warstwie (np. switch pracuje w warstwie 2), które będą
bezproblemowo współpracowały ze sobą. Umożliwia to również znacznie łatwiejsze projektowanie protokołów, ponieważ
są one ustandaryzowane i np. protokół IP nie będzie się różnił w zależności od producenta.

## Podstawowe modele stosu

Istnieją dwa podstawowe modele odniesienia: model **ISO/OSI** oraz model **TCP/IP**.
<table class="withborders dark:bg-gray-800 bg-gray-100">
    <tr align="center">
        <th>ISO/OSI</th>
        <th>TCP/IP</th>
    </tr>
    <tr align="center">
        <td>Aplikacji</td>
        <td valign="middle" rowspan="3">Aplikacji</td>
    </tr>
    <tr align="center">
        <td>Prezentacji</td>
    </tr>
    <tr align="center">
        <td>Sesji</td>
    </tr>
    <tr align="center">
        <td>Transportu</td>
        <td>Transportu</td>
    </tr>
    <tr align="center">
        <td>Łącza danych</td>
        <td rowspan="2">Dostępu do sieci</td>
    </tr>
    <tr align="center">
        <td>Fizyczna</td>
    </tr>
</table>

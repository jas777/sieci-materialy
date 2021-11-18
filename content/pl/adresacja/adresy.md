---
title: Adresy fizyczne i logiczne
category: 'Adresacja'
position: 3
description: 'Opis teoretyczny adresów logicznych i fizycznych'
---

## Adresy fizyczne

Adres fizyczny, zwany również MAC _(ang. Access Control address)_, jest adresem nadawanym
przez producenta danego urządzenia podczas produkcji. Oznacza to, że adres fizyczny jest nadawany
przy tworzeniu urządzenia i zazwyczaj nie da się go łatwo zmienić, chociaż powoli się to zmienia.

Adres MAC jest 6-bajtowy (48-bitowy). Pierwsze 24 bity oznaczają producenta karty sieciowej, a
pozostałe są unikatowym identyfikatorem danego urządzenia.

#### Przykład

Załóżmy, że firma **Intel** uzyskała oznaczenie `AB:CD:EF`

Oznaczałoby to, że gdybyśmy spotkali się z adresem `AB:CD:EF:12:34:56` to moglibyśmy stwierdzić,
że karta została wyprodukowana przez tą firmę i nadano jej identyfikator `12:34:56`.

### Reprezentacja tekstowa

Najpopularniejsze są dwa zapisy:
 - z oddzieleniem za pomocą dwukropka: `AB:CD:EF:12:34:56`
 - z oddzieleniem za pomocą myślnika: `AB-CD-EF-12-34-56`

Od strony technicznej zupełnie się od siebie nie różnią, a ich wybór zależy od preferencji

<alert type="warning">
Niektóre urządzenia wymuszają dany zapis, zawsze sprawdzaj w dokumentacji bądź panelu sterowania!
</alert>

## Adresy logiczne

Adresy logiczne są sposobem oznaczenia danej karty sieciowej wewnątrz sieci. W gruncie rzeczy od adresu fizycznego różni
się tym, że dany MAC jest jeden na cały świat - a np. **adres IPv4 może się powtarzać w każdej sieci**.

Ważne jest tylko zachowanie unikalności adresów w danej sieci, aby nie doprowadzić do **abstrakcyjnej** sytuacji,
gdzie komputer wysyła zapytanie internetowe, a odpowiedź dostaje urządzenie z tym samym adresem


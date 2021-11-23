---
title: Dzielenie na podsieci
category: Adresacja
position: 23
---

<alert type="warning">
Pisane na szybko <3
</alert>

Załóżmy, że mamy adres urządzenia `192.168.0.119` z maską `/24 (255.255.255.0)`

Aby obliczyć właściwy adres sieci, przeprowadzamy operację & (AND) &ndash; przypominam, że tabela wyników dla AND wygląda
tak:
```md
0 + 0 = 0
0 + 1 = 0
1 + 0 = 0
1 + 1 = 1
```

Tak więc, jeżeli zapiszemy sobie adres urządzenia nad maską sieciową (binarnie) - to bardzo łatwo to zrobimy, ponieważ
wszystko to co znajduje się "pod maską" przepisujemy.
```
11000000 10101000 00000000 01110111 A. URZĄDZENIA
11111111 11111111 11111111 00000000 MASKA
11000000 10101000 00000000 00000000 WYNIK AND
```
Po przekonwertowaniu wyniku na liczby dziesiętne otrzymamy rzeczywisty adres sieci, w tym przypadku będzie to
`192.168.0.0`

Teraz musimy ustalić na ile podsieci dzielimy - dla przykładu podzielmy na 5 podsieci. Aby to zrobić musimy ustalić ile
bitów potrzebujemy, aby zapisać `ilość podsieci - 1` binarnie, dlaczego minus jeden?

Przy dzieleniu na 5 podsieci:

<alert type="danger">

Podsieć 1

Podsieć 2

Podsieć 3

Podsieć 4

Podsieć 5

<u>Czyli maksymalny numer podsieci to 5</u>

</alert>

<alert type="success">

Podsieć 0

Podsieć 1

Podsieć 2

Podsieć 3

Podsieć 4

<u>Czyli maksymalny numer podsieci to 4</u>

</alert>

Czyli w naszym przypadku potrzebujemy 3 bitów, bo 4 binarnie to `100`

Teraz, skoro już mamy ilość bitów to dodajemy je do maski z sieci głównej (w naszym przypadku 24). Czyli maską naszych
podsieci będzie 24 + 3 = 27

Teraz dochodzimy do najprostszej tak na prawdę czynności, jedyne co musimy dodać do naszego adresu IP to numer podsieci
zapisany na 3 bitach, które dodaliśmy:

<alert type="info">
Dla ułatwienia, 3 bity które dodaliśmy są oddzielone od reszty
</alert>

#### Podsieć 1
Tu nie zmieniamy nic, ponieważ podsieć 1 ma numer 0
```
11000000 10101000 00000000 000 00000 SIEĆ
11111111 11111111 11111111 111 00000 MASKA
```

#### Podsieć 2
Tu wpisujemy `001`, ponieważ podsieć 2 ma numer 1, a 1 zapisane na 3 bitach to `001`
```
11000000 10101000 00000000 001 00000 SIEĆ
11111111 11111111 11111111 111 00000 MASKA
```

#### Podsieć 3
Tu wpisujemy `010`, ponieważ podsieć 3 ma numer 2, a 2 zapisane na 3 bitach to `010`
```
11000000 10101000 00000000 010 00000 SIEĆ
11111111 11111111 11111111 111 00000 MASKA
```

#### Podsieć 4
Tu wpisujemy `011`, ponieważ podsieć 4 ma numer 3, a 3 zapisane na 3 bitach to `011`
```
11000000 10101000 00000000 011 00000 SIEĆ
11111111 11111111 11111111 111 00000 MASKA
```

#### Podsieć 5
Tu wpisujemy `100`, ponieważ podsieć 5 ma numer 4, a 4 zapisane na 3 bitach to `100`
```
11000000 10101000 00000000 100 00000 SIEĆ
11111111 11111111 11111111 111 00000 MASKA
```

Teraz, aby obliczyć liczbę używalnych hostów (czyli liczba hostów - 2, ponieważ odejmujemy rozgłoszeniowy i adres sieci)
wystarczy napisać 2<sup>32 - maska podsieci</sup> - 2, czyli w naszym przypadku 2<sup>5</sup> - 2 (nie trzeba rozpisywać)

<alert type="info">
Dla ułatwienia, 3 bity które dodaliśmy są oddzielone od reszty
</alert>

Teraz, aby obliczyć zakres hostów wystarczy zrobić dwie proste czynności:

```
11000000 10101000 00000000 100 00001 PIERWSZY ADRES
11000000 10101000 00000000 100 11110 OSTATNI ADRES
```

Nie ma za tym wielkiej filozofii - aby mieć pierwszy adres, zmieniamy ostatni bit na `1`, a żeby uzyskać ostatni adres
wypełniamy wszystkie (oprócz ostatniego) bity ZA MASKĄ jedynkami, co doprowadza nas przy okazji do adresu rozgłoszeniowego,
ponieważ jest on taki sam jak ostatni adres, tylko z jedynką na ostatnim bicie:

```
11000000 10101000 00000000 100 11111 ADRES ROZGŁOSZENIOWY
```

Czyli po przekonwertowaniu wszystkich adresów na liczby dziesiętne, możemy zapisać to w ten sposób (dla podsieci #5):
```
MASKA: 255.255.255.224 (/27)

LICZBA HOSTÓW: 2^5 - 2

ADRES PODSIECI (2): 11000000 10101000 00000000 10000000
ADRES PODSIECI (10): 192.168.0.128

PIERWSZY ADRES (2): 11000000 10101000 00000000 10000001
PIERWSZY ADRES (10): 192.168.0.129

OSTATNI ADRES (2): 11000000 10101000 00000000 10011110
OSTATNI ADRES (10): 192.168.0.158

ADRES ROZGŁOSZENIOWY (2): 11000000 10101000 00000000 10011111
ADRES ROZGŁOSZENIOWY (10): 192.168.0.159
```

#### Przykłady

<alert type="warning">
Pamiętaj, że są to adresy urządzeń!
</alert>

Dla ćwiczeń możesz podzielić sobie np. sieci `10.0.0.1/8`, `172.12.35.57/15`, `192.168.0.1/28`, czy `213.144.89.55/13`,
a poprawność sprawdzisz na [kalkulatorze podsieci](https://kalkulator.citymeet.xyz)

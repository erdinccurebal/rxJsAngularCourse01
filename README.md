# RxJsAngularCourse01

## Creating Operators

**1_1 Of Operatör Özelliği:** Of Operatörü herhangi birşeyi observable cevirir.

**1_2 Interval Operatör Özelliği:** Interval Operatörü belirlediginiz saniyeyi tekrarlar.

**1_3 Timer Operator Özelliği:** Timer Operatörü belirlenen saniye kadar bekleyebilir ve istersen tekrar edebilir.

**1_4 Range Operatör Özelliği:** Range Operatörü belirlenen sayı aralığını oluşturur.

**1_5 From Operatör Özelliği:** From Operatörü belirlenin içini yayınlar.

**1_6 Defer Operatör Özelliği:** Defer Operatörü observable ' yi çağırdığız an gelir. Zamanlarda çok kullanılır Date().

**1_7 Ajax Operator Özelliği:** Ajax Operatörü api ile iletişim kurmanızı sağlar.

**1_8 Create Operator Özelliği:** Create Operatörü Observable oluşturmaya yarar.

**1_9 FromEvent Operator Özelliği:** FromEvent Operatörü Dom eventlerini yaklayıp işlem yapmanızı sağlar.


## Filtering Operators

**2_1 First Operator Özelliği:** First Operatörü hata varsa geriye hata mesajı döner, tek obje geri getirir, net aramalar yapılır, tek harfden arama yapılmaz.

**2_2 Find Operator Özelliği:** Find operatorü tek obje döner ve net aramalar yapılır , tek harf aranmaz, hata mesajı dönmez.

**2_3 Filter Operator Özelliği:** Filter Operatorü dizin getirir ve net aramalar yapılır tek harf aranmaz.

**2_4 Last Operator Özelliği:** Last Operatörü son objeyi döner,Koşullu bir şekildede sondakini getirebilir üçe bölünenlerin en sonu gibi.

**2_5 Single Operator Özelliği:** Single Operatörü sorgulanan tek bir obje çeker.

**2_6 Distinct Operator Özelliği:** Distinct Operatörü dizindeki aynı elamanları yok eder.

**2_7 DebounceTime Operator Özelliği:** DebounceTime Operatör bu fonksiyona örnek vermek gerekirse klavyede seri tusa basarken zaman limiti koyar ve son veriyi gönderir.

**2_8 Skip Operator Özelliği:** Skip Operator almış olduğu kadar atlama gerçekleştirir.

**2_9 SkipUntil Operator Özelliği:** SkipUntil Operatörü içine bir observable alır ve sub olduğunda akışa izin verir.

**2_10 SkipWhile Operator Özelliği:** SkipWhile Operatörü şarta bağlı olarak atlama yapar.

**2_11 Take Operator Özelliği:** Take Operatörü Parametre olarak int değer alır ve geriye int değer kadar obje çeker. Baştan sona düzeninde verileri çeker.

**2_12 TakeLast Operator Özelliği:** TakeLast Operatörü Parametre olarak int değer alır ve geriye int değer kadar obje çeker. Sondan Başa düzeninde verileri çeker.

**2_13 TakeWhile Operator Özelliği:** TakeWhile Operatörü verileri şarta bağlı çeker, Baştan Sona sadece ilk verileri çeker.

**2_14 Throttle Operator Özelliği:** Throttle Operatörü observable 'dan gelen veriyi belirli bir süre engeller.

**2_15 ThrottleTime Operator Özelliği:** ThrottleTime Operatörü belirli bir süre veri gelmesini engeller.


## Transformation Operators

**3_1 Map Operator Özelliği:** Map Operatör gelen datayı düzenlemize yarar.

**3_2 MapTo Operator Özelliği:** MapTo Operatör sabit bir değer göndermeye yarar.

**3_3 MergeMap Operator Özelliği:** MergeMap Operatörü Dıştaki observable'yi bekletiyor ve bütün veriyi aldıktan sonra hepsini yayınlar. Api'larda çok kullanılır çekilen veriyi mergeMap Edip farklı bir api istek yapılabilir.

**3_4 Switch Operator Özelliği:** SwitchMap Operatörü mergemap gibi bütün verileri çekmesini bekler ve son gelen veriyi yayınlar. Api iç içe istek yapılabilir. Observable'leri birleştirmeye yarar.

**3_5 ConcatMap Operator Özelliği:** ConcatMap Operatörü mergemap 'de benzer ama ConcatMap Operatörünün içindeki veriler bitmeden yayınlamasına izin vermez.

**3_6 ToArray Operator Özelliği:** Veriyi array çevirir.

**3_7 Reduce Operator Özelliği:** Reduce Operatörü Sarı aralıgını veya index aralıgını toplamaya veya index yazdırmaya yarar.


## Combination Operatos

**4_1 Merge Operator Özelliği:** Operatörleri birbirine bağlamaya yarar ve tek cıkış datası yaratır.

**4_2 MergeAll Operator Özelliği:** MergeAll Operatörü Dataları eş zamanlı birleştirebilir, Birden fazla değer gönderebilir ve çoklu değer gelişide sınırlanabilir.

**4_3 StartWith Operator Özelliği:** StartWith Operatörü başlangıç değeri verir.

**4_4 FrokJoin Operator Özelliği:** ForkJoin Operatörü birder fazla observable alabilir ve içindeki bütün observable'ler yayınlaması bittikten sonra veriyi yayınlar.

**4_5 WithLatestFrom Operator Özelliği:** WithLatestFrom Operatörü tanımlanan observablenin son degeriyi alır ve durdurur. interval den gelen verinin sadece anlık gelir hepsini yayınlamaz devamlı.

**4_6 Concat Operator Özelliği:** Concat Operatörü observable'leri birleştirir ama sırayla tek tek yayınlar biri bitmeden diğerini yayınlamaz.


## Utility Operators

**5_1 Tap Operator Özelliği:** Tap Operatörü akışı bozmadan dışarı veri atar örnek olarak loglama yapılabilir.

**5_2 DelayWhen Operator Özelliği:** DelayWhen Operatörü saniye bazında çalışmaz, dışardan bir observable alır ve o observable çalışana kadar ana observableyi bekletir ve özellikle veri gelene kadar observable çalışmamış olur. Observableyi bekletir.

**5_3 Finalize Operator Özelliği:** Observable veri çekme işlemini bitirdikten sonra gönderilcek method. Observable devamınına girmez dışarı veri atar.

**5_4 Repeat Operator Özelliği:** Repeat operatörü observableyi tekrar eder sub olan veriyi tekrar cekmez observableyi tekrardan başlatarak veriyi ceker.

**5_5 TimeOut Operator Özelliği:** TimeOut Operatörü veri istenilen zamanda gelmezse hata fırlatılır.

**5_6 Retry Operator Özelliği:** Retry Operatörü veri başarısız gelirse tekrar çalışır, operatör içine integer değer alır ve tekrarlar.

**5_7 RetryWhen Operator Özelliği:** RetryWhen Operatörü Gelen veri hata verirse baştan tekrar eder ve hatayı yakalar.

**5_8 CatchError Operator Özelliği:** CatchError Operatörü hatayı yakalamasınızı ve subscribe olmadan düzenlemenizi sağlar.


## Subjects
**6_1 Normal Subject Özelliği:** Standart Subject Operatörü her componentden daha alıpda yayını bütün componentlere yapmaya yarar herkesin gönderebildigi ve herkesin okuyabildiği bir iletişim kanalı.

**6_2 Behavior Subject Özelliği:** BehaviorSubject Operatörü içine ilk değer almak zorundadır standart subject dir, tek fark ilk değer alır.

**6_3 Async Subject Özelliği:** aSyncSubject Operatörü gelen son veriyi alır yani son next alır , zaten hepsi standart subject özelleştirişmiş hali. Önemli not next.complate methodunu alması zorunludur. son veriyi ne zaman alıcagı belirtilmesi gerek.

**6_4 Replay Subject Özelliği:** ReplaySubject Operatorü üstten gelen verileri sınırlayabilir sub olmadan önce yayınlanan veriler sınırlanabilir ve üstten alttanda veri alabilir, ve hepsini yayınlar, verilen integer deger kadar sınırlabilir.

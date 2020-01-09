# install

```sh
npm i yymmdd -D
```

# sample

If the system time is 2020-01-02 03:04:15

```ts
import { yyyymmdd, yyyymmddhhmmss, yyyy_mm_dd, yyyy_mm_dd_hh_mm_ss } from "yymmdd";
yyyymmdd(); // 20200102
yyyymmdd(new Date("2020/01/05")); // 20200105
yyyymmddhhmmss(); // 20200102030415
yyyymmddhhmmss(new Date("2020/01/05 12:13:14")); // 20200105121314

yyyy_mm_dd(); // 2020-01-02
yyyy_mm_dd(new Date("2020/01/05")); // 2020-01-05
yyyy_mm_dd_hh_mm_ss(); // 2020-01-02 03:04:15
yyyy_mm_dd_hh_mm_ss(new Date("2020/01/05 12:13:14")); // 2020-01-05 12:13:14
```

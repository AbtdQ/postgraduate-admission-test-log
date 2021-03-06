---
lang: zh-CN
title: 计算机网络笔记
---

## 数据链路层

### CRC 的计算方法

基本原理：

1. 发送方和接收方事先约定一 r+1 位二进制数 G。
2. 发送方根据数据 D 和 G 计算出 r 位的校验序列（FCS）。
3. 发送方将 D 与 FCS 拼接并发送。
4. 接收方接受到(D + FCS)的二进制串，将(D + FCS) 与 G 进行模 2 除法，若余数为 0 则数据正确。

FCS 的计算方法：

1. 在 D 末尾追加 r 位 0 构成被除数。
2. 将被除数与 G 进行模 2 除法。
3. 得到余数即为 FCS，FCS 应为 r 位。

模 2 除法：

按正常竖式除法计算，但加减法运算改为异或运算。

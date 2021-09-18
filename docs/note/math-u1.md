---
lang: zh-CN
title: 数学第一章笔记
---

## 函数极限计算

### 无穷小量

- $f(x) 具有极限 A$ $\Leftrightarrow$ $f(x) = A + \alpha$，其中 $\alpha$ 为 $x \to x_0 | \infty$ 时的无穷小
- 有限个无穷小的和或积 = 无穷小

  有界函数、常数与无穷小的乘积 = 无穷小

  - 例：$\sin\frac{1}{x}$ 有界，$\displaystyle \lim_{x \to 0} {x \sin\frac{1}{x}} = 0$

    但 $\displaystyle \lim_{x \to 0}{\frac{1}{x \sin\frac{1}{x}}}$ 无意义，因为 $\sin\frac{1}{x}$ 可以为 $0$

- 高阶无穷小量 $o(x)$
  - 吸收性：$o(x^n) + o(x^m) = o(x^{\min(n, m)})$
  - 累积性：$o(x^n) \cdot o(x^m) = o(x^{m+n})$
  - 不动性：$o(kx^n) = o(x^n)$

- 等价无穷小量替换
  - 充要条件：$\alpha - \beta =o(\beta)$ 或 $\alpha = \beta + o(\beta)$，$\alpha + o(\alpha) = \beta + o(\beta)$

### 无穷大量

### 幂指函数

$f^g$ 幂指，可分为：

- $1^\infty$
- $\infty^0$
- $0^0$

方法：

$$ f^g = e^{\ln{f^g}} = e^{g\ln{f}} $$

即变为指数

例：$\displaystyle \lim_{x \to 0}{(1+x)^\frac{1}{x}} = e^{\lim_{x \to 0}{\frac{1}{x} \ln(1+x)}} = e^1$ ($1^\infty$ 型)

### 洛必达

### 夹逼定理

## 极限四则运算

$\displaystyle \lim_{x \to \alpha}{f(x)} = A, \lim_{x \to \alpha}{g(x)} = B$，那么

$$ \lim_{x \to \alpha}{f(x) \pm g(x)} = A \pm B $$

$$ \lim_{x \to \alpha}{f(x) \cdot g(x)} = A \cdot B $$

$$ \lim_{x \to \alpha}{\frac{f(x)}{g(x)}} = \frac{A}{B} $$

## 洛必达法则

条件：

  1. $\displaystyle \lim_{x \to \alpha}{\frac{f(x)}{g(x)}}$ 存在
  2. 在点 $\alpha$ 的某去心邻域内 $f'(x)$，$g'(x)$ 都存在，且 $g'(x) \neq 0$
  3. $\displaystyle \lim_{x \to \alpha}{f(x)} = 0 或 \infty$，$\displaystyle \lim_{x \to \alpha}{g(x)} = 0 或 \infty$

有：

$$ \lim_{x \to \alpha}{\frac{f(x)}{g(x)}} = \lim_{x \to \alpha}{\frac{f'(x)}{g'(x)}} $$

适用于 $\frac{0}{0}$ 型或 $\frac{\infty}{\infty}$ 型

变限积分首选

# Theory

Zero-Order Hold (ZOH) devices convert sampled signals to continuous-time signals for analyzing sampled continuous-time systems. 
The ZOH discretization of a continuous-time LTI model is depicted in the Fig. 1.<br/><br>

<div align="center">
<img class="img-fluid"  src= "./images/ZOH block.jpg" alt=""><br>
<b> Fig.1. Block diagram of Zero-Order Hold </b><br/>
</div><br>

The ZOH device generates a continuous input signal <span style="font-family:Bodoni MT; font-style:italic;font-size:18px">u</span>(<span style="font-family:Bodoni MT; font-style:italic;font-size:18px">t</span>) 
by holding each sample value <span style="font-family:Bodoni MT; font-style:italic;font-size:18px">u</span>(<span style="font-family:Bodoni MT; font-style:italic;font-size:18px">k</span>) constant over one sample period. <br>
$$ u(t) = u(k) ; kT \le t \le (k+1)T \tag{1} $$


First-Order Hold (FOH) differs from ZOH by the underlying hold mechanism. <br>
To turn the input samples into a continuous input, FOH uses linear interpolation between samples. <br>
$$ u(t) = u(k) + \frac {t-kT}{T} [u(k+1)-u(k)] ; kT \le t \le (k+1)T \tag{2} $$


The transfer functions for these circuits are given as <br>
For ZOH  <br>
$$ G(s) = \frac {1-e^{-Ts}}{s} \tag{3} $$


For FOH  <br>
$$ G(s) = \frac {1+Ts}{T} \frac {(1-e^{-Ts})^2}{s^2} \tag{4} $$


Practical implementable transfer functions are obtained using approximations of exponential series (Pade Approximations).               



<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
## Introduction

<div align="center">
<img src="experiment/images/iitkgp.png" width="10%">
</div>

<b>Discipline | <b>Electrical Engineering 
:--|:--|
<b> Lab | <b> Digital Control Laboratory
<b> Experiment|     <b> Determine Frequency Response of Zero Order Hold and First Order Hold using Actual Transfer Functions and Pade Approximations and Exp 1

### About the Experiment 

 **The Hold Operation**

In the computer-controlled systems, it is necessary to convert the control actions calculated by the computer as a sequence of numbers, to a continuous-time signal that can be applied to the process.<br/><br>

The problem of hold operation may be posed as follows:<br>
Given a sequence 

$$ {y(0), y(1),..., y(k),...} $$ 

We have to construct

$$ y_a(t), t \ge 0 $$	

A commonly used solution to the problem of hold operation is polynomial extrapolation. Using Taylor’s series expansion about <img src="./images/t_kT.png">, we can express 

$$ y_a(t) = y_a(kT) + \dot y_a (kT)(t-kT)+ \frac {\ddot y_a(kT)}{2!} (t-kT)^2 +...; kT \le t \lt (k+1)T \tag{1} $$

where,

$$ \dot y_a (kT) \cong \frac{1}{T} [y_a(kT)-y_a((k-1)T)] $$ 
$$ \ddot y_a(kT) \cong \frac{1}{T^2} [y_a(kT)-2y_a((k-1)T)+y_a((k-2)T)] $$


If only the first term in expansion (1) is used, the data hold is called a Zero-Order Hold (ZOH). 
Here we assume that the function  <span style="font-family:Sitka Text; font-style:italic;">y<sub>a</sub></span>(<span style="font-family:Bodoni MT; font-style:italic;font-size:18px">t</span>) is approximately constant within the sampling interval, at a value equal to that of the function at the preceding sampling instant. 
Therefore, for a given input sequence {<span style="font-family:Sitka Text; font-style:italic;">y</span>(<span style="font-family:Bodoni MT; font-style:italic;font-size:18px">k</span>)}, the output of ZOH is given by <br>
$$ y_a(t) = y(k) ; kT \le t \lt (k+1)T \tag{2} $$

The first two terms in expansion (1) are used to realize the first-order hold. For a given input sequence {<span style="font-family:Sitka Text; font-style:italic;">y</span>(<span style="font-family:Bodoni MT; font-style:italic;font-size:18px">k</span>)}, the output of the first-order hold is given by<br>

$$ y_a(t) = y(k) + \frac {t-kT}{T} [y(k) - y(k-1)] \tag{3} $$

It is obvious from expansion (1) that the higher the order of the derivative to be approximated, the larger will be the number of delay pulses required. The time-delay adversely affects the stability of feedback control systems. 
Furthermore, a high-order extrapolation requires complex circuitry and results in high costs of construction. The ZOH is the simplest, and most commonly used, data hold device. 
The standard D/A converters are often designed in such a way that the old value is held constant until a new conversion is ordered.

					


	

<b>Subject matter expertise | <b> **Prof. Alok Kanti Deb**
:--|:--|
<b> Institute | <b>  **Indian Institute of Technology Kharagpur**
<b> Email id|     <b>  **alokkanti@ee.iitkgp.ac.in**
<b> Department |  **Department of Electrical Engineering**
<b>Webpage| <b> http://www.iitkgp.ac.in/department/EE/faculty/ee-alokkanti

### Contributors List

SrNo | Name | VLabs Developer or Integration Engineer | Designation | Department| Institute
:--|:--|:--|:--|:--|:--|
1 | **Kamal Sandeep Karreddula** | Developer | Research Scholar | Department of Electrical Engineering | IIT Kharagpur | 
2 | **Piyali Chattopadhyay** | Integration Engineer | Project Scientist | Department of Mechanical Engineering | IIT Kharagpur |


<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
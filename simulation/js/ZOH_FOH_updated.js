


function inputChange(){
	
	if(document.getElementById('Ts').value >5){
		
	alert('maintain the range');	
		
	}
	
	
}

function refresh(){
location.reload();	

}

///change names of buttons

function zohfrs(){	
	document.getElementById('methodchkfreq').value=1;
	document.getElementById('dropdownfreq').innerHTML="ZOH Freq. Resp.";
	document.getElementById('plotfreq').style.display="block";
	document.getElementById('plotbode').style.display="none";
	document.getElementById('dropdownbode').disabled=true;
	
	
}

function zohfrps(){	
	document.getElementById('methodchkfreq').value=2;
	document.getElementById('dropdownfreq').innerHTML="ZOH PADE 1 Freq. Resp.";
	document.getElementById('plotfreq').style.display="block";
	document.getElementById('plotbode').style.display="none";
	document.getElementById('dropdownbode').disabled=true;
	
	
}

function fohfrs(){	
	document.getElementById('methodchkfreq').value=3;
	document.getElementById('dropdownfreq').innerHTML="FOH Freq. Resp.";
	document.getElementById('plotfreq').style.display="block";
	document.getElementById('plotbode').style.display="none";
	document.getElementById('dropdownbode').disabled=true;
	
}

function fohfrps(){	
	document.getElementById('methodchkfreq').value=4;
	document.getElementById('dropdownfreq').innerHTML="FOH PADE 1 Freq. Resp.";
	document.getElementById('plotfreq').style.display="block";
	document.getElementById('plotbode').style.display="none";
	document.getElementById('dropdownbode').disabled=true;
	
}

function zohbs(){	
	document.getElementById('methodchkbode').value=1;
	document.getElementById('dropdownbode').innerHTML="ZOH Bode";
	document.getElementById('plotfreq').style.display="none";
	document.getElementById('plotbode').style.display="block";
	document.getElementById('dropdownfreq').disabled=true;
	
}

function zohbps(){	
	document.getElementById('methodchkbode').value=2;
	document.getElementById('dropdownbode').innerHTML="ZOH PADE 1 Bode";
	document.getElementById('plotfreq').style.display="none";
	document.getElementById('plotbode').style.display="block";
	document.getElementById('dropdownfreq').disabled=true;
	
}

function fohbs(){	
	document.getElementById('methodchkbode').value=3;
	document.getElementById('dropdownbode').innerHTML="FOH Bode";
	document.getElementById('plotfreq').style.display="none";
	document.getElementById('plotbode').style.display="block";
	document.getElementById('dropdownfreq').disabled=true;
	
}

function fohbps(){	
	document.getElementById('methodchkbode').value=4;
	document.getElementById('dropdownbode').innerHTML="FOH PADE 1 Bode";
	document.getElementById('plotfreq').style.display="none";
	document.getElementById('plotbode').style.display="block";
	document.getElementById('dropdownfreq').disabled=true;
	
}



function plotFr(){
	
	if(document.getElementById('methodchkfreq').value==1){
		ZOH_fr();
	}
	if(document.getElementById('methodchkfreq').value==2){
		ZOH_pade1_fr();
	}
	if(document.getElementById('methodchkfreq').value==3){
		FOH_fr();
	}if(document.getElementById('methodchkfreq').value==4){
		FOH_pade1_fr();
	}		
}

function plotBD(){
	
	if(document.getElementById('methodchkbode').value==1){
		ZOH_bode();
	}
	if(document.getElementById('methodchkbode').value==2){
		ZOH_pade1_bode();
	}
	if(document.getElementById('methodchkbode').value==3){
		FOH_bode();
	}if(document.getElementById('methodchkbode').value==4){
		FOH_pade1_bode();
	}
		
}







//var dataOPPoints=[];	///for plotting chart
//var dataOPPoints1=[];

var Arraymfr =[],Arrayphfr =[];///magnitude freq, phase freq
var incrmfr = 0,incrphfr = 0;///increment counters for linear freq plots
var spstore=[];///sample period value store
var ltstore =[];///legend text value store


//////////////////////// ZOH 

function ZOH_fr(){
	var dataOPPoints=[];	///for plotting chart
	var dataOPPoints1=[];

	var maxf = document.getElementById('maxf').value;
	var minf = document.getElementById('minf').value;
	var Ts = document.getElementById('Ts').value;
	var LTextf = "ZOH";
	
	spstore.push(Ts);
	ltstore.push(LTextf);
		
    var yop = new Array();	///continous data output result storing
	var phase = [];
	
	var	f = minf;
	while(f<=maxf){
	//for(var f=minf;f<=maxf;f++){
	f1=f;
	
	//f = f.toFixed(3);
	//f1=f;
	//fre=math.subtract(fre,-0.1);
	//fre=fre.toFixed(3);
	var w = math.multiply(2,math.pi,f);
	
	var scndprt1 = math.complex(0,w);
	
	var eprt1 = math.pow(math.e,math.complex(0,math.dotMultiply(-w,Ts)));
	var frstprt1 = math.subtract(1,eprt1);
	/// var y = (math.divide(frstprt1,scndprt1)).re;
	
	var frth1 = math.multiply(w,Ts,1/2);
	var yy = math.multiply(Ts,math.sin(frth1),1/frth1);
	
	
	yop[f] = Math.abs(yy);
	
	/// yop[f] = Math.abs(y);
	dataOPPoints.push({x:(f), y:(yop[f])});///magnitude part
	Arraymfr["array"+incrmfr]=dataOPPoints;
    Arraymfr.push("array"+incrmfr);
	
	
	var w1 = math.multiply(2,math.pi,f);
	var scndprt = math.complex(0,w1);
	
	var eprt = math.pow(math.e,math.complex(0,math.multiply(-w1,Ts)));
	var frstprt = math.subtract(1,eprt);
	var y = (math.divide(frstprt,scndprt)).re;
	
	var imagy = (math.divide(frstprt,scndprt)).im;
	
	var fraction = math.divide(imagy,y);
	//phase = math.atan2(fraction);
	//phase[f] = math.atan2(imagy,y);
	phase[f]=(180/Math.PI)*math.atan2(imagy,y);
	
	dataOPPoints1.push({x:(f), y:(phase[f])});//phase part
	Arrayphfr["array"+incrphfr]=dataOPPoints1;
    Arrayphfr.push("array"+incrphfr);
	
	
	
	console.log("mag="+yop[f]);
	console.log("phase="+phase[f]);
	console.log("freq="+f);
	
	f=math.add(f,0.01);
}


incrmfr++;
incrphfr++;
}


//////////////////for ZOH bode
///Adding new arrays for dynamic plots

var Arraymbfr =[],Arrayphbfr =[];///magnitude bode, phase bode
var incrmbfr = 0,incrphbfr = 0;///increment counters for bode freq plots
var spbstore=[];///sample period value store
var ltbstore =[];///legend text value store


function ZOH_bode(){
	
	var dataOPPoints=[];	///for plotting chart
	var dataOPPoints1=[];
	
	var maxf = document.getElementById('maxf').value;
	var minf = document.getElementById('minf').value;
	var Ts = document.getElementById('Ts').value;
	var LTextf = "ZOH Bode";
	
	spbstore.push(Ts);
	ltbstore.push(LTextf);
		
    var yop = new Array();	///continous data output result storing
	var phase = [];
	
	
	
	for(var f=minf;f<=maxf;f++){
	f1=f;
	var w = math.multiply(2,math.pi,f);
	
	var scndprt1 = math.complex(0,w);
	
	var eprt1 = math.pow(math.e,math.complex(0,math.multiply(-w,Ts)));
	var frstprt1 = math.subtract(1,eprt1);
	///var y = (math.divide(frstprt1,scndprt1)).re;
	
	var frth1 = math.multiply(w,Ts,1/2);
	var yy = math.multiply(Ts,math.sin(frth1),1/frth1);
	
	
	yop[f] = 20*Math.log10(Math.abs(yy));
	
	///yop[f] = 20*Math.log10(Math.abs(y));
	dataOPPoints.push({x:(w), y:(yop[f])});///magnitude part
	Arraymbfr["array"+incrmbfr]=dataOPPoints;
    Arraymbfr.push("array"+incrmbfr);
	
	
	var w1 = math.multiply(2,math.pi,f);
	var scndprt = math.complex(0,w1);
	
	var eprt = math.pow(math.e,math.complex(0,math.multiply(-w1,Ts)));
	var frstprt = math.subtract(1,eprt);
	var y = (math.divide(frstprt,scndprt)).re;
	
	var imagy = (math.divide(frstprt,scndprt)).im;
	
	var fraction = math.divide(imagy,y);
	//phase = math.atan2(fraction);
	//phase[f] = math.atan2(imagy,y);
	phase[f]=(180/Math.PI)*math.atan2(imagy,y);
	
	dataOPPoints1.push({x:(w), y:(phase[f])});//phase part
	Arrayphbfr["array"+incrphbfr]=dataOPPoints1;
    Arrayphbfr.push("array"+incrphbfr);
	
	
	
	console.log("mag="+yop[f]);
	console.log("phase="+phase[f]);
	
}

incrmbfr++;
incrphbfr++;
}



////////////////////for ZOH PADE

function ZOH_pade1_fr(){
	
	var dataOPPoints=[];	///for plotting chart
	var dataOPPoints1=[];

	var maxf = document.getElementById('maxf').value;
	var minf = document.getElementById('minf').value;
	var Ts = document.getElementById('Ts').value;
	var LTextf = "ZOH PADE 1";
	
	spstore.push(Ts);
	ltstore.push(LTextf);
	
    var yop = new Array();	///continous data output result storing
	var phase = [];
	
	
	
	
	for(var f=minf;f<=maxf;f++){
	f1=f;
	var w = math.multiply(2,math.pi,f);
	
	var lstprt1=math.complex(0,w);
	var scndprtn1 = math.complex(2,-math.multiply(Ts,w)); // math.complex(math.multiply(2,math.subtract(1,math.multiply(0.0833,w,w,Ts))),-math.multiply(Ts,w));
	var scndprtd1 = math.complex(2,math.multiply(Ts,w)); // math.complex(math.multiply(2,math.subtract(1,math.multiply(0.0833,w,w,Ts))),math.multiply(Ts,w));
	
	//var eprt1 = math.pow(math.e,math.complex(0,math.multiply(-w,Ts)));
	var frstprt1 = math.subtract(1,math.divide(scndprtn1,scndprtd1));
	var y = (math.divide(frstprt1,lstprt1)).re;
	
	
	
	yop[f] = Math.abs(y);
	dataOPPoints.push({x:(f), y:(yop[f])});///magnitude part
	Arraymfr["array"+incrmfr]=dataOPPoints;
    Arraymfr.push("array"+incrmfr);
	
	
	var w1 = math.multiply(2,math.pi,f);
	
	var lstprt=math.complex(0,w1);
	var scndprtn = math.complex(2,-math.multiply(Ts,w1)); //math.complex(math.multiply(2,math.subtract(1,math.multiply(0.0833,w1,w1,Ts))),-math.multiply(Ts,w1)); 
	var scndprtd = math.complex(2,math.multiply(Ts,w1)); //math.complex(math.multiply(2,math.subtract(1,math.multiply(0.0833,w1,w1,Ts))),math.multiply(Ts,w1));
	
	//var eprt1 = math.pow(math.e,math.complex(0,math.multiply(-w,Ts)));
	var frstprt = math.subtract(1,math.divide(scndprtn,scndprtd));
	var y1 = (math.divide(frstprt,lstprt)).re;
	
			
	var imagy = (math.divide(frstprt,lstprt)).im;
	
	var fraction = math.divide(imagy,y1);
	//phase = math.atan2(fraction);
	//phase[f] = math.atan2(imagy,y);
	phase[f]=(180/Math.PI)*math.atan2(imagy,y1);
	
	dataOPPoints1.push({x:(f), y:(phase[f])});//phase part
	Arrayphfr["array"+incrphfr]=dataOPPoints1;
    Arrayphfr.push("array"+incrphfr);
	
	
	
	console.log("mag="+yop[f]);
	console.log("phase="+phase[f]);
	
}

incrmfr++;
incrphfr++;
}


///Add plots new fn
var chart1,chart2,samplePA=0;
function mulPlotFr(){
	
	
	plotFr();
	
	 var sampleP = spstore.at(samplePA);
	 var legendP = ltstore.at(samplePA);
	
document.getElementById('plotbucket').style.display  = "block";
document.getElementById('chartContainer2').style.display  = "block";  
document.getElementById('chartContainer1').style.display  = "block"; 


	 chart1 = new CanvasJS.Chart("chartContainer1",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
		  
				  
	  title:{
      text: "Frequency Response (Linear Scale) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        //title: "Frequency(rad/s)"
      },
    axisY: [
	      {/////output Y axis
            title: "Magnitude",
			
			//maximum:0.03,
        }
		
		
		],
	data: [
      {        
        type: "spline",
		//color:"black",
		//showInLegend: true,
		//legendText: legendP + " " + "magnitude (T = " + "" +sampleP +")",
        dataPoints:null
	
       }
      ]	
	});
	
	chart2 = new CanvasJS.Chart("chartContainer2",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
		  
			  /* title:{
      text: "Frequency Response (Linear Scale) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      }, */
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Frequency(Hz)"
      },
    axisY: [
	      {/////output Y axis
            title: "Phase in degrees",
			
			//maximum:0.03,
        }
		
		
		],
	data: [
      {        
        type: "spline",
		//color:"black",
		showInLegend: true,
		legendText: legendP + " " + "(T = " + "" +sampleP +")",
        dataPoints:null
	
       }
      ]	
	});
//samplePA++;
}

///GET RANDOM COLORS OF PLOTS a function type
/* function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
} */
 
 ///Test dynamic Graph
 var incrfr1=0,incrfr2=0,datasetm=[],datasetph=[];
 
 function GenPlot(){
	 
	 mulPlotFr();
	 //var sampleP = document.getElementById('Ts').value;
	 
	 CanvasJS.addColorSet("MagShades",
                [//colorSet Array for magnitudes

                "#FC222D",
                "#FC8422",
                "#282BF6",
                "#1E7640",
                "black",
				"#8C28F6",
                /* "#f93838",
                "#3875f9",
                "#022676",
                "#380276", */             
                ]);
				CanvasJS.addColorSet("PhaseShades",
                [//colorSet Array for phases

                "#FC222D",
                "#FC8422",
                "#282BF6",
                "#1E7640",
                "black",
				"#8C28F6",
                /* "#f93838",
                "#3875f9",
                "#022676",
                "#380276", */			
                ]);

	 
	 for (var dnum = 0; dnum<=incrfr1; dnum++){
	
if(dnum<=3){	
	 datasetm[dnum] = Arraymfr["array"+dnum];
	 datasetph[dnum] = Arrayphfr["array"+dnum];
	 
	 var dtan =dnum+1;
	
	if(incrfr1>=0 && incrfr2>=0){
		var sampleP = spstore.at(dtan);
	    var legendP = ltstore.at(dtan); 
	
	chart1.addTo("colorSet","MagShades");
	chart1.addTo("axisY", {gridThickness: 0, tickLength:0, lineThickness:0});
	
	chart2.addTo("colorSet","PhaseShades");
	chart2.addTo("axisY", {gridThickness: 0, tickLength:0, lineThickness:0});
	
	chart1.addTo("data", {type: "spline"});//, showInLegend:true, legendText: legendP + " " + "magnitude (T = " + "" +sampleP +")"
	chart2.addTo("data", {type: "spline", showInLegend:true, legendText: legendP + " " + "(T = " + "" +sampleP +")"});
	
	}
	
	chart1.options.data[dnum].dataPoints = datasetm[dnum]; // Update the chart's data
	chart2.options.data[dnum].dataPoints = datasetph[dnum]; // Update the chart's data
	
		
	chart1.render();
	chart2.render();
	
	
	document.getElementById("exportChart").style.display = "block";
}

if(dnum>3){
	alert('Maximum four simulations can be performed. For more, click Clear and then Run.');
}


	 }
	 
	 
	 
	incrfr1++; 
	incrfr2++;
	  
 }



/////// ZOH Pade1 bode

function ZOH_pade1_bode(){
	var dataOPPoints=[];	///for plotting chart
	var dataOPPoints1=[];
	
	var maxf = document.getElementById('maxf').value;
	var minf = document.getElementById('minf').value;
	var Ts = document.getElementById('Ts').value;
	var LTextf = "ZOH PADE 1 Bode";
	
	spbstore.push(Ts);
	ltbstore.push(LTextf);
		
    var yop = new Array();	///continous data output result storing
	var phase = [];
	
	
	
	
	for(var f=minf;f<=maxf;f++){
	f1=f;
	var w = math.multiply(2,math.pi,f);
	
	var lstprt1=math.complex(0,w);
	var scndprtn1 = math.complex(2,-math.multiply(Ts,w));
	var scndprtd1 = math.complex(2,math.multiply(Ts,w));
	
	//var eprt1 = math.pow(math.e,math.complex(0,math.multiply(-w,Ts)));
	var frstprt1 = math.subtract(1,math.divide(scndprtn1,scndprtd1));
	var y = (math.divide(frstprt1,lstprt1)).re;
	
	
	
	yop[f] = 20*Math.log10(Math.abs(y));
	dataOPPoints.push({x:(w), y:(yop[f])});///magnitude part
	Arraymbfr["array"+incrmbfr]=dataOPPoints;
    Arraymbfr.push("array"+incrmbfr);
	
	
	var w1 = math.multiply(2,math.pi,f);
	
	var lstprt=math.complex(0,w1);
	var scndprtn = math.complex(2,-math.multiply(Ts,w1));
	var scndprtd = math.complex(2,math.multiply(Ts,w1));
	
	//var eprt1 = math.pow(math.e,math.complex(0,math.multiply(-w,Ts)));
	var frstprt = math.subtract(1,math.divide(scndprtn,scndprtd));
	var y1 = (math.divide(frstprt,lstprt)).re;
	
			
	var imagy = (math.divide(frstprt,lstprt)).im;
	
	var fraction = math.divide(imagy,y1);
	//phase = math.atan2(fraction);
	//phase[f] = math.atan2(imagy,y);
	phase[f]=(180/Math.PI)*math.atan2(imagy,y1);
	
	dataOPPoints1.push({x:(w), y:(phase[f])});//phase part
	Arrayphbfr["array"+incrphbfr]=dataOPPoints1;
    Arrayphbfr.push("array"+incrphbfr);
	
	
	
	console.log("mag="+yop[f]);
	console.log("phase="+phase[f]);
	
}

incrmbfr++;
incrphbfr++;
}



//////////////////////// FOH ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function FOH_fr(){
	
	var dataOPPoints=[];	///for plotting chart
	var dataOPPoints1=[];
	
	var maxf = document.getElementById('maxf').value;
	var minf = document.getElementById('minf').value;
	var Ts = document.getElementById('Ts').value;
	var LTextf = "FOH";
	
	spstore.push(Ts);
	ltstore.push(LTextf);
		
    var yop = new Array();	///continous data output result storing
	var phase = [];
	
	
	for(var f=minf;f<=maxf;f++){
	f1=f;
	var w = math.multiply(2,math.pi,f);
	
	var fs = 1 + math.complex(0, math.multiply(w,Ts));
	var sc1 = math.multiply(2,math.pow(math.e,math.complex(0,-math.multiply(w,Ts))));
	var sc2 = math.pow(math.e,math.complex(0,-math.multiply(2,w,Ts)));
	var sc3 = math.subtract(sc1,sc2);
	var sc = math.subtract(sc3,1);
	var th = math.multiply(Ts,math.pow(w,2));
	var y = math.multiply(fs,sc,1/th).re;
	
	var frth1 = math.multiply(w,Ts,1/2);
	///var frth2 = 
	var yy = math.multiply(Ts,math.sin(frth1),1/frth1,math.sin(frth1),1/frth1);
	
	
	yop[f] = Math.abs(yy);
	
	
	//yop[f] = Math.abs(y);
	dataOPPoints.push({x:(f), y:(yop[f])});///magnitude part
	Arraymfr["array"+incrmfr]=dataOPPoints;
    Arraymfr.push("array"+incrmfr);
	
	
	var w1 = math.multiply(2,math.pi,f);
	
	var lstprt = math.pow(math.complex(0,w1),2);
	
	var eprt = math.pow(math.e,math.complex(0,math.multiply(-w1,Ts)));
	var frstprt = math.pow(math.subtract(1,eprt),2);
	var scndprt = math.divide(frstprt,lstprt);
	var thrdprt = 1+ math.complex(0,math.multiply(w,Ts));//(1+math.multiply(Ts,math.complex(0,w)));
	//var frthprt1 = math.divide(thrdprt1,Ts);
	var y = math.multiply((math.multiply(scndprt,thrdprt)),1/Ts).re;
	
	var imagy = math.multiply((math.multiply(scndprt,thrdprt)),1/Ts).im;
	
	var fraction = math.divide(imagy,y);
	//phase = math.atan2(fraction);
	//phase[f] = math.atan2(imagy,y);
	phase[f]=(180/Math.PI)*math.atan2(imagy,y);
	
	dataOPPoints1.push({x:(f), y:(phase[f])});//phase part
	Arrayphfr["array"+incrphfr]=dataOPPoints1;
    Arrayphfr.push("array"+incrphfr);	
	
	console.log("mag="+yop[f]);
	console.log("phase="+phase[f]);
	
}
incrmfr++;
incrphfr++;
}

/////// FOH bode


function FOH_bode(){
	var dataOPPoints=[];	///for plotting chart
	var dataOPPoints1=[];
	
	var maxf = document.getElementById('maxf').value;
	var minf = document.getElementById('minf').value;
	var Ts = document.getElementById('Ts').value;
	var LTextf = "FOH Bode";
	
	spbstore.push(Ts);
	ltbstore.push(LTextf);

		
    var yop = new Array();	///continous data output result storing
	var phase = [];
	
	
	
	for(var f=minf;f<=maxf;f++){
	f1=f;
	var w = math.multiply(2,math.pi,f);
	
	////var lstprt1 = math.pow(math.complex(0,w),2);
	
	////var eprt1 = math.pow(math.e,math.complex(0,math.multiply(-w,Ts)));
	////var frstprt1 = math.pow(math.subtract(1,eprt1),2);
	////var scndprt1 = math.divide(frstprt1,lstprt1);
	/////var thrdprt1 = 1+ math.complex(0,math.multiply(w,Ts));//(1+math.multiply(Ts,math.complex(0,w)));
	//var frthprt1 = math.divide(thrdprt1,Ts);
	////var y = math.multiply((math.multiply(scndprt1,thrdprt1)),1/Ts).re;
	
	var fs = 1 + math.complex(0, math.multiply(w,Ts));
	var sc1 = math.multiply(2,math.pow(math.e,math.complex(0,-math.multiply(w,Ts))));
	var sc2 = math.pow(math.e,math.complex(0,-math.multiply(2,w,Ts)));
	var sc3 = math.subtract(sc1,sc2);
	var sc = math.subtract(sc3,1);
	var th = math.multiply(Ts,math.pow(w,2));
	var y = math.multiply(fs,sc,1/th).re;
	
	///var frst = (1 + math.multiply(math.complex(0,w),Ts));
   /// var scnd = -w*w*Ts;
   /// var thrd = math.pow(1 - math.pow(math.e,math.complex(0,math.multiply(-w,Ts))),2);

    ///var y = math.multiply(math.multiply(frst,thrd),1/scnd).re ;
	
	var frth1 = math.multiply(w,Ts,1/2);
	///var frth2 = 
	var yy = math.multiply(Ts,math.sin(frth1),1/frth1,math.sin(frth1),1/frth1);
	
	
	yop[f] = 20*Math.log10(Math.abs(yy));
	
	
	//yop[f] = Math.abs(y);
	dataOPPoints.push({x:(w), y:(yop[f])});///magnitude part
	Arraymbfr["array"+incrmbfr]=dataOPPoints;
    Arraymbfr.push("array"+incrmbfr);
	
	
	var w1 = math.multiply(2,math.pi,f);
	
	var lstprt = math.pow(math.complex(0,w1),2);
	
	var eprt = math.pow(math.e,math.complex(0,math.multiply(-w1,Ts)));
	var frstprt = math.pow(math.subtract(1,eprt),2);
	var scndprt = math.divide(frstprt,lstprt);
	var thrdprt = 1+ math.complex(0,math.multiply(w,Ts));//(1+math.multiply(Ts,math.complex(0,w)));
	//var frthprt1 = math.divide(thrdprt1,Ts);
	var y = math.multiply((math.multiply(scndprt,thrdprt)),1/Ts).re;
	
	var imagy = math.multiply((math.multiply(scndprt,thrdprt)),1/Ts).im;
	
	var fraction = math.divide(imagy,y);
	//phase = math.atan2(fraction);
	//phase[f] = math.atan2(imagy,y);
	phase[f]=(180/Math.PI)*math.atan2(imagy,y);
	
	dataOPPoints1.push({x:(w), y:(phase[f])});//phase part
	Arrayphbfr["array"+incrphbfr]=dataOPPoints1;
    Arrayphbfr.push("array"+incrphbfr);
	
	
	
	console.log("mag="+yop[f]);
	console.log("phase="+phase[f]);
	
}

incrmbfr++;
incrphbfr++;


}


///////////////////FOH Pade1


function FOH_pade1_fr(){
	
	var dataOPPoints=[];	///for plotting chart
	var dataOPPoints1=[];
	
	var maxf = document.getElementById('maxf').value;
	var minf = document.getElementById('minf').value;
	var Ts = document.getElementById('Ts').value;
	var LTextf = "FOH PADE 1";
	
	spstore.push(Ts);
	ltstore.push(LTextf);
		
    var yop = new Array();	///continous data output result storing
	var phase = [];	
	
	for(var f=minf;f<=maxf;f++){
	f1=f;
	var w = math.multiply(2,math.pi,f);
	
	var lstprt1=math.complex(0,w);
	var scndprtn1 = math.complex(2,-math.multiply(Ts,w));
	var scndprtd1 = math.complex(2,math.multiply(Ts,w));
	
	//var eprt1 = math.pow(math.e,math.complex(0,math.multiply(-w,Ts)));
	var frstprt1 = math.subtract(1,math.divide(scndprtn1,scndprtd1));
	var thrd1 = math.divide(math.complex(1,math.multiply(w,Ts)),1/Ts);
	var fp1 = math.multiply((math.divide(frstprt1,lstprt1)),(math.divide(frstprt1,lstprt1)));
	
	var y = (math.multiply(fp1,thrd1)).re;
	
	
	yop[f] = Math.abs(y)*100;
	dataOPPoints.push({x:(f), y:(yop[f])});///magnitude part
	Arraymfr["array"+incrmfr]=dataOPPoints;
    Arraymfr.push("array"+incrmfr);
	
	
	var w1 = math.multiply(2,math.pi,f);
	
	var lstprt=math.complex(0,w1);
	var scndprtn = math.complex(2,-math.multiply(Ts,w1));
	var scndprtd = math.complex(2,math.multiply(Ts,w1));
	
	//var eprt1 = math.pow(math.e,math.complex(0,math.multiply(-w,Ts)));
	var frstprt = math.subtract(1,math.divide(scndprtn,scndprtd));
	
	var thrd = math.multiply(math.complex(1,math.multiply(w,Ts)),1/Ts);
	var fp = math.multiply((math.divide(frstprt1,lstprt1)),(math.divide(frstprt1,lstprt1)));
	
	var y1 = (math.multiply(fp,thrd)).re;
    var imagy = (math.multiply(fp,thrd)).im;
	
	//var y1 = (math.divide(frstprt,lstprt)).re;
	
			
	//var imagy = (math.divide(frstprt,lstprt)).im;
	
	var fraction = math.divide(imagy,y1);
	//phase = math.atan2(fraction);
	//phase[f] = math.atan2(imagy,y);
	phase[f]=(180/Math.PI)*math.atan2(imagy,y1);
	
	dataOPPoints1.push({x:(f), y:(phase[f])});//phase part
	Arrayphfr["array"+incrphfr]=dataOPPoints1;
    Arrayphfr.push("array"+incrphfr);
	
	
	
	console.log("mag="+yop[f]);
	console.log("phase="+phase[f]);
	
}
incrmfr++;
incrphfr++;
}


///////////////////FOH Pade1 bode


function FOH_pade1_bode(){
	
	var dataOPPoints=[];	///for plotting chart
	var dataOPPoints1=[];

	
	var maxf = document.getElementById('maxf').value;
	var minf = document.getElementById('minf').value;
	var Ts = document.getElementById('Ts').value;
	var LTextf = "FOH PADE 1 Bode";
	
	spbstore.push(Ts);
	ltbstore.push(LTextf);	
    var yop = new Array();	///continous data output result storing
	var phase = [];
	
	
	
	
	for(var f=minf;f<=maxf;f++){
	f1=f;
	var w = math.multiply(2,math.pi,f);
	
	var lstprt1=math.complex(0,w);
	var scndprtn1 = math.complex(2,-math.multiply(Ts,w));
	var scndprtd1 = math.complex(2,math.multiply(Ts,w));
	
	//var eprt1 = math.pow(math.e,math.complex(0,math.multiply(-w,Ts)));
	var frstprt1 = math.subtract(1,math.divide(scndprtn1,scndprtd1));
	var thrd1 = math.multiply(math.complex(1,math.multiply(w,Ts)),1/Ts);
	var fp1 = math.multiply((math.divide(frstprt1,lstprt1)),(math.divide(frstprt1,lstprt1)));
	
	var y = (math.multiply(fp1,thrd1)).re;
	
	
	yop[f] = 20*Math.log10(Math.abs(y));
	dataOPPoints.push({x:(w), y:(yop[f])});///magnitude part
	Arraymbfr["array"+incrmbfr]=dataOPPoints;
    Arraymbfr.push("array"+incrmbfr);
	
	
	var w1 = math.multiply(2,math.pi,f);
	
	var lstprt=math.complex(0,w1);
	var scndprtn = math.complex(2,-math.multiply(Ts,w1));
	var scndprtd = math.complex(2,math.multiply(Ts,w1));
	
	//var eprt1 = math.pow(math.e,math.complex(0,math.multiply(-w,Ts)));
	var frstprt = math.subtract(1,math.divide(scndprtn,scndprtd));
	
	var thrd = math.divide(math.complex(1,math.multiply(w,Ts)),1/Ts);
	var fp = math.multiply((math.divide(frstprt1,lstprt1)),(math.divide(frstprt1,lstprt1)));
	
	var y1 = (math.multiply(fp,thrd)).re;
    var imagy = (math.multiply(fp,thrd)).im;
	
	//var y1 = (math.divide(frstprt,lstprt)).re;
	
			
	//var imagy = (math.divide(frstprt,lstprt)).im;
	
	var fraction = math.divide(imagy,y1);
	//phase = math.atan2(fraction);
	//phase[f] = math.atan2(imagy,y);
	phase[f]=(180/Math.PI)*math.atan2(imagy,y1);
	
	dataOPPoints1.push({x:(w), y:(phase[f])});//phase part
	Arrayphbfr["array"+incrphbfr]=dataOPPoints1;
    Arrayphbfr.push("array"+incrphbfr);
	
	
	
	console.log("mag="+yop[f]);
	console.log("phase="+phase[f]);
	
}
incrmbfr++;
incrphbfr++;


}

///Add plots new fn Bode
var chartb1,chartb2,samplePAb=0;
function mulPlotBode(){
	
	
	plotBD();
	
	 var samplePb = spbstore.at(samplePAb);
	 var legendPb = ltbstore.at(samplePAb);
	
document.getElementById('plotbucket').style.display  = "block";
document.getElementById('chartContainer2').style.display  = "block";  
document.getElementById('chartContainer1').style.display  = "block"; 


	 chartb1 = new CanvasJS.Chart("chartContainer1",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
		  
				  
	  title:{
      text: "Frequency Response (Bode Plot) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
		logarithmic:true,
		
        //title: "Frequency(rad/s)"
      },
    axisY: [
	      {/////output Y axis
            title: "Magnitude in dB",
			
			//maximum:0.03,
        }
		
		
		],
	data: [
      {        
        type: "spline",
		//color:"black",
		//showInLegend: true,
		//legendText: legendPb + " " + "magnitude (T = " + "" +samplePb +")",
        dataPoints:null
	
       }
      ]	
	});
	
	chartb2 = new CanvasJS.Chart("chartContainer2",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
		  
			  /* title:{
      text: "Frequency Response (Linear Scale) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      }, */
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Frequency(rad/s)",
		logarithmic:true,
		
      },
    axisY: [
	      {/////output Y axis
            title: "Phase in degrees",
			
			//maximum:0.03,
        }
		
		
		],
	data: [
      {        
        type: "spline",
		//color:"black",
		showInLegend: true,
		legendText: legendPb + " " + "(T = " + "" +samplePb +")",
        dataPoints:null
	
       }
      ]	
	});
//samplePAb++;
}

///Test dynamic Graph for Bode
 var incrfrb1=0,incrfrb2=0,datasetmb=[],datasetphb=[];
 
 function GenPlotBode(){
	 
	 mulPlotBode();
	 //var sampleP = document.getElementById('Ts').value;
	 
	 CanvasJS.addColorSet("MagShades",
                [//colorSet Array for magnitudes

                "#FC222D",
                "#FC8422",
                "#282BF6",
                "#1E7640",
                "black",
				"#8C28F6",
                /* "#f93838",
                "#3875f9",
                "#022676",
                "#380276", */               
                ]);
				CanvasJS.addColorSet("PhaseShades",
                [//colorSet Array for phases

                "#FC222D",
                "#FC8422",
                "#282BF6",
                "#1E7640",
                "black",
				"#8C28F6",
                /* "#f93838",
                "#3875f9",
                "#022676",
                "#380276", */			
                ]);

	 
	 for (var dnum = 0; dnum<=incrfrb1; dnum++){
	
if(dnum<=3){	
	 datasetmb[dnum] = Arraymbfr["array"+dnum];
	 datasetphb[dnum] = Arrayphbfr["array"+dnum];
	 
	 var dtan =dnum+1;
	
	if(incrfrb1>=0 && incrfrb2>=0){
		var samplePb = spbstore.at(dtan);
	    var legendPb = ltbstore.at(dtan); 
	
	chartb1.addTo("colorSet","MagShades");
	chartb1.addTo("axisY", {gridThickness: 0, tickLength:0, lineThickness:0});
	
	chartb2.addTo("colorSet","PhaseShades");
	chartb2.addTo("axisY", {gridThickness: 0, tickLength:0, lineThickness:0});
	
	chartb1.addTo("data", {type: "spline"});//, showInLegend:true, legendText: legendPb + " " + "magnitude (T = " + "" +samplePb +")"
	chartb2.addTo("data", {type: "spline", showInLegend:true, legendText: legendPb + " " + "(T = " + "" +samplePb +")"});
	
	
	}
	
	chartb1.options.data[dnum].dataPoints = datasetmb[dnum]; // Update the chart's data
	chartb2.options.data[dnum].dataPoints = datasetphb[dnum]; // Update the chart's data
	
		
	chartb1.render();
	chartb2.render();
	
	
	document.getElementById("exportChart").style.display = "block";
}

if(dnum>3){
		 alert('Maximum four simulations can be performed. For more, click Clear and then Run.');
	 }
	 }
	 
	 
	 
	incrfrb1++; 
	incrfrb2++;
	
 }


	 

function saveAs(uri, filename) {

    var link = document.createElement('a');

    if (typeof link.download === 'string') {

        link.href = uri;
        link.download = filename;

        //Firefox requires the link to be in the body
        document.body.appendChild(link);

        //simulate click
        link.click();

        //remove the link when done
        document.body.removeChild(link);

    } else {

        window.open(uri);

    }
}

function saveImg(){
html2canvas(document.querySelector('#plotbucket')).then(function(canvas) {

        saveAs(canvas.toDataURL(), 'Plot.png');
    }); 
	
	
}



function inputChange(){
	
	if(document.getElementById('Ts').value >5){
		
	alert('maintain the range');	
		
	}
	
	
}

function refresh(){
//location.reload();	
document.getElementById('plotbucket').style.display = "none";
document.getElementById('chartContainer1').style.display = "none";
document.getElementById('chartContainer2').style.display = "none";
document.getElementById('exportChart').style.display = "none";
dataOPPoints=[];	
dataOPPoints1=[];

//document.getElementById('0.3fr').style.display = "none";



}

var dataOPPoints=[];	///for plotting chart
var dataOPPoints1=[];




//////////////////////// ZOH 

function ZOH_fr(){
	
	var maxf = document.getElementById('maxf').value;
	var minf = document.getElementById('minf').value;
	var Ts = document.getElementById('Ts').value;
		
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
	
	
	
	
	console.log("mag="+yop[f]);
	console.log("phase="+phase[f]);
	console.log("freq="+f);
	
	f=math.add(f,0.01);
}

document.getElementById('plotbucket').style.display  = "block"; 
 
document.getElementById('chartContainer1').style.display  = "block"; 	
	var chart1 = new CanvasJS.Chart("chartContainer1",
    {
      animationEnabled: true,
	  
		  animationDuration: 10000, 
	  title:{
      text: "ZOH Frequency Response (Magnitude vs. Hz) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
        title: "Frequency(Hz)",
		maximum:maxf,
      },
    axisY: 
	      {/////output Y axis
		  //logarithmic: true,
            title: "Magnitude(T)",
			
			///maximum:0.3,
        },
		
	data:[ 
      {        
        type: "spline",
		color:"#ed2c4e",
        dataPoints:dataOPPoints
	
       }]
       
	});

	chart1.render();	
	//document.getElementById("result").style.display = "block";
	/*document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});*/	




//document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer2').style.display  = "block"; 	
	var chart2 = new CanvasJS.Chart("chartContainer2",
    {
      animationEnabled: true,
	  
		  animationDuration: 10000, 
	  title:{
      text: "ZOH Frequency Response (Phase vs. Hz) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
        title: "Frequency(Hz)",
		maximum:maxf,
      },
    axisY: 
	      {/////output Y axis
		  //logarithmic: true,
            title: "Phase",
			
			///maximum:0.3,
        },
		
	data:[ 
      {        
        type: "spline",
		color:"109DB6",
        dataPoints:dataOPPoints1
	
       }]
       
	});

	chart2.render();



	
	//document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	/* document.getElementById("exportChart").addEventListener("click",function(){
	html2canvas(document.querySelector('#plotbucket')).then(function(canvas) {

        saveAs(canvas.toDataURL(), 'Plot.png');
    });
/* html2canvas($('#plotbucket')[0]).then(function (canvas) {
                if (navigator.userAgent.indexOf("MSIE ") > 0 ||
                    navigator.userAgent.match(/Trident.*rv\:11\./)) {
                    var blob = canvas.msToBlob();
                    window.navigator.msSaveBlob(blob, 'Test file.png');
                } else {
                    var link = document.createElement('a');
                    link.download = $('#title').text() + '.png';
                    link.href = canvas.toDataURL("image/png");
                    link.click();
                }
            }
            )
	}); */	
 

}


//////////////////for ZOH bode


function ZOH_bode(){
	
	var maxf = document.getElementById('maxf').value;
	var minf = document.getElementById('minf').value;
	var Ts = document.getElementById('Ts').value;
		
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
	dataOPPoints.push({x:(f), y:(yop[f])});///magnitude part
	
	
	
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
	
	
	
	
	console.log("mag="+yop[f]);
	console.log("phase="+phase[f]);
	
}

document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer1').style.display  = "block"; 	
	var chart3 = new CanvasJS.Chart("chartContainer1",
    {
      animationEnabled: true,
	  
		  animationDuration: 10000, 
	  title:{
      text: "ZOH Frequency Response (Magnitude vs. Hz) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
		logarithmic: true,
        title: "Frequency(Hz)"
      },
    axisY: 
	      {/////output Y axis
		  ////logarithmic: true,
            title: "Magnitude (dB)",
			
			///maximum:0.3,
        },
		
	data:[ 
      {        
        type: "spline",
		color:"#ed2c4e",
        dataPoints:dataOPPoints
	
       }]
       
	});

	chart3.render();	
	//document.getElementById("result").style.display = "block";
	/*document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});*/	




//document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer2').style.display  = "block"; 	
	var chart4 = new CanvasJS.Chart("chartContainer2",
    {
      animationEnabled: true,
	  
		  animationDuration: 10000, 
	  title:{
      text: "ZOH Frequency Response (Phase vs. Hz) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
		logarithmic: true,
        title: "Frequency(Hz)"
      },
    axisY: 
	      {/////output Y axis
		  //logarithmic: true,
            title: "Phase",
			
			///maximum:0.3,
        },
		
	data:[ 
      {        
        type: "spline",
		color:"109DB6",
        dataPoints:dataOPPoints1
	
       }]
       
	});

	chart4.render();	
	//document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	/* document.getElementById("exportChart").addEventListener("click",function(){
	html2canvas(document.querySelector('#plotbucket')).then(function(canvas) {

        saveAs(canvas.toDataURL(), 'Plot.png');
    }); */
/* html2canvas($('#plotbucket')[0]).then(function (canvas) {
                if (navigator.userAgent.indexOf("MSIE ") > 0 ||
                    navigator.userAgent.match(/Trident.*rv\:11\./)) {
                    var blob = canvas.msToBlob();
                    window.navigator.msSaveBlob(blob, 'Test file.png');
                } else {
                    var link = document.createElement('a');
                    link.download = $('#title').text() + '.png';
                    link.href = canvas.toDataURL("image/png");
                    link.click();
                }
            }
            )*/
	//});	 


}



////////////////////for ZOH PADE

function ZOH_pade1_fr(){
	
	var maxf = document.getElementById('maxf').value;
	var minf = document.getElementById('minf').value;
	var Ts = document.getElementById('Ts').value;
		
    var yop = new Array();	///continous data output result storing
	var phase = [];
	
	
	
	
	for(var f=minf;f<=maxf;f++){
	f1=f;
	var w = math.multiply(2,math.pi,f/2);
	
	var lstprt1=math.complex(0,w);
	var scndprtn1 = math.complex(2,-math.multiply(Ts,w));
	var scndprtd1 = math.complex(2,math.multiply(Ts,w));
	
	//var eprt1 = math.pow(math.e,math.complex(0,math.multiply(-w,Ts)));
	var frstprt1 = math.subtract(1,math.divide(scndprtn1,scndprtd1));
	var y = (math.divide(frstprt1,lstprt1)).re;
	
	
	
	yop[f] = Math.abs(y);
	dataOPPoints.push({x:(f), y:(yop[f])});///magnitude part
	
	
	
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
	
	dataOPPoints1.push({x:(f), y:(phase[f])});//phase part
	
	
	
	
	console.log("mag="+yop[f]);
	console.log("phase="+phase[f]);
	
}

document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer1').style.display  = "block"; 	
	var chart5 = new CanvasJS.Chart("chartContainer1",
    {
      animationEnabled: true,
	  
		  animationDuration: 10000, 
	  title:{
      text: "ZOH Frequency Response (Magnitude vs. Hz) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
        title: "Frequency(Hz)"
      },
    axisY: 
	      {/////output Y axis
		  //logarithmic: true,
            title: "Magnitude(T)",
			
			///maximum:0.3,
        },
		
	data:[ 
      {        
        type: "spline",
		color:"#ed2c4e",
        dataPoints:dataOPPoints
	
       }]
       
	});

	chart5.render();	
	//document.getElementById("result").style.display = "block";
	/*document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	*/




//document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer2').style.display  = "block"; 	
	var chart6 = new CanvasJS.Chart("chartContainer2",
    {
      animationEnabled: true,
	  
		  animationDuration: 10000, 
	  title:{
      text: "ZOH Frequency Response (Phase vs. Hz) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
        title: "Frequency(Hz)"
      },
    axisY: 
	      {/////output Y axis
		  //logarithmic: true,
            title: "Phase",
			
			///maximum:0.3,
        },
		
	data:[ 
      {        
        type: "spline",
		color:"109DB6",
        dataPoints:dataOPPoints1
	
       }]
       
	});

	chart6.render();	
	//document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	/* document.getElementById("exportChart").addEventListener("click",function(){
	html2canvas(document.querySelector('#plotbucket')).then(function(canvas) {

        saveAs(canvas.toDataURL(), 'Plot.png');
    });
	});	 */


}

/////// ZOH Pade1 bode

function ZOH_pade1_bode(){
	
	var maxf = document.getElementById('maxf').value;
	var minf = document.getElementById('minf').value;
	var Ts = document.getElementById('Ts').value;
		
    var yop = new Array();	///continous data output result storing
	var phase = [];
	
	
	
	
	for(var f=minf;f<=maxf;f++){
	f1=f;
	var w = math.multiply(2,math.pi,f/2);
	
	var lstprt1=math.complex(0,w);
	var scndprtn1 = math.complex(2,-math.multiply(Ts,w));
	var scndprtd1 = math.complex(2,math.multiply(Ts,w));
	
	//var eprt1 = math.pow(math.e,math.complex(0,math.multiply(-w,Ts)));
	var frstprt1 = math.subtract(1,math.divide(scndprtn1,scndprtd1));
	var y = (math.divide(frstprt1,lstprt1)).re;
	
	
	
	yop[f] = 20*Math.log10(Math.abs(y));
	dataOPPoints.push({x:(f), y:(yop[f])});///magnitude part
	
	
	
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
	
	dataOPPoints1.push({x:(f), y:(phase[f])});//phase part
	
	
	
	
	console.log("mag="+yop[f]);
	console.log("phase="+phase[f]);
	
}

document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer1').style.display  = "block"; 	
	var chart7 = new CanvasJS.Chart("chartContainer1",
    {
      animationEnabled: true,
	  
		  animationDuration: 10000, 
	  title:{
      text: "ZOH Frequency Response (Magnitude vs. Hz) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
		logarithmic: true,
        title: "Frequency(Hz)"
      },
    axisY: 
	      {/////output Y axis
		  //logarithmic: true,
            title: "Magnitude(dB)",
			
			///maximum:0.3,
        },
		
	data:[ 
      {        
        type: "spline",
		color:"#ed2c4e",
        dataPoints:dataOPPoints
	
       }]
       
	});

	chart7.render();	
	//document.getElementById("result").style.display = "block";
	/*document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	*/




//document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer2').style.display  = "block"; 	
	var chart8 = new CanvasJS.Chart("chartContainer2",
    {
      animationEnabled: true,
	  
		  animationDuration: 10000, 
	  title:{
      text: "ZOH Frequency Response (Phase vs. Hz) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
		logarithmic: true,
        title: "Frequency(Hz)"
      },
    axisY: 
	      {/////output Y axis
		  //logarithmic: true,
            title: "Phase",
			
			///maximum:0.3,
        },
		
	data:[ 
      {        
        type: "spline",
		color:"109DB6",
        dataPoints:dataOPPoints1
	
       }]
       
	});

	chart8.render();	
	//document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	/* document.getElementById("exportChart").addEventListener("click",function(){
	html2canvas(document.querySelector('#plotbucket')).then(function(canvas) {

        saveAs(canvas.toDataURL(), 'Plot.png');
    });
	});	 */


}



//////////////////////// FOH ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function FOH_fr(){
	
	var maxf = document.getElementById('maxf').value;
	var minf = document.getElementById('minf').value;
	var Ts = document.getElementById('Ts').value;
		
    var yop = new Array();	///continous data output result storing
	var phase = [];
	
	///if(document.getElementById('Ts').value == 0.3){
	///	document.getElementById('0.3fr').style.display = "block";
	///	document.getElementById('plotbucket').style.display  = "none";
	//}
	///else{
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
	
	
	yop[f] = Math.abs(yy);
	
	
	//yop[f] = Math.abs(y);
	dataOPPoints.push({x:(f), y:(yop[f])});///magnitude part
	
	
	
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
	
	
	
	
	console.log("mag="+yop[f]);
	console.log("phase="+phase[f]);
	
}
	//}
document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer1').style.display  = "block"; 	
	var chart9 = new CanvasJS.Chart("chartContainer1",
    {
      animationEnabled: true,
	  
		  animationDuration: 10000, 
	  title:{
      text: "FOH Frequency Response (Magnitude vs. Hz) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
        title: "Frequency(Hz)"
      },
    axisY: 
	      {/////output Y axis
		  //logarithmic: true,
            title: "Magnitude(T)",
			
			///maximum:0.3,
        },
		
	data:[ 
      {        
        type: "spline",
		color:"#ed2c4e",
        dataPoints:dataOPPoints
	
       }]
       
	});

	chart9.render();	
	//document.getElementById("result").style.display = "block";
	/*document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});*/	




//document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer2').style.display  = "block"; 	
	var chart10 = new CanvasJS.Chart("chartContainer2",
    {
      animationEnabled: true,
	  
		  animationDuration: 10000, 
	  title:{
      text: "FOH Frequency Response (Phase vs. Hz) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
        title: "Frequency(Hz)"
      },
    axisY: 
	      {/////output Y axis
		  //logarithmic: true,
            title: "Phase",
			
			///maximum:0.3,
        },
		
	data:[ 
      {        
        type: "spline",
		color:"109DB6",
        dataPoints:dataOPPoints1
	
       }]
       
	});

	chart10.render();	
	//document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	/* document.getElementById("exportChart").addEventListener("click",function(){
	html2canvas(document.querySelector('#plotbucket')).then(function(canvas) {

        saveAs(canvas.toDataURL(), 'Plot.png');
    });
	}); */	


}

/////// FOH bode


function FOH_bode(){
	
	var maxf = document.getElementById('maxf').value;
	var minf = document.getElementById('minf').value;
	var Ts = document.getElementById('Ts').value;
		
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
	dataOPPoints.push({x:(f), y:(yop[f])});///magnitude part
	
	
	
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
	
	
	
	
	console.log("mag="+yop[f]);
	console.log("phase="+phase[f]);
	
}

document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer1').style.display  = "block"; 	
	var chart11 = new CanvasJS.Chart("chartContainer1",
    {
      animationEnabled: true,
	  
		  animationDuration: 10000, 
	  title:{
      text: "FOH Frequency Response (Magnitude vs. Hz) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
		logarithmic: true,
        title: "Frequency(Hz)"
      },
    axisY: 
	      {/////output Y axis
		  //logarithmic: true,
            title: "Magnitude(dB)",
			
			///maximum:0.3,
        },
		
	data:[ 
      {        
        type: "spline",
		color:"#ed2c4e",
        dataPoints:dataOPPoints
	
       }]
       
	});

	chart11.render();	
	//document.getElementById("result").style.display = "block";
	/*document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	*/




//document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer2').style.display  = "block"; 	
	var chart12 = new CanvasJS.Chart("chartContainer2",
    {
      animationEnabled: true,
	  
		  animationDuration: 10000, 
	  title:{
      text: "FOH Frequency Response (Phase vs. Hz) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
		logarithmic: true,
        title: "Frequency(Hz)"
      },
    axisY: 
	      {/////output Y axis
		  //logarithmic: true,
            title: "Phase",
			
			///maximum:0.3,
        },
		
	data:[ 
      {        
        type: "spline",
		color:"109DB6",
        dataPoints:dataOPPoints1
	
       }]
       
	});

	chart12.render();	
	//document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	/* document.getElementById("exportChart").addEventListener("click",function(){
	html2canvas(document.querySelector('#plotbucket')).then(function(canvas) {

        saveAs(canvas.toDataURL(), 'Plot.png');
    });
	}); */	


}


///////////////////FOH Pade1


function FOH_pade1_fr(){
	
	var maxf = document.getElementById('maxf').value;
	var minf = document.getElementById('minf').value;
	var Ts = document.getElementById('Ts').value;
		
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
	
	
	
	
	console.log("mag="+yop[f]);
	console.log("phase="+phase[f]);
	
}

document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer1').style.display  = "block"; 	
	var chart13 = new CanvasJS.Chart("chartContainer1",
    {
      animationEnabled: true,
	  
		  animationDuration: 10000, 
	  title:{
      text: "FOH Frequency Response (Magnitude vs. Hz) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
        title: "Frequency(Hz)"
      },
    axisY: 
	      {/////output Y axis
		  //logarithmic: true,
            title: "Magnitude(T)",
			
			///maximum:0.3,
        },
		
	data:[ 
      {        
        type: "spline",
		color:"#ed2c4e",
        dataPoints:dataOPPoints
	
       }]
       
	});

	chart13.render();	
	//document.getElementById("result").style.display = "block";
	/*document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	*/




//document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer2').style.display  = "block"; 	
	var chart14 = new CanvasJS.Chart("chartContainer2",
    {
      animationEnabled: true,
	  
		  animationDuration: 10000, 
	  title:{
      text: "FOH Frequency Response (Phase vs. Hz) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
        title: "Frequency(Hz)"
      },
    axisY: 
	      {/////output Y axis
		  //logarithmic: true,
            title: "Phase",
			
			///maximum:0.3,
        },
		
	data:[ 
      {        
        type: "spline",
		color:"109DB6",
        dataPoints:dataOPPoints1
	
       }]
       
	});

	chart14.render();	
	//document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	/* document.getElementById("exportChart").addEventListener("click",function(){
	html2canvas(document.querySelector('#plotbucket')).then(function(canvas) {

        saveAs(canvas.toDataURL(), 'Plot.png');
    });
	});	
 */

}


///////////////////FOH Pade1 bode


function FOH_pade1_bode(){
	
	var maxf = document.getElementById('maxf').value;
	var minf = document.getElementById('minf').value;
	var Ts = document.getElementById('Ts').value;
		
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
	dataOPPoints.push({x:(f), y:(yop[f])});///magnitude part
	
	
	
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
	
	dataOPPoints1.push({x:(f), y:(phase[f])});//phase part
	
	
	
	
	console.log("mag="+yop[f]);
	console.log("phase="+phase[f]);
	
}

document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer1').style.display  = "block"; 	
	var chart15 = new CanvasJS.Chart("chartContainer1",
    {
      animationEnabled: true,
	  
		  animationDuration: 10000, 
	  title:{
      text: "FOH Frequency Response (Magnitude vs. Hz) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
		logarithmic: true,
        title: "Frequency(Hz)"
      },
    axisY: 
	      {/////output Y axis
		  //logarithmic: true,
            title: "Magnitude(dB)",
			
			///maximum:0.3,
        },
		
	data:[ 
      {        
        type: "spline",
		color:"#ed2c4e",
        dataPoints:dataOPPoints
	
       }]
       
	});

	chart15.render();	
	//document.getElementById("result").style.display = "block";
	/*document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	*/




//document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer2').style.display  = "block"; 	
	var chart16 = new CanvasJS.Chart("chartContainer2",
    {
      animationEnabled: true,
	  
		  animationDuration: 10000, 
	  title:{
      text: "FOH Frequency Response (Phase vs. Hz) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
		logarithmic: true,
        title: "Frequency(Hz)"
      },
    axisY: 
	      {/////output Y axis
		  //logarithmic: true,
            title: "Phase",
			
			///maximum:0.3,
        },
		
	data:[ 
      {        
        type: "spline",
		color:"109DB6",
        dataPoints:dataOPPoints1
	
       }]
       
	});

	chart16.render();	
	//document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	/* document.getElementById("exportChart").addEventListener("click",function(){
	html2canvas(document.querySelector('#plotbucket')).then(function(canvas) {

        saveAs(canvas.toDataURL(), 'Plot.png');
    });
	});	 */


}

///print test of a particular area or section

/*function printPageArea(areaID){
    var printContent = document.getElementById(areaID).innerHTML;
    var originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
	format = "jpg";
    document.body.innerHTML = originalContent;
}*/


		 

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
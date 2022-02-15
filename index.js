// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
    <style>
        body{
            background-color:#898B8C;
        }
        a{color:#610480 }
        

@import url('https://fonts.googleapis.com/css2?family=Festive&family=Teko:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Festive&family=Roboto+Serif:wght@100&family=Teko:wght@300&display=swap');
 @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Festive&family=Roboto+Serif:wght@100&family=Teko:wght@300&display=swap');

    </style>
</head>
<body>
	<center  style="color:#610480;font-family: 'Teko', sans-serif;"><h1 ><b>MH HLATSHWAYO'S WEBSITE<b></h1></b></center>
    <header style="color:#D0CBCD;background-color:#898B8C;">
        <table>
            <tr>
                
            <td>

                <img style="width: 200px;height:100px;"src="logo.png">
            </td>
                 <td style="padding-left:460px;" align="right;">
                    <p><a href="index.html">Home</a> &nbsp&nbsp&nbsp <a href="about.html">About Me</a> &nbsp&nbsp&nbsp&nbsp<a href="contact.html">Contact Me</a></p>
                 </td>
            </tr>
        </table>
        
    
    </header>
     <main style="color:Silver;background-color: #610480;font-family: 'Roboto Serif', sans-serif;">
     	<table>
     		<tr>
     			
     		<td width="100%"colspan="2">
     			
     		
     	
    <center> <h2 style="color:silver"> Game:CubeCollider summarised video</h2></center>
     	<video style="margin-left:300px" width="320px" height="auto" controls>
  <source src="movie.mp4" type="video/mp4"></video>
   <center> <h4 style="color:silver;">Link for downloading a Game:CubeCollider(pc version only)<h4>
  		<a style="color:blue;background-color: silver;" href="https://drive.google.com/file/d/1_bDlkV8DBiClAE9KVWEwvGWUTqQKYNDx/view">Download full game</a></h4>  </center><br>
  		</td>
  		</tr>

   <tr>
   	<td width="58%" align="center">
   		<h3 style="color:purple;background-color:silver;">Mthokozisi Hector Hlatshwayo</h3>
     	<p style="color:silver;">Welcome to my official Portfolio website<br>
     	that tells a bit about myself.<br>
     	also has link for my projects</p>
     	<button style="color:purple;background-color:silver;" type="submit" name="submit"><a href="light.html">Simple javascript project </a></button><br><br>
     	<div> 
               <button onclick="document.getElementById('demo').innerHTML=Date()">click to display time</button>
               <p id="demo"></p>
             </div><br>
      <div> 
         <p>Click the button to print the current page.</p>

<button onclick="window.print()">Print this page</button>   
</div> 
   	</td>
   	  <td>
   	  	<img style="width: 300px;height: 300px;margin-left:90px;" src="me.jpg">
   	  </td>
     	
     	</tr>
     	 
     
     </table>
       </main>
      <footer style="color:#BCD6DF;background-color:#736372;font-family: 'Dancing Script', cursive;">
        <table>
            
        <tr>
            <td>
                
            
        
        <h1>Contact Details</h1>
    <p> 53 Main Street<br>
   Marshalltown<br>
    Johannesburg<br>
    2001</p><br>
   <p > Tel.(mobile)0764611841<br>
    E-mail:<a href="mailto:mthova.hp@gmail.com">mthova.hp@gmail.com</a><br>
    Linkedin:<a href="https://www.linkedin.com/in/mthokozisi-hector-6b4b54193">https://www.linkedin.com/in/mthokozisi-hector-6b4b54193</a></p><br>
     	<p>
        Copyright 2022 by Mthokozisi Hector Hlatshwayo.All Rights Reserved.Website Portfolio is<br>
         Powered by MH.
        </p>
        </td>
        </tr>
    </table>
     </footer>
</body>
</html>`;
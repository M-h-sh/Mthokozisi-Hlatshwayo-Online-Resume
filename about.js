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
        a{color:#610480}
        @import url('https://fonts.googleapis.com/css2?family=Festive&family=Teko:wght@300&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Festive&family=Roboto+Serif:wght@100&family=Teko:wght@300&display=swap');
         @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Festive&family=Roboto+Serif:wght@100&family=Teko:wght@300&display=swap');
            </style>
</head>
<body>
    <center style="color:#610480;font-family: 'Teko', sans-serif;"><h1 ><b>MH HLATSHWAYO'S WEBSITE<b></h1></b></center>
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
     <main style="color:black;background-color: #4EE1FF;font-family: 'Roboto Serif', sans-serif;">
        <table>
            <tr>
      <td>
      
        <h1 style="color:#610480;">About Me</h1>
        <div class="intro">
                    <h2>I AM...Mthokozisi Hector Hlatshwayo</h2>
                    
                    <p>I am a dedicated person with a very strong willingness.</p>
                    <p>Also determined, I never give up until I get someting right. I like to keep a positive attitude, and mostly I am ambitious and driven. </p>
                    <br>
                    <p>I strongly believe that with the educational background accumulated during my school tenure I can
                        positively contribute towards the growth of your company implementing what I learnt. My major subjects were:
                        
                        <ul>
                            <li><b>Industrial Exposure llA,</b></li>
                            <li><b>Programming llA, Multimedia Design llB,</b></li>
                            <li><b>Multimedia Programming lllB.</b></li>
                        </ul>

                    </p>
                    <br>
                    
                    <p>I am  confident and self-organized who strives for excellence in any task that I'm assigned to.
                        I am seeking an opportunity with an organization that will allow me to dispose my skills, learn and grow while contributing positively towards its productivity and growth.
                        I would consider my self computer literate because I have knowledge of these programs and can discuss them </p>
                    <p>I learned of your company through the internet and my aspiration is to work for a company that has your
                        outstanding reputation. I would appreciate the opportunity to work as part of your company where I will
                        make a significant contribution while developing my skills further.
                        <br><br>
                         Here is link for my Html Cv<br><br>
                        <a style="background-color:black;color:silver;"href="mtho.html">My HTML CV</a><br><br>
                         <button style="color:silver;background-color: #610480;" type="submit" name="submit"><a style="color:silver;background-color: #610480;" href="index.html">Return to Homepage </a></button>
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
          <img style="width: 300px;height: 300px;padding-left:30px;" src="me.jpg">
      </td>
                        

                    </p>    
                </div>
                </tr>
                  </table>
     </main>

        
     <footer style="color:#BCD6DF;background-color:#6F7D7B;font-family: 'Dancing Script', cursive;">
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
<h1>Predator and Prey Model</h1>

<h2><a href=" https://yyyyaaaannnnoooo.github.io/Predator_and_Prey_Model/">WEB APP</a></h2>
The model is based on the following simple rules:
Prey:
<li>Tries to move in a random direction.</li>
<li>Health increases.</li>
 <li>When health reaches a threshold:</li>
 <li>They will reproduce, creating a new "Prey"</li>
 <li>Their health resets to 1</li>
 <br>
 Predator:
 <li>Tries to move in a random direction.</li>
 <li>Health decreases.</li>
 <li>When health reaches 0, they die and turn into "Nothing".</li>
 <li>If the adjacent square is a prey: They will eat it, turning it into a "predator" (reproducing) Their health will increase by the amount of health the eaten prey had</li>
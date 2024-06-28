
import Header from '../components/nav'
import Footer from '../components/footer'
import mamunImage from './image/mamun.jpg';

function About_us() {
  return (
    <>
     <Header/>
     <body class="bg-blue-100 min-h-screen flex flex-col items-center justify-center p-4"> 
    <h1 class="text-4xl font-bold mb-8"><u>About Us</u></h1> 
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-4xl"> 
 
        <div class="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"> 
            <img src={mamunImage}  alt="Member 1" class="rounded-full mb-4 w-64 h-64"/> 
            <h2 class="text-xl font-semibold">Mamun Mahmud</h2> 
            <p>ID: C221046</p> 
            <p>Section: 5BM</p> 
            <p>Mobile No: 01828383838</p> 
        </div> 
 
        <div class="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"> 
            <img src={mamunImage}  alt="Member 1" class="rounded-full mb-4 w-64 h-64"/> 
            <h2 class="text-xl font-semibold">Rayhan Uddain</h2> 
            <p>ID: C221050</p> 
            <p>Section: 5BM</p> 
            <p>Mobile No: 01736475645</p> 
        </div> 
 
        <div class="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"> 
        <img src={mamunImage}  alt="Member 1" class="rounded-full mb-4 w-64 h-64"/>  
            <h2 class="text-xl font-semibold">Najmus Sakib</h2> 
            <p>ID: C221060</p> 
            <p>Section: 5BM</p> 
            <p>Mobile No: 01628384747</p> 
        </div> 
 
        <div class="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"> 
        <img src={mamunImage}  alt="Member 1" class="rounded-full mb-4 w-64 h-64"/> 
            <h2 class="text-xl font-semibold">Mayeen Uddin</h2> 
            <p>ID: C221047</p> 
            <p>Section: 5BM</p> 
            <p>Mobile No: 01937284746</p> 
        </div> 
 
    </div> 
</body>
<footer style ={{position: "fixed" , top:"87vh", width:"100vw"}}>
      <Footer/>
      </footer>
    </>
  );
}

export default About_us;

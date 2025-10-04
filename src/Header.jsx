import './index.css'

function Header() {

    return (
    <nav class="">
        <h1 class = "col-span-1  text-purple-700 font-black text-2xl">N.R <span class="text-white">Tech</span></h1>
       <ul class = "flex justify-evenly text-white">
        <li><a href="">Home</a></li>
        <li><a href="">Skills</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">About me</a></li>
        <li><a class="bg-purple-700 p-3 pl-10 pr-10 rounded-md font-bold" href="">Contact</a></li>
       </ul>

    </nav>
    );

}


export default Header;
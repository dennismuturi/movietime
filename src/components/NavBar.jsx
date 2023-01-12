export default function NavBar(){
    return (
<>
<div className="bg-black text-white">
<div className="container mx-auto px-6 py-2 flex justify-between items-center">
<div className="flex p-3 ">
        <a data-baseweb="link" 
        href="" 
        target="_self" 
        aria-label="Go to moversapp.com" 
        data-tracking-name=""
        className=" mr-4 cc cd ce cf cg ch ci cj bn b5 ck cl cm cn co cp cq cr cs ct cu cv cw bt bf cb cx cy cz d0">Movie Time</a>
        </div>
        <div className="flex p-3">
            <h1 className="mr-4 py-1">Login</h1>
            <button className="text-black bg-white rounded-lg py-1 px-2">Sign up</button>
        </div>
    </div>
    </div>

</>
    );
}
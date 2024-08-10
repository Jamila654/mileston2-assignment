import Link from "next/link";
const Navbar = () => {
    return ( 
        <div className="header w-full bg-orange-600 h-10 flex items-center justify-between p-4">
            <div className="head1 text-white">Milestone 2</div>
            <div className="head2 flex gap-2 text-white">
                <span><Link href="/" className=" hover:underline">Home</Link></span>
                <span><Link href="/about" className=" hover:underline">About</Link></span>
                <span><Link href="/contact" className=" hover:underline">Contact</Link></span>
            </div>
        </div>
     );
}
 
export default Navbar;
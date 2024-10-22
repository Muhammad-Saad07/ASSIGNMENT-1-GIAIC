import Link from 'next/link';
export default function Navbar() {
    return (
        <nav className='fixed w-full h-24 shadow-xl bg-black text-white'>
            <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
                <div></div>
                <div><ul className='hidden sm:flex'>
                    <Link href="/"><li className='ml-10 uppercase hover:border-b text-xl'>HOME</li></Link>
                    <Link href="/About"><li className='ml-10 uppercase hover:border-b text-xl'>ABOUT</li></Link>
                    <Link href="/Services"><li className='ml-10 uppercase hover:border-b text-xl'>SERVICES</li></Link>
                    <Link href="/Blog"><li className='ml-10 uppercase hover:border-b text-xl'>BLOG</li></Link>
                    <Link href="/Contact"><li className='ml-10 uppercase hover:border-b text-xl'>CONTACT US</li></Link></ul></div>
            </div>




        </nav>
    )
}
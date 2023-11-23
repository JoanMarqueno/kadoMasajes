

export default function PruebaNav() {
  return (
    <nav className="bg-green-800  
                py-4 text-white fixed  
                w-full top-0 left-0"> 
        <div className="container mx-auto"> 
            <ul className="ml-8 space-x-4"> 
                <li className="inline-block"> 
                    <a href="/" 
                       className="hover:text-gray-300"> 
                        Home 
                    </a> 
                </li> 
                <li className="inline-block"> 
                    <a href= 
"https://practice.geeksforgeeks.org/explore" 
                       className="hover:text-gray-300"> 
                        Practice 
                    </a> 
                </li> 
                <li className="inline-block"> 
                    <a href= 
"https://www.geeksforgeeks.org/complete-guide-to-dsa-for-beginners/?ref=ghm"
                        className="hover:text-gray-300"> 
                        Tutorials 
                    </a> 
                </li> 
                <li className="inline-block"> 
                    <a href= 
"https://www.geeksforgeeks.org/about/contact-us/" 
                      className="hover:text-gray-300"> 
                        Contact 
                    </a> 
                </li> 
            </ul> 
        </div> 
    </nav> 
  )
}

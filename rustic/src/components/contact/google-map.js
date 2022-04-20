import Link from 'next/link';
function GoogleMap() {
    return (
        // <iframe
        //     className='map-size w-full h-[620px]'
        //     src="https://maps.google.com/maps?q=144-11,%2097th%20Avenue,%20Queens,%20New%20York,%20NY%2011435,%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed"
        // ></iframe>
          <Link href='/'>
             <a>
                 <span>Home</span>
            </a>
        </Link>
    );
}

export default GoogleMap;

import Image from "next/image";
import Link from "next/link";

function About () {

    return(
        <div className="flex flex-col items-center justify-center">
            <span>Welcome to About</span>
            <Link href="/">Back to home</Link>

        </div>
    )
}

export default About;
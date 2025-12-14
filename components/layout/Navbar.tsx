import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-green-800">
                    SwapSpot
                </Link>

                <div className="flex gap-6 text-gray-700">
                    <Link href="/auth/login" className="loSuBtn loginBtn">Login</Link>
                    <Link href="/auth/signup" className="loSuBtn signupBtn">Sign Up</Link>
                </div>
            </div>
        </nav>
    );
}
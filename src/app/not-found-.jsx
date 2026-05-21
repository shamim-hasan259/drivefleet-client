import Link from "next/link";
import { CarFront, Home, SearchX } from "lucide-react";
export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] flex flex-col">
      {/* Navbar */}
      <nav className="border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold">
            <span className="text-black">Drive</span>
            <span className="text-blue-600">Fleet</span>
          </h1>

          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 transition-all text-white px-6 py-2 rounded-full font-medium"
          >
            Back Home
          </Link>
        </div>
      </nav>

      {/* Main */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-neutral-200 px-4 py-2 rounded-full text-sm mb-6 shadow-sm">
              <SearchX size={16} className="text-blue-600" />
              <span>Page Not Found</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-black">
              404 <br />
              <span className="text-blue-600">Lost On The Road?</span>
            </h1>

            <p className="text-neutral-500 text-lg mt-6 leading-relaxed max-w-xl">
              The page you are looking for doesn&apos;t exist or may have been
              moved. Let&apos;s get you back to exploring premium cars with
              DriveFleet.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href="/"
                className="bg-blue-600 hover:bg-blue-700 transition-all text-white px-7 py-3 rounded-full font-semibold flex items-center gap-2"
              >
                <Home size={18} />
                Go Home
              </Link>

              <Link
                href="/explore-cars"
                className="border border-neutral-300 hover:border-black transition-all bg-white px-7 py-3 rounded-full font-semibold flex items-center gap-2"
              >
                <CarFront size={18} />
                Explore Cars
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            <div className="bg-white border border-neutral-200 rounded-[30px] p-5 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop"
                alt="Car"
                className="w-full h-[450px] object-cover rounded-[24px]"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-6 bg-white shadow-xl border border-neutral-200 rounded-3xl px-6 py-5 w-[260px]">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-3 rounded-2xl">
                  <CarFront className="text-blue-600" />
                </div>

                <div>
                  <h3 className="font-bold text-lg">DriveFleet</h3>
                  <p className="text-sm text-neutral-500">Premium Car Rental</p>
                </div>
              </div>

              <div className="mt-4">
                <div className="w-full bg-neutral-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-full w-[70%]" />
                </div>

                <p className="text-sm text-neutral-500 mt-2">
                  Redirecting you to better roads...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-2xl font-extrabold">
            <span className="text-black">Drive</span>
            <span className="text-blue-600">Fleet</span>
          </h2>

          <p className="text-neutral-500 text-sm">
            © 2026 DriveFleet. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Waves, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-ocean-gradient text-white p-6">
      <div className="text-center max-w-lg">
        <Waves className="h-12 w-12 mx-auto text-wave animate-wave-float" />
        <div className="mt-6 font-display text-7xl md:text-8xl font-black">404</div>
        <p className="mt-4 text-lg text-white/80">
          Looks like this lane is empty. The page you're looking for has drifted
          off.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-deep px-6 py-3 font-bold hover:bg-foam transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to shore
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

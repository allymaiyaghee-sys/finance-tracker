export default function Footer() {
  return (
    <footer className="w-full bg-[#1e1b4b] border-t border-slate-800 text-slate-400 py-6 mt-auto">
      <div className="w-full px-4 flex flex-col sm:flex-row justify-center items-center gap-4">
        
        {/* Left Side: Copyright text */}
        <div className="text-sm font-medium text-center sm:text-left">
          © {new Date().getFullYear()} <span className="text-white font-bold">Allymaiya</span>. All Rights Reserved.
        </div>

        {/* Right Side: Temporary Links (Inhe baad me change kar sakte hain) */}
        <div className="flex space-x-6 text-xs font-bold uppercase tracking-wider">
          <a href="#" className="hover:text-[#fbbf24] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#fbbf24] transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-[#fbbf24] transition-colors">Support</a>
        </div>

      </div>
    </footer>
  );
}
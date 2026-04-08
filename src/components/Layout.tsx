import { Outlet, Link, useLocation } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Layout() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-green-600 font-bold" : "text-gray-600 hover:text-green-600";
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      {/* Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="font-bold text-xl text-green-800">EcoSave</span>
            </Link>
            <nav className="hidden md:flex gap-8">
              <Link to="/" className={isActive('/')}>Trang chủ</Link>
              <Link to="/thuc-trang" className={isActive('/thuc-trang')}>Thực trạng & Nguyên nhân</Link>
              <Link to="/giai-phap" className={isActive('/giai-phap')}>Giải pháp</Link>
              <Link to="/lien-he" className={isActive('/lien-he')}>Liên hệ</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-green-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-green-400" />
              <span className="font-bold text-xl">EcoSave</span>
            </div>
            <p className="text-green-200 mb-4">
              Chung tay bảo vệ môi trường và chống lại biến đổi khí hậu vì một tương lai xanh và bền vững cho thế hệ mai sau.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-green-200 hover:text-white"><Facebook size={20} /></a>
              <a href="#" className="text-green-200 hover:text-white"><Twitter size={20} /></a>
              <a href="#" className="text-green-200 hover:text-white"><Instagram size={20} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-green-200 hover:text-white transition-colors">Trang chủ</Link></li>
              <li><Link to="/thuc-trang" className="text-green-200 hover:text-white transition-colors">Thực trạng & Nguyên nhân</Link></li>
              <li><Link to="/giai-phap" className="text-green-200 hover:text-white transition-colors">Giải pháp hành động</Link></li>
              <li><Link to="/lien-he" className="text-green-200 hover:text-white transition-colors">Liên hệ với chúng tôi</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Thông tin liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-green-400 shrink-0 mt-1" />
                <span className="text-green-200">THPT so 2 Bao Thang</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-green-400 shrink-0" />
                <span className="text-green-200">0123456789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-green-400 shrink-0" />
                <span className="text-green-200">thptso2baothang@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-green-800 text-center text-green-300 text-sm">
          &copy; {new Date().getFullYear()} EcoSave. Bảo lưu mọi quyền.
        </div>
      </footer>
    </div>
  );
}

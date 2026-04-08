import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Wind, Droplets } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Nature landscape" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hành động hôm nay,<br/>Cứu lấy ngày mai
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200">
            Biến đổi khí hậu không còn là lời cảnh báo. Nó đang diễn ra. Hãy cùng chúng tôi bảo vệ hành tinh xanh của chúng ta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/thuc-trang" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors flex items-center justify-center gap-2">
              Tìm hiểu thêm <ArrowRight size={20} />
            </Link>
            <Link to="/giai-phap" className="bg-white hover:bg-gray-100 text-green-800 px-8 py-4 rounded-full font-semibold text-lg transition-colors flex items-center justify-center">
              Hành động ngay
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tại sao chúng ta cần hành động?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Trái đất đang đối mặt với những thách thức môi trường nghiêm trọng chưa từng có.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Nhiệt độ toàn cầu tăng</h3>
              <p className="text-gray-600">Nhiệt độ trung bình toàn cầu đã tăng khoảng 1.1°C so với thời kỳ tiền công nghiệp, gây ra các hiện tượng thời tiết cực đoan.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-600">
                <Wind size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Ô nhiễm không khí</h3>
              <p className="text-gray-600">99% dân số toàn cầu hít thở không khí vượt quá giới hạn chất lượng của WHO, đe dọa nghiêm trọng đến sức khỏe.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-cyan-600">
                <Droplets size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Mực nước biển dâng</h3>
              <p className="text-gray-600">Băng tan ở các cực làm mực nước biển dâng cao, đe dọa nhấn chìm các thành phố ven biển và đảo quốc.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { CheckCircle2 } from 'lucide-react';

export default function Solutions() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Giải pháp hành động</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mỗi cá nhân đều có thể đóng góp vào việc bảo vệ môi trường thông qua những hành động nhỏ hàng ngày.
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-20 bg-white p-6 rounded-3xl shadow-sm">
          <h2 className="text-2xl font-bold text-center mb-8">Video: Biến đổi khí hậu là gì?</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden bg-gray-200">
            <iframe 
              className="w-full h-[500px]"
              src="https://www.youtube.com/embed/G4H1N_yXBiA" 
              title="Climate Change Video" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Action List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Hành động cá nhân</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <CheckCircle2 className="text-green-600 shrink-0 h-6 w-6" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Tiết kiệm năng lượng</h3>
                  <p className="text-gray-600">Tắt đèn và các thiết bị điện khi không sử dụng. Sử dụng bóng đèn LED và các thiết bị tiết kiệm điện.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="text-green-600 shrink-0 h-6 w-6" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Sử dụng phương tiện công cộng</h3>
                  <p className="text-gray-600">Đi bộ, đi xe đạp hoặc sử dụng phương tiện giao thông công cộng thay vì lái xe cá nhân để giảm lượng khí thải.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="text-green-600 shrink-0 h-6 w-6" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Giảm thiểu, Tái sử dụng, Tái chế (3R)</h3>
                  <p className="text-gray-600">Hạn chế sử dụng đồ nhựa dùng một lần. Phân loại rác và tái chế các vật liệu như giấy, nhựa, thủy tinh.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="text-green-600 shrink-0 h-6 w-6" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Trồng cây xanh</h3>
                  <p className="text-gray-600">Tham gia các hoạt động trồng cây tại địa phương. Cây xanh giúp hấp thụ CO2 và làm sạch không khí.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Trồng cây" 
              className="rounded-2xl shadow-lg w-full h-full object-cover min-h-[400px]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

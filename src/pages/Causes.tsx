export default function Causes() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Thực trạng & Nguyên nhân</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hiểu rõ nguyên nhân là bước đầu tiên để tìm ra giải pháp cho cuộc khủng hoảng khí hậu.
          </p>
        </div>

        {/* Section 1 */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1611273426858-450d8e3c9cce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Khí thải nhà máy" 
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Khí thải nhà kính</h2>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              Nguyên nhân chính của biến đổi khí hậu là hiệu ứng nhà kính. Một số loại khí trong bầu khí quyển Trái đất hoạt động giống như kính trong nhà kính, giữ nhiệt của mặt trời và ngăn không cho nó rò rỉ trở lại không gian.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Việc đốt nhiên liệu hóa thạch (than, dầu và khí đốt) tạo ra lượng lớn khí CO2 và oxit nitơ. Đây là những hoạt động đóng góp lớn nhất vào sự nóng lên toàn cầu.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center mb-20">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Phá rừng" 
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nạn phá rừng</h2>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              Cây cối giúp điều hòa khí hậu bằng cách hấp thụ CO2 từ khí quyển. Khi chúng bị đốn hạ, tác dụng có lợi đó bị mất đi và lượng carbon lưu trữ trong cây được giải phóng vào khí quyển.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Mỗi năm, hàng triệu hecta rừng bị phá hủy để lấy đất nông nghiệp, khai thác gỗ, làm suy giảm nghiêm trọng "lá phổi xanh" của Trái đất.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Rác thải nhựa" 
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ô nhiễm rác thải</h2>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              Sự gia tăng dân số và lối sống tiêu dùng dẫn đến lượng rác thải khổng lồ. Đặc biệt là rác thải nhựa, mất hàng trăm năm để phân hủy, gây ô nhiễm đất và đại dương.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Các bãi rác cũng là nguồn phát thải khí methane (CH4) lớn - một loại khí nhà kính mạnh gấp 25 lần CO2 trong việc giữ nhiệt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

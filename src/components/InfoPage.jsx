import React, { useEffect, useState } from 'react';
import './InfoPage.css';

// Dữ liệu các chương
const chapters = [
  {
    id: 1,
    title: 'Chương 1',
    description: 'Nội dung chương 1',
    icon: '📖',
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    id: 2,
    title: 'Chương 2',
    description: 'Nội dung chương 2',
    icon: '📚',
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    id: 3,
    title: 'Chương 3',
    description: 'Nội dung chương 3',
    icon: '📘',
    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    id: 4,
    title: 'Chương 4: Dân Chủ Xã Hội Chủ Nghĩa Và Nhà Nước Xã Hội Chủ Nghĩa',
    description: 'Nghiên cứu về quyền lực nhân dân, bản chất chế độ và con đường xây dựng xã hội công bằng, văn minh.',
    icon: '📗',
    color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    pages: [
      {
        id: 1,
        title: 'Dân Chủ Và Dân Chủ Xã Hội Chủ Nghĩa',
        icon: '📜'
      },
      {
        id: 2,
        title: 'Nhà Nước Xã Hội Chủ Nghĩa',
        icon: '🏛️'
      },
      {
        id: 3,
        title: 'Thực Tiễn Tại Việt Nam',
        icon: '🇻🇳'
      },
      {
        id: 4,
        title: 'Tổng Kết & Mối Quan Hệ Biện Chứng',
        icon: '🔄'
      },
      {
        id: 5,
        title: 'Nhà Nước Việt Nam Và Xã Hội Số',
        icon: '💻'
      },
      {
        id: 6,
        title: 'Chính Sách Quản Lý Dữ Liệu & An Ninh Mạng',
        icon: '🔒'
      },
      {
        id: 7,
        title: 'Hỗ Trợ Khởi Nghiệp Số',
        icon: '🚀'
      },
      {
        id: 8,
        title: 'Yêu Cầu Đối Với Sinh Viên FPT',
        icon: '🎓'
      }
    ]
  }
];

// Nội dung chi tiết từng trang của chương 4
const chapter4Pages = {
  1: {
    title: 'Dân Chủ Và Dân Chủ Xã Hội Chủ Nghĩa',
    content: (
      <>
        {/* 1. Quan niệm về dân chủ */}
        <div className="bento-grid">
          <div className="bento-card span-12" style={{background: 'linear-gradient(135deg, #f9f9f9 0%, #f0f2f5 100%)'}}>
            <div className="card-icon">📜</div>
            <h3>1. Quan Niệm Về Dân Chủ</h3>
            <div style={{marginTop: '1rem'}}>
              <h4 style={{marginBottom: '0.5rem', color: '#333'}}>Nghĩa gốc:</h4>
              <p>
                Thuật ngữ dân chủ ra đời vào khoảng thế kỷ thứ <strong>VII – VI trước Công nguyên</strong>, 
                từ tiếng Hy Lạp là <strong>Demokratos</strong> (<strong>Demos</strong> - nhân dân, <strong>Kratos</strong> - quyền lực), 
                hiểu là <em>quyền lực thuộc về nhân dân</em>.
              </p>
            </div>
          </div>

          <div className="bento-card span-12" style={{marginTop: '1rem'}}>
            <h3>Ba Phương Diện Cơ Bản:</h3>
          </div>

          <div className="bento-card span-4">
            <div className="card-icon">🌟</div>
            <h3>Là Một Giá Trị Xã Hội</h3>
            <p>
              Phản ánh những <strong>quyền cơ bản của con người</strong>; là kết quả cuộc đấu tranh của nhân dân lao động 
              chống lại áp bức, bóc lột.
            </p>
          </div>

          <div className="bento-card span-4">
            <div className="card-icon">🏛️</div>
            <h3>Là Một Phạm Trù Chính Trị</h3>
            <p>
              Với tư cách là một hình thức tổ chức thiết chế chính trị, là một hình thức nhà nước, 
              dân chủ thừa nhận <strong>quyền tự do, bình đẳng của công dân</strong>.
            </p>
          </div>

          <div className="bento-card span-4">
            <div className="card-icon">⏳</div>
            <h3>Là Một Phạm Trù Lịch Sử</h3>
            <p>
              Dân chủ gắn với quá trình ra đời, phát triển của lịch sử xã hội nhân loại; 
              nó sẽ <strong>mất đi khi xã hội không còn giai cấp và nhà nước</strong>.
            </p>
          </div>
        </div>

        {/* 2. Bản chất của nền dân chủ XHCN */}
        <div className="bento-grid" style={{marginTop: '2rem'}}>
          <div className="bento-card span-12">
            <div className="card-icon">🚩</div>
            <h3>2. Bản Chất Của Nền Dân Chủ Xã Hội Chủ Nghĩa</h3>
          </div>

          <div className="bento-card span-8">
            <div className="card-icon">🎯</div>
            <h3>Bản Chất Chính Trị</h3>
            <p>
              • Là sự <strong>lãnh đạo chính trị của giai cấp công nhân</strong> thông qua Đảng Cộng sản đối với toàn xã hội, 
              nhằm thực hiện quyền lực và lợi ích của toàn thể nhân dân lao động.<br/>
              • Nhân dân có quyền giới thiệu đại biểu tham gia bộ máy chính quyền, 
              tham gia đóng góp ý kiến công việc của Nhà nước.
            </p>
          </div>

          <div className="bento-card span-4">
            <div className="card-icon">🏭</div>
            <h3>Bản Chất Kinh Tế</h3>
            <p>
              • Dựa trên chế độ <strong>công hữu về tư liệu sản xuất</strong> chủ yếu của toàn xã hội.<br/>
              • Thực hiện chế độ phân phối lợi ích <strong>theo kết quả lao động</strong> là chủ yếu.<br/>
              • Kinh tế xã hội chủ nghĩa nhằm mục tiêu thỏa mãn ngày càng cao các nhu cầu vật chất và tinh thần của nhân dân.
            </p>
          </div>

          <div className="bento-card span-12">
            <div className="card-icon">🧠</div>
            <h3>Bản Chất Tư Tưởng - Văn Hóa - Xã Hội</h3>
            <p>
              • Lấy hệ tư tưởng <strong>Mác - Lênin</strong> làm nền tảng chủ đạo đối với mọi hình thái ý thức xã hội khác.<br/>
              • Kế thừa, phát huy những giá trị văn hóa nhân loại và truyền thống tốt đẹp của dân tộc.<br/>
              • <strong>Giải phóng con người</strong> khỏi mọi sự áp bức, bóc lột, bất công.
            </p>
          </div>
        </div>
      </>
    )
  },
  2: {
    title: 'Nhà Nước Xã Hội Chủ Nghĩa',
    content: (
      <>
        <div className="bento-grid">
          {/* 1. Sự ra đời */}
          <div className="bento-card span-12">
            <div className="card-icon">🌱</div>
            <h3>1. Sự Ra Đời Của Nhà Nước Xã Hội Chủ Nghĩa</h3>
            <p>
              • Là kết quả của <strong>cuộc cách mạng xã hội chủ nghĩa</strong> do giai cấp công nhân và nhân dân lao động 
              tiến hành dưới sự lãnh đạo của Đảng Cộng sản.<br/>
              • Đây là một <strong>kiểu nhà nước mới</strong>, trong đó quyền lực thuộc về nhân dân, 
              là công cụ để xây dựng xã hội mới.
            </p>
          </div>

          {/* 2. Bản chất */}
          <div className="bento-card span-12" style={{marginTop: '1rem'}}>
            <div className="card-icon">⚖️</div>
            <h3>2. Bản Chất Của Nhà Nước Xã Hội Chủ Nghĩa</h3>
          </div>

          <div className="bento-card span-4">
            <div className="card-icon">🎯</div>
            <h3>Về Chính Trị</h3>
            <p>
              Mang bản chất của <strong>giai cấp công nhân</strong>, giai cấp có lợi ích phù hợp với lợi ích chung của 
              quần chúng nhân dân lao động. Sự thống trị chính trị là sự thống trị của <strong>đa số đối với thiểu số bóc lột</strong>.
            </p>
          </div>

          <div className="bento-card span-4">
            <div className="card-icon">💼</div>
            <h3>Về Kinh Tế</h3>
            <p>
              Chịu sự quy định của <strong>quan hệ sản xuất xã hội chủ nghĩa</strong>, cốt lõi là chế độ sở hữu xã hội 
              về tư liệu sản xuất chủ yếu.
            </p>
          </div>

          <div className="bento-card span-4">
            <div className="card-icon">📚</div>
            <h3>Về Văn Hóa, Xã Hội</h3>
            <p>
              Được xây dựng trên nền tảng lý luận của <strong>chủ nghĩa Mác - Lênin</strong> và những giá trị văn hóa 
              tiên tiến, nhân văn.
            </p>
          </div>

          {/* 3. Chức năng */}
          <div className="bento-card span-12" style={{marginTop: '1rem'}}>
            <div className="card-icon">⚙️</div>
            <h3>3. Chức Năng Của Nhà Nước Xã Hội Chủ Nghĩa</h3>
            <p style={{marginTop: '1rem', fontSize: '0.95rem', color: '#666'}}>
              <strong>Căn cứ vào tính chất của quyền lực nhà nước:</strong>
            </p>
          </div>

          <div className="bento-card span-4" style={{backgroundColor: '#fff5f5'}}>
            <div className="card-icon">🛡️</div>
            <h3>Chức Năng Giai Cấp (Trấn Áp)</h3>
            <p>
              Sử dụng sức mạnh cưỡng chế để <strong>bảo vệ thành quả cách mạng</strong>, giữ gìn trật tự xã hội.
            </p>
          </div>

          <div className="bento-card span-8" style={{backgroundColor: '#f0fff4'}}>
            <div className="card-icon">🏗️</div>
            <h3>Chức Năng Xã Hội (Tổ Chức & Xây Dựng)</h3>
            <p>
              <strong>Đây là chức năng căn bản nhất, quan trọng nhất</strong>, nhằm cải tạo xã hội cũ, 
              xây dựng xã hội mới về mọi mặt kinh tế, văn hóa, xã hội.
            </p>
          </div>
        </div>
      </>
    )
  },
  3: {
    title: 'Thực Tiễn Tại Việt Nam',
    content: (
      <>
        <div className="bento-grid">
          {/* Motto Banner */}
          <div className="bento-card span-12" style={{textAlign: 'center', background: '#240b36', color: 'white', marginBottom: '24px'}}>
            <h3 style={{color: '#f1c40f', fontSize: '1.8rem', marginBottom: '1rem'}}>
              "Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng"
            </h3>
            <p style={{color: 'rgba(255,255,255,0.8)'}}>Phương châm thực hiện dân chủ ở cơ sở</p>
          </div>

          {/* 1. Dân chủ XHCN ở Việt Nam */}
          <div className="bento-card span-12">
            <div className="card-icon">🇻🇳</div>
            <h3>1. Dân Chủ Xã Hội Chủ Nghĩa Ở Việt Nam</h3>
          </div>

          <div className="bento-card span-6">
            <h4 style={{marginBottom: '1rem', color: '#333'}}>Bản chất:</h4>
            <p>
              <strong>Tất cả quyền lực nhà nước thuộc về nhân dân.</strong> "Dân là chủ và dân làm chủ".
            </p>
          </div>

          <div className="bento-card span-6">
            <h4 style={{marginBottom: '1rem', color: '#333'}}>Hình thức thực hiện:</h4>
            <p>
              <strong>Dân chủ trực tiếp:</strong> Nhân dân thảo luận, góp ý, biểu quyết các vấn đề quan trọng của đất nước và địa phương.<br/>
              <strong>Dân chủ gián tiếp (đại diện):</strong> Nhân dân bầu ra các đại biểu vào Quốc hội và Hội đồng nhân dân các cấp.
            </p>
          </div>

          {/* 2. 6 Đặc điểm */}
          <div className="bento-card span-12" style={{marginTop: '1rem'}}>
            <div className="card-icon">⭐</div>
            <h3>2. 6 Đặc Điểm Của Nhà Nước Pháp Quyền Xã Hội Chủ Nghĩa Việt Nam</h3>
          </div>
        </div>

        {/* Feature List với hiệu ứng đẹp */}
        <div className="feature-list">
          <div className="feature-grid-row">
            {[
              {
                title: "Xây dựng Nhà nước của nhân dân, do nhân dân, vì nhân dân",
                desc: "Tất cả quyền lực nhà nước thuộc về nhân dân."
              },
              {
                title: "Quyền lực nhà nước là thống nhất",
                desc: "Có sự phân công phối hợp và kiểm soát giữa các cơ quan trong việc thực hiện các quyền lập pháp, hành pháp, tư pháp."
              },
              {
                title: "Quản lý xã hội bằng Hiến pháp và pháp luật",
                desc: "Bảo đảm tính tối cao của Hiến pháp trong đời sống xã hội."
              },
              {
                title: "Do Đảng Cộng sản Việt Nam lãnh đạo",
                desc: "Theo quy định tại Điều 4 Hiến pháp 2013."
              },
              {
                title: "Tôn trọng và bảo đảm quyền con người, quyền công dân",
                desc: "Nâng cao trách nhiệm pháp lý giữa Nhà nước và công dân."
              },
              {
                title: "Nguyên tắc tập trung dân chủ",
                desc: "Đảm bảo sự lãnh đạo thống nhất đồng thời phát huy quyền chủ động của địa phương."
              }
            ].map((item, index) => (
              <div key={index} className="feature-item">
                <div className="check-circle">{index + 1}</div>
                <div className="feature-content">
                  <span className="feature-title">{item.title}</span>
                  <span className="feature-desc">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nội dung mở rộng */}
        <div className="bento-grid" style={{marginTop: '2rem'}}>
          <div className="bento-card span-12" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white'}}>
            <div className="card-icon">💡</div>
            <h3 style={{color: 'white'}}>Vai Trò Của Nhà Nước Việt Nam Trong Thời Đại Số</h3>
            <p style={{color: 'rgba(255,255,255,0.9)', marginTop: '1rem'}}>
              Dựa trên lý luận về Nhà nước pháp quyền xã hội chủ nghĩa, Nhà nước Việt Nam đang đóng vai trò quan trọng trong 
              <strong> quản lý xã hội số và phát triển kinh tế số</strong>. Các chính sách về quản lý dữ liệu, an ninh mạng, 
              hỗ trợ khởi nghiệp số đang được xây dựng và hoàn thiện. Đối với sinh viên Trường Đại học FPT, việc xây dựng 
              Nhà nước pháp quyền hiện đại đòi hỏi <strong>năng lực chuyên môn cao</strong> và <strong>đạo đức nghề nghiệp</strong> 
              trong lĩnh vực công nghệ thông tin.
            </p>
          </div>
        </div>
      </>
    )
  },
  4: {
    title: 'Tổng Kết & Mối Quan Hệ Biện Chứng',
    content: (
      <>
        <div className="bento-grid">
          <div className="bento-card span-12" style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white'}}>
            <div className="card-icon">🔄</div>
            <h3 style={{color: 'white'}}>Mối Quan Hệ Biện Chứng</h3>
            <div style={{marginTop: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8'}}>
              <p style={{marginBottom: '1rem'}}>
                <strong>Dân chủ xã hội chủ nghĩa</strong> là cơ sở, nền tảng cho việc xây dựng và hoạt động của 
                Nhà nước xã hội chủ nghĩa.
              </p>
              <p>
                <strong>Nhà nước xã hội chủ nghĩa</strong> là công cụ, phương thức để thực thi quyền làm chủ của nhân dân.
              </p>
            </div>
          </div>

          <div className="bento-card span-12" style={{marginTop: '1rem'}}>
            <div className="card-icon">🎯</div>
            <h3>Nhiệm Vụ Hiện Nay</h3>
            <div className="task-list">
              <div className="task-item">
                <span className="task-icon">✅</span>
                <span>Tiếp tục hoàn thiện hệ thống pháp luật</span>
              </div>
              <div className="task-item">
                <span className="task-icon">✅</span>
                <span>Cải cách bộ máy nhà nước</span>
              </div>
              <div className="task-item">
                <span className="task-icon">✅</span>
                <span>Đẩy mạnh đấu tranh phòng chống tham nhũng, lãng phí</span>
              </div>
              <div className="task-item">
                <span className="task-icon">✅</span>
                <span>Củng cố nền dân chủ</span>
              </div>
            </div>
          </div>

          <div className="bento-card span-12" style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: 'white', marginTop: '1rem'}}>
            <div className="card-icon">🚀</div>
            <h3 style={{color: 'white'}}>Hướng Phát Triển</h3>
            <p style={{color: 'rgba(255,255,255,0.9)', marginTop: '1rem', fontSize: '1.05rem'}}>
              Xây dựng Nhà nước pháp quyền hiện đại, đáp ứng yêu cầu của thời đại số, 
              đảm bảo quyền và lợi ích chính đáng của nhân dân, thúc đẩy phát triển bền vững và hội nhập quốc tế.
            </p>
          </div>
        </div>
      </>
    )
  },
  5: {
    title: 'Nhà Nước Việt Nam Và Xã Hội Số',
    content: (
      <>
        <div className="bento-grid">
          <div className="bento-card span-12" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white'}}>
            <div className="card-icon">💻</div>
            <h3 style={{color: 'white'}}>Vai Trò Của Nhà Nước Trong Xã Hội Số</h3>
            <p style={{color: 'rgba(255,255,255,0.9)', marginTop: '1rem'}}>
              Trong bối cảnh cách mạng công nghiệp 4.0, Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam đóng vai trò 
              <strong> chủ đạo và định hướng</strong> trong việc xây dựng xã hội số, phát triển kinh tế số, 
              đảm bảo quyền và lợi ích của nhân dân trong không gian số.
            </p>
          </div>

          <div className="bento-card span-6">
            <div className="card-icon">🌐</div>
            <h3>Quản Lý Xã Hội Số</h3>
            <p>
              • <strong>Xây dựng hạ tầng số quốc gia:</strong> Phát triển hệ thống kết nối internet tốc độ cao, 
              hạ tầng dữ liệu, điện toán đám mây.<br/>
              • <strong>Chuyển đổi số các dịch vụ công:</strong> Số hóa thủ tục hành chính, 
              cung cấp dịch vụ công trực tuyến, xây dựng chính phủ điện tử.<br/>
              • <strong>Quản lý không gian mạng:</strong> Đảm bảo an toàn, an ninh thông tin, 
              bảo vệ quyền riêng tư của công dân.
            </p>
          </div>

          <div className="bento-card span-6">
            <div className="card-icon">📈</div>
            <h3>Phát Triển Kinh Tế Số</h3>
            <p>
              • <strong>Thúc đẩy đổi mới sáng tạo:</strong> Hỗ trợ các doanh nghiệp công nghệ, 
              khởi nghiệp đổi mới sáng tạo.<br/>
              • <strong>Xây dựng hệ sinh thái số:</strong> Phát triển các nền tảng số, 
              thương mại điện tử, thanh toán số.<br/>
              • <strong>Đào tạo nguồn nhân lực số:</strong> Nâng cao năng lực số cho người dân, 
              đặc biệt là thế hệ trẻ.
            </p>
          </div>

          <div className="bento-card span-12" style={{marginTop: '1rem'}}>
            <div className="card-icon">⚖️</div>
            <h3>Nguyên Tắc Pháp Quyền Trong Xã Hội Số</h3>
            <p>
              Nhà nước pháp quyền xã hội chủ nghĩa trong xã hội số phải đảm bảo:
            </p>
            <div className="task-list" style={{marginTop: '1rem'}}>
              <div className="task-item">
                <span className="task-icon">✅</span>
                <span><strong>Tính minh bạch:</strong> Công khai thông tin, quy trình, quyết định của cơ quan nhà nước</span>
              </div>
              <div className="task-item">
                <span className="task-icon">✅</span>
                <span><strong>Tính trách nhiệm:</strong> Cơ quan nhà nước phải chịu trách nhiệm trước nhân dân về các hoạt động quản lý</span>
              </div>
              <div className="task-item">
                <span className="task-icon">✅</span>
                <span><strong>Bảo vệ quyền con người:</strong> Đảm bảo quyền riêng tư, quyền được bảo vệ dữ liệu cá nhân</span>
              </div>
              <div className="task-item">
                <span className="task-icon">✅</span>
                <span><strong>Công bằng và bình đẳng:</strong> Mọi người dân đều có quyền tiếp cận dịch vụ số</span>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  },
  6: {
    title: 'Chính Sách Quản Lý Dữ Liệu & An Ninh Mạng',
    content: (
      <>
        <div className="bento-grid">
          <div className="bento-card span-12" style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white'}}>
            <div className="card-icon">🔒</div>
            <h3 style={{color: 'white'}}>Bảo Vệ Dữ Liệu Cá Nhân</h3>
            <p style={{color: 'rgba(255,255,255,0.9)', marginTop: '1rem'}}>
              Luật An ninh mạng (2018) và Luật Bảo vệ dữ liệu cá nhân là những cột mốc quan trọng trong việc 
              <strong> bảo vệ quyền và lợi ích của công dân</strong> trong không gian số, thể hiện bản chất 
              "của dân, do dân, vì dân" của Nhà nước pháp quyền xã hội chủ nghĩa.
            </p>
          </div>

          <div className="bento-card span-6">
            <div className="card-icon">📋</div>
            <h3>Quản Lý Dữ Liệu</h3>
            <p>
              <strong>Nguyên tắc quản lý dữ liệu:</strong><br/>
              • <strong>Minh bạch:</strong> Người dân phải được thông báo về việc thu thập, sử dụng dữ liệu<br/>
              • <strong>Đồng ý:</strong> Phải có sự đồng ý của chủ thể dữ liệu trước khi thu thập<br/>
              • <strong>Mục đích:</strong> Chỉ thu thập dữ liệu phục vụ mục đích cụ thể, hợp pháp<br/>
              • <strong>Bảo mật:</strong> Áp dụng các biện pháp kỹ thuật và quản lý để bảo vệ dữ liệu<br/>
              • <strong>Quyền truy cập:</strong> Người dân có quyền yêu cầu xem, sửa, xóa dữ liệu của mình
            </p>
          </div>

          <div className="bento-card span-6">
            <div className="card-icon">🛡️</div>
            <h3>An Ninh Mạng</h3>
            <p>
              <strong>Chính sách an ninh mạng:</strong><br/>
              • <strong>Bảo vệ hạ tầng quan trọng:</strong> Bảo vệ hệ thống thông tin quốc gia, 
              cơ sở hạ tầng quan trọng<br/>
              • <strong>Phòng chống tội phạm mạng:</strong> Đấu tranh với các hành vi vi phạm pháp luật 
              trong không gian mạng<br/>
              • <strong>Bảo vệ thông tin cá nhân:</strong> Ngăn chặn rò rỉ, đánh cắp dữ liệu cá nhân<br/>
              • <strong>Hợp tác quốc tế:</strong> Tham gia các hiệp định, cam kết quốc tế về an ninh mạng
            </p>
          </div>

          <div className="bento-card span-12" style={{marginTop: '1rem'}}>
            <div className="card-icon">⚖️</div>
            <h3>Trách Nhiệm Của Nhà Nước</h3>
            <p>
              Nhà nước có trách nhiệm:
            </p>
            <div className="task-list" style={{marginTop: '1rem'}}>
              <div className="task-item">
                <span className="task-icon">📜</span>
                <span>Xây dựng và hoàn thiện hệ thống pháp luật về an ninh mạng, bảo vệ dữ liệu</span>
              </div>
              <div className="task-item">
                <span className="task-icon">🔧</span>
                <span>Đầu tư phát triển công nghệ bảo mật, hệ thống giám sát an ninh mạng</span>
              </div>
              <div className="task-item">
                <span className="task-icon">👥</span>
                <span>Đào tạo, nâng cao năng lực cho đội ngũ chuyên trách về an ninh mạng</span>
              </div>
              <div className="task-item">
                <span className="task-icon">🌍</span>
                <span>Hợp tác quốc tế trong đấu tranh phòng chống tội phạm mạng</span>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  },
  7: {
    title: 'Hỗ Trợ Khởi Nghiệp Số',
    content: (
      <>
        <div className="bento-grid">
          <div className="bento-card span-12" style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: 'white'}}>
            <div className="card-icon">🚀</div>
            <h3 style={{color: 'white'}}>Vai Trò Của Nhà Nước Trong Hỗ Trợ Khởi Nghiệp Số</h3>
            <p style={{color: 'rgba(255,255,255,0.9)', marginTop: '1rem'}}>
              Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam đóng vai trò <strong>kiến tạo, hỗ trợ và thúc đẩy</strong> 
              hệ sinh thái khởi nghiệp đổi mới sáng tạo, tạo môi trường thuận lợi cho các doanh nghiệp công nghệ 
              phát triển, góp phần xây dựng nền kinh tế số hiện đại.
            </p>
          </div>

          <div className="bento-card span-4">
            <div className="card-icon">💰</div>
            <h3>Hỗ Trợ Tài Chính</h3>
            <p>
              • <strong>Quỹ hỗ trợ khởi nghiệp:</strong> Các quỹ đầu tư mạo hiểm, quỹ phát triển doanh nghiệp<br/>
              • <strong>Ưu đãi thuế:</strong> Miễn giảm thuế cho doanh nghiệp khởi nghiệp công nghệ<br/>
              • <strong>Vay vốn ưu đãi:</strong> Hỗ trợ vay vốn với lãi suất thấp cho startup<br/>
              • <strong>Đầu tư công:</strong> Nhà nước đầu tư vào các dự án công nghệ trọng điểm
            </p>
          </div>

          <div className="bento-card span-4">
            <div className="card-icon">🏢</div>
            <h3>Hạ Tầng & Môi Trường</h3>
            <p>
              • <strong>Khu công nghệ cao:</strong> Xây dựng các khu công nghệ, vườn ươm doanh nghiệp<br/>
              • <strong>Hạ tầng số:</strong> Phát triển hạ tầng internet, điện toán đám mây<br/>
              • <strong>Không gian làm việc:</strong> Hỗ trợ không gian làm việc chung (co-working space)<br/>
              • <strong>Dịch vụ công số:</strong> Số hóa thủ tục đăng ký, cấp phép doanh nghiệp
            </p>
          </div>

          <div className="bento-card span-4">
            <div className="card-icon">🤝</div>
            <h3>Hỗ Trợ Kỹ Thuật</h3>
            <p>
              • <strong>Đào tạo:</strong> Chương trình đào tạo khởi nghiệp, quản trị doanh nghiệp<br/>
              • <strong>Tư vấn:</strong> Dịch vụ tư vấn pháp lý, tài chính, marketing<br/>
              • <strong>Kết nối:</strong> Tạo cầu nối giữa startup với nhà đầu tư, đối tác<br/>
              • <strong>Bảo hộ sở hữu trí tuệ:</strong> Hỗ trợ đăng ký bảo hộ sáng chế, nhãn hiệu
            </p>
          </div>

          <div className="bento-card span-12" style={{marginTop: '1rem'}}>
            <div className="card-icon">📊</div>
            <h3>Chính Sách Cụ Thể</h3>
            <div className="task-list" style={{marginTop: '1rem'}}>
              <div className="task-item">
                <span className="task-icon">📜</span>
                <span><strong>Nghị định 38/2018/NĐ-CP:</strong> Về đầu tư cho doanh nghiệp nhỏ và vừa khởi nghiệp sáng tạo</span>
              </div>
              <div className="task-item">
                <span className="task-icon">📜</span>
                <span><strong>Chương trình Quốc gia Khởi nghiệp đổi mới sáng tạo:</strong> Hỗ trợ 3.000 doanh nghiệp khởi nghiệp đến 2025</span>
              </div>
              <div className="task-item">
                <span className="task-icon">📜</span>
                <span><strong>Chiến lược Chuyển đổi số quốc gia:</strong> Phát triển 100.000 doanh nghiệp công nghệ số</span>
              </div>
              <div className="task-item">
                <span className="task-icon">📜</span>
                <span><strong>Luật Hỗ trợ doanh nghiệp nhỏ và vừa:</strong> Tạo hành lang pháp lý thuận lợi cho startup</span>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  },
  8: {
    title: 'Yêu Cầu Đối Với Sinh Viên FPT',
    content: (
      <>
        <div className="bento-grid">
          <div className="bento-card span-12" style={{background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', color: 'white'}}>
            <div className="card-icon">🎓</div>
            <h3 style={{color: 'white'}}>Trách Nhiệm Của Sinh Viên FPT Trong Xây Dựng Nhà Nước Pháp Quyền</h3>
            <p style={{color: 'rgba(255,255,255,0.9)', marginTop: '1rem'}}>
              Sinh viên Trường Đại học FPT, với nền tảng công nghệ thông tin vững chắc, có vai trò quan trọng trong 
              việc <strong>xây dựng Nhà nước pháp quyền hiện đại</strong>. Để đóng góp hiệu quả, sinh viên cần trang bị 
              cả <strong>năng lực chuyên môn</strong> và <strong>đạo đức nghề nghiệp</strong>.
            </p>
          </div>

          <div className="bento-card span-6">
            <div className="card-icon">💻</div>
            <h3>Năng Lực Chuyên Môn</h3>
            <p>
              <strong>Kiến thức kỹ thuật:</strong><br/>
              • Thành thạo lập trình, phát triển phần mềm, hệ thống<br/>
              • Hiểu biết về an ninh mạng, bảo mật thông tin<br/>
              • Nắm vững công nghệ mới: AI, Big Data, Cloud Computing<br/>
              • Kỹ năng quản lý dự án, làm việc nhóm<br/><br/>
              
              <strong>Kiến thức pháp luật:</strong><br/>
              • Hiểu biết về Luật An ninh mạng, Luật Bảo vệ dữ liệu cá nhân<br/>
              • Nắm vững quy định về sở hữu trí tuệ, bản quyền phần mềm<br/>
              • Hiểu về quy trình phát triển phần mềm an toàn, tuân thủ pháp luật
            </p>
          </div>

          <div className="bento-card span-6">
            <div className="card-icon">⚖️</div>
            <h3>Đạo Đức Nghề Nghiệp</h3>
            <p>
              <strong>Trách nhiệm xã hội:</strong><br/>
              • Sử dụng công nghệ vì mục đích tốt, phục vụ cộng đồng<br/>
              • Tôn trọng quyền riêng tư, bảo vệ dữ liệu người dùng<br/>
              • Không tham gia vào các hoạt động vi phạm pháp luật<br/><br/>
              
              <strong>Chính trực và minh bạch:</strong><br/>
              • Trung thực trong công việc, không gian lận, sao chép<br/>
              • Công khai, minh bạch trong quá trình phát triển sản phẩm<br/>
              • Chịu trách nhiệm về sản phẩm, dịch vụ mình tạo ra
            </p>
          </div>

          <div className="bento-card span-12" style={{marginTop: '1rem'}}>
            <div className="card-icon">🎯</div>
            <h3>Đóng Góp Cụ Thể</h3>
            <div className="task-list" style={{marginTop: '1rem'}}>
              <div className="task-item">
                <span className="task-icon">💡</span>
                <span><strong>Phát triển giải pháp số:</strong> Xây dựng các ứng dụng, hệ thống phục vụ chuyển đổi số quốc gia</span>
              </div>
              <div className="task-item">
                <span className="task-icon">🔒</span>
                <span><strong>Bảo vệ an ninh mạng:</strong> Tham gia phát triển hệ thống bảo mật, phòng chống tội phạm mạng</span>
              </div>
              <div className="task-item">
                <span className="task-icon">📚</span>
                <span><strong>Nâng cao dân trí số:</strong> Tham gia đào tạo, hướng dẫn người dân sử dụng công nghệ an toàn</span>
              </div>
              <div className="task-item">
                <span className="task-icon">🤝</span>
                <span><strong>Khởi nghiệp đổi mới sáng tạo:</strong> Thành lập doanh nghiệp công nghệ, tạo việc làm, đóng góp GDP</span>
              </div>
              <div className="task-item">
                <span className="task-icon">🌍</span>
                <span><strong>Hội nhập quốc tế:</strong> Tham gia các dự án quốc tế, nâng cao vị thế Việt Nam trong không gian số</span>
              </div>
            </div>
          </div>

          <div className="bento-card span-12" style={{background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', color: 'white', marginTop: '1rem'}}>
            <div className="card-icon">🌟</div>
            <h3 style={{color: 'white'}}>Kết Luận</h3>
            <p style={{color: 'rgba(255,255,255,0.9)', marginTop: '1rem', fontSize: '1.05rem'}}>
              Sinh viên FPT với nền tảng công nghệ vững chắc và đạo đức nghề nghiệp cao sẽ là <strong>lực lượng nòng cốt</strong> 
              trong việc xây dựng Nhà nước pháp quyền hiện đại, góp phần đưa Việt Nam trở thành quốc gia số phát triển, 
              đảm bảo quyền và lợi ích của nhân dân trong thời đại số. Việc kết hợp giữa <strong>năng lực chuyên môn</strong> 
              và <strong>đạo đức nghề nghiệp</strong> sẽ tạo nên những sản phẩm công nghệ không chỉ tiên tiến mà còn 
              <strong> phục vụ lợi ích chung của xã hội</strong>, thể hiện đúng bản chất của Nhà nước pháp quyền xã hội chủ nghĩa.
            </p>
          </div>
        </div>
      </>
    )
  }
};

function InfoPage({ onNavigate }) {
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.bento-card, .hero-title, .feature-list, .summary-box, .chapter-card, .page-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [selectedChapter, currentPage]);

  // Scroll to top khi chuyển trang
  useEffect(() => {
    if (selectedChapter && currentPage) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [currentPage, selectedChapter]);

  // Hiển thị danh sách chương
  if (!selectedChapter) {
    return (
      <div className="info-page-container">
        <section className="hero-section">
          <span className="hero-tagline">Triết học Mác-Lênin</span>
          <h1 className="hero-title">Kiến Thức</h1>
          <p className="hero-desc">
            Chọn chương để bắt đầu học tập và nghiên cứu
          </p>
        </section>

        <section className="content-section">
          <div className="section-header">
            <h2>Danh Sách Chương</h2>
            <p>Khám phá từng chương để hiểu sâu hơn về triết học Mác-Lênin</p>
          </div>

          <div className="chapters-grid">
            {chapters.map((chapter) => (
              <div
                key={chapter.id}
                className="chapter-card"
                onClick={() => {
                  setSelectedChapter(chapter.id);
                  setCurrentPage(1);
                }}
                style={{background: chapter.color}}
              >
                <div className="chapter-icon">{chapter.icon}</div>
                <h3>{chapter.title}</h3>
                <p>{chapter.description}</p>
                {chapter.pages && (
                  <p style={{fontSize: '0.9rem', marginTop: '0.5rem', opacity: 0.8}}>
                    {chapter.pages.length} trang
                  </p>
                )}
                <div className="chapter-arrow">→</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  // Lấy thông tin chương được chọn
  const chapter = chapters.find(c => c.id === selectedChapter);
  if (!chapter || !chapter.pages) {
    return (
      <div className="info-page-container">
        <button className="back-button" onClick={() => setSelectedChapter(null)}>
          ← Quay Lại Danh Sách Chương
        </button>
        <p>Chương này chưa có nội dung.</p>
      </div>
    );
  }

  const totalPages = chapter.pages.length;
  const isLastPage = currentPage === totalPages;
  const pageInfo = chapter.pages.find(p => p.id === currentPage);
  const pageContent = chapter4Pages[currentPage];

  if (!pageContent) {
    return (
      <div className="info-page-container">
        <button className="back-button" onClick={() => setSelectedChapter(null)}>
          ← Quay Lại Danh Sách Chương
        </button>
        <p>Trang này chưa có nội dung.</p>
      </div>
    );
  }

  return (
    <div className="info-page-container">
      <section className="hero-section">
        <button className="back-button" onClick={() => {
          setSelectedChapter(null);
          setCurrentPage(1);
        }}>
          ← Quay Lại Danh Sách Chương
        </button>
        <span className="hero-tagline">{chapter.title}</span>
        <h1 className="hero-title">Trang {currentPage} / {totalPages}</h1>
        <p className="hero-desc">{pageContent.title}</p>
      </section>

      <section className="content-section">
        {pageContent.content}
      </section>

      {/* Nút chuyển trang hoặc pháo hoa */}
      {isLastPage ? (
        <section className="completion-section">
          <div className="fireworks-container" id="fireworks">
            <div className="firework"></div>
            <div className="firework"></div>
            <div className="firework"></div>
            <div className="firework"></div>
            <div className="firework"></div>
          </div>
          <div className="completion-content">
            <h2>🎉 Chúc Mừng!</h2>
            <p>Bạn đã hoàn thành tất cả các trang của {chapter.title}</p>
            <p style={{marginTop: '1rem', color: '#666'}}>
              Hãy thử thách bản thân với phần trắc nghiệm để kiểm tra kiến thức!
            </p>
            <div className="completion-buttons">
              <button className="quiz-button" onClick={() => onNavigate && onNavigate('quiz')}>
                🎮 Làm Trắc Nghiệm Ngay
              </button>
              <button className="back-button" onClick={() => {
                setSelectedChapter(null);
                setCurrentPage(1);
              }}>
                📚 Xem Lại Các Chương
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="navigation-section">
          <button 
            className="next-page-button" 
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Trang Tiếp Theo → {currentPage + 1} / {totalPages}
          </button>
        </section>
      )}
    </div>
  );
}

export default InfoPage;

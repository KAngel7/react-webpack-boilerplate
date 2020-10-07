import React from 'react';
import style from './style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MarketTable from '../../components/MarketTable';

const Home = () => {
  return (
    <>
      <Header userData={{ name: 'Rose' }} />
      <main className="css-1wr4jig">
        <div className="css-1pysja1">
          <div className="css-nvs2r2" id="a1">
            <div type="text" className="css-1fdybvu">
              Mua &amp; Bán tiền mã hoá chỉ trong vài phút
            </div>
            <div type="text" className="css-76dhjx">
              Tham gia sàn giao dịch tiền mã hoá lớn nhất thế giới
            </div>
            <div className="css-7fk8wf">
              <div className="css-1p1xuqp">
                <div className=" css-13u9y0n">
                  <input
                    type="input"
                    placeholder="Địa chỉ email"
                    className="css-137fk78"
                    value=""
                  />
                </div>
                <button
                  type="button"
                  aria-label="register"
                  className="css-uegzd2"
                >
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
          <div className="css-26vijc">
            <div className="css-1jqjm4r">
              <div className="css-ax4m09">
                <a
                  href="https://www.binance.com/vn/support/announcement/cd1801311ead4829afe2ac29a8eceb49"
                  aria-label="detail"
                  className="css-n876bn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="icon-dir css-n8k3dy"
                  >
                    <path
                      d="M12.867 18.47l5.13-.94L15.517 4l-5.18.95-3.25 3.94-4.85.89.5 2.71-1.97.36.36 1.97 1.97-.36.44 2.42 1.97-.36.79 4.28 1.97-.36-.79-4.28.98-.18 4.41 2.49zm-5.76-4.28l-1.97.36-.58-3.17 3.61-.66 3.25-3.92 2.5-.46 1.76 9.59-2.46.45-4.4-2.51-1.71.32zM22.871 8.792l-2.99.55.362 1.967 2.99-.55-.362-1.967zM19.937 13.183l-1.135 1.647 2.503 1.725 1.135-1.646-2.503-1.726zM19.006 4.052l-1.725 2.503 1.646 1.135 1.726-2.503-1.647-1.135z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <div type="text" className="css-vurnku">
                    Binance Futures sẽ triển khai Hợp đồng Tương lai Vĩnh cửu
                    HNT ký quỹ bằng USDT với đòn bẩy lên đến 50x
                  </div>
                  <div type="text" className="css-waz29z">
                    09-28
                  </div>
                </a>
                <div className="css-1h0sz7g"></div>
                <a
                  aria-label="more"
                  href="/vn/support/announcement"
                  className="css-mmpluh"
                >
                  <div type="text" className="css-vurnku">
                    Nhiều hơn
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="icon-dir css-q24u7d"
                  >
                    <path
                      d="M13.5 12L7 18.6 8.4 20l8-8-8-8L7 5.4l6.5 6.6z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <MarketTable showViewMoreBtn />

          <div className="css-2dhtzt">
            <div className="css-1e425mi">
              <div type="text" className="css-1i1yepl">
                Giao dịch ở mọi nơi.
              </div>
              <div className="css-1tybkyi">
                <div className="css-161xccr">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    fill="none"
                    className="css-15ldrwp"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13 39V9h22v30H13zm1.66-1.62h18.68V10.62H14.66v26.76z"
                      fill="currentColor"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.788 33.72h10.447v1.62H18.788v-1.62z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <div type="text" className="css-1x3nr09">
                    Di động
                  </div>
                  <div type="text" className="css-3tyy06">
                    Toàn bộ sức mạnh của sàn giao dịch tiền mã hoá Binance giờ
                    nằm gọn trong bàn tay của bạn. Tải ứng dụng giao dịch tiền
                    mã hoá của Binance ngay hôm nay.
                  </div>
                  <div className="css-18mnkst">
                    <div className="css-q2wk8b">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://play.google.com/store/apps/details?id=com.binance.dev"
                        aria-label="google"
                        className="css-vurnku"
                      >
                        <div
                          className="lozad-load css-fflf4c"
                          alt="google play"
                          data-src="./images/home/download/google-play.png"
                        ></div>
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ftp.binance.com/pack/Binance.apk"
                        aria-label="android"
                        className="css-vurnku"
                      >
                        <div
                          className="lozad-load css-fflf4c"
                          alt="android"
                          data-src="./images/home/download/android.png"
                        ></div>
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://apps.apple.com/hk/app/binance/id1436799971?l=en"
                        aria-label="appStore"
                        className="css-vurnku"
                      >
                        <div
                          className="lozad-load css-fflf4c"
                          alt="appStore"
                          data-src="./images/home/download/app-store.png"
                        ></div>
                      </a>
                      <div className="css-ybbx55">
                        <div className="css-1ywxyf4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="none"
                            className="css-wh2dar"
                          >
                            <path
                              d="M1 1v6h6V1H1zm4 4H3V3h2v2zM1 9v6h6V9H1zm4 4H3v-2h2v2zM9 1v6h6V1H9zm4 4h-2V3h2v2zM11 13H9v2h2v-2zM15 13h-2v2h2v-2zM11 9H9v2h2V9zM15 9h-2v2h2V9zM13 11h-2v2h2v-2z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="css-161xccr">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 96 96"
                    fill="none"
                    className="css-193gxw5"
                  >
                    <g clipPath="url(#computer-b96_svg__clip0)">
                      <path
                        d="M91 46.64V49h2.5v-2.36H91zm0-5.17v2.35h2.5v-2.35H91zm0-5.17v2.35h2.5V36.3H91zm0-5.16v2.35h2.5v-2.35H91zM91 26v2.35h2.5V26H91zm0-5.16v2.35h2.5v-2.38l-2.5.03zM93.5 15.49h-91v2.5h91v-2.5zM2.5 46.64V49H5v-2.36H2.5zm0-5.17v2.35H5v-2.35H2.5zm0-5.17v2.35H5V36.3H2.5zm0-5.16v2.35H5v-2.35H2.5zm0-5.14v2.35H5V26H2.5zm0-5.16v2.35H5v-2.38l-2.5.03zM49.25 57.15h-2.5v2.5h2.5v-2.5zM19.69 76v2.5h2.5V76h-2.5zm4.93 0v2.5h2.5V76h-2.5zm4.93 0v2.5h2.5V76h-2.5zm-9.86 0v2.5h2.5V76h-2.5zm4.93 0v2.5h2.5V76h-2.5zm4.93 0v2.5h2.5V76h-2.5z"
                        fill="#212833"
                      ></path>
                      <path
                        d="M22.19 76h-2.5v2.5h2.5V76zM27.12 76h-2.5v2.5h2.5V76zM32.05 76h-2.5v2.5h2.5V76z"
                        fill="#212833"
                      ></path>
                      <path
                        d="M42.75 51.65V26H9v25.65H2.5v13.5H9V87h33.75V75h14.33c-.05-.83-.05-1.67 0-2.5h-7.83v-7.35h9.66c.4-.86.86-1.7 1.38-2.5H42.75v-8.5h48.31v4.73c.18.16.35.33.52.5.72.72 1.39 1.48 2 2.3v-10l-50.83-.03zM9 62.65H5v-8.5h4v8.5zM40.25 84.5H11.49v-56h6.25V31H34v-2.5h6.25v56zm6.5-19.35v7.34h-4v-7.34h4z"
                        fill="#212833"
                      ></path>
                      <path
                        d="M89.46 61.5c-6.74-6.74-17.66-6.74-24.4-.01-6.74 6.74-6.74 17.66-.01 24.4 6.73 6.74 17.66 6.74 24.4.01l.01-.01c6.73-6.74 6.73-17.65 0-24.39z"
                        fill="url(#computer-b96_svg__paint0_linear)"
                      ></path>
                      <path
                        d="M87.06 72.44H67.47v2.5h19.59v-2.5z"
                        fill="#212833"
                      ></path>
                    </g>
                    <defs>
                      <linearGradient
                        id="computer-b96_svg__paint0_linear"
                        x1="65.062"
                        y1="85.893"
                        x2="89.458"
                        y2="61.497"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#F0B90B"></stop>
                        <stop offset="0.28" stopColor="#F1BC0F"></stop>
                        <stop offset="0.569" stopColor="#F4C41C"></stop>
                        <stop offset="0.862" stopColor="#F8D230"></stop>
                        <stop offset="0.993" stopColor="#FBDA3C"></stop>
                      </linearGradient>
                      <clipPath id="computer-b96_svg__clip0">
                        <path fill="#fff" d="M0 0h96v96H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                  <div type="text" className="css-1x3nr09">
                    Máy tính
                  </div>
                  <div type="text" className="css-3tyy06">
                    Nền tảng giao dịch tiền mã hoá mạnh mẽ dành cho những người
                    nghiêm túc. Trải nghiệm giao dịch tiền mã hoá trên Binance
                    được thiết kế riêng cho thiết bị Windows hoặc macOS.
                  </div>
                  <div className="css-18mnkst">
                    <div className="css-q2wk8b">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ftp.binance.com/electron-desktop/mac/production/binance.dmg"
                        aria-label="mac os"
                        className="css-vurnku"
                      >
                        <div
                          className="lozad-load css-fflf4c"
                          alt="mac os"
                          data-src="./images/home/download/mac-os.png"
                        ></div>
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ftp.binance.com/electron-desktop/windows/production/binance-setup.exe"
                        aria-label="windows"
                        className="css-vurnku"
                      >
                        <div
                          className="lozad-load css-fflf4c"
                          alt="windows"
                          data-src="./images/home/download/windows.png"
                        ></div>
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ftp.binance.com/pc_pack/Binance.exe"
                        aria-label="windows"
                        className="css-vurnku"
                      >
                        <div
                          className="lozad-load css-51z0wo"
                          alt="windows previous"
                          data-src="./images/home/download/windows-previous.svg"
                        ></div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="css-161xccr">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    fill="none"
                    className="css-15ldrwp"
                  >
                    <path
                      d="M26.396 25.884l.177-.177-.178-.177-.665-.662-.177-.176-.177.177-2.249 2.253-2.249-2.25 2.253-2.253.177-.176-.177-.177-.662-.662-.176-.177-.177.177-2.257 2.25-2.076-2.077-.178-.177-.177.178-1.97 1.985s0 0 0 0a6.208 6.208 0 00-.477 8.24L8.823 38.16l-.177.177.177.177.662.662.177.176.177-.176 6.158-6.159a6.177 6.177 0 003.85 1.342 6.2 6.2 0 004.39-1.814s0 0 0 0l1.985-1.975.178-.176-.177-.178-2.08-2.08 2.253-2.253zm-8.79-2.244l6.754 6.753-1.138 1.129-.074.073v.003a4.78 4.78 0 01-6.674-.072 4.777 4.777 0 01.003-6.747l.001-.001 1.129-1.138zM39.177 9.839l.176-.177-.176-.177-.662-.662-.177-.177-.177.177-6.158 6.158a6.212 6.212 0 00-8.24.473s0 0 0 0l-1.985 1.974-.178.177.177.178 8.44 8.44.178.177.177-.178 1.97-1.985s0 0 0 0a6.208 6.208 0 00.477-8.24l6.158-6.158zM31.523 23.22l-.001.001-1.129 1.138-6.753-6.753 1.138-1.129.074-.073v-.003a4.78 4.78 0 016.674.072 4.777 4.777 0 01-.003 6.747z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    ></path>
                  </svg>
                  <div type="text" className="css-1x3nr09">
                    API
                  </div>
                  <div type="text" className="css-3tyy06">
                    API của Binance được thiết kế để tích hợp ứng dụng giao dịch
                    của bạn vào nền tảng của chúng tôi một cách đơn giản và dễ
                    dàng.
                  </div>
                  <div className="css-18mnkst">
                    <div className="css-1ql84je">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="css-1krzk1e"
                      >
                        <path
                          d="M12.446 7.556V5.778H9.781V4H6.556a4.433 4.433 0 00-4.344 3.556H0v1.777h2.212a4.433 4.433 0 004.344 3.556h3.225V11.11h2.665V9.333H9.781V7.556h2.665zM8.004 11.11H6.556a2.662 2.662 0 01-2.665-2.667 2.662 2.662 0 012.665-2.666h1.448v5.333zM16 4h-1.777v8.889H16V4z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <a
                        type="link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://binance-docs.github.io/apidocs/spot/en"
                        className={`css-tb63ef ${style.deco1}`}
                      >
                        Tài liệu API chính thức của Binance
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="css-1nsyr0e">
            <div className="css-i0awqy">
              <div type="text" className="css-hd6rm5">
                Liên hệ chúng tôi
              </div>
              <div className="css-k1vknn">
                <div className="css-mg2jj3">
                  <a
                    aria-label="Hỗ trợ khách hàng 24/7"
                    href="/vn/support"
                    className="css-4qu1jq"
                  >
                    <div className="css-1c1ahuy">
                      <div
                        className="lozad-load css-wmy69a"
                        alt=""
                        data-src="./images/home/communication/support.svg"
                      ></div>
                    </div>
                    <div type="text" className="css-1lmrg27">
                      Hỗ trợ khách hàng 24/7
                    </div>
                  </a>
                  <div type="text" className="css-xtxu3e">
                    Bạn đang gặp vấn đề? Liên lạc với chúng tôi ngay. Đội ngũ hỗ
                    trợ của Binance luôn túc trực 24/7.
                  </div>
                </div>
                <div className="css-mg2jj3">
                  <a
                    aria-label="Binance Blog"
                    href="/vn/blog"
                    className="css-4qu1jq"
                  >
                    <div className="css-1c1ahuy">
                      <div
                        className="lozad-load css-wmy69a"
                        alt=""
                        data-src="./images/home/communication/blog.svg"
                      ></div>
                    </div>
                    <div type="text" className="css-1lmrg27">
                      Binance Blog
                    </div>
                  </a>
                  <div type="text" className="css-xtxu3e">
                    Tin tức và cập nhật từ sàn giao dịch tiền mã hoá hàng đầu
                    thế giới
                  </div>
                </div>
                <div className="css-mg2jj3">
                  <a
                    aria-label="Cộng đồng"
                    href="/vn/community"
                    className="css-4qu1jq"
                  >
                    <div className="css-1c1ahuy">
                      <div
                        className="lozad-load css-wmy69a"
                        alt=""
                        data-src="./images/home/communication/community.svg"
                      ></div>
                    </div>
                    <div type="text" className="css-1lmrg27">
                      Cộng đồng
                    </div>
                  </a>
                  <div type="text" className="css-xtxu3e">
                    Binance phủ sóng toàn cầu. Tham gia thảo luận ngay với cộng
                    đồng của chúng tôi trên khắp thế giới.
                  </div>
                </div>
                <div className="css-mg2jj3">
                  <a
                    aria-label="Cơ hội nghề nghiệp"
                    href="/vn/career"
                    className="css-4qu1jq"
                  >
                    <div className="css-1c1ahuy">
                      <div
                        className="lozad-load css-wmy69a"
                        alt=""
                        data-src="./images/home/communication/join-us.svg"
                      ></div>
                    </div>
                    <div type="text" className="css-1lmrg27">
                      Cơ hội nghề nghiệp
                    </div>
                  </a>
                  <div type="text" className="css-xtxu3e">
                    Giúp xây dựng tương lai của công nghệ. Bắt đầu sự nghiệp của
                    bạn tại Binance.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="css-16rt7ek">
            <div type="text" className="css-nxabr4">
              Bắt đầu giao dịch ngay
            </div>
            <div className="css-81xrsn">
              <a
                type="button"
                aria-label="register"
                className="css-1iaeli2"
                href="https://accounts.binance.com/vn/register"
              >
                Đăng ký
              </a>
              <a
                type="button"
                href="/vn/trade/BTC_USDT"
                aria-label="trade"
                className="css-8zzrcx"
              >
                Giao dịch ngay
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;

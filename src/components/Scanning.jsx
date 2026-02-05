import { useState } from "react";
import "./Scanning.css";
import { API_BASE_URL } from "../config/api";


export default function Scanning() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  function getSafetyVerdict(stats) {
    if (!stats) return "Không xác định";

    const malicious = stats.malicious ?? 0;
    const securePercentage = stats.securePercentage ?? 0;

    if (malicious > 0) return "Không an toàn (phát hiện dấu hiệu độc hại)";
    if (securePercentage >= 80) return "Có vẻ an toàn";
    return "Có rủi ro, cần kiểm tra thêm";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!url.trim()) {
      setError("Vui lòng nhập URL cần kiểm tra.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${API_BASE_URL}/urlscan/scan`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Không thể gọi API backend.");
      }

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      setError(err.message || "Đã xảy ra lỗi khi scan URL.");
    } finally {
      setLoading(false);
    }
  }

  const stats = result?.stats;
  const page = result?.page;
  const verdict = getSafetyVerdict(stats);

  const verdictClass =
    verdict === "Không an toàn (phát hiện dấu hiệu độc hại)"
      ? "danger"
      : verdict === "Có vẻ an toàn"
      ? "safe"
      : "warning";

  return (
    <div className="scanning-page">
      <div className="scanning-card">
        <h1 className="scanning-title">URL Security Scanner</h1>
        <p className="scanning-subtitle">
          Nhập URL cần kiểm tra, hệ thống sẽ dùng{" "}
          <a
            href="https://urlscan.io"
            target="_blank"
            rel="noreferrer"
            className="scanning-link"
          >
            urlscan.io
          </a>{" "}
          để phân tích độ an toàn.
        </p>

        <form onSubmit={handleSubmit} className="scanning-form">
          <input
            type="url"
            placeholder="https://ví-dụ.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="scanning-input"
          />
          <button
            type="submit"
            disabled={loading}
            className="scanning-button"
          >
            {loading ? (
              <>
                <span className="scanning-spinner" />
                Đang quét...
              </>
            ) : (
              "Scan"
            )}
          </button>
        </form>

        {error && (
          <div
            className="scanning-message error"
          >
            {error}
          </div>
        )}

        {!loading && !error && !result && (
          <div className="scanning-message">
            Hãy nhập một đường dẫn để bắt đầu kiểm tra độ an toàn.
          </div>
        )}

        {loading && (
          <div className="scanning-message loading">
            Đang gửi URL và chờ kết quả từ urlscan.io. Thao tác này có thể mất
            vài giây...
          </div>
        )}

        {result && (
          <div style={{ marginTop: "16px" }}>
            {/* Verdict */}
            <div
              className={`scanning-verdict ${verdictClass}`}
            >
              <div>
                <div className="scanning-verdict-label">Kết luận</div>
                <div
                  className={`scanning-verdict-text ${verdictClass}`}
                >
                  {verdict}
                </div>
              </div>
              <span className="scanning-badge">urlscan.io</span>
            </div>

            {/* Thông tin trang */}
            {page && (
              <div
                className="scanning-section"
              >
                <div className="scanning-section-title">Thông tin trang</div>
                <div className="scanning-section-body">
                  <div className="scanning-section-row">
                    <strong>URL:</strong> {page.url}
                  </div>
                  <div className="scanning-section-row">
                    <strong>Domain:</strong> {page.domain}
                  </div>
                  <div className="scanning-section-row">
                    <strong>IP:</strong> {page.ip} ({page.country}
                    {page.city ? ` - ${page.city}` : ""})
                  </div>
                  <div className="scanning-section-row">
                    <strong>Server:</strong> {page.server}
                  </div>
                  <div className="scanning-section-row">
                    <strong>ASN:</strong> {page.asn} - {page.asnname}
                  </div>
                </div>
              </div>
            )}

            {/* Thống kê bảo mật */}
            {stats && (
              <div
                className="scanning-stats-grid"
              >
                <div>
                  <div className="scanning-stat-label">Request an toàn</div>
                  <div className="scanning-stat-value">
                    {stats.secureRequests ?? 0}
                  </div>
                </div>
                <div>
                  <div className="scanning-stat-label">% request an toàn</div>
                  <div className="scanning-stat-value">
                    {stats.securePercentage ?? 0}%
                  </div>
                </div>
                <div>
                  <div className="scanning-stat-label">% IPv6</div>
                  <div className="scanning-stat-value">
                    {stats.IPv6Percentage ?? 0}%
                  </div>
                </div>
                <div>
                  <div className="scanning-stat-label">Tổng link</div>
                  <div className="scanning-stat-value">
                    {stats.totalLinks ?? 0}
                  </div>
                </div>
                <div>
                  <div className="scanning-stat-label">Số nước liên quan</div>
                  <div className="scanning-stat-value">
                    {stats.uniqCountries ?? 0}
                  </div>
                </div>
                <div>
                  <div
                    className="scanning-stat-label"
                  >
                    Số phát hiện độc hại
                  </div>
                  <div
                    className={`scanning-stat-value ${
                      (stats.malicious ?? 0) > 0 ? "negative" : "positive"
                    }`}
                  >
                    {stats.malicious ?? 0}
                  </div>
                </div>
              </div>
            )}

            {/* Screenshot */}
            {result?.scanId && (
              <div className="scanning-section" style={{ marginTop: "12px" }}>
                <div className="scanning-section-title">Ảnh chụp màn hình</div>
                <img
                  src={`${API_BASE_URL}/urlscan/screenshot/${result.scanId}`}
                  alt="URL screenshot"
                  className="scanning-screenshot"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
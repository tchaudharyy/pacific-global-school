import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppButton() {
  const message = encodeURIComponent('Hello! I would like to know more about Pacific Global School.');

  return (
    <>
      <style>{`
        @keyframes whatsapp-pulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
          70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        .whatsapp-btn {
          position: fixed;
          bottom: 25px;
          right: 25px;
          z-index: 999;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #25D366;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 1.8rem;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
          animation: whatsapp-pulse 2s infinite;
          transition: transform 0.3s;
        }
        .whatsapp-btn:hover {
          transform: scale(1.1);
        }
      `}</style>
      <a
        href={`https://wa.me/918851723725?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </>
  );
}

export default WhatsAppButton;

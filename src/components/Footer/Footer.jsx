import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full flex justify-center pb-8">

      <div className="flex gap-10 text-white text-5xl backdrop-blur-sm px-3 py-3 rounded-full bg-white/10">

        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FacebookIcon className="cursor-pointer hover:scale-110 hover:text-blue-400 transition" />
        </a>

        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <InstagramIcon className="cursor-pointer hover:scale-110 hover:text-pink-400 transition" />
        </a>

        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon className="cursor-pointer hover:scale-110 hover:text-green-400 transition" />
        </a>

      </div>

    </footer>
  );
}
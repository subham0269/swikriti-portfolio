import facebook from '../assets/Footer/facebook.svg';
import instagram from '../assets/Footer/instagram.svg';
import linkedin from '../assets/Footer/linkedin.svg';
import youtube from '../assets/Footer/youtube.svg';

const Footer = () => {
  return (
    <footer className="bg-[#766C51] w-full pb-4">
      <div className="flex justify-center space-x-6 py-16">
        {/* Social Media Icons */}
        <a
          className="rounded-full flex justify-center items-center border border-white p-1.5 object-cover hover:bg-white transition-all duration-200 group size-12"
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <svg
            width="30"
            height="28"
            viewBox="0 0 30 28"
            xmlns="http://www.w3.org/2000/svg"
            className="size-7 fill-current text-white group-hover:text-[#766C51]"
          >
            <path
              d="M22.0802 0.133057H7.95314C4.05025 0.133057 0.875977 3.30732 0.875977 7.21021V20.1346C0.875977 24.0374 4.05025 27.2117 7.95314 27.2117H22.0802C25.9831 27.2117 29.1573 24.0374 29.1573 20.1346V7.21021C29.1573 3.30732 25.9831 0.133057 22.0802 0.133057ZM3.37227 7.21021C3.37227 4.68405 5.42697 2.62935 7.95314 2.62935H22.0802C24.6063 2.62935 26.661 4.68405 26.661 7.21021V20.1346C26.661 22.6607 24.6063 24.7154 22.0802 24.7154H7.95314C5.42697 24.7154 3.37227 22.6607 3.37227 20.1346V7.21021Z"
              fill="currentColor"
            />
            <path
              d="M15.0162 20.2554C18.6464 20.2554 21.5998 17.3019 21.5998 13.6717C21.5998 10.0416 18.6464 7.08813 15.0162 7.08813C11.3861 7.08813 8.43262 10.0416 8.43262 13.6717C8.43262 17.3019 11.3861 20.2554 15.0162 20.2554ZM15.0162 9.58573C17.2696 9.58573 19.1022 11.4183 19.1022 13.6717C19.1022 15.9252 17.2696 17.7578 15.0162 17.7578C12.7628 17.7578 10.9302 15.9252 10.9302 13.6717C10.9302 11.4183 12.7628 9.58573 15.0162 9.58573Z"
              fill="currentColor"
            />
            <path
              d="M22.2107 8.1519C23.1887 8.1519 23.9848 7.35573 23.9848 6.37774C23.9848 5.39974 23.1887 4.60358 22.2107 4.60358C21.2327 4.60358 20.4365 5.39974 20.4365 6.37774C20.4365 7.35573 21.2327 8.1519 22.2107 8.1519Z"
              fill="currentColor"
            />
          </svg>

        </a>


        <a
          className="rounded-full flex justify-center items-center border border-white p-2 object-cover hover:bg-white transition-all duration-200 group size-12"
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <svg width="20" height="36" viewBox="0 0 20 36"  className=" size-7 fill-current text-white group-hover:text-[#766C51]" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.1426 8.22595V13.1393H19.221L18.2585 19.7593H13.1426V35.0098C12.1165 35.1527 11.0671 35.2267 10.0021 35.2267C8.77212 35.2267 7.56553 35.128 6.38882 34.9384V19.7593H0.783203V13.1393H6.38882V7.12847C6.38882 3.39832 9.41243 0.373413 13.1439 0.373413V0.377309C13.1543 0.377309 13.1647 0.373413 13.175 0.373413H19.2223V6.09722H15.2713C14.0959 6.09722 13.1439 7.04924 13.1439 8.22465L13.1426 8.22595Z" fill="currentColor"/>
          </svg>

        </a>


        <a
          className="rounded-full flex justify-center items-center border border-white p-2 object-cover hover:bg-white transition-all duration-200 group size-12"
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <svg width="31" height="21" viewBox="0 0 31 21" className=" size-7 fill-current text-white group-hover:text-[#766C51]" xmlns="http://www.w3.org/2000/svg">
          <path d="M29.8328 5.89204C29.6525 4.13866 29.2615 2.20231 27.8241 1.18345C26.7091 0.393642 25.2453 0.364688 23.879 0.366004C20.9896 0.368637 18.1002 0.371261 15.2108 0.373894C12.432 0.376527 9.65315 0.379167 6.87434 0.3818C5.71332 0.3818 4.58521 0.292289 3.50712 0.793818C2.58041 1.22558 1.85641 2.04566 1.42202 2.95789C0.816494 4.22817 0.688809 5.66562 0.61641 7.07017C0.482142 9.62652 0.496623 12.1908 0.658534 14.7445C0.775689 16.6098 1.0745 18.6698 2.5159 19.8585C3.79408 20.9116 5.59748 20.9629 7.25345 20.9643C12.5136 20.9682 17.7737 20.9721 23.0339 20.9774C23.7078 20.9774 24.4121 20.9656 25.0992 20.8905C26.4524 20.7444 27.7411 20.3574 28.6099 19.3557C29.4866 18.346 29.7117 16.9389 29.846 15.608C30.1698 12.3803 30.1658 9.11841 29.8328 5.89204ZM12.1687 15.1986V6.14478L20.0102 10.6717L12.1687 15.1986Z" fill="currentColor"/>
          </svg>

        </a>
        <a
          className="rounded-full flex justify-center items-center border border-white p-2 object-cover hover:bg-white transition-all duration-200 group size-12"
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <svg width="29" height="29" viewBox="0 0 29 29" className=" size-7 fill-current text-white group-hover:text-[#766C51]" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.29863 6.23073C0.632271 5.61187 0.299805 4.8462 0.299805 3.93518C0.299805 3.02416 0.632271 2.22396 1.29863 1.6051C1.96498 0.986242 2.82274 0.676819 3.8748 0.676819C4.92686 0.676819 5.75009 0.986242 6.41501 1.6051C7.08136 2.22396 7.41383 3.00113 7.41383 3.93518C7.41383 4.86922 7.08136 5.61187 6.41501 6.23073C5.74865 6.84959 4.90239 7.15901 3.8748 7.15901C2.8472 7.15901 1.96498 6.84959 1.29863 6.23073ZM6.85253 9.77982V28.7443H0.8611V9.77982H6.85253Z" fill="currentColot"/>
          <path d="M26.8015 11.6522C28.1069 13.0698 28.7603 15.017 28.7603 17.4954V28.4103H23.0682V18.2653C23.0682 17.0161 22.7444 16.0446 22.0968 15.3524C21.4491 14.6601 20.5784 14.3147 19.4846 14.3147C18.3908 14.3147 17.5201 14.6616 16.8724 15.3524C16.2248 16.0446 15.901 17.0161 15.901 18.2653V28.4103H10.1758V9.72793H15.901V12.2063C16.481 11.3802 17.2625 10.7282 18.2454 10.2475C19.227 9.76824 20.3323 9.52789 21.5599 9.52789C23.7475 9.52789 25.4947 10.2374 26.8001 11.6536L26.8015 11.6522Z" fill="currentColot"/>
          </svg>

        </a>
      </div>
      <p className="font-epilogue text-sm text-center tracking-wide text-white">
        © Copyright 2024. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

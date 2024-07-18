'use client';

import Image from 'next/image';
import { AiOutlineYoutube, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';

const Footer = () => {
    return (
        <>
            <footer className="footer bg-[#3c665c] p-10 text-base-content">
                <div>
                    <button className="btn-ghost btn-lg btn h-16 w-16 p-2 lg:h-20 lg:w-20">
                        <Image alt="logo" height={100} width={100} src="/images/logo.jpg"></Image>
                    </button>
                    <p className="font-bold opacity-100">
                        Pudak A
                        <br />
                    </p>
                    Made with ❤️ in Pudak A. Powered by KKN Kelompok 40 UAJY.
                </div>
                <div>
                    <span className="footer-title font-bold opacity-100">Sosial Media</span>

                    <div className="grid grid-flow-col gap-4">
                        <a
                            href="https://instagram.com/pemilrafti_uajy?igshid=YmMyMTA2M2Y="
                            target="_blank"
                            className="text-lg"
                        >
                            <AiOutlineInstagram></AiOutlineInstagram>
                        </a>
                    </div>
                </div>
                <div>
                    <span className="footer-title font-bold opacity-100">Contact Person</span>
                    <a
                        className="link-hover link flex flex-col gap-2"
                        href="https://instagram.com/pemilrafti_uajy?igshid=YmMyMTA2M2Y="
                        target="_blank"
                    >
                        <div className="flex justify-center items-center gap-2">
                            <AiOutlineWhatsApp className="text-lg"></AiOutlineWhatsApp>
                            <span></span>Pak Dukuh Kiyato
                        </div>
                    </a>
                </div>
                <div>
                    <span className="footer-title font-bold opacity-100">Lokasi</span>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d438.16290842348945!2d110.7759920477962!3d-8.149642375331583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bc70045d11f03%3A0x734da5ec42a1507!2sBalai%20Padukuhan%20Pudak!5e0!3m2!1sen!2sid!4v1721283562786!5m2!1sen!2sid"
                        loading="lazy"
                        className="w-full"
                    ></iframe>
                </div>
            </footer>
        </>
    );
};

export default Footer;

// components/ProgressBar.js
import { useEffect } from 'react';
import '../../public/assits/css/style.css';
import { GiSkills } from "react-icons/gi";

const ProgressBar = () => {
    useEffect(() => {
        const animateProgress = (el) => {
            el.className = "animate-progress";
            el.setAttribute(
                "style",
                `--animate-progress:${el.getAttribute('data-progress')}%;`
            );
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateProgress(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('.progress [data-progress]');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="flex flex-col gap-[50px] container items-center">
            <h2 className='text-[39px] font-medium text-customGray'>Skills</h2>
            <div className="w-[100%] justify-between flex">
                <div className="relative disc flex flex-col w-[50%] mt-[33px] text-left">
                    <img className='w-[100%] rounded-[30px]' data-aos-duration="500" data-aos="fade-right" src="/assits/images/skills.jpg" alt="Skills" />
                    <div data-aos-duration="2000" data-aos="fade-down-right" className="absolute bg-white top-[20px] left-[20px] w-[40%] flex justify-between px-[30px] py-[10px] items-center border-box h-[50px] rounded-[40px] shadow-lg">
                        <h2 className='text-[28px] text-customGray'>Skills</h2>
                        <GiSkills className='text-[28px] text-customGray' />
                    </div>
                </div>
                <div className='w-[50%] progress flex flex-col gap-[15px] h-[550px]'>
                    <div data-aos="fade-up" data-aos-duration="1500">
                        <p>HTML - <strong>90%</strong></p>
                        <div className="progress-bar" data-progress="90"></div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1200">
                        <p>CSS - <strong>85%</strong></p>
                        <div className="progress-bar" data-progress="85"></div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1100">
                        <p>JavaScript - <strong>80%</strong></p>
                        <div className="progress-bar" data-progress="80"></div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="900">
                        <p>React.js - <strong>75%</strong></p>
                        <div className="progress-bar" data-progress="75"></div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="500">
                        <p>Next.js - <strong>80%</strong></p>
                        <div className="progress-bar" data-progress="80"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;

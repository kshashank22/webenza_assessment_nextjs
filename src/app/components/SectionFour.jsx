import React from "react";

function SectionFour({ sectionData }) {
    return (
        <section className="flex flex-col gap-3 !mx-auto w-full p-5">
            <h1 className="header w-full text-center">{sectionData.header}</h1>
            <div className="hidden md:flex !w-full gap-[1px] mx-auto">
                <div className="flex flex-col gap-[1px]">
                    <ul className="flex gap-[1px]">
                        {sectionData.leftSectionImgs.slice(0, 3).map((e, i) => (
                            <li key={`left-top-${i}`}>
                                <img src={e} alt="img" className="object-cover" />
                            </li>
                        ))}
                    </ul>
                    <ul className="flex gap-[1px]">
                        {sectionData.leftSectionImgs.slice(3).map((e, i) => (
                            <li key={`left-bottom-${i}`}>
                                <img src={e} alt="img" className="object-cover" />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col gap-[1px]">
                    <ul className="flex gap-[1px]">
                        {sectionData.rightSectionImgs.slice(0, 1).map((e, i) => (
                            <li key={`right-top-${i}`}>
                                <img src={e} alt="img" className="object-cover" />
                            </li>
                        ))}
                    </ul>
                    <div className="flex gap-[1px]">
                        <ul className="flex gap-[1px]">
                            {sectionData.rightSectionImgs.slice(1, 2).map((e, i) => (
                                <li key={`right-mid-${i}`}>
                                    <img src={e} alt="img" className="object-cover" />
                                </li>
                            ))}
                        </ul>
                        <ul className="flex flex-col gap-[1px] !h-[331px]">
                            {sectionData.rightSectionImgs.slice(2).map((e, i) => (
                                <li key={`right-bottom-${i}`} className="h-[50%] overflow-hidden">
                                    <img src={e} alt="img" className="object-cover" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="md:hidden flex">
                <ul className="grid grid-cols-2 w-full gap-[1px]">
                    {sectionData.mobileSectionImg.map((e, i) => (
                        <li key={`mobile-${i}`}>
                            <img src={e} alt="img" className="object-cover w-full h-full" />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default SectionFour;

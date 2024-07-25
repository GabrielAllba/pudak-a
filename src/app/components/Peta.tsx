'use client';

import Image from 'next/image';

const Peta = () => {
    return (
        <>
            <div id="peta" className="flex flex-col items-center justify-center gap-8 bg-[#477167] p-4 pb-24">
                <h1 className="text-5xl font-bold tracking-[0.1em]">Peta</h1>
                <div className="card w-full max-w-4xl bg-base-100 shadow-xl h-auto flex">
                    <div className="card-body">
                        <Image
                            className="w-full rounded-sm bg-primary bg-center p-2"
                            src="/images/peta.png"
                            height={1000}
                            width={1000}
                            alt="peta"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Peta;

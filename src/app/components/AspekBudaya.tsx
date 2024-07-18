'use client';

import aspek_kebudayaan from '../data/aspek_kebudayaan.json';
import aspek from '../data/aspek.json';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const AspekBudaya = () => {
    const [aspect, setAspect] = useState<string>('Sistem Religi');
    const [aspectBudaya, setAspectBudaya] = useState<string[][]>([]);

    const changeaspectBudayas = (e: any) => {
        const filteredaspectBudayas: string[][] = aspek_kebudayaan
            .filter((k: any) => k.name === e)
            .map((k: any) => k.items);
        setAspectBudaya(filteredaspectBudayas);
        console.log(filteredaspectBudayas);
    };

    const changeaspect = (e: any) => {
        setAspect(e);
    };

    useEffect(() => {
        changeaspectBudayas(aspect);
    }, [aspect]);

    return (
        <div className="bg-[#4ccf24]">
            <div
                id="aspek_kebudayaan"
                className="flex flex-col items-center justify-center gap-8 bg-[#3c665c] p-4 pt-24 pb-8"
            >
                <h1 className="text-5xl font-bold tracking-[0.1em] text-center">Aspek Kebudayaan</h1>
                <div className="flex flex-wrap justify-center gap-2">
                    {aspek.map((item) => {
                        if (item.name !== aspect) {
                            return (
                                <div key={`button-aspect-${item.id}`}>
                                    <label onClick={() => changeaspect(item.name)}>
                                        <div className="py-4 card btn-ghost btn h-full w-full cursor-pointer bg-base-100 shadow-xl transition duration-200">
                                            <div className="justify-center flex items-center">
                                                <div className="font-normal">{item.name}</div>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            );
                        } else {
                            return (
                                <div key={`button-aspect-${item.id}`}>
                                    <label onClick={() => setAspect(item.name)}>
                                        <div className="py-4 card btn-ghost btn h-full w-full cursor-pointer bg-[#518276] shadow-xl transition duration-200">
                                            <div className="justify-center flex items-center">
                                                <div className="font-normal">{item.name}</div>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>

            <div className="flex flex-col items-center justify-center px-8 bg-[#3C665C]">
                <div className="flex flex-col justify-center gap-4 lg:flex-row">
                    {aspectBudaya[0] &&
                        aspectBudaya[0].map((k: any) => {
                            return (
                                <div
                                    key={`aspectBudaya-${aspect}-${k.id}`}
                                    className="card flex w-full flex-col items-center justify-start gap-4 px-4 py-8 "
                                >
                                    <div
                                        key={`${aspect}-${k.id}`}
                                        className="card flex w-full flex-col items-center justify-center gap-4 bg-base-300 p-8"
                                    >
                                        <div className="flex flex-col items-center gap-2 text-center">
                                            <h2 className="text-center text-4xl font-bold">{k.name}</h2>
                                            <h2 className="pb-4text-center">{k.tanggal}</h2>
                                        </div>
                                        <div className="flex flex-wrap gap-2 justify-center items-center">
                                            {k.foto.map((x: any) => {
                                                return (
                                                    <Image
                                                        key={'num-' + k}
                                                        className="aspect-square h-48 w-48 rounded-sm bg-primary bg-center p-2"
                                                        src={x}
                                                        height={100}
                                                        width={100}
                                                        alt={x}
                                                    />
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default AspekBudaya;

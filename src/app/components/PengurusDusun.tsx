import pengurus_dusun from '../data/pengurus_dusun.json';

const PengurusDusun = () => {
    return (
        <>
            <div
                id="PengurusDusun"
                className="flex flex-col items-center justify-center gap-8 bg-[#477167] p-4 pb-24 pt-24"
            >
                <h1 className="text-5xl font-bold tracking-[0.1em]">Pengurus Dusun</h1>
                <div className="align-center flex flex-wrap justify-center gap-4">
                    {pengurus_dusun.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className={`card w-full bg-base-100 shadow-xl lg:w-96 ${
                                    item.id % 2 == 0 ? 'bg-[#566b5b]' : 'bg-base-100'
                                }`}
                            >
                                <div className="card-body">
                                    <div
                                        key={`${item.id}`}
                                        className="card flex w-full flex-col items-center justify-start gap-4 px-4 py-8 "
                                    >
                                        <div
                                            key={`${item.id}`}
                                            className="card flex w-full flex-col items-center justify-center gap-4 bg-base-300 p-8"
                                        >
                                            <img
                                                className="aspect-square h-48 w-48 rounded-full bg-primary bg-center p-2"
                                                src={item.foto}
                                                alt={item.name}
                                            />
                                            <div className="flex flex-col items-center gap-2 text-center">
                                                <h2 className="text-center">{item.title}</h2>
                                                <h2 className="pb-4 text-center text-4xl font-bold">{item.name}</h2>
                                                <label
                                                    htmlFor={`kandidat-${item.name}-${item.id}`}
                                                    className="btn-ghost btn w-fit bg-primary"
                                                >
                                                    <div className="card-actions justify-start">Lebih lanjut</div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default PengurusDusun;

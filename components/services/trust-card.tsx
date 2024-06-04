interface Props {
    label: string;
    image: string;
}

export const TrustCard = ({ label, image }: Props) => {
    return (
        <div className="border border-primary p-2 rounded-md h-[120px] rounded-md relative flex items-center justify-center shadow-lg shadow-primary">
            <div className="absolute left-1/2 -top-10 -translate-x-1/2 -transition-y-10 rounded-full  flex items-center justify-center">
                <img
                    src={image}
                    alt="Wallet"
                    className="h-[75%] w-[75%]"
                />
            </div>
            <p className="font-semibold tracking-wider text-center mt-4 text-white">{label}</p>
        </div>
    )
}
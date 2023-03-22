function NextButton(props: any) {
    return (
        <>
            <button className="flex w-fit h-fit rounded-3xl bg-yellow items-center justify-center" onClick={() => props.action()}>
                <p className="text-h2 font-bold text-white py-2 px-6">next</p>
            </button>
        </>
    );
}

export default NextButton;
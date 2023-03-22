function AddButton(props: any) {
    return (
        <>
            <button className="flex w-8 h-8 rounded-full bg-primary items-center justify-center" onClick={() => props.action()}>
                <img src={require('../../svg/charm_cross.svg').default} alt="cross" />
            </button>
        </>
    );
}

export default AddButton;
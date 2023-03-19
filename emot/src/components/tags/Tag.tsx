function Tag(title:any) {
    return (
        <>
            <div className="flex w-fit h-4 px-1 rounded-sm bg-secondary">
                <p className="text-body">{title}</p>
            </div>
        </>
    )
}

export default Tag;
function Tag(props: any) {
    const { title } = props
    return (
        <div className="flex w-fit h-fit rounded-3xl px-2 bg-secondary">
            <p className="text-body">{title}</p>
        </div>
    )
}

export default Tag;
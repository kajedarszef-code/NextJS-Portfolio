type BlogDetailsProps = {
    params: {
        slug: string;
    }
}

export default async function BlogDetails({params}: BlogDetailsProps) {
    const { slug } = await params;
    return (
        <>
        <h1>Blog Details</h1>
        <h2>{slug}</h2>
        </>
    );
}
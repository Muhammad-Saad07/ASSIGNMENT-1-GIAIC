export default async function About() {
    await new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
    return (
        <div className="bg-gray-200 min-h-screen p-10">
            <div className="">
                {/* Left side: About content */}
                <div><br /><br /><br /><br /><br />
                    <h1 className="text-4xl font-bold mb-6">ABOUT US PAGE</h1>
                    <p className="text-justify text-2xl">
                        A great About Us page comes across as human. It puts a face to a name, showing your potential customers that you're a real person. Any well-written About page makes the reader feel a sense of connection with the brand. It makes them feel like they know you and that you have something in common.
                    </p>
                </div>
            </div>
        </div>
    );
}
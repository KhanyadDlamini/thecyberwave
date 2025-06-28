"use client"
const PopularMovies = () => {
    return (
        <section className="py-16 bg-black">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="w-full text-center md:text-left">
                    <h2 className="text-3xl font-bold text-blue-800 mb-6">POPULAR MOVIES</h2>
                    <p className="text-lg mb-6 text-white">
                        The most popular movies to watch in 2024.
                        <br />
                        As well as a large selection of channels, in addition to the latest films and trendy series of the moment.
                    </p>
                </div>

                {/* Right Text Section */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-6 text-white">ALL WORLDWIDE CHANNELS</h2>
                    <p className="text-lg text-white mb-6">
                        We have in our subscription the best of the best sports and cinema channels from all over the world.
                    </p>
                    <p className="text-lg text-white mb-6">
                        Action, Thriller, Comedies, Dramas, Sci-Fi And Many More Movies!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PopularMovies;

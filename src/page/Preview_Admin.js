import { useLocation } from 'react-router-dom';
export function Preview() {
    // Retrieve the property data passed via the state from the RentalCard
    const location = useLocation();
    const { property } = location.state;
    return (
            <div className="container mx-auto p-4 md:p-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-1/2 p-4">
                            <img id="mainImage" src={property.images[0]} alt="Main Property Image"
                                className="w-full h-64 md:h-96 object-cover rounded-lg mb-4" />
                            <div className="flex space-x-2 overflow-x-auto">
                                <img src={property.images[1]} alt="Thumbnail 1"
                                    className="w-20 h-20 object-cover rounded cursor-pointer thumbnail active"
                                    onclick="changeImage(this)" />
                                <img src={property.images[2]} alt="Thumbnail 2"
                                    className="w-20 h-20 object-cover rounded cursor-pointer thumbnail" onclick="changeImage(this)" />
                                <img src={property.images[2]} alt="Thumbnail 3"
                                    className="w-20 h-20 object-cover rounded cursor-pointer thumbnail" onclick="changeImage(this)" />
                                <img src="https://via.placeholder.com/150x150" alt="Thumbnail 4"
                                    className="w-20 h-20 object-cover rounded cursor-pointer thumbnail" onclick="changeImage(this)" />
                            </div>
                        </div>

                        <div className="md:w-1/2 p-4">
                            <h1 className="text-2xl font-bold mt-2 mb-2">{property.title}</h1>

                            <p className="text-gray-600 mb-2">{property.location}</p>
                            <p className="mb-3 text-gray-500 dark:text-gray-400">This luxurious apartment offers modern amenities with breathtaking
                                city views. Featuring spacious living areas, a fully equipped kitchen, and ample natural light,
                                this is the perfect place for those who want comfort and convenience.</p>


                            <div className="text-3xl font-bold mb-4">{property.price}<span className="text-xl font-normal">/month</span></div>

                            <div>
                                <button
                                    className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 flex items-center justify-center">
                                    <i className="fas fa-comment-alt h-5 w-5 mr-2"></i> Send WhatsApp Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
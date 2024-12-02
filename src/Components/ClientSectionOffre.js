import { useNavigate } from 'react-router-dom';

const ClientOffreCard = ({ property }) => {
    const navigate = useNavigate();

    const handleShowDetail = () => {
        navigate(`/preview?offre=${property.id}`, { state: { property } });
        // Scroll to the top of the page
        window.scrollTo(0, 0);
    };
    return (
        <div className="rental-card">
            <div className="rental-image">
                <img src={property.images[0]} alt={property.title} />
            </div>
            <div className="rental-details">
                <h2 className="rental-title">{property.title}</h2>
                <p className="rental-location">
                    <i className="fa-solid fa-location-dot mr-[4%]"></i>
                    {property.location}
                </p>
                {
                    property.type === "Male" ? (
                        <p className="rental-location text-blue-500">
                            <i className="fa-solid fa-male  mr-[4%]"></i>
                            For Men
                        </p>
                    ) : property.type === "Female" ? (
                        <p className="rental-location text-pink-500 ">
                            <i className="fa-solid fa-female  mr-[4%]"></i>
                            for Women
                        </p>
                    ) : (
                        // "All" option (Primary option in your case)
                        <p className="text-red-500 rental-location text-brown-300">
                            <i className="fa fa-times-circle mr-[4%]"></i>
                            Not specified
                        </p>
                    )
                }

                <div className="rental-info">
                    <span className="rental-price">{property.price} DH/mois</span>
                    <button
                        className="w-[40%] bg-black font-serif text-white px-4 py-2 rounded-md transition duration-300 flex items-center justify-center"
                        onClick={handleShowDetail}
                    >
                        See More
                        <i className="fa-solid fa-angles-right ml-2"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ClientOffreCard;
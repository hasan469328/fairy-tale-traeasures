const Gallery = () => {
  return (
    <div className="container mx-auto mb-20 bg-gradient-to-r from-pink-100 to-purple-100 p-10 rounded-lg">
      <h2 className="text-5xl text-center font-bold mb-14 text-transparent bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text">Enchanted Collection <br /> Gallery</h2>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 ">
        {/* Gallery Item 1 */}
        <div className="bg-gray-200 rounded-lg overflow-hidden transition-transform duration-500 hover:scale-110">
          <img
            src="https://i.ibb.co/wC40Kkt/Frozen-500x210.webp"
            alt="Image 1"
            className="w-full"
          />
        </div>

        {/* Gallery Item 2 */}
        <div className="bg-gray-200 rounded-lg overflow-hidden transition-transform duration-500 hover:scale-110">
          <img
            src="https://i.ibb.co/DWQV3Mr/moana-500x216.webp"
            alt="Image 2"
            className="w-full"
          />
        </div>

        {/* Gallery Item 3 */}
        <div className="bg-gray-200 rounded-lg overflow-hidden transition-transform duration-500 hover:scale-110">
          <img
            src="https://i.ibb.co/Lnknq5F/Cinderella-500x280.webp"
            alt="Image 3"
            className="w-full"
          />
        </div>

        {/* Gallery Item 4 */}
        <div className="bg-gray-200 rounded-lg overflow-hidden transition-transform duration-500 hover:scale-110">
          <img
            src="https://i.ibb.co/rFvcWWR/Tiana-500x280.webp"
            alt="Image 4"
            className="w-full"
          />
        </div>

        <div className="bg-gray-200 rounded-lg overflow-hidden transition-transform duration-500 hover:scale-110">
          <img
            src="https://i.ibb.co/qxYcZ35/Mulan-500x280.webp"
            alt="Image 4"
            className="w-full"
          />
        </div>

        <div className="bg-gray-200 rounded-lg overflow-hidden transition-transform duration-500 hover:scale-110">
          <img
            src="https://i.ibb.co/c8gzY5z/Pocahontas-500x280.webp"
            alt="Image 4"
            className="w-full"
          />
        </div>

        {/* Add more gallery items as needed */}
      </div>
    </div>
  );
};

export default Gallery;

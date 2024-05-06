function HeadlineCards() {
  return (
    <div className="max-w-1640px mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      <div className=" rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            Sun&apos;s out BOGO&apos;s Out{" "}
          </p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4 ">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          srcset=""
        />
      </div>
      <div className=" rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">New Resturants </p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4 ">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          srcset=""
        />
      </div>
      <div className=" rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">We DEliver Desserts </p>
          <p className="px-2">Tasty Treats</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4 ">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/853006/pexels-photo-853006.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
}

export default HeadlineCards;

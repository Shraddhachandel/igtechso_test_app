const CartSection = () => {
    return (
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">
          <div className="grid grid-cols-2 gap-6 col-span-2">
            {[11, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="rounded-0px] h-[320px] overflow-hidden 
                           hover:bg-white hover:shadow-lg 
                           transition-all duration-300 cursor-pointer"
              >
                <img
                  src={`/asset/${num}.png`}
                  alt={`Card ${num}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
  
          <div className="bg-white rounded-[5px] h-[388px] overflow-hidden shadow-lg">
            <img
              src="/asset/text.png"
              alt="Big Card"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default CartSection;
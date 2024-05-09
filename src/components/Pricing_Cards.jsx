function Pricing_Cards({ tier="null", info="null",currency="$", price="null", tier_features=["null"], button_content="null", button_color = "", button_link = "#"}) {
    return (
      <div className="w-[350px] h-[600px] bg-white/30 rounded-md flex-col space-y-5 p-5 font-['Poppins'] relative">
          <div className="text-white font-medium text-2xl">{ tier }</div>
          <div className="text-white text-sm">{ info }</div>
          <div className="text-white pt-10">
              <span className="font-semibold text-5xl font-['Dancing Script'] font-['cursive']">{ currency }{ price }</span>
              <span>/month</span>
          </div>
          <div id="tier_features" className="flex-col space-y-2 text-white pt-10">
              {tier_features.map((feature, index) => (
                  <p key={index} className="flex space-x-1">
                      <i className="ri-check-double-line text-xl"></i>
                      <span className="text-sm pt-1">{feature}</span>
                  </p>
              ))}
          </div>
          <div className="w-full px-10 absolute bottom-8 left-0">
              <button className="w-full text-white text-center border py-2 rounded hover:bg-white hover:text-black duration-300 hover:duration-300" style={{ backgroundColor: button_color }}>{ button_content }</button>
          </div>
      </div>
    )
  }
  
  export default Pricing_Cards;
  